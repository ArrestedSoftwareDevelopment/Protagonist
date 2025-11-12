/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const ruemorgue: SampleNovelData = {
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
  source: 'pd',
  genre: 'Mystery',
};
