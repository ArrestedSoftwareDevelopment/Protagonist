/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { ChapterGameplayPlan } from '../types';

const hurricaneReginaGameplayPlan: Record<string, ChapterGameplayPlan> = {
  'Overboard': {
    beats: [
      {
        beat: 1,
        description: 'The Obsessed Captain: The story begins on the deck of the Mary Celeste II. The player, as Captain Dan, is frantically searching the rough seas for Regina, who has fallen overboard.',
        objective: 'Establish the player\'s obsessive focus. Prompt them to express their determination to continue the search despite the clear risks (low fuel, approaching storm) presented by Yeoman Clancy.'
      },
      {
        beat: 2,
        description: 'An Act of Defiance: Yeoman Clancy confronts the player again, more insistently, about the danger. The player must react to this insubordination.',
        objective: 'Guide the player toward a decisive, aggressive action (like the backhand in the text) to establish Captain Dan\'s absolute authority and single-minded focus on the rescue.'
      },
      {
        beat: 3,
        description: 'The Point of No Return: The player must commit all remaining resources to the search, defying official protocol.',
        objective: 'Prompt the player to use the radio to order the engines killed and the search boats launched for a desperate all-night search.'
      },
      {
        beat: 4,
        description: 'Perspective Shift - The Survivor: The narrative shifts to Regina\'s point-of-view. She is in the freezing water, exhausted, and losing hope.',
        objective: 'Convey Regina\'s physical and emotional state of desperation to the player, who is now a temporary observer of the scene.'
      },
      {
        beat: 5,
        description: 'A Glimmer of Hope... and a New Threat: Regina sees a flash of light in the distance (Dan\'s binoculars). At the same moment, she feels something brush against her leg in the dark water.',
        objective: 'Build suspense and create a moment of tension. Is it a sign of rescue, or the arrival of a predator?'
      },
      {
        beat: 6,
        description: 'The Sighting: The narrative returns to Captain Dan\'s point-of-view. The player spots Regina in the water just as she loses consciousness and lets go of her life preserver.',
        objective: 'Create a moment of extreme urgency. Prompt the player to make the heroic choice to dive into the water after her.'
      },
      {
        beat: 7,
        description: 'The Rescue Dive: The player is in the frigid water, swimming toward Regina\'s sinking form.',
        objective: 'Describe the player\'s struggle against the cold and the churning waves as they reach Regina and secure her.'
      },
      {
        beat: 8,
        description: 'The Abduction Part 1 - The "Rescue": A mysterious submarine suddenly surfaces directly beneath them, lifting them out of the water and onto its deck.',
        objective: 'Introduce the major plot twist. Shift the tone from a heroic rescue mission to a new, unknown, and technological threat.'
      },
      {
        beat: 9,
        description: 'The Abduction Part 2 - The Capture: The submarine\'s hatch opens. Silent, identical men emerge, take the now-conscious Regina, and disappear back inside. The sub immediately begins to dive.',
        objective: 'Make the player feel helpless as Regina is taken. Prompt them to make a final, desperate leap for safety as the sub submerges.'
      },
      {
        beat: 10,
        description: 'The Realization: The player is pulled into a lifeboat by his crew. They are safe, but Regina is gone.',
        objective: 'The player must process what just happened and articulate the new reality: this was not a failed rescue, it was a successful kidnapping of the President\'s daughter. End of chapter.'
      }
    ]
  }
};

/**
 * Master export for all gameplay plans.
 */
export const jzcGameplayPlans: Record<string, Record<string, ChapterGameplayPlan>> = {
    'Hurricane Regina': hurricaneReginaGameplayPlan,
};
