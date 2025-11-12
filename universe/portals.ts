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
import { penultimateHustleJapanChapters } from './chapters';
import { jasonZChristieUniverseDoc } from './jason-z-christie';
import { NovelDataSheet, Chapter } from '../types';

/**
 * The Portals class serves as the central logic hub for managing the
 * Jason Z. Christie shared literary universe. It provides access to
 * canonical datasheets and chapter lists for each novel.
 */
export class Portals {
    private static universeDataSheets: Record<string, NovelDataSheet> = {
        'Everything Went Black': everythingWentBlackDatasheet,
        'Radar Love': radarLoveDatasheet,
        'Perfect Me': perfectMeDatasheet,
        'Hurricane Regina': hurricaneReginaDatasheet,
        'Pageburner': pageburnerDatasheet,
        'Penultimate Hustle: Japan': penultimateHustleJapanDatasheet,
        'Zombie Killa': zombieKillaDatasheet,
        'Cure for Sanity': cureForSanityDatasheet,
    };

    private static universeChapters: Record<string, Chapter[]> = {
        'Penultimate Hustle: Japan': penultimateHustleJapanChapters,
    };

    /**
     * Retrieves the datasheet object for a given novel title.
     * @param title The title of the novel.
     * @returns The NovelDataSheet object or undefined if not found.
     */
    public static getNovelDataSheet(title: string): NovelDataSheet | undefined {
        return this.universeDataSheets[title];
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
     * Retrieves the master datasheet for the entire Jason Z. Christie universe.
     * @returns The universe datasheet string.
     */
    public static getUniverseDataSheet(): string {
        return jasonZChristieUniverseDoc;
    }
}
