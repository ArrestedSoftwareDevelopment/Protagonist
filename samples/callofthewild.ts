/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const callofthewild = {
  path: './MasterTextFiles/CallOfTheWildMaster.txt',
  notes: `Novel-specific notes for The Call of the Wild can be added here.`,
  stub: `This is a placeholder for The Call of the Wild.`,
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