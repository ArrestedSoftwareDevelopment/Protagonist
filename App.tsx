/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import { AppStatus, StoryTurn, StartChatParams, StoryFramework, Bookmark, Chapter, PlayerRole, Playstyle, StartChatResponse, NovelDataSheet } from './types';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import * as geminiService from './services/geminiService';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import * as cacheService from './services/cacheService';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import Spinner from './components/Spinner';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import WelcomeScreen from './components/WelcomeScreen';
// Fix: Removed .js extension for module resolution with TypeScript bundler
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
    const [dataSheet, setDataSheet] = useState<NovelDataSheet | null>(null);
    const [protagonistName, setProtagonistName] = useState<string>('');

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
    };

    const handleStartChat = async (params: StartChatParams) => {
        setNovelTitle(params.novelTitle || 'Untitled Story');
        setPlayerRole(params.playerRole);
        setPlaystyle(params.playstyle);
        setProtagonistName(params.protagonistName || '');

        // Check for cached framework for both sample and custom-titled novels
        if (params.novelTitle) {
            const cachedFramework = cacheService.getStoryFramework(params.novelTitle);
            if (cachedFramework && (params.novelPath || !params.novelContent)) {
                setChapters(cachedFramework.chapters);
                const initialHistory: StoryTurn[] = [{ role: 'model', content: cachedFramework.firstSceneContent }];
                setStoryHistory(initialHistory);
                setDataSheet(cachedFramework.dataSheet);
                geminiService.recreateChat(initialHistory, params.playerRole, params.playstyle, cachedFramework.dataSheet, params.protagonistName);
                setCurrentScene(1);
                setStatus(AppStatus.Story);
                return;
            }
        }
        
        setStatus(AppStatus.Processing);
        setIsQueryLoading(true);

        try {
            let fullNovelContent: string | undefined = undefined;
            
            if (params.novelPath) {
                setProcessingMessage("The storyteller is fetching the novel...");
                const response = await fetch(params.novelPath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch novel from ${params.novelPath}: ${response.statusText}`);
                }
                fullNovelContent = await response.text();
            }

            setProcessingMessage(params.novelContent || fullNovelContent ? "The storyteller is reading the novel..." : "The storyteller is preparing the scene...");

            geminiService.initialize();
            
            const { dataSheet, chapters, firstSceneContent, storyStartPrompt }: StartChatResponse = await geminiService.startChat(params, fullNovelContent);
            
            setChapters(chapters);
            setDataSheet(dataSheet);
            setStoryHistory([
                { role: 'user', content: storyStartPrompt, hidden: true },
                { role: 'model', content: firstSceneContent }
            ]);
            
            // Cache the framework for sample novels or custom-titled novels
            if (params.novelTitle && (params.novelPath || !params.novelContent)) {
                const newFramework: StoryFramework = {
                    chapters,
                    firstSceneContent,
                    dataSheet,
                };
                cacheService.setStoryFramework(params.novelTitle, newFramework);
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
            const newHistory: StoryTurn[] = [...storyHistory, { role: 'user', content: message }];
            setStoryHistory(newHistory);

            try {
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
        setDataSheet(null);
        setProtagonistName('');
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
        if (novelTitle && dataSheet) {
            const bookmark: Bookmark = {
                novelTitle,
                storyHistory,
                currentScene,
                chapters,
                playerRole,
                playstyle,
                dataSheet,
                protagonistName,
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
        setDataSheet(bookmark.dataSheet);
        setProtagonistName(bookmark.protagonistName || '');
        geminiService.recreateChat(bookmark.storyHistory, bookmark.playerRole, bookmark.playstyle, bookmark.dataSheet, bookmark.protagonistName);
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