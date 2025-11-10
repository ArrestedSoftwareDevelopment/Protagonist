/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import { StoryTurn, Chapter } from '../types';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import Spinner from './Spinner';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import SendIcon from './icons/SendIcon';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import RefreshIcon from './icons/RefreshIcon';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import ArrowLeftIcon from './icons/ArrowLeftIcon';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import ArrowRightIcon from './icons/ArrowRightIcon';
// Fix: Removed .js extension for module resolution with TypeScript bundler
import BookmarkIcon from './icons/BookmarkIcon';

interface ChatInterfaceProps {
    chatTitle: string;
    history: StoryTurn[];
    isLoading: boolean;
    onSendMessage: (message: string) => void;
    onNewChat: () => void;
    onNextScene: () => void;
    onPreviousScene: () => void;
    currentScene: number;
    chapters: Chapter[];
    onGoToChapter: (chapterIndex: number) => void;
    onSaveBookmark: () => boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
    chatTitle,
    history,
    isLoading,
    onSendMessage,
    onNewChat,
    onNextScene,
    onPreviousScene,
    currentScene,
    chapters,
    onGoToChapter,
    onSaveBookmark,
}) => {
    const [query, setQuery] = useState('');
    const [isBookmarked, setIsBookmarked] = useState(false);
    const storyEndRef = useRef<HTMLDivElement>(null);
    const isFirstScene = currentScene === 1;
    const isLastScene = currentScene === chapters.length;

    const renderNarrative = (text: string) => {
        if (!text) return { __html: '' };
        const html = text
            .replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>')
            .replace(/\*(.*?)\*|_(.*?)_/g, '<em>$1$2</em>')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => `<p>${line}</p>`)
            .join('');
        return { __html: html };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSendMessage(query);
            setQuery('');
        }
    };

    const handleBookmarkClick = () => {
        if (onSaveBookmark()) {
            setIsBookmarked(true);
            setTimeout(() => setIsBookmarked(false), 2000);
        }
    };

    useEffect(() => {
        storyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, isLoading]);
    
    const baseNavClass = "p-2 rounded-full text-gem-offwhite hover:bg-gem-slate disabled:text-gem-mist/50 disabled:bg-transparent disabled:cursor-not-allowed transition-colors";

    return (
        <div className="flex flex-col h-screen relative font-serif">
            <header className="absolute top-0 left-0 right-0 p-4 bg-gem-onyx/80 backdrop-blur-sm z-10 flex justify-between items-center border-b border-gem-mist">
                <div className="w-full max-w-4xl mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                            onClick={onNewChat}
                            className="flex items-center px-4 py-2 bg-gem-blue hover:bg-sky-400 rounded-full text-gem-onyx font-sans transition-colors"
                            title="End current story and start a new one"
                        >
                            <RefreshIcon />
                            <span className="ml-2 hidden sm:inline font-semibold">New Story</span>
                        </button>
                        <button
                            onClick={handleBookmarkClick}
                            disabled={isLoading}
                            className="flex items-center px-4 py-2 bg-gem-slate hover:bg-gem-mist rounded-full text-gem-offwhite font-sans transition-colors disabled:opacity-50"
                            title="Bookmark this story"
                        >
                            <BookmarkIcon />
                            <span className="ml-2 hidden sm:inline font-semibold">
                                {isBookmarked ? 'Bookmarked!' : 'Bookmark'}
                            </span>
                        </button>
                    </div>
                    
                    <div className="flex-1 flex justify-center items-center gap-2 px-4">
                         <button onClick={onPreviousScene} disabled={isLoading || isFirstScene} className={baseNavClass} title="Previous Scene">
                            <ArrowLeftIcon />
                        </button>

                        {chapters.length > 0 && (
                            <select
                                value={currentScene - 1}
                                onChange={(e) => onGoToChapter(parseInt(e.target.value))}
                                disabled={isLoading}
                                className="bg-gem-slate border border-gem-mist rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gem-blue text-gem-offwhite font-sans w-full max-w-xs truncate"
                                title="Select Chapter"
                            >
                                {chapters.map((chapter, index) => (
                                    <option 
                                        key={index} 
                                        value={index} 
                                        title={`Summary: ${chapter.summary}\nCharacters: ${chapter.characters.join(', ')}`}
                                    >
                                        {`Chapter ${index + 1}: ${chapter.title}`}
                                    </option>
                                ))}
                            </select>
                        )}

                        <button onClick={onNextScene} disabled={isLoading || isLastScene} className={baseNavClass} title="Next Scene">
                            <ArrowRightIcon />
                        </button>
                    </div>

                    <div className="flex-shrink-0 w-[240px] hidden sm:block"></div>
                </div>
            </header>

            <div className="flex-grow pt-24 pb-32 overflow-y-auto px-4">
                <div className="w-full max-w-4xl mx-auto space-y-6">
                    {history.filter(turn => !turn.hidden).map((turn, index) => (
                        <div key={index}>
                            {turn.role === 'model' ? (
                                <div className="text-gem-offwhite/90 leading-relaxed text-lg space-y-4" dangerouslySetInnerHTML={renderNarrative(turn.content)} />
                            ) : (
                                <p className="text-gem-blue font-semibold text-lg italic text-right">&gt; {turn.content}</p>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-center space-x-3 text-gem-offwhite/70">
                           <Spinner />
                           <p className="italic">The storyteller is weaving the tale...</p>
                        </div>
                    )}
                    <div ref={storyEndRef} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gem-onyx/80 backdrop-blur-sm font-sans">
                 <div className="max-w-4xl mx-auto">
                     <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What do you do?"
                            className="flex-grow bg-gem-slate border border-gem-mist rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gem-blue text-gem-offwhite"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !query.trim()} className="p-3 bg-gem-blue hover:bg-sky-400 rounded-full text-gem-onyx disabled:bg-gem-mist/50 disabled:cursor-not-allowed transition-colors" title="Send action">
                            <SendIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;