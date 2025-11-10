/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// FIX: Import from @google/genai
import { GoogleGenAI, GenerateContentResponse, Chat, Content } from "@google/genai";
// FIX: Import from ../types
import { StartChatParams, StoryTurn, PlayerRole, Playstyle, Chapter, StartChatResponse } from '../types';
import {
    everythingWentBlackDoc,
    radarLoveDoc,
    perfectMeDoc,
} from '../universe/jason-z-christie';


let ai: GoogleGenAI;
let chat: Chat;

const universeDataSheets: Record<string, string> = {
    'Everything Went Black': everythingWentBlackDoc,
    'Radar Love': radarLoveDoc,
    'Perfect Me': perfectMeDoc,
};

export function initialize() {
    // FIX: Initialize with apiKey from environment variable.
    // The API key MUST be obtained exclusively from the environment variable `process.env.API_KEY`.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
}

function getSystemInstruction(playerRole: PlayerRole, playstyle: Playstyle, dataSheet?: string): string {
    const roleInstruction = playerRole === 'protagonist'
        ? "The user is the protagonist of this story. Refer to them as 'you'. All your responses should be from the perspective of a storyteller narrating their actions and the world's reactions."
        : "The user is playing as themselves, a new character who has just entered the world of the novel. All your responses should be from the perspective of a storyteller narrating their actions and the world's reactions.";

    const playstyleInstruction = playstyle === 'guided'
        ? "At the end of each of your responses, provide the user with 3-4 numbered, distinct, and actionable choices for what they can do next. These choices should be directly related to the current scene and situation."
        : "Your responses should be open-ended, allowing the user to decide their next action freely.";

    const dataSheetInstruction = dataSheet
        ? `You MUST strictly adhere to the following established story context, which is your permanent map for this narrative:\n<datasheet>\n${dataSheet}\n</datasheet>\n`
        : '';

    return `You are an expert storyteller and collaborative fiction author. Your goal is to create an immersive, interactive experience for the user within the world of a novel.
${dataSheetInstruction}
${roleInstruction}
${playstyleInstruction}
- Be descriptive and engaging.
- Write in a literary style.
- Crucially, if a data sheet is provided, you must adhere to its context (era, mood, themes, character personalities, writing style). Maintain this consistency throughout the entire narrative.
- Keep your responses to a few paragraphs, focusing on the immediate scene and characters.
- Do not break the fourth wall or refer to yourself as an AI.
- You are the narrator.`;
}

export async function startChat(params: StartChatParams): Promise<StartChatResponse> {
    if (!ai) {
        throw new Error("Gemini AI not initialized.");
    }

    let dataSheet = '';
    let chapters: Chapter[] = [];
    const analysisModel = 'gemini-2.5-pro';

    const preloadedDataSheetDoc = universeDataSheets[params.novelTitle || ''];

    if (preloadedDataSheetDoc) {
        // This is a Jason Z. Christie novel, use the pre-canned datasheet.
        const dataSheetMatch = preloadedDataSheetDoc.match(/<datasheet>([\s\S]*?)<\/datasheet>/);
        dataSheet = dataSheetMatch ? dataSheetMatch[1].trim() : '';

        // Now, generate chapters based on the datasheet and excerpt.
        const chapterGenPrompt = `Based on the provided novel excerpt from "${params.novelTitle}" and its established storyteller's data sheet, create a JSON object that outlines the first 5-7 chapters of a story arc. Each chapter object in the JSON array should have a "title", "summary", and "characters". The JSON should be enclosed in a single \`\`\`json code block.

<datasheet>
${dataSheet}
</datasheet>

Excerpt:
<excerpt>
${params.novelContent}
</excerpt>
`;
        const analysisResponse = await ai.models.generateContent({
            model: analysisModel,
            contents: chapterGenPrompt,
        });
        const analysisText = analysisResponse.text;
        const chapterJsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/);
        if (chapterJsonMatch && chapterJsonMatch[1]) {
            try {
                chapters = JSON.parse(chapterJsonMatch[1]) as Chapter[];
            } catch (e) {
                console.error("Failed to parse chapter JSON for universe novel:", e);
                chapters = [];
            }
        }
    } else {
        // This is a regular novel, generate everything.
        let setupPrompt = '';
        if (params.novelContent) {
            setupPrompt = `Analyze the following novel excerpt titled "${params.novelTitle}". Your task is to produce two things: a detailed "storyteller's data sheet" and a JSON chapter outline.

First, create the data sheet. It will be your permanent map for a story based on this excerpt. It should include:
- **Era**: The historical period and cultural context.
- **Mood**: The dominant emotional atmosphere.
- **Themes**: The central ideas and underlying messages.
- **Characters**: A list of key characters, their personalities, and motivations.
- **Settings**: Descriptions of the primary locations.
- **Writing Style**: An analysis of the author's tone, prose, and narrative voice.
IMPORTANT: You must wrap the entire data sheet text inside <datasheet></datasheet> tags.

Second, after the <datasheet> block, create a JSON object that outlines the first 5-7 chapters of a potential story arc that could follow this excerpt. Each chapter object in the JSON array should have a "title", "summary", and "characters". The JSON should be enclosed in a single \`\`\`json code block.

Excerpt:
<excerpt>
${params.novelContent}
</excerpt>
`;
        } else {
            setupPrompt = `I want to start a new interactive story titled "${params.novelTitle}". I haven't provided an excerpt, so you can create the world from scratch.

First, create a "storyteller's data sheet" for your reference. This will be your permanent map for our entire story. Define:
- **Era**: The historical period and cultural context.
- **Mood**: The dominant emotional atmosphere.
- **Themes**: The central ideas.
- **Characters**: A list of key characters, their personalities, and motivations.
- **Settings**: Descriptions of the primary locations.
- **Writing Style**: The narrative voice you will adopt.
IMPORTANT: You must wrap the entire data sheet text inside <datasheet></datasheet> tags.

After the <datasheet> block, create a JSON object that outlines the first 5-7 chapters of a potential story arc. Each chapter object should have a "title", "summary", and "characters". Enclose the JSON in a single \`\`\`json code block.`;
        }
        
        const analysisResponse = await ai.models.generateContent({
            model: analysisModel,
            contents: setupPrompt,
        });
        const analysisText = analysisResponse.text;
        
        const dataSheetMatch = analysisText.match(/<datasheet>([\s\S]*?)<\/datasheet>/);
        dataSheet = dataSheetMatch ? dataSheetMatch[1].trim() : '';
        const chapterJsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/);
        if (chapterJsonMatch && chapterJsonMatch[1]) {
            try {
                chapters = JSON.parse(chapterJsonMatch[1]) as Chapter[];
            } catch (e) {
                console.error("Failed to parse chapter JSON:", e);
                chapters = [];
            }
        }
    }

    // Step 2: Initialize the actual chat with the generated data sheet in the system instructions.
    const systemInstruction = getSystemInstruction(params.playerRole, params.playstyle, dataSheet);
    chat = ai.chats.create({
        model: 'gemini-2.5-pro',
        config: { systemInstruction },
    });

    // Step 3: Send the first message to the chat to generate the opening scene.
    let storyStartPrompt = '';
    if (params.novelContent) {
        storyStartPrompt = `Begin the interactive story.
- Your narration must adopt the writing style and era defined in your data sheet.
- **Crucially, you must use the provided excerpt as the source material for the story's beginning.**
- Rewrite the opening of the story from a second-person perspective, addressing me (the user) as 'you'.
- Continue the story from where the excerpt leaves off.
- End by prompting me for my first action.

Here is the excerpt to use:
<excerpt>
${params.novelContent}
</excerpt>`;
    } else {
        storyStartPrompt = `Begin the interactive story titled "${params.novelTitle}".
- Adhere strictly to the writing style, era, and world defined in your data sheet.
- Write the very first scene of the story to begin the interactive experience.
- Place me directly into the world and end by prompting me for my first action.`;
    }

    const firstSceneResponse: GenerateContentResponse = await chat.sendMessage({ message: storyStartPrompt });
    const firstSceneContent = firstSceneResponse.text;

    return { dataSheet, chapters, firstSceneContent, storyStartPrompt };
}

export async function sendMessage(message: string): Promise<{ text: string }> {
    if (!chat) {
        throw new Error("Chat not started. Please start a new story first.");
    }
    
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return { text: response.text };
}

export async function changeScene(sceneNumber: number, chapterTitle: string): Promise<{ text: string }> {
     if (!chat) {
        throw new Error("Chat not started. Please start a new story first.");
    }

    const prompt = `[SYSTEM: Transition the story to Chapter ${sceneNumber}: "${chapterTitle}". Narrate the events that lead to this new scene, or describe a time skip if appropriate. Then, write the opening of the new scene and prompt me for my next action.]`;
    
    const response: GenerateContentResponse = await chat.sendMessage({ message: prompt });
    return { text: response.text };
}

export function recreateChat(history: StoryTurn[], playerRole: PlayerRole, playstyle: Playstyle, dataSheet: string) {
    if (!ai) {
        throw new Error("Gemini AI not initialized.");
    }
    const systemInstruction = getSystemInstruction(playerRole, playstyle, dataSheet);
    
    const geminiHistory: Content[] = history.map(turn => ({
        role: turn.role,
        parts: [{ text: turn.content }]
    }));

    if (geminiHistory.length > 0 && geminiHistory[0].role !== 'user') {
        console.warn("Recreating chat with history that does not start with a user turn. This might lead to unexpected behavior.");
    }

    chat = ai.chats.create({
        model: 'gemini-2.5-pro',
        config: { systemInstruction },
        history: geminiHistory
    });
}