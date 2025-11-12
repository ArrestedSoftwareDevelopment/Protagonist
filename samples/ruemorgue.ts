/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const ruemorgue = {
  path: './MasterTextFiles/RueMorgueMaster.txt',
  notes: `Novel-specific notes for The Murders in the Rue Morgue can be added here.`,
  stub: `This is a placeholder for The Murders in the Rue Morgue.`,
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