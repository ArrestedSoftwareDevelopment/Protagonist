/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { CharacterProfile } from '../types';

/**
 * This file centralizes the character data for all analyzed
 * Public Domain novels.
 */
export const pdCharacters: Record<string, CharacterProfile[]> = {
    "Alice's Adventures in Wonderland": [
        { name: 'Alice', description: 'The protagonist, a curious, imaginative, and logical young girl who falls down a rabbit hole into the nonsensical world of Wonderland.' },
        { name: 'White Rabbit', description: 'A perpetually late, anxious rabbit in a waistcoat who Alice follows into Wonderland.' },
        { name: 'Mouse', description: 'A formal and easily offended mouse whom Alice meets in the Pool of Tears.' },
        { name: 'Dodo', description: 'A solemn, pompous bird who suggests the Caucus-Race to get everyone dry.' },
        { name: 'Caterpillar', description: 'A hookah-smoking caterpillar who questions Alice\'s identity and gives her cryptic advice about the mushroom.' },
        { name: 'Duchess', description: 'An ugly and ill-tempered aristocrat who is fond of finding morals in everything. She is the owner of the Cheshire Cat.' },
        { name: 'Cheshire Cat', description: 'A perpetually grinning, philosophical cat that can appear and disappear at will, offering cryptic advice to Alice.' },
        { name: 'March Hare', description: 'One of the hosts of the Mad Tea-Party, who is perpetually stuck at tea-time.' },
        { name: 'Hatter', description: 'Formerly the "Mad Hatter". A nonsensical hatter who asks unanswerable riddles and is also stuck at the eternal tea-party.' },
        { name: 'Dormouse', description: 'A sleepy creature who lives in a teapot and is used as a cushion by the Hatter and March Hare.' },
        { name: 'Queen of Hearts', description: 'The tyrannical, foul-tempered ruler of Wonderland, who frequently orders executions by shouting "Off with their heads!"' },
        { name: 'King of Hearts', description: 'The Queen\'s meek and ineffectual husband, who often tries to pardon those she sentences to death.' },
        { name: 'Knave of Hearts', description: 'An attendant to the King and Queen, who is put on trial for allegedly stealing the Queen\'s tarts.' },
        { name: 'Gryphon', description: 'A mythical creature who acts as Alice\'s guide to the Mock Turtle.' },
        { name: 'Mock Turtle', description: 'A perpetually weeping creature who was once a real turtle and now tells Alice his sad story of his "education".' },
    ],
};