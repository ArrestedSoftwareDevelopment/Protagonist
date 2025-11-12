/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const timemachine = {
  path: './MasterTextFiles/TimeMachineMaster.txt',
  notes: `Novel-specific notes for The Time Machine can be added here.`,
  stub: `This is a placeholder for The Time Machine.`,
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