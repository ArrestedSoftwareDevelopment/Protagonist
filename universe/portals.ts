/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import {
    everythingWentBlackDatasheet,
    radarLoveDatasheet,
    perfectMeDatasheet,
    hurricaneReginaDatasheet,
    pageburnerDatasheet,
    penultimateHustleJapanDatasheet,
    zombieKillaDatasheet,
    cureForSanityDatasheet,
} from './datasheets';
import {
    everythingWentBlackChapters,
    radarLoveChapters,
    perfectMeChapters,
    hurricaneReginaChapters,
    pageburnerChapters,
    penultimateHustleJapanChapters,
    zombieKillaChapters,
    cureForSanityChapters,
} from './chapters';
import { jzcCharacters } from './characters';
import { jzcRoadmaps } from './roadmaps';
import { jasonZChristieUniverseDoc } from './jason-z-christie';
import { NovelDataSheet, Chapter, ChapterGameplayPlan, CharacterProfile, RoadmapStep } from '../types';
import { jzcGameplayPlans } from './gameplay';

// Import Public Domain Data
import { aliceDatasheet } from './pd_datasheets';
import { aliceChapters } from './pd_chapters';
import { pdCharacters } from './pd_characters';
import { pdRoadmaps } from './pd_roadmaps';


/**
 * The Portals class serves as the central logic hub for managing the
 * canonical data for all pre-analyzed novels, including both the
 * Jason Z. Christie shared literary universe and Public Domain works.
 */
export class Portals {
    private static universeDataSheets: Record<string, Partial<NovelDataSheet>> = {
        'Everything Went Black': everythingWentBlackDatasheet,
        'Radar Love': radarLoveDatasheet,
        'Perfect Me': perfectMeDatasheet,
        'Hurricane Regina': hurricaneReginaDatasheet,
        'Pageburner': pageburnerDatasheet,
        'Penultimate Hustle: Japan': penultimateHustleJapanDatasheet,
        'Zombie Killa': zombieKillaDatasheet,
        'Cure for Sanity': cureForSanityDatasheet,
        "Alice's Adventures in Wonderland": aliceDatasheet,
    };

    private static universeChapters: Record<string, Chapter[]> = {
        'Everything Went Black': everythingWentBlackChapters,
        'Radar Love': radarLoveChapters,
        'Perfect Me': perfectMeChapters,
        'Hurricane Regina': hurricaneReginaChapters,
        'Pageburner': pageburnerChapters,
        'Penultimate Hustle: Japan': penultimateHustleJapanChapters,
        'Zombie Killa': zombieKillaChapters,
        'Cure for Sanity': cureForSanityChapters,
        "Alice's Adventures in Wonderland": aliceChapters,
    };

    private static allCharacters: Record<string, CharacterProfile[]> = {
        ...jzcCharacters,
        ...pdCharacters,
    };

    private static allRoadmaps: Record<string, RoadmapStep[]> = {
        ...jzcRoadmaps,
        ...pdRoadmaps,
    };

    /**
     * Retrieves and assembles the complete datasheet object for a given novel title.
     * @param title The title of the novel.
     * @returns The full NovelDataSheet object or undefined if any part is not found.
     */
    public static getNovelDataSheet(title: string): NovelDataSheet | undefined {
        const baseSheet = this.universeDataSheets[title];
        const characters = this.allCharacters[title];
        const roadmap = this.allRoadmaps[title];

        if (!baseSheet || !characters || !roadmap) {
            return undefined;
        }

        // Assemble the full datasheet from the separated parts
        return {
            ...baseSheet,
            characters,
            roadmap,
        } as NovelDataSheet;
    }

    /**
     * Retrieves the pre-defined chapter list for a given novel title.
     * @param title The title of the novel.
     * @returns An array of Chapter objects or undefined if not found.
     */
    public static getNovelChapters(title: string): Chapter[] | undefined {
        return this.universeChapters[title];
    }

    /**
     * Retrieves the gameplay plan for a specific chapter of a novel.
     * @param novelTitle The title of the novel.
     * @param chapterTitle The title of the chapter.
     * @returns The ChapterGameplayPlan object or undefined if not found.
     */
    public static getChapterGameplayPlan(novelTitle: string, chapterTitle: string): ChapterGameplayPlan | undefined {
        const novelPlan = jzcGameplayPlans[novelTitle];
        if (novelPlan) {
            return novelPlan[chapterTitle];
        }
        return undefined;
    }

    /**
     * Retrieves the master datasheet for the entire Jason Z. Christie universe.
     * @returns The universe datasheet string.
     */
    public static getUniverseDataSheet(): string {
        return jasonZChristieUniverseDoc;
    }
}