/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { NovelDataSheet } from '../types';

export const sherlock = {
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
};