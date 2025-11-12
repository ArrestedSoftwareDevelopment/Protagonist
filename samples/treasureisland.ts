/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const treasureisland = {
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
};