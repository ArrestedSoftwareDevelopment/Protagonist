/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const waroftheworlds = {
  path: './MasterTextFiles/WarOfTheWorldsMaster.txt',
  notes: `Novel-specific notes for The War of the Worlds can be added here.`,
  stub: `This is a placeholder for The War of the Worlds.`,
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