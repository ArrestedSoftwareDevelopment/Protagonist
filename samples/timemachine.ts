/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const timemachine: SampleNovelData = {
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
  source: 'pd',
  genre: 'Science Fiction',
};
