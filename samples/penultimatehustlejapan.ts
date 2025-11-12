/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const penultimatehustlejapan: SampleNovelData = {
  path: './MasterTextFiles/PenultimateHustleJapanMaster.txt',
  notes: `Novel-specific notes for Penultimate Hustle: Japan can be added here. Gameplay Note: The opening scene is set in the United States, California. Janique is in America before the story moves to Japan.`,
  protagonists: ['Chris Turner', 'Janique Turner'],
  stub: `Chapter 1 - Mommy Dearest
   Janique Turner was the best cocksucker in the business. And she was late. For daycare.
   "I don't care if she has a flight in six hours, Rai, tell her her pussy isn't made of gold," she said into her phone.
   Her assistant repeated the line back in Japanese so she could fully assess the impact it would have on her recalcitrant co-star, but Janique had already regretted her utterance.`,
  datasheet: {
    characters: [],
    plotpoints: [],
    moods_styles_tones: {
      overall_mood: '',
      writing_style: '',
      pacing: '',
      themes: [],
    },
    roadmap: [],
    custom_instances: [],
  } as NovelDataSheet,
  source: 'jzc',
};
