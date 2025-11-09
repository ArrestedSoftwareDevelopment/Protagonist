/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { StartChatParams, PlayerRole, Playstyle } from '../types';

let ai: GoogleGenAI;
let chat: Chat;

// FIX: Use a recommended model for complex text tasks.
const MODEL = 'gemini-2.5-pro';

export function initialize() {
    // FIX: Initialize GoogleGenAI with API key from environment variables.
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

function getSystemInstruction(playerRole: PlayerRole, playstyle: Playstyle, novelTitle?: string): string {
    const roleInstruction = playerRole === 'protagonist'
        ? "The user will play as the protagonist. You will describe events from the protagonist's point of view, in the second person (e.g., 'You see a path branching off...')."
        : "The user will play as themselves, a character interacting with the story's world. You will describe events from a third-person narrative perspective, referring to the user's character when they are present.";

    const playstyleInstruction = playstyle === 'guided'
        ? "At the end of each of your responses, you MUST provide the user with 3-5 numbered, distinct, and actionable choices for what to do next. The user can either pick one of your choices or type their own action."
        : "The user has complete freedom in their actions. Do not offer them choices unless it is a natural part of the narrative (e.g., a character asking them a direct question).";

    return `You are an expert storyteller and interactive fiction game master.
Your goal is to guide the user through an immersive, interactive story set in the world of ${novelTitle || 'a novel'}.
You will narrate the story, describe scenes and characters, and react to the user's actions.
Maintain a consistent tone and style appropriate for the novel.
Describe the outcomes of the user's actions realistically within the story's world.
Be creative and engaging.

${roleInstruction}
${playstyleInstruction}
`;
}

async function startNewChat(systemInstruction: string) {
    // FIX: Create a new chat session using the correct API.
    chat = ai.chats.create({
        model: MODEL,
        config: {
            systemInstruction: systemInstruction,
        },
    });
}

export async function startChat(params: StartChatParams): Promise<GenerateContentResponse> {
    const systemInstruction = getSystemInstruction(params.playerRole, params.playstyle, params.novelTitle);
    await startNewChat(systemInstruction);

    let prompt = '';
    if (params.novelContent) {
        prompt = `I want to play an interactive story based on the following novel text. Please read it, then create a chapter-by-chapter summary and a list of key characters for each chapter.
Present this information as a single JSON object inside a \`\`\`json code block.
The JSON object should be an array of objects, where each object has 'title', 'summary', and 'characters' (an array of strings) properties.
After the JSON block, start the story by setting the scene for Chapter 1 and describing what is happening from my perspective.

Novel Content:
---
${params.novelContent}
---
`;
    } else if (params.novelTitle) {
        prompt = `I want to play an interactive story based on the novel "${params.novelTitle}".
First, create a chapter-by-chapter summary and a list of key characters for each chapter.
Present this information as a single JSON object inside a \`\`\`json code block.
The JSON object should be an array of objects, where each object has 'title', 'summary', and 'characters' (an array of strings) properties.
After the JSON block, start the story by setting the scene for Chapter 1 and describing what is happening from my perspective.`;
    } else {
        throw new Error("Either novelTitle or novelContent must be provided.");
    }
    // FIX: chat.sendMessage expects an object with a 'message' property.
    const response = await chat.sendMessage({ message: prompt });
    return response;
}

export async function sendMessage(message: string): Promise<GenerateContentResponse> {
    if (!chat) {
        throw new Error("Chat not initialized. Call startChat first.");
    }
    // FIX: chat.sendMessage expects an object with a 'message' property.
    const response = await chat.sendMessage({ message });
    return response;
}

export async function changeScene(sceneNumber: number, chapterTitle: string): Promise<GenerateContentResponse> {
    if (!chat) {
        throw new Error("Chat not initialized. Call startChat first.");
    }
    const prompt = `[SYSTEM: Fast-forward the story to the beginning of Chapter ${sceneNumber}: "${chapterTitle}". Describe the new scene and what is happening.]`;
    // FIX: chat.sendMessage expects an object with a 'message' property.
    const response = await chat.sendMessage({ message: prompt });
    return response;
}