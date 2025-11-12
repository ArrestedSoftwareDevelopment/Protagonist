/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// FIX: Import from @google/genai
import { GoogleGenAI, GenerateContentResponse, Chat, Content } from "@google/genai";
// FIX: Import from ../types
import { StartChatParams, StoryTurn, PlayerRole, Playstyle, Chapter, StartChatResponse, NovelDataSheet } from '../types';
import { Portals } from '../universe/portals';
import { basicRulesetDoc } from '../BasicRuleset';


let ai: GoogleGenAI;
let chat: Chat;

export function initialize() {
    // FIX: Initialize with apiKey from environment variable.
    // The API key MUST be obtained exclusively from the environment variable `process.env.API_KEY`.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
}

function getSystemInstruction(playerRole: PlayerRole, playstyle: Playstyle, protagonistName: string | undefined, dataSheet?: NovelDataSheet): string {
    const rulesetInstruction = basicRulesetDoc;

    let roleInstruction = playerRole === 'protagonist'
        ? "The user is the protagonist of this story. Refer to them as 'you'. All your responses should be from the perspective of a storyteller narrating their actions and the world's reactions."
        : "The user is playing as themselves, a new character who has just entered the world of the novel. All your responses should be from the perspective of a storyteller narrating their actions and the world's reactions.";

    if (playerRole === 'protagonist' && protagonistName) {
        roleInstruction = `The user is playing as the protagonist '${protagonistName}'. The narrative MUST follow their specific point-of-view. Refer to the user as 'you'. All your responses should be from the perspective of a storyteller narrating their actions and the world's reactions.`;
    }

    const playstyleInstruction = playstyle === 'guided'
        ? "At the end of each of your responses, provide the user with 3-4 numbered, distinct, and actionable choices for what they can do next. These choices should be directly related to the current scene and situation."
        : "Your responses should be open-ended, allowing the user to decide their next action freely.";

    let dataSheetInstruction = '';
    if (dataSheet) {
        const characterProfiles = dataSheet.characters.map(c => `- ${c.name}: ${c.description}`).join('\n');
        const plotPoints = dataSheet.plotpoints.map(p => `- Chapter ${p.chapter} (${p.event}): ${p.description}`).join('\n');
        const roadmap = dataSheet.roadmap.map(r => `- Focus on Chapter ${r.chapter_focus}: ${r.objective}`).join('\n');
        const customInstances = dataSheet.custom_instances.map(i => `- On trigger '${i.trigger}', follow this rule: ${i.handler_instruction}`).join('\n');

        dataSheetInstruction = `You MUST strictly adhere to the following established story context, which is your permanent map for this narrative:
<story_bible>
  <mood_style_tone>
    - Mood: ${dataSheet.moods_styles_tones.overall_mood}
    - Style: ${dataSheet.moods_styles_tones.writing_style}
    - Pacing: ${dataSheet.moods_styles_tones.pacing}
    - Themes: ${dataSheet.moods_styles_tones.themes.join(', ')}
  </mood_style_tone>
  <characters>
    ${characterProfiles}
  </characters>
  <plot_points>
    ${plotPoints}
  </plot_points>
  <roadmap>
    ${roadmap}
  </roadmap>
  <custom_instances>
    ${customInstances}
  </custom_instances>
</story_bible>
`;
    }

    return `You are an expert storyteller and collaborative fiction author. Your goal is to create an immersive, interactive experience for the user within the world of a novel.
${rulesetInstruction}
${dataSheetInstruction}
${roleInstruction}
${playstyleInstruction}
- Be descriptive and engaging.
- Write in a literary style.
- Crucially, if a story bible is provided, you must adhere to its context (mood, style, characters, plot). Maintain this consistency throughout the entire narrative.
- Keep your responses to a few paragraphs, focusing on the immediate scene and characters.
- Do not break the fourth wall or refer to yourself as an AI.
- You are the narrator.`;
}

export async function startChat(params: StartChatParams, fullNovelContent?: string): Promise<StartChatResponse> {
    if (!ai) {
        throw new Error("Gemini AI not initialized.");
    }

    let dataSheet: NovelDataSheet | undefined;
    let chapters: Chapter[] = [];
    const analysisModel = 'gemini-2.5-pro';

    const preloadedDataSheet = Portals.getNovelDataSheet(params.novelTitle || '');
    const preloadedChapters = Portals.getNovelChapters(params.novelTitle || '');

    if (preloadedDataSheet) {
        dataSheet = preloadedDataSheet;
        // Use pre-defined chapters if they exist, otherwise generate them.
        if (preloadedChapters) {
            chapters = preloadedChapters;
        } else {
            // Fallback to generating chapters if they aren't pre-defined for a JZC novel
            const chapterGenPrompt = `Based on the provided NovelDataSheet for "${params.novelTitle}", generate a COMPLETE chapter list for the novel. Each chapter in the list must correspond directly to the major plotpoints outlined in the datasheet's 'plotpoints' and 'roadmap' sections. Do NOT invent new plot points or titles.

    Your output must be a single JSON array, enclosed in a \`\`\`json code block. Each object in the array must represent a chapter and have the following properties:
    - "title": A concise title for the chapter, derived DIRECTLY from the 'event' field in the plotpoints.
    - "summary": A brief summary of the chapter's events, based on the plot point description.
    - "characters": An array of the key characters involved in that chapter.

    NovelDataSheet:
    <datasheet>
    ${JSON.stringify(dataSheet, null, 2)}
    </datasheet>
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
                    chapters = []; // Ensure chapters is an empty array on failure
                }
            }
        }
    } else {
        const analysisContent = fullNovelContent || params.novelContent;
        const analysisLabel = fullNovelContent ? 'novel' : 'excerpt';
        let setupPrompt = '';
        if (analysisContent) {
            setupPrompt = `Analyze the following ${analysisLabel} titled "${params.novelTitle}". Your task is to produce two JSON objects: a detailed "NovelDataSheet" and a chapter outline.

First, create the NovelDataSheet JSON object. It will be your permanent map for a story based on this ${analysisLabel}. It MUST conform to this structure:
{
  "characters": [{ "name": string, "description": string }],
  "plotpoints": [{ "chapter": string | number, "event": string, "description": string }],
  "moods_styles_tones": { "overall_mood": string, "writing_style": string, "pacing": string, "themes": string[] },
  "roadmap": [{ "chapter_focus": string | number, "objective": string, "key_plotpoints_to_include": string[] }],
  "custom_instances": [{ "trigger": string, "handler_instruction": string }]
}
Enclose this NovelDataSheet JSON in a single \`\`\`json code block.

Second, after the NovelDataSheet block, create a separate JSON object that outlines the full list of chapters for the story, based on the plotpoints. Each chapter object in this JSON array should have "title", "summary", and "characters". Enclose this chapter JSON in a second, separate \`\`\`json code block.

${analysisLabel}:
<${analysisLabel}>
${analysisContent}
</${analysisLabel}>
`;
        } else {
             setupPrompt = `I want to start a new interactive story titled "${params.novelTitle}". I haven't provided an excerpt, so you can create the world from scratch.

First, create a "NovelDataSheet" JSON object for your reference. This will be your permanent map for our entire story. It MUST conform to this structure:
{
  "characters": [{ "name": string, "description": string }],
  "plotpoints": [{ "chapter": string | number, "event": string, "description": string }],
  "moods_styles_tones": { "overall_mood": string, "writing_style": string, "pacing": string, "themes": string[] },
  "roadmap": [{ "chapter_focus": string | number, "objective": string, "key_plotpoints_to_include": string[] }],
  "custom_instances": [{ "trigger": string, "handler_instruction": string }]
}
Enclose this NovelDataSheet JSON in a single \`\`\`json code block.

Second, after the NovelDataSheet block, create a separate JSON object that outlines the first 5-7 chapters of a potential story arc. Each chapter object should have a "title", "summary", and "characters". Enclose this chapter JSON in a second, separate \`\`\`json code block.`;
        }
        
        const analysisResponse = await ai.models.generateContent({
            model: analysisModel,
            contents: setupPrompt,
        });
        const analysisText = analysisResponse.text;
        
        const jsonMatches = analysisText.match(/```json\n([\s\S]*?)\n```/g);
        if (jsonMatches && jsonMatches.length > 0) {
            try {
                dataSheet = JSON.parse(jsonMatches[0].replace(/```json\n|```/g, '')) as NovelDataSheet;
            } catch(e) {
                console.error("Failed to parse NovelDataSheet JSON:", e, jsonMatches[0]);
                dataSheet = undefined;
            }
        }
        if (jsonMatches && jsonMatches.length > 1) {
            try {
                chapters = JSON.parse(jsonMatches[1].replace(/```json\n|```/g, '')) as Chapter[];
            } catch (e) {
                console.error("Failed to parse chapter JSON:", e, jsonMatches[1]);
                chapters = [];
            }
        }
    }

    if (!dataSheet) {
        throw new Error("Failed to generate or retrieve a valid data sheet for the story.");
    }
    
    if (chapters.length === 0 && !preloadedChapters) {
        console.warn("Chapter generation resulted in an empty list.");
    }


    // Initialize the actual chat with the generated data sheet in the system instructions.
    const systemInstruction = getSystemInstruction(params.playerRole, params.playstyle, params.protagonistName, dataSheet);
    chat = ai.chats.create({
        model: 'gemini-2.5-pro',
        config: { systemInstruction },
    });

    // Send the first message to the chat to generate the opening scene, using the stub content.
    let storyStartPrompt = '';
    if (params.novelContent) {
        const gameplayNotes = params.notes ? `\n<gameplay_notes>\n${params.notes}\n</gameplay_notes>\n` : '';
        storyStartPrompt = `Begin the interactive story.
- Your narration must adopt the writing style and era defined in your story bible.
- **Crucially, you must use the provided excerpt as the source material for the story's beginning.**
- Rewrite the opening of the story from a second-person perspective, addressing me (the user) as 'you'.
- Continue the story from where the excerpt leaves off.
- End by prompting me for my first action.
${gameplayNotes}
Here is the excerpt to use:
<excerpt>
${params.novelContent}
</excerpt>`;
    } else {
        storyStartPrompt = `Begin the interactive story titled "${params.novelTitle}".
- Adhere strictly to the writing style, era, and world defined in your story bible.
- Write the very first scene of the story to begin the interactive experience.
- Place me directly into the world and end by prompting me for my first action.`;
    }

    const firstSceneResponse: GenerateContentResponse = await chat.sendMessage({ message: storyStartPrompt });
    const firstSceneContent = firstSceneResponse.text;

    if (!firstSceneContent) {
        throw new Error("The storyteller failed to generate an opening scene.");
    }

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

export function recreateChat(history: StoryTurn[], playerRole: PlayerRole, playstyle: Playstyle, dataSheet: NovelDataSheet, protagonistName?: string) {
    if (!ai) {
        throw new Error("Gemini AI not initialized.");
    }
    const systemInstruction = getSystemInstruction(playerRole, playstyle, protagonistName, dataSheet);
    
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