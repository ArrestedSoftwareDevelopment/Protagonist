/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, GenerateContentResponse, Chat, Content, Type } from "@google/genai";
import { StartChatParams, StoryTurn, PlayerRole, Playstyle, Chapter, StartChatResponse, NovelDataSheet, ChapterGameplayPlan } from '../types';
import { Portals } from '../universe/portals';
import { basicRulesetDoc } from '../BasicRuleset';


let ai: GoogleGenAI;
let chat: Chat;
let currentNovelTitle: string;

export function initialize() {
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
        const moods = dataSheet.moods_styles_tones;
        const custom_instances = dataSheet.custom_instances.map(i => `- On trigger "${i.trigger}", follow this instruction: "${i.handler_instruction}"`).join('\n');

        dataSheetInstruction = `
<novel_datasheet>
- **Characters**:
${characterProfiles}
- **Plot Points**:
${plotPoints}
- **Moods, Styles, Tones**:
  - Overall Mood: ${moods.overall_mood}
  - Writing Style: ${moods.writing_style}
  - Pacing: ${moods.pacing}
  - Themes: ${moods.themes.join(', ')}
- **Roadmap**:
${roadmap}
- **Custom Instances**:
${custom_instances}
</novel_datasheet>
`;
    }

    return `${rulesetInstruction}\n\n<role_and_playstyle>
${roleInstruction}
${playstyleInstruction}
</role_and_playstyle>\n\n${dataSheetInstruction}`;
}

function serializeGameplayPlan(plan: ChapterGameplayPlan): string {
    const beats = plan.beats.map(b => `- Beat ${b.beat}: ${b.description}\n  - Objective: ${b.objective}`).join('\n');
    return `
<chapter_gameplay_plan>
Follow this detailed plan to guide the player through the current chapter:
${beats}
</chapter_gameplay_plan>
`;
}

export async function startChat(params: StartChatParams, fullNovelContent?: string): Promise<StartChatResponse> {
    let dataSheet: NovelDataSheet | undefined;
    let chapters: Chapter[] | undefined;
    
    currentNovelTitle = params.novelTitle || '';
    
    // For JZC novels, we use the pre-defined, canonical datasheets and chapters
    if (params.novelTitle && Portals.getNovelDataSheet(params.novelTitle)) {
        dataSheet = Portals.getNovelDataSheet(params.novelTitle);
        chapters = Portals.getNovelChapters(params.novelTitle);
    }
    
    // For Public Domain / Custom novels, generate the framework with Gemini
    if (!dataSheet || !chapters) {
        if (!fullNovelContent && !params.novelContent) {
            throw new Error('Novel content is required to start a story without a pre-defined datasheet.');
        }

        const novelTextForAnalysis = fullNovelContent || params.novelContent;
        const analysisPromptParts = [
            "You are a literary analysis expert. Your task is to read the provided novel text and generate a structured JSON object containing a detailed datasheet and a complete chapter-by-chapter outline. Adhere strictly to the provided JSON schema.",
            "IMPORTANT: In the generated JSON, all chapter numbers (like in `plotpoints.chapter` and `roadmap.chapter_focus`) MUST be represented as strings, not numbers. For example: \"chapter\": \"1\" instead of \"chapter\": 1.",
            `Novel Title: ${params.novelTitle || 'Untitled'}`,
            `Novel Text: """${novelTextForAnalysis}"""`,
            "Generate the JSON object now."
        ];

        const isMashup = params.novelPaths && params.novelPaths.length > 1;
        if (isMashup) {
            analysisPromptParts.unshift('This is a "mash-up" of multiple novels. You must synthesize them into a single, coherent story framework based on the mash-up rules provided in the Basic Ruleset.');
        }

        const analysisPrompt = analysisPromptParts.join('\n\n');

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: analysisPrompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        dataSheet: {
                            type: Type.OBJECT,
                            properties: {
                                characters: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            name: { type: Type.STRING },
                                            description: { type: Type.STRING }
                                        },
                                        required: ['name', 'description']
                                    }
                                },
                                plotpoints: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            chapter: { type: Type.STRING },
                                            event: { type: Type.STRING },
                                            description: { type: Type.STRING }
                                        },
                                         required: ['chapter', 'event', 'description']
                                    }
                                },
                                moods_styles_tones: {
                                    type: Type.OBJECT,
                                    properties: {
                                        overall_mood: { type: Type.STRING },
                                        writing_style: { type: Type.STRING },
                                        pacing: { type: Type.STRING },
                                        themes: { type: Type.ARRAY, items: { type: Type.STRING } }
                                    },
                                    required: ['overall_mood', 'writing_style', 'pacing', 'themes']
                                },
                                roadmap: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            chapter_focus: { type: Type.STRING },
                                            objective: { type: Type.STRING },
                                            key_plotpoints_to_include: { type: Type.ARRAY, items: { type: Type.STRING } }
                                        },
                                        required: ['chapter_focus', 'objective', 'key_plotpoints_to_include']
                                    }
                                },
                                custom_instances: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            trigger: { type: Type.STRING },
                                            handler_instruction: { type: Type.STRING }
                                        },
                                        required: ['trigger', 'handler_instruction']
                                    }
                                }
                            },
                             required: ['characters', 'plotpoints', 'moods_styles_tones', 'roadmap', 'custom_instances']
                        },
                        chapters: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    title: { type: Type.STRING },
                                    summary: { type: Type.STRING },
                                    characters: { type: Type.ARRAY, items: { type: Type.STRING } }
                                },
                                required: ['title', 'summary', 'characters']
                            }
                        }
                    },
                    required: ['dataSheet', 'chapters']
                }
            }
        });
        
        const responseJson = response.text?.trim();
        if (!responseJson) {
            throw new Error('Received an empty response from the storyteller for analysis.');
        }

        let parsedResponse: {
            dataSheet: NovelDataSheet;
            chapters: Chapter[];
        };

        try {
            parsedResponse = JSON.parse(responseJson);
        } catch (e) {
            console.error("Failed to parse JSON from Gemini:", responseJson);
            throw new Error(`The storyteller provided an invalid response format: ${e instanceof Error ? e.message : String(e)}`);
        }
        
        dataSheet = parsedResponse.dataSheet;
        chapters = parsedResponse.chapters;
    }


    if (!dataSheet || !chapters) {
        throw new Error("Failed to generate or retrieve the story framework.");
    }
    
    const systemInstruction = getSystemInstruction(params.playerRole, params.playstyle, params.protagonistName, dataSheet);
    
    let gameplayPlanPrompt = '';
    if (currentNovelTitle && chapters.length > 0) {
        const plan = Portals.getChapterGameplayPlan(currentNovelTitle, chapters[0].title);
        if (plan) {
            gameplayPlanPrompt = serializeGameplayPlan(plan);
        }
    }

    const storyStartPrompt = `Begin the story. The user has chosen to play as ${params.protagonistName || (params.playerRole === 'self' ? 'themselves, a new character' : 'the protagonist')}. The story is based on "${params.novelTitle}". Start with the first chapter: "${chapters[0].title}". Set the scene based on the novel's opening, incorporating the novel's specific notes if available: "${params.notes || 'No specific notes provided.'}" ${gameplayPlanPrompt}`;

    const initialHistory: Content[] = [
        { role: 'user', parts: [{ text: storyStartPrompt }] }
    ];

    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction
        },
        history: initialHistory,
    });
    
    const firstSceneResponse = await chat.sendMessage({ message: "Start." });

    return {
        dataSheet,
        chapters,
        firstSceneContent: firstSceneResponse.text,
        storyStartPrompt
    };
}

export function recreateChat(history: StoryTurn[], playerRole: PlayerRole, playstyle: Playstyle, dataSheet: NovelDataSheet, novelTitle: string, protagonistName?: string) {
    currentNovelTitle = novelTitle;
    const systemInstruction = getSystemInstruction(playerRole, playstyle, protagonistName, dataSheet);
    const typedHistory = history.map(turn => ({
        role: turn.role,
        parts: [{ text: turn.content }]
    })).filter(turn => !turn.parts[0].text.startsWith('**An unexpected error occurred:**'));
    
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction,
        },
        history: typedHistory,
    });
}

export async function sendMessage(message: string): Promise<GenerateContentResponse> {
    if (!chat) {
        throw new Error('Chat not initialized');
    }
    return await chat.sendMessage({ message });
}

export async function changeScene(sceneNumber: number, chapterTitle: string): Promise<GenerateContentResponse> {
     if (!chat) {
        throw new Error('Chat not initialized');
    }

    let gameplayPlanPrompt = '';
    if (currentNovelTitle) {
        const plan = Portals.getChapterGameplayPlan(currentNovelTitle, chapterTitle);
        if (plan) {
            gameplayPlanPrompt = serializeGameplayPlan(plan);
        }
    }

    const sceneChangePrompt = `Transition the story to Chapter ${sceneNumber}: "${chapterTitle}". Summarize the transition and set the new scene for the user. ${gameplayPlanPrompt}`;
    return await chat.sendMessage({ message: sceneChangePrompt });
}