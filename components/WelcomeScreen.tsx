/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
// Fix: Moved SampleNovelData to types.ts to be shared.
import { StartChatParams, Bookmark, PlayerRole, Playstyle, NovelDataSheet, SampleNovelData } from '../types';
import TrashIcon from './icons/TrashIcon';
import UploadCloudIcon from './icons/UploadCloudIcon';
import PlusIcon from './icons/PlusIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

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
import { cureforsanity } from '../samples/cureforsanity';


interface WelcomeScreenProps {
    onStartChat: (params: StartChatParams) => void;
    bookmarks: Bookmark[];
    onLoadBookmark: (bookmark: Bookmark) => void;
    onDeleteBookmark: (title: string) => void;
}

// Fix: Removed local interface definition. It's now imported from types.ts.

interface SampleNovel {
    title: string;
    data: SampleNovelData;
    image: string;
}

type SelectionStage = 'top' | 'jzc' | 'pd';

const coverPath = 'https://storage.googleapis.com/protagonist-2-0/covers';

const sampleNovels: SampleNovel[] = [
    { title: "Everything Went Black", data: everythingwentblack, image: `${coverPath}/everything-went-black.jpg` },
    { title: "Radar Love", data: radarlove, image: `${coverPath}/radar-love.jpg` },
    { title: "Perfect Me", data: perfectme, image: `${coverPath}/perfect-me.jpg` },
    { title: "Cure for Sanity", data: cureforsanity, image: `${coverPath}/cure-for-sanity.jpg` },
    { title: "Hurricane Regina", data: hurricaneregina, image: `${coverPath}/hurricane-regina.jpg` },
    { title: "Pageburner", data: pageburner, image: `${coverPath}/pageburner.jpg` },
    { title: "Penultimate Hustle: Japan", data: penultimatehustlejapan, image: `${coverPath}/penultimate-hustle-japan.jpg` },
    { title: "Zombie Killa", data: zombiekilla, image: `${coverPath}/zombie-killa.jpg` },
    { title: "Alice's Adventures in Wonderland", data: alice, image: `${coverPath}/alice-in-wonderland.jpg` },
    { title: "Moby Dick", data: mobydick, image: `${coverPath}/moby-dick.jpg` },
    { title: "Adventures of Huckleberry Finn", data: huckfinn, image: `${coverPath}/huckleberry-finn.jpg` },
    { title: "The Adventures of Tom Sawyer", data: tomsawyer, image: `${coverPath}/tom-sawyer.jpg` },
    { title: "Frankenstein", data: frankenstein, image: `${coverPath}/frankenstein.jpg` },
    { title: "Dracula", data: dracula, image: `${coverPath}/dracula.jpg` },
    { title: "The Picture of Dorian Gray", data: doriangray, image: `${coverPath}/doriangray.jpg` },
    { title: "A Princess of Mars", data: princessofmars, image: `${coverPath}/princess-of-mars.jpg` },
    { title: "Pride and Prejudice", data: prideprejudice, image: `${coverPath}/pride-and-prejudice.jpg` },
    { title: "The Adventures of Sherlock Holmes", data: sherlock, image: `${coverPath}/sherlock-holmes.jpg` },
    { title: "The Time Machine", data: timemachine, image: `${coverPath}/time-machine.jpg` },
    { title: "The Call of the Wild", data: callofthewild, image: `${coverPath}/call-of-the-wild.jpg` },
    { title: "The Great Gatsby", data: gatsby, image: `${coverPath}/the-great-gatsby.jpg` },
    { title: "Jekyll & Hyde", data: jekyllhyde, image: `${coverPath}/jekyll-and-hyde.jpg` },
    { title: "The Murders in the Rue Morgue", data: ruemorgue, image: `${coverPath}/rue-morgue.jpg` },
    { title: "A Tale of Two Cities", data: twocities, image: `${coverPath}/a-tale-of-two-cities.jpg` },
    { title: "Treasure Island", data: treasureisland, image: `${coverPath}/treasure-island.jpg` },
    { title: "The War of the Worlds", data: waroftheworlds, image: `${coverPath}/war-of-the-worlds.jpg` },
    { title: "The Yellow Wallpaper", data: yellowwallpaper, image: `${coverPath}/the-yellow-wallpaper.jpg` },
];


const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat, bookmarks, onLoadBookmark, onDeleteBookmark }) => {
    const [novelTitle, setNovelTitle] = useState('');
    const [novelContent, setNovelContent] = useState('');
    const [novelPaths, setNovelPaths] = useState<string[]>([]);
    const [playstyle, setPlaystyle] = useState<Playstyle>('freeform');
    const [playerRole, setPlayerRole] = useState<PlayerRole>('protagonist');
    const [selectedNovel, setSelectedNovel] = useState('custom');
    const [selectedProtagonist, setSelectedProtagonist] = useState<string>('');
    const [activeTab, setActiveTab] = useState('new');
    const [isMashupMode, setIsMashupMode] = useState(false);
    const [mashupSelection, setMashupSelection] = useState<string[]>([]);
    const [selectionStage, setSelectionStage] = useState<SelectionStage>('top');

    const jzcNovels = sampleNovels.filter(n => n.data.source === 'jzc');
    const pdNovels = sampleNovels.filter(n => n.data.source === 'pd');
    const pdGenres = [...new Set(pdNovels.map(n => n.data.genre).filter(g => g))].sort() as string[];


    const handleSelectNovel = (title: string) => {
        if (isMashupMode) {
            if (title === 'custom') return; // Can't select custom for mash-up
            setMashupSelection(prev =>
                prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
            );
        } else {
            setSelectedNovel(title);
            if (title === 'custom') {
                setNovelTitle('');
                setNovelContent('');
                setNovelPaths([]);
                setSelectedProtagonist('');
            } else {
                const novel = sampleNovels.find(n => n.title === title);
                if (novel) {
                    setNovelTitle(novel.title);
                    setNovelContent(novel.data.stub);
                    setNovelPaths([novel.data.path]);
                    if (novel.data.protagonists && novel.data.protagonists.length > 0) {
                        setSelectedProtagonist(novel.data.protagonists[0]);
                    } else {
                        setSelectedProtagonist('');
                    }
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
        if (isMashupMode) {
             if (mashupSelection.length < 2) {
                alert('Please select at least two novels for a mash-up.');
                return;
            }
            const selectedNovelsData = sampleNovels.filter(n => mashupSelection.includes(n.title));
            
            const params: StartChatParams = {
                novelTitle: selectedNovelsData.map(n => n.title).join(' & '),
                novelContent: selectedNovelsData.map(n => n.data.stub).join('\n\n---\n\n'),
                novelPaths: selectedNovelsData.map(n => n.data.path),
                notes: selectedNovelsData.map(n => n.data.notes).join('\n\n---\n\n'),
                playstyle,
                playerRole,
                protagonistName: playerRole === 'protagonist' ? 'the protagonist' : undefined,
            };
            onStartChat(params);
        } else {
            if (selectedNovel === 'custom' && !novelTitle.trim() && !novelContent.trim()) {
                alert('Please provide a title or some content for your custom novel.');
                return;
            }

            const params: StartChatParams = {
                novelTitle,
                novelContent,
                novelPaths: selectedNovel === 'custom' ? undefined : novelPaths,
                notes: selectedNovel === 'custom' ? undefined : currentNovelData?.notes,
                playstyle,
                playerRole,
                protagonistName: playerRole === 'protagonist' ? selectedProtagonist : undefined
            };
            onStartChat(params);
        }
    };

    const resetSelection = () => {
        setSelectedNovel('custom');
        setMashupSelection([]);
        setIsMashupMode(false);
        setNovelTitle('');
        setNovelContent('');
        setNovelPaths([]);
        setSelectedProtagonist('');
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

    const renderNovelGrid = (novels: SampleNovel[], showMashup: boolean, customOption?: boolean) => (
        <>
            <div className="flex justify-between items-center mb-4">
                <button 
                    onClick={() => { setSelectionStage('top'); resetSelection(); }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gem-slate hover:bg-gem-mist transition-colors"
                >
                    <ArrowLeftIcon />
                    Back
                </button>
                {showMashup && (
                     <button 
                        onClick={() => {
                            setIsMashupMode(!isMashupMode);
                            setMashupSelection([]);
                            if (!isMashupMode) handleSelectNovel('custom');
                        }}
                        className={`px-4 py-2 rounded-full font-semibold transition-colors text-sm ${isMashupMode ? 'bg-gem-blue text-gem-onyx' : 'bg-gem-slate hover:bg-gem-mist'}`}
                    >
                        {isMashupMode ? 'Cancel Mash-Up' : 'Create Mash-Up'}
                    </button>
                )}
            </div>
            <label className="block text-xl font-semibold text-center mb-6">
                {isMashupMode ? 'Choose novels to mash-up' : 'Choose your novel'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {novels.map((novel) => (
                    <button
                        key={novel.title}
                        onClick={() => handleSelectNovel(novel.title)}
                        style={{ backgroundImage: `url(${novel.image})`}}
                        className={`relative aspect-[2/3] w-full rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-end text-left font-serif bg-cover bg-center bg-gem-mist ${
                            (isMashupMode && mashupSelection.includes(novel.title)) || (!isMashupMode && selectedNovel === novel.title) ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : ''
                        }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>
                        {(isMashupMode && mashupSelection.includes(novel.title)) && (
                            <div className="absolute top-2 right-2 bg-gem-blue rounded-full h-6 w-6 flex items-center justify-center text-gem-onyx">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                        <h3 className="relative text-white font-bold text-md leading-tight shadow-black [text-shadow:_0_1px_4px_var(--tw-shadow-color)]">{novel.title}</h3>
                    </button>
                ))}
                {customOption && !isMashupMode && <button
                    onClick={() => handleSelectNovel('custom')}
                    className={`relative aspect-[2/3] w-full rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-center items-center text-center font-serif bg-purple-700 ${selectedNovel === 'custom' ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : 'border-2 border-dashed border-gem-mist/50'}`}
                >
                    <PlusIcon className="h-8 w-8 text-white/80" />
                    <h3 className="text-white font-bold text-md leading-tight mt-2">Custom Novel</h3>
                </button>}
            </div>
        </>
    );

    const renderJzcView = () => (
        <div>
            {renderNovelGrid(jzcNovels, false)}
        </div>
    );
    
    const renderPdView = () => (
        <div>
             <div className="flex justify-between items-center mb-4">
                <button 
                    onClick={() => { setSelectionStage('top'); resetSelection(); }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gem-slate hover:bg-gem-mist transition-colors"
                >
                    <ArrowLeftIcon />
                    Back
                </button>
                <button 
                    onClick={() => {
                        setIsMashupMode(!isMashupMode);
                        setMashupSelection([]);
                        if (!isMashupMode) handleSelectNovel('custom');
                    }}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors text-sm ${isMashupMode ? 'bg-gem-blue text-gem-onyx' : 'bg-gem-slate hover:bg-gem-mist'}`}
                >
                    {isMashupMode ? 'Cancel Mash-Up' : 'Create Mash-Up'}
                </button>
            </div>
            <label className="block text-xl font-semibold text-center mb-6">
                {isMashupMode ? 'Choose novels to mash-up' : 'Choose your novel'}
            </label>

            {pdGenres.map(genre => (
                <div key={genre} className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gem-blue/80">{genre}</h3>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                        {pdNovels.filter(novel => novel.data.genre === genre).map(novel => (
                             <button
                                key={novel.title}
                                onClick={() => handleSelectNovel(novel.title)}
                                style={{ backgroundImage: `url(${novel.image})`}}
                                className={`relative aspect-[2/3] w-full rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-end text-left font-serif bg-cover bg-center bg-gem-mist ${
                                    (isMashupMode && mashupSelection.includes(novel.title)) || (!isMashupMode && selectedNovel === novel.title) ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : ''
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg"></div>
                                {(isMashupMode && mashupSelection.includes(novel.title)) && (
                                    <div className="absolute top-2 right-2 bg-gem-blue rounded-full h-6 w-6 flex items-center justify-center text-gem-onyx">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                <h3 className="relative text-white font-bold text-md leading-tight shadow-black [text-shadow:_0_1px_4px_var(--tw-shadow-color)]">{novel.title}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <h3 className="text-2xl font-semibold mb-4 text-gem-blue/80">Your Own Story</h3>
            {!isMashupMode && <button
                onClick={() => handleSelectNovel('custom')}
                className={`relative aspect-[2/3] w-full max-w-[180px] rounded-lg shadow-lg transition-all transform hover:scale-105 p-3 flex flex-col justify-center items-center text-center font-serif bg-purple-700 ${selectedNovel === 'custom' ? 'ring-4 ring-gem-blue ring-offset-2 ring-offset-gem-slate' : 'border-2 border-dashed border-gem-mist/50'}`}
            >
                <PlusIcon className="h-8 w-8 text-white/80" />
                <h3 className="text-white font-bold text-md leading-tight mt-2">Custom Novel</h3>
            </button>}
        </div>
    );

    const renderTopLevel = () => (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-8">
            <button onClick={() => setSelectionStage('jzc')} className="w-64 h-96 bg-gem-slate hover:bg-gem-mist/80 transition-colors rounded-lg flex flex-col items-center justify-center text-center p-4 shadow-lg border-2 border-gem-mist/50">
                <h2 className="text-3xl font-bold font-serif text-gem-blue">The Jason Z. Christie Universe</h2>
                <p className="mt-4 text-gem-mist">Explore a shared universe of gritty crime, sci-fi, and meta-narrative.</p>
            </button>
            <button onClick={() => setSelectionStage('pd')} className="w-64 h-96 bg-gem-slate hover:bg-gem-mist/80 transition-colors rounded-lg flex flex-col items-center justify-center text-center p-4 shadow-lg border-2 border-gem-mist/50">
                 <h2 className="text-3xl font-bold font-serif text-gem-blue">Public Domain Works</h2>
                <p className="mt-4 text-gem-mist">Journey through classic literature or create your own unique mash-up.</p>
            </button>
        </div>
    );


    return (
        <div className="min-h-screen bg-gem-onyx text-gem-offwhite p-4 sm:p-8 flex flex-col items-center font-sans">
            <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold font-serif text-gem-blue mb-2">Protagonist 2.0</h1>
                <p className="text-lg text-gem-mist">Talk to characters in your novel.</p>
            </div>

            <div className="w-full max-w-6xl bg-gem-slate/50 rounded-lg border border-gem-mist/30 shadow-lg">
                <div className="flex border-b border-gem-mist/30">
                    <button onClick={() => setActiveTab('new')} className={tabClass('new')}>New Story</button>
                    {bookmarks.length > 0 && <button onClick={() => setActiveTab('bookmarks')} className={tabClass('bookmarks')}>Bookmarks ({bookmarks.length})</button>}
                </div>

                <div className="p-6 sm:p-8">
                    {activeTab === 'new' ? (
                        <div className="space-y-8">
                            {selectionStage === 'top' && renderTopLevel()}
                            {selectionStage === 'jzc' && renderJzcView()}
                            {selectionStage === 'pd' && renderPdView()}

                             {selectionStage !== 'top' && (
                                <>
                                    {selectedNovel === 'custom' && !isMashupMode && (
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
                                    
                                    {selectedNovel !== 'custom' && playerRole === 'protagonist' && !isMashupMode && currentNovelData?.protagonists && currentNovelData.protagonists.length > 0 && (
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
                                </>
                             )}
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
