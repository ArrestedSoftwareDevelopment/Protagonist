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
  novelPaths?: string[];
  notes?: string;
  playstyle: Playstyle;
  playerRole: PlayerRole;
  protagonistName?: string;
}

export interface StartChatResponse {
  dataSheet: NovelDataSheet;
  chapters: Chapter[];
  firstSceneContent: string;
  storyStartPrompt: string;
}

export interface Chapter {
  title: string;
  summary: string;
  characters: string[];
}

// New granular datasheet structure
export interface CharacterProfile {
  name: string;
  description: string;
}

export interface PlotPoint {
  chapter: number | string;
  event: string;
  description: string;
  // Fix: Add optional 'timeline' property to support non-linear narratives.
  timeline?: 'present' | 'flashback';
}

export interface MoodStyleTone {
  overall_mood: string;
  writing_style: string;
  pacing: string;
  themes: string[];
}

export interface RoadmapStep {
  chapter_focus: number | string;
  objective: string;
  key_plotpoints_to_include: string[];
}

export interface CustomInstance {
  trigger: string;
  handler_instruction: string;
}

export interface NovelDataSheet {
  characters: CharacterProfile[];
  plotpoints: PlotPoint[];
  moods_styles_tones: MoodStyleTone;
  roadmap: RoadmapStep[];
  custom_instances: CustomInstance[];
}

export interface StoryFramework {
  chapters: Chapter[];
  firstSceneContent: string;
  dataSheet: NovelDataSheet;
}

export interface Bookmark {
  novelTitle: string;
  storyHistory: StoryTurn[];
  currentScene: number;
  chapters: Chapter[];
  playerRole: PlayerRole;
  playstyle: Playstyle;
  dataSheet: NovelDataSheet;
  lastPlayed: string;
  protagonistName?: string;
}

// Fix: Moved SampleNovelData here to be shared across components and sample files.
export interface SampleNovelData {
    path: string;
    notes: string;
    stub: string;
    datasheet: NovelDataSheet;
    protagonists?: string[];
    source: 'jzc' | 'pd';
    genre?: string;
}

export interface GameplayBeat {
  beat: number;
  description: string;
  objective: string;
}

export interface ChapterGameplayPlan {
  beats: GameplayBeat[];
}