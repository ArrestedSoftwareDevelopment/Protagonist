/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { RoadmapStep } from '../types';

/**
 * This file centralizes the narrative roadmaps for all analyzed
 * Public Domain novels.
 */
export const pdRoadmaps: Record<string, RoadmapStep[]> = {
    "Alice's Adventures in Wonderland": [
        { chapter_focus: '1-4', objective: 'Establish Alice\'s entry into the nonsensical world of Wonderland, focusing on her initial disorientation, her constant and confusing changes in size, and her early encounters with its strange inhabitants.', key_plotpoints_to_include: ['Following the White Rabbit', 'The pool of tears', 'The Caucus-Race', 'Getting trapped in the Rabbit\'s house'] },
        { chapter_focus: '5-8', objective: 'Guide Alice through a series of bizarre social encounters, emphasizing her attempts to apply logic to a world that has none. This section builds to her meeting the tyrannical ruler of Wonderland.', key_plotpoints_to_include: ['Meeting the Caterpillar', 'The Duchess and the pig-baby', 'The Mad Tea-Party', 'The Queen\'s croquet game'] },
        { chapter_focus: '9-12', objective: 'Bring the story to its climax with the nonsensical trial of the Knave of Hearts. Alice\'s final growth spurt gives her the confidence to rebel against the absurdity, leading to her awakening.', key_plotpoints_to_include: ['The Mock Turtle\'s story', 'The Lobster Quadrille', 'The trial of the Knave', 'Alice\'s rebellion and waking up'] },
    ],
};