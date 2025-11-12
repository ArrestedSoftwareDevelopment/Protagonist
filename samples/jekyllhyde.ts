/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const jekyllhyde: SampleNovelData = {
  path: './MasterTextFiles/JekyllAndHydeMaster.txt',
  notes: `Novel-specific notes for Strange Case of Dr Jekyll and Mr Hyde can be added here.`,
  stub: `This is a placeholder for Strange Case of Dr Jekyll and Mr Hyde.`,
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
  genre: 'Gothic Horror',
};
