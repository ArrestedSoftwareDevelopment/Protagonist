/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const princessofmars: SampleNovelData = {
  path: './MasterTextFiles/PrincessOfMarsMaster.txt',
  notes: `Novel-specific notes for A Princess of Mars can be added here.`,
  stub: `This is a placeholder for A Princess of Mars.`,
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
