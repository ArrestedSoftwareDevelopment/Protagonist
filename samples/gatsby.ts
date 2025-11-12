/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const gatsby = {
  path: './MasterTextFiles/GatsbyMaster.txt',
  notes: `Novel-specific notes for The Great Gatsby can be added here.`,
  stub: `This is a placeholder for The Great Gatsby.`,
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