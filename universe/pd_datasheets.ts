/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { NovelDataSheet } from '../types';

/**
 * This file centralizes the base datasheet information (plot, mood, style, etc.)
 * for all analyzed Public Domain novels.
 */

export const aliceDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 1, event: 'Down the Rabbit-Hole', description: 'Alice follows the White Rabbit, falls down the hole, and enters Wonderland. She finds a tiny door to a beautiful garden but cannot get through it due to her size.' },
    { chapter: 2, event: 'The Pool of Tears', description: 'After growing to a giant size and then shrinking again, Alice finds herself swimming in a pool of her own tears with a Mouse.' },
    { chapter: 3, event: 'A Caucus-Race', description: 'To get dry, Alice and a group of animals participate in a nonsensical "Caucus-Race" where everyone is a winner.' },
    { chapter: 4, event: 'Trapped in the Rabbit\'s House', description: 'Mistaken for a housemaid by the White Rabbit, Alice drinks a potion and grows so large she becomes trapped inside his house.' },
    { chapter: 5, event: 'Advice from a Caterpillar', description: 'Alice meets a philosophical, hookah-smoking Caterpillar who challenges her sense of identity and gives her cryptic advice about the two sides of his mushroom.' },
    { chapter: 6, event: 'Pig and Pepper', description: 'Alice enters the chaotic and pepper-filled house of the Duchess, is handed a baby that turns into a pig, and has a perplexing conversation with the Cheshire Cat.' },
    { chapter: 7, event: 'A Mad Tea-Party', description: 'Alice joins the Hatter, the March Hare, and the Dormouse for a perpetual tea party where it is always six o\'clock and logic has no place.' },
    { chapter: 8, event: 'The Queen\'s Croquet-Ground', description: 'Alice is invited by the Queen of Hearts to play a bizarre game of croquet using live flamingos for mallets and hedgehogs for balls.' },
    { chapter: 9, event: 'The Mock Turtle\'s Story', description: 'Alice is taken by the Gryphon to meet the perpetually weeping Mock Turtle, who tells her the sad story of his "education" in the sea.' },
    { chapter: 11, event: 'The Trial of the Knave', description: 'Alice witnesses the absurd trial of the Knave of Hearts, who is accused of stealing the Queen\'s tarts.' },
    { chapter: 12, event: 'Alice\'s Rebellion', description: 'As she grows back to her full size, Alice gains the confidence to challenge the Queen and the nonsensical court, causing the entire dream world to collapse as she awakens.' },
  ],
  moods_styles_tones: {
    overall_mood: 'Whimsical, nonsensical, dreamlike, surreal, and occasionally unsettling or menacing.',
    writing_style: 'Third-person narrative closely following Alice\'s point of view. It is characterized by logical paradoxes, puns, parodies of Victorian poems, and playful, imaginative language.',
    pacing: 'Episodic and meandering, moving from one bizarre encounter to the next with the logic of a dream.',
    themes: ['The transition from childhood to adulthood', 'The absurdity of adult rules and social conventions', 'The loss of innocence', 'The nature of identity', 'Curiosity and exploration', 'The power of imagination'],
  },
  custom_instances: [
    { trigger: 'Alice changes size', handler_instruction: 'Emphasize Alice\'s frustration and confusion. The world should seem alien and improperly scaled from her new perspective.' },
    { trigger: 'A character presents a riddle or logical paradox', handler_instruction: 'Treat the nonsensical statement with complete seriousness. The player, as Alice, should be prompted to try and apply logic to it, only to be frustrated by the character\'s absurd answers.' },
    { trigger: 'The Queen of Hearts appears', handler_instruction: 'The tone should immediately become more tense and menacing. The Queen is a figure of irrational and absolute power.' },
  ],
};