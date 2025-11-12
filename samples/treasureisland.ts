/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const treasureisland: SampleNovelData = {
  path: './MasterTextFiles/TreasureIslandMaster.txt',
  notes: `Novel-specific notes for Treasure Island can be added here.`,
  stub: `This is a placeholder for Treasure Island.`,
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
  source: 'pd',
  genre: 'Adventure',
};
