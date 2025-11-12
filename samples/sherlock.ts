/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const sherlock: SampleNovelData = {
  path: './MasterTextFiles/SherlockHolmesMaster.txt',
  notes: `Novel-specific notes for The Adventures of Sherlock Holmes can be added here.`,
  stub: `This is a placeholder for Sherlock Holmes.`,
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
