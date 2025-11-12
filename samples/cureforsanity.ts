/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const cureforsanity: SampleNovelData = {
  path: './MasterTextFiles/CureForSanityMaster.txt',
  notes: `Novel-specific notes for Cure for Sanity can be added here.`,
  protagonists: ['Prail Abraxis', 'Pex Abraxis', 'Janique Turner'],
  stub: `He had found a shortcut to the future. Instead, he took the long, rocky road. It was in part because of something his grandfather had told him once. It was something to the effect that on a journey, a thinly-disguised metaphor for life, people all too often focused on the mountains, and missed the flowers along the way.
He liked flowers.
Another reason was an old joke he had heard or read, once. A father and son were on the top of a hill, overlooking a herd of cows.`,
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
