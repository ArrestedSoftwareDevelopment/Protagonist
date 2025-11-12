/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const twocities: SampleNovelData = {
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
  source: 'pd',
  genre: 'Historical Fiction',
};
