/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const pageburner: SampleNovelData = {
  path: './MasterTextFiles/PageburnerMaster.txt',
  notes: `Novel-specific notes for Pageburner can be added here.`,
  protagonists: ['Detective Paige Burner', 'Dr. Jean Simons'],
  stub: `Pageburner
     By Jason Z. Christie Copyright 2011 Jason Z. Christie

Dedicated to Johnnie Christie

Chapter 1 - A Fishy Tale
      Detective Paige Burner sighed and pushed open the door that led into the Laguna Niguel Ritz-Carlton's suite seven. She was immediately struck by the pungent odor of decaying seafood.
      "Bleh," she said, grimacing in mock disgust. The truth was, Paige can and has eaten sandwiches next to mutilated bodies writhing with maggots, where the victim fully lost control of their bowels before or after death. Simpler smells, like pooled and drying blood, were almost comforting.`,
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
