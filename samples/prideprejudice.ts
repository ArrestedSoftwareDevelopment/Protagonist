/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const prideprejudice = {
  path: './MasterTextFiles/PrideAndPrejudiceMaster.txt',
  notes: `Novel-specific notes for Pride and Prejudice can be added here.`,
  stub: `This is a placeholder for Pride and Prejudice.`,
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