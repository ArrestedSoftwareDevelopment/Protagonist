/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export enum AppStatus {
  AwaitingInput = 'awaiting-input',
  Processing = 'processing',
  Story = 'story',
  Error = 'error',
}

export interface StoryTurn {
  role: 'user' | 'model';
  content: string;
}

export type Playstyle = 'freeform' | 'guided';
export type PlayerRole = 'protagonist' | 'self';

export interface StartChatParams {
  novelTitle?: string;
  novelContent?: string;
  playstyle: Playstyle;
  playerRole: PlayerRole;
}

export interface Chapter {
  title: string;
  summary: string;
  characters: string[];
}

export interface StoryFramework {
  chapters: Chapter[];
  firstSceneContent: string;
}

export interface Bookmark {
  novelTitle: string;
  storyHistory: StoryTurn[];
  currentScene: number;
  chapters: Chapter[];
  playstyle: Playstyle;
  playerRole: PlayerRole;
  lastPlayed: string;
}
