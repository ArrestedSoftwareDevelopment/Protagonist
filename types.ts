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
  hidden?: boolean;
}

export type Playstyle = 'freeform' | 'guided';
export type PlayerRole = 'protagonist' | 'self';

export interface StartChatParams {
  novelTitle?: string;
  novelContent?: string;
  playstyle: Playstyle;
  playerRole: PlayerRole;
}

export interface StartChatResponse {
  dataSheet: string;
  chapters: Chapter[];
  firstSceneContent: string;
  storyStartPrompt: string;
}

export interface Chapter {
  title: string;
  summary: string;
  characters: string[];
}

export interface StoryFramework {
  chapters: Chapter[];
  firstSceneContent: string;
  dataSheet: string;
}

export interface Bookmark {
  novelTitle: string;
  storyHistory: StoryTurn[];
  currentScene: number;
  chapters: Chapter[];
  playstyle: Playstyle;
  playerRole: PlayerRole;
  dataSheet: string;
  lastPlayed: string;
}

export interface Novel {
  id: string;
  title: string;
  content: string;
  coverUrl: string;
}