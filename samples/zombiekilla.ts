/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Fix: Add explicit type annotation to fix type inference issue.
import { NovelDataSheet, SampleNovelData } from '../types';

export const zombiekilla: SampleNovelData = {
  path: './MasterTextFiles/ZombieKillaMaster.txt',
  notes: `Novel-specific notes for Zombie Killa can be added here.`,
  protagonists: ['High-C', 'Myf'],
  stub: `A nerdcore hip-hop novella

Chapter 1 - The Odd Couple
     Myf's alarm clock clicked on and he was awakened to an ear- shattering blast of Brutal Truth, one of his favorite grindcore bands. He was your typical black college student: wild, impetuous, fun-loving. He was actually from Sri Lanka, but he looked black, so it was easier to just self-identify as black. Things like that seemed to matter more in the U.S. Very few people were close enough for him to reveal his actual heritage.`,
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
