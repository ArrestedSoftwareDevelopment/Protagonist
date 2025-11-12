/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
// FIX: Add NovelDataSheet to support typing sample novel data.
import { StartChatParams, Bookmark, PlayerRole, Playstyle, NovelDataSheet } from '../types';
import TrashIcon from './icons/TrashIcon';
import UploadCloudIcon from './icons/UploadCloudIcon';

// Sample novel imports
import { alice } from '../samples/alice';
import { mobydick } from '../samples/mobydick';
import { huckfinn } from '../samples/huckfinn';
import { tomsawyer } from '../samples/tomsawyer';
import { everythingwentblack } from '../samples/everythingwentblack';
import { radarlove } from '../samples/radarlove';
import { perfectme } from '../samples/perfectme';
import { frankenstein } from '../samples/frankenstein';
import { hurricaneregina } from '../samples/hurricaneregina';
import { pageburner } from '../samples/pageburner';
import { penultimatehustlejapan } from '../samples/penultimatehustlejapan';
import { zombiekilla } from '../samples/zombiekilla';
import { dracula } from '../samples/dracula';
import { doriangray } from '../samples/doriangray';
import { princessofmars } from '../samples/princessofmars';
import { prideprejudice } from '../samples/prideprejudice';
import { sherlock } from '../samples/sherlock';
import { timemachine } from '../samples/timemachine';
import { callofthewild } from '../samples/callofthewild';
import { gatsby } from '../samples/gatsby';
import { jekyllhyde } from '../samples/jekyllhyde';
import { ruemorgue } from '../samples/ruemorgue';
import { twocities } from '../samples/twocities';
import { treasureisland } from '../samples/treasureisland';
import { waroftheworlds } from '../samples/waroftheworlds';
import { yellowwallpaper } from '../samples/yellowwallpaper';


interface WelcomeScreenProps {
    onStartChat: (params: StartChatParams) => void;
    bookmarks: Bookmark[];
    onLoadBookmark: (bookmark: Bookmark) => void;
    onDeleteBookmark: (title: string) => void;
}

// FIX: Define interfaces for sample novel data to make `protagonists` an optional property, resolving type errors.
interface SampleNovelData {
    path: string;
    notes: string;
    stub: string;
    datasheet: NovelDataSheet;
    protagonists?: string[];
}

interface SampleNovel {
    title: string;
    data: SampleNovelData;
    color: string;
}

const sampleNovels: SampleNovel[] = [
    { title: "Everything Went Black", data: everythingwentblack, color: 'bg-zinc-900' },
    { title: "Radar Love", data: radarlove, color: 'bg-orange-500' },
    { title: "Perfect Me", data: perfectme, color: 'bg-cyan-500' },
    { title: "Hurricane Regina", data: hurricaneregina, color: 'bg-teal-600' },
    { title: "Pageburner", data: pageburner, color: 'bg-rose-700' },
    { title: "Penultimate Hustle: Japan", data: penultimatehustlejapan, color: 'bg-fuchsia-800' },
    { title: "Zombie Killa", data: zombiekilla, color: 'bg-lime-600' },
    { title: "Alice's Adventures in Wonderland", data: alice, color: 'bg-sky-500' },
    { title: "Moby Dick", data: mobydick, color: 'bg-indigo-800' },
    { title: "Adventures of Huckleberry Finn", data: huckfinn, color: 'bg-amber-800' },
    { title: "The Adventures of Tom Sawyer", data: tomsawyer, color: 'bg-red-700' },
    { title: "Frankenstein", data: frankenstein, color: 'bg-slate-600' },
    { title: "Dracula", data: dracula, color: 'bg-red-900' },
    { title: "The Picture of Dorian Gray", data: doriangray, color: 'bg-purple-900' },
    { title: "A Princess of Mars", data: princessofmars, color: 'bg-orange-900' },
    { title: "Pride and Prejudice", data: prideprejudice, color: 'bg-pink-800' },
    { title: "The Adventures of Sherlock Holmes", data: sherlock, color: 'bg-stone-700' },
    { title: "The Time Machine", data: timemachine, color: 'bg-cyan-800' },
    { title: "The Call of the Wild", data: callofthewild, color: 'bg-yellow-800' },
    { title: "The Great Gatsby", data: gatsby, color: 'bg-emerald-700' },
    { title: "Jekyll & Hyde", data: jekyllhyde, color: 'bg-violet-900' },
    { title: "The Murders in the Rue Morgue", data: ruemorgue, color: 'bg-gray-800' },
    { title: "A Tale of Two Cities", data: twocities, color: 'bg-rose-900' },
    { title: "Treasure Island", data: treasureisland, color: 'bg-lime-800' },
    { title: "The War of the Worlds", data: waroftheworlds, color: 'bg-red-800' },
    { title: "The Yellow Wallpaper", data: yellowwallpaper, color: 'bg-yellow-600' },
];


const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat, bookmarks, onLoadBookmark, onDeleteBookmark }) => {
    const [novelTitle, setNovelTitle] = useState('');
    const [novelContent, setNovelContent] = useState('');
    const [novelPath, setNovelPath] = useState('');
    const [playstyle, setPlaystyle] = useState<Playstyle>('freeform');
    const [playerRole, setPlayerRole] = useState<PlayerRole>('protagonist');
    const [selectedNovel, setSelectedNovel] = useState('custom');
    const [selectedProtagonist, setSelectedProtagonist] = useState<string>('');
    const [activeTab, setActiveTab] = useState('new');

    const handleSelectNovel = (value: string) => {
        setSelectedNovel(value);
        if (value === 'custom') {
            setNovelTitle('');
            setNovelContent('');
            setNovelPath('');
            setSelectedProtagonist('');
        } else {
            const novel = sampleNovels.find(n => n.title === value);
            if (novel) {
                setNovelTitle(novel.title);
                setNovelContent(novel.data.stub);
                setNovelPath(novel.data.path);
                if (novel.data.protagonists && novel.data.protagonists.length > 0) {
                    setSelectedProtagonist(novel.data.protagonists[0]);
                } else {
                    setSelectedProtagonist('');
                }
            }
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const text = event.target?.result as string;
                setNovelContent(text);
                if (!novelTitle) {
                    setNovelTitle(file.name.replace(/\.txt$/, ''));
                }
            };
            reader.readAsText(file);
        }
    };

    const currentNovelData = sampleNovels.find(n => n.title === selectedNovel)?.data;

    const handleStart = () => {
        if (selectedNovel === 'custom' && !novelTitle.trim()) {
            alert('Please provide a title for your custom novel.');
            return;
        }

        const params: StartChatParams = {
            novelTitle,
            novelContent,
            novelPath: selectedNovel === 'custom' ? undefined : novelPath,
            notes: selectedNovel === 'custom' ? undefined : currentNovelData?.notes,
            playstyle,
            playerRole,
            protagonistName: playerRole === 'protagonist' ? selectedProtagonist : undefined
        };
        onStartChat(params);
    };
    
    const tabClass = (tabName: string) => 
        `px-6 py-3 font-semibold text-lg transition-colors focus:outline-none ${
            activeTab === tabName
            ? 'border-b-2 border-gem-blue text-gem-blue'
            : 'text-gem-mist hover:text-gem-offwhite'
        }`;
    
    const radioLabelClass = (isSelected: boolean) =>
        `block p-4 border rounded-lg cursor-pointer transition-all ${
            isSelected
            ? 'bg-gem-blue/20 border-gem-blue/50 ring-2 ring-gem-blue'
            : 'bg-gem-slate border-gem-mist/30 hover:bg-gem-mist/20'
        }`;

    return (
        <div className="min-h-screen bg-gem-onyx text-gem-offwhite p-4 sm:p-8 flex flex-col items-center font-sans">
            <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gem-blue mb-2">Protagonist 2.0</h1>
                <p className="text-lg text-gem-mist">Talk to characters in your novel.</p>
            </div>

            <div className="w-full max-w-4xl bg-gem-slate/50 rounded-lg border border-gem-mist/30 shadow-lg">
                <div className="flex border-b border-gem-mist/30">
                    <button onClick={() => setActiveTab('new')} className={tabClass('new')}>New Story</button>
                    {bookmarks.length > 0 && <button onClick={() => setActiveTab('bookmarks')} className={tabClass('bookmarks')}>Bookmarks ({bookmarks.length})</button>}
                </div>

                <div className="p-6 sm:p-8">
                    {activeTab === 'new' ? (
                        <div className="space-y-8">
                             <div>
                                <label className="block text-lg font-semibold mb-4">Choose your novel</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                                    {sampleNovels.map((novel) => (
                                        <button
                                            key={novel.title}
                                            onClick={() => handleSelectNovel(novel.title)}
                                            className={`relative aspect-[2/3] w-full rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-end text-left font-serif ${novel.color} ${selectedNovel === novel.title ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : ''}`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg"></div>
                                            <h3 className="relative text-white font-bold text-md leading-tight shadow-black [text-shadow:_0_1px_4px_var(--tw-shadow-color)]">{novel.title}</h3>
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleSelectNovel('custom')}
                                        className={`relative aspect-[2/3] w-full rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-center items-center text-center font-serif bg-purple-700 ${selectedNovel === 'custom' ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : 'border-2 border-dashed border-gem-mist/50'}`}
                                    >
                                        <h3 className="text-white font-bold text-md leading-tight">Custom Novel</h3>
                                        <p className="text-white/80 text-xs mt-1">Bring your own story.</p>
                                    </button>
                                </div>
                            </div>

                            {selectedNovel === 'custom' && (
                                <div className="space-y-4 p-4 border border-dashed border-gem-mist/50 rounded-lg">
                                    <input
                                        type="text"
                                        placeholder="Novel Title"
                                        value={novelTitle}
                                        onChange={(e) => setNovelTitle(e.target.value)}
                                        className="w-full bg-gem-slate border border-gem-mist rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gem-blue"
                                    />
                                    <textarea
                                        placeholder="Paste a novel excerpt here... (optional)"
                                        value={novelContent}
                                        onChange={(e) => setNovelContent(e.target.value)}
                                        rows={6}
                                        className="w-full bg-gem-slate border border-gem-mist rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gem-blue resize-y"
                                    ></textarea>
                                    <div className="text-center text-gem-mist my-2">OR</div>
                                     <label htmlFor="file-upload" className="flex justify-center items-center w-full px-4 py-6 bg-gem-slate hover:bg-gem-mist/20 border-2 border-dashed border-gem-mist/30 rounded-lg cursor-pointer transition-colors">
                                        <div className="text-center">
                                            <UploadCloudIcon className="mx-auto h-10 w-10 text-gem-mist" />
                                            <p className="mt-2 text-sm text-gem-offwhite">
                                                <span className="font-semibold">Upload a .txt file</span>
                                            </p>
                                        </div>
                                    </label>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} accept=".txt" />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <fieldset>
                                    <legend className="block text-lg font-semibold mb-2">Your Role</legend>
                                    <div className="space-y-3">
                                        <label className={radioLabelClass(playerRole === 'protagonist')}>
                                            <input type="radio" name="playerRole" value="protagonist" checked={playerRole === 'protagonist'} onChange={() => setPlayerRole('protagonist')} className="sr-only"/>
                                            <h4 className="font-bold text-gem-offwhite">I am the protagonist</h4>
                                            <p className="text-sm text-gem-mist">You'll play as the main character of the story.</p>
                                        </label>
                                        <label className={radioLabelClass(playerRole === 'self')}>
                                            <input type="radio" name="playerRole" value="self" checked={playerRole === 'self'} onChange={() => setPlayerRole('self')} className="sr-only" />
                                            <h4 className="font-bold text-gem-offwhite">I am myself</h4>
                                            <p className="text-sm text-gem-mist">You are a new character entering the world of the novel.</p>
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block text-lg font-semibold mb-2">Playstyle</legend>
                                    <div className="space-y-3">
                                        <label className={radioLabelClass(playstyle === 'freeform')}>
                                            <input type="radio" name="playstyle" value="freeform" checked={playstyle === 'freeform'} onChange={() => setPlaystyle('freeform')} className="sr-only"/>
                                            <h4 className="font-bold text-gem-offwhite">Freeform</h4>
                                            <p className="text-sm text-gem-mist">You have complete control over your actions.</p>
                                        </label>
                                        <label className={radioLabelClass(playstyle === 'guided')}>
                                            <input type="radio" name="playstyle" value="guided" checked={playstyle === 'guided'} onChange={() => setPlaystyle('guided')} className="sr-only" />
                                            <h4 className="font-bold text-gem-offwhite">Guided</h4>
                                            <p className="text-sm text-gem-mist">The storyteller will offer suggestions for what to do.</p>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            
                            {selectedNovel !== 'custom' && playerRole === 'protagonist' && currentNovelData?.protagonists && currentNovelData.protagonists.length > 0 && (
                                <fieldset>
                                    <legend className="block text-lg font-semibold mb-2">Choose Your Protagonist</legend>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {currentNovelData.protagonists.map((name: string) => (
                                            <label key={name} className={radioLabelClass(selectedProtagonist === name)}>
                                                <input type="radio" name="protagonistName" value={name} checked={selectedProtagonist === name} onChange={() => setSelectedProtagonist(name)} className="sr-only"/>
                                                <h4 className="font-bold text-gem-offwhite text-center">{name}</h4>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            )}


                            <button onClick={handleStart} className="w-full text-center px-8 py-4 bg-gem-blue hover:bg-sky-400 text-gem-onyx font-bold text-xl rounded-full transition-colors shadow-lg">
                                Start Your Adventure
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {bookmarks.sort((a,b) => new Date(b.lastPlayed).getTime() - new Date(a.lastPlayed).getTime()).map(bookmark => (
                                <div key={bookmark.novelTitle} className="flex justify-between items-center p-4 bg-gem-slate rounded-lg hover:bg-gem-mist/20 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-lg text-gem-offwhite">{bookmark.novelTitle}</h3>
                                        <p className="text-sm text-gem-mist">Last played: {new Date(bookmark.lastPlayed).toLocaleString()}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => onLoadBookmark(bookmark)} className="px-4 py-2 bg-gem-blue hover:bg-sky-400 text-gem-onyx font-semibold rounded-full transition-colors">Load</button>
                                        <button onClick={() => onDeleteBookmark(bookmark.novelTitle)} className="p-2 text-gem-mist hover:text-red-400 rounded-full transition-colors" title="Delete Bookmark">
                                            <TrashIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;