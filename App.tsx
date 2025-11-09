/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { AppStatus, StoryTurn, StartChatParams, StoryFramework, Bookmark, Chapter, PlayerRole, Playstyle } from './types';
import * as geminiService from './services/geminiService';
import * as cacheService from './services/cacheService';
import Spinner from './components/Spinner';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
    const [status, setStatus] = useState<AppStatus>(AppStatus.AwaitingInput);
    const [error, setError] = useState<string | null>(null);
    const [storyHistory, setStoryHistory] = useState<StoryTurn[]>([]);
    const [isQueryLoading, setIsQueryLoading] = useState(false);
    const [processingMessage, setProcessingMessage] = useState("The storyteller is preparing the scene...");
    const [currentScene, setCurrentScene] = useState(1);
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [novelTitle, setNovelTitle] = useState<string>('');
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const [playerRole, setPlayerRole] = useState<PlayerRole>('protagonist');
    const [playstyle, setPlaystyle] = useState<Playstyle>('freeform');

    useEffect(() => {
        setBookmarks(cacheService.getBookmarks());
    }, []);

    const handleError = (message: string, err: any) => {
        console.error(message, err);
        setError(`${message}${err ? `: ${err instanceof Error ? err.message : String(err)}` : ''}`);
        setStatus(AppStatus.Error);
    };

    const handleErrorInChat = (message: string, err: any) => {
        console.error(message, err);
        const errorMessage = `${message}${err ? `: ${err instanceof Error ? err.message : String(err)}` : ''}`;
        if (err instanceof Error && err.message.includes('503')) {
             setStoryHistory(prev => [...prev, { role: 'model', content: `**The storyteller seems to be busy at the moment.** Please try again in a moment.` }]);
        } else {
             setStoryHistory(prev => [...prev, { role: 'model', content: `**An unexpected error occurred:** ${errorMessage}` }]);
        }
    }

    const clearError = () => {
        setError(null);
        handleNewStory();
    }

    const handleStartChat = async (params: StartChatParams) => {
        setNovelTitle(params.novelTitle || 'Untitled Story');
        setPlayerRole(params.playerRole);
        setPlaystyle(params.playstyle);

        if (params.novelTitle && !params.novelContent) {
            const cachedFramework = cacheService.getStoryFramework(params.novelTitle);
            if (cachedFramework) {
                setChapters(cachedFramework.chapters);
                setStoryHistory([{ role: 'model', content: cachedFramework.firstSceneContent }]);
                setCurrentScene(1);
                setStatus(AppStatus.Story);
                return;
            }
        }

        setProcessingMessage(params.novelContent ? "The storyteller is reading the novel..." : "The storyteller is preparing the scene...");
        setStatus(AppStatus.Processing);
        setIsQueryLoading(true);

        try {
            geminiService.initialize();
            
            const response = await geminiService.startChat(params);
            const responseText = response.text;
            
            const chapterJsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);

            if (chapterJsonMatch && chapterJsonMatch[1]) {
                const chapterJson = chapterJsonMatch[1];
                try {
                    const parsedChapters = JSON.parse(chapterJson) as Chapter[];
                    setChapters(parsedChapters);
                    
                    const firstSceneText = responseText.substring(chapterJsonMatch[0].length).trim();
                    setStoryHistory([{ role: 'model', content: firstSceneText }]);

                    if (params.novelTitle && !params.novelContent) {
                        const newFramework: StoryFramework = {
                            chapters: parsedChapters,
                            firstSceneContent: firstSceneText
                        };
                        cacheService.setStoryFramework(params.novelTitle, newFramework);
                    }
                } catch(e) {
                     console.error("Failed to parse chapter JSON:", e);
                     setChapters([]);
                     setStoryHistory([{ role: 'model', content: responseText }]);
                }
            } else {
                 setChapters([]);
                 setStoryHistory([{ role: 'model', content: responseText }]);
            }

            setCurrentScene(1);
            setStatus(AppStatus.Story);
        } catch (err) {
            handleError("Failed to start the story", err);
        } finally {
            setIsQueryLoading(false);
        }
    };

    const handleSendMessage = async (message: string) => {
        if (!isQueryLoading) {
            setIsQueryLoading(true);
            // Fix for line 119: Use a functional update for setStoryHistory.
            // This allows TypeScript to correctly infer the type of the new history item
            // from the `prev` state, and it also prevents potential race conditions.
            setStoryHistory(prev => [...prev, { role: 'user', content: message }]);

            try {
                // FIX: Removed extra arguments from sendMessage call.
                const response = await geminiService.sendMessage(message);
                setStoryHistory(prev => [...prev, { role: 'model', content: response.text }]);
            } catch (err) {
                handleErrorInChat("Failed to get a response from the storyteller", err);
            } finally {
                setIsQueryLoading(false);
            }
        }
    };

    const handleNewStory = () => {
        setStatus(AppStatus.AwaitingInput);
        setStoryHistory([]);
        setChapters([]);
        setCurrentScene(1);
        setNovelTitle('');
        setError(null);
    };

    const handleNextScene = async () => {
        if (currentScene < chapters.length) {
            await handleGoToChapter(currentScene);
        }
    };

    const handlePreviousScene = async () => {
        if (currentScene > 1) {
            await handleGoToChapter(currentScene - 2);
        }
    };

    const handleGoToChapter = async (chapterIndex: number) => {
        const sceneNumber = chapterIndex + 1;
        if (sceneNumber === currentScene || sceneNumber > chapters.length || sceneNumber < 1) return;

        setIsQueryLoading(true);
        setProcessingMessage(`The storyteller is turning to Chapter ${sceneNumber}...`);
        
        try {
            const chapterTitle = chapters[chapterIndex].title;
            // FIX: Removed extra arguments from changeScene call.
            const response = await geminiService.changeScene(sceneNumber, chapterTitle);
            setStoryHistory(prev => [...prev, { role: 'model', content: response.text }]);
            setCurrentScene(sceneNumber);
        } catch (err) {
            handleErrorInChat("Failed to change the scene", err);
        } finally {
            setIsQueryLoading(false);
        }
    };

    const handleSaveBookmark = () => {
        if (novelTitle) {
            const bookmark: Bookmark = {
                novelTitle,
                storyHistory,
                currentScene,
                chapters,
                playerRole,
                playstyle,
                lastPlayed: new Date().toISOString()
            };
            cacheService.saveBookmark(bookmark);
            setBookmarks(cacheService.getBookmarks());
            return true;
        }
        return false;
    };

    const handleLoadBookmark = (bookmark: Bookmark) => {
        setNovelTitle(bookmark.novelTitle);
        setStoryHistory(bookmark.storyHistory);
        setCurrentScene(bookmark.currentScene);
        setChapters(bookmark.chapters);
        setPlayerRole(bookmark.playerRole);
        setPlaystyle(bookmark.playstyle);
        setStatus(AppStatus.Story);
    };
    
    const handleDeleteBookmark = (title: string) => {
        cacheService.deleteBookmark(title);
        setBookmarks(cacheService.getBookmarks());
    };

    if (status === AppStatus.Error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gem-onyx text-gem-offwhite p-4">
                <div className="bg-red-900/30 border border-red-500/50 p-8 rounded-lg text-center max-w-lg">
                    <h2 className="text-2xl font-bold mb-4">An Unexpected Error Occurred</h2>
                    <p className="mb-6 text-red-200">{error}</p>
                    <button
                        onClick={clearError}
                        className="px-6 py-2 bg-gem-blue hover:bg-sky-400 text-gem-onyx font-bold rounded-full transition-colors"
                    >
                        Start Over
                    </button>
                </div>
            </div>
        );
    }
    
    if (status === AppStatus.Processing) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gem-onyx text-gem-offwhite">
                <Spinner />
                <p className="mt-4 text-lg">{processingMessage}</p>
            </div>
        );
    }

    if (status === AppStatus.Story) {
        return (
            <ChatInterface
                chatTitle={novelTitle}
                history={storyHistory}
                isLoading={isQueryLoading}
                onSendMessage={handleSendMessage}
                onNewChat={handleNewStory}
                onNextScene={handleNextScene}
                onPreviousScene={handlePreviousScene}
                currentScene={currentScene}
                chapters={chapters}
                onGoToChapter={handleGoToChapter}
                onSaveBookmark={handleSaveBookmark}
            />
        );
    }
    
    return (
        <WelcomeScreen
            onStartChat={handleStartChat}
            bookmarks={bookmarks}
            onLoadBookmark={handleLoadBookmark}
            onDeleteBookmark={handleDeleteBookmark}
        />
    );
};

export default App;
