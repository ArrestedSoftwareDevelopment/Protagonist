/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const hurricaneregina: SampleNovelData = {
  path: './MasterTextFiles/HurricaneReginaMaster.txt',
  notes: `Novel-specific notes for Hurricane Regina can be added here.`,
  protagonists: ['Captain Dan Nolan', 'Regina Long'],
  stub: `Bon Voyage

Chapter 1 - Overboard
      Captain Dan stood at the rails of his ship, surveying the choppy waters. He steadied himself with a single white-knuckled hand and strained the limits of his binoculars.

      "Sir, we're just about out of fuel. We don't have enough to make another pass and get to port before she hits, sir," Yeoman Clancy pointed out, in accordance to his duties.`,
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
  source: 'jzc',
};