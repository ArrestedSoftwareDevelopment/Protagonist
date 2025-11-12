/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const twocities = {
  path: './MasterTextFiles/TwoCitiesMaster.txt',
  notes: `Novel-specific notes for A Tale of Two Cities can be added here.`,
  stub: `This is a placeholder for A Tale of Two Cities.`,
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