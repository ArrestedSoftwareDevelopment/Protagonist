/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { RoadmapStep } from '../types';

/**
 * This file centralizes the narrative roadmaps for all novels in the
 * Jason Z. Christie shared universe.
 */
export const jzcRoadmaps: Record<string, RoadmapStep[]> = {
    'Everything Went Black': [
        { chapter_focus: '1-7', objective: 'Establish Tokio\'s youth in Houston, his disillusionment with the pimp game after Tracy\'s betrayal, and his decision to pursue a legitimate trade.', key_plotpoints_to_include: ['Meeting Tracy', 'Losing Janet', 'Starting welding'] },
        { chapter_focus: '8-14', objective: 'Follow Tokio\'s move to L.A. and his intellectual and personal growth under the influence of his Aunt Til and cousin Maxxy.', key_plotpoints_to_include: ['Adjusting to L.A. gang culture', 'First job as a mechanic', 'Lessons from Til and Maxxy'] },
        { chapter_focus: '15-22', objective: 'Detail Tokio\'s first love with Hue, his coming of age, and his forced return to Texas, culminating in a violent re-entry into the world he tried to leave.', key_plotpoints_to_include: ['Meeting Hue', 'Getting his car', 'The return to Houston and the shootout'] },
        { chapter_focus: '23-42', objective: 'Show Tokio\'s re-immersion into The Life, his complex relationship with Morgan, and his rise at the Player\'s Ball, setting the stage for his future.', key_plotpoints_to_include: ['Starting his stable', 'The Player\'s Ball', 'Meeting Patra and the singers', 'Moving to Germany'] },
    ],
    'Radar Love': [
        { chapter_focus: '1-6', objective: 'Establish the separate prison lives of Chris and Janique while using flashbacks to build their backstory and deep connection.', key_plotpoints_to_include: ['Janique\'s dominance fight', 'Chris\'s calculated violence', 'Meeting Tokio', 'The "wedding" flashback']},
        { chapter_focus: '7-18', objective: 'Escalate the stakes within the prison. Chris becomes a killer for the Aryan Brotherhood, while Janique navigates prison politics and inadvertently targets Chris.', key_plotpoints_to_include: ['The hit on Rolando', 'Janique putting out the hit']},
        { chapter_focus: '19-27', objective: 'Bring the two together through the construction project and culminate in their escape.', key_plotpoints_to_include: ['The trial', 'Janique\'s assault on the guard', 'Building the "love nest"', 'The final escape plan and execution']}
    ],
    'Penultimate Hustle: Japan': [
        { chapter_focus: '1-4', objective: 'Introduce Janique\'s present-day role in California, then flashback to her and Chris\'s escape from the US and their difficult, dangerous arrival in Osaka, Japan.', key_plotpoints_to_include: ['Janique dealing with business', 'Escaping on the cruise ship', 'First encounter with the Yakuza'] },
        { chapter_focus: '5-14', objective: 'Return to the present. Chris and Janique establish themselves in Tokyo, meet Hazel Minx, and begin their power struggle within the adult film industry.', key_plotpoints_to_include: ['Meeting Hazel', 'Janique proposing a new business model', 'Chris writing the script for "Cherry Blossoms"'] },
        { chapter_focus: '15-24', objective: 'Show Janique\'s rise as she produces "Cherry Blossoms" and "Gojira\'s Revenge", recruits Yuki, and proves her methods are superior to Hazel\'s.', key_plotpoints_to_include: ['Success of "Cherry Blossoms"', 'Meeting Yuki', 'Recruiting Yoichiro Kawaguchi', 'Success of "Gojira\'s Revenge"'] },
        { chapter_focus: '25-45', objective: 'Escalate the personal and professional conflicts, leading to Hazel\'s murder and the trio\'s escape from Japan with the company\'s funds.', key_plotpoints_to_include: ['Janique\'s jealousy of Yuki', 'The violent confrontation with ninjas', 'Yuki murdering Hazel', 'The final escape'] },
    ],
    'Pageburner': [
        { chapter_focus: '1-3', objective: 'Introduce Detective Paige Burner and her unique investigative skills by having her solve the bizarre "lobster death" case.', key_plotpoints_to_include: ['Discovery of Maureen Bedford\'s body', 'Paige\'s forensic analysis of the sea monkeys', 'Paige solves the case as "death by misadventure"'] },
        { chapter_focus: '4-15', objective: 'Shift focus to Dr. Jean Simons. Detail his backstory, his messianic complex, his relationship with Maxine "Maxxy" Jackson, and his creation of the "Captain Trips" virus.', key_plotpoints_to_include: ['Jean\'s research on the "fascist gene"', 'Meeting and falling for Maxine', 'Successful test of the virus on Charles Manson\'s DNA'] },
        { chapter_focus: '16-30', objective: 'Show the consequences of Jean\'s actions as he releases a limited version of the virus in Colorado, and follow Paige Burner as she begins her investigation into the mysterious deaths.', key_plotpoints_to_include: ['The Deer Valley, Colorado outbreak', 'Paige connecting the new deaths to the Manson case via the coroner', 'Paige and Maxine teaming up in Alabama to investigate Jean'] },
        { chapter_focus: '31-43', objective: 'Bring the two storylines together as Paige hunts Jean in California. The narrative culminates in a final, tense confrontation as Jean prepares to release the global version of the virus.', key_plotpoints_to_include: ['Paige and Maxine confirming Jean is the killer', 'Jean going on the run in East L.A.', 'Maxine going into labor', 'The final showdown at the motel where Jean is shot by Uncle Pookie', 'Paige releasing the final virus herself'] },
    ],
    'Hurricane Regina': [
        { chapter_focus: '1-5', objective: 'Establish the kidnapping of Regina and the high-stakes political situation President Long is facing.', key_plotpoints_to_include: ['Regina\'s kidnapping', 'Tom\'s ultimatum', 'Captain Nolan\'s rogue mission begins'] },
        { chapter_focus: '6-15', objective: 'Uncover the depth of the conspiracy, revealing the existence of Tom\'s hidden society and Regina\'s latent powers.', key_plotpoints_to_include: ['Discovery of the undersea dome', 'Regina learning about her abilities', 'President Long activating his network'] },
        { chapter_focus: '16-19', objective: 'Culminate in the direct confrontation at Tom\'s base and Regina embracing her full potential to turn the tables.', key_plotpoints_to_include: ['The raid on the dome', 'Regina taking control', 'The final confrontation with Tom'] },
    ],
    'Zombie Killa': [
        { chapter_focus: '1-5', objective: 'Introduce Myf and High-C and the beginning of the zombie outbreak, forcing them to flee Cleveland.', key_plotpoints_to_include: ['Meeting the main characters', 'The first zombie encounters', 'The murder of the cop'] },
        { chapter_focus: '6-10', objective: 'The nerdcore community forms Z.E.D. and travels to Dallas, battling zombies and rival gangs along the way.', key_plotpoints_to_include: ['Formation of Z.E.D.', 'The firefight with the semi-truck', 'The final rally at the hotel'] },
        { chapter_focus: '11-15', objective: 'The teams launch their assault on Router\'s apartment complex, culminating in the final showdown.', key_plotpoints_to_include: ['The courtyard battle', 'Breaching the force field', 'The confrontation with Router'] },
    ],
    'Perfect Me': [
        { chapter_focus: '1-10', objective: 'Introduce the key players of the "Architect" level of the JZC Universe and their absurd motivations.', key_plotpoints_to_include: ['Prail\'s game design', 'Gorlax\'s attempts to woo her', 'Sherman\'s poetry', 'The business of Perfections']},
        { chapter_focus: '11-20', objective: 'Expand the universe by introducing other cosmic players and escalating the conflicts.', key_plotpoints_to_include: ['Mention of Star Hustle', 'Judas Mason\'s plot', 'The introduction of L\'viv']},
        { chapter_focus: '21-32', objective: 'Bring all the storylines to a chaotic and humorous climax on Faggotron.', key_plotpoints_to_include: ['Sherman\'s crash', 'The arrival of all characters', 'The mass wedding and resetting of relationships']}
    ],
    'Cure for Sanity': [
        { chapter_focus: '1-5', objective: 'Establish the meta-narrative by showing Pex arriving on Earth and beginning his "game" against Prail, while Janique learns about her creators.', key_plotpoints_to_include: ['Pex building his device', 'Janique learning about Jason and Johnnie', 'Janique\'s first failed attempt on Jason\'s life'] },
        { chapter_focus: '6-11', objective: 'Explore the foundations of the simulation as Janique digs deeper and Pex recruits Yeshua and Mary, laying the groundwork for the Knights Templar.', key_plotpoints_to_include: ['Janique\'s second failed attempt', 'Pex meeting Yeshua', 'The founding of the secret society'] },
        { chapter_focus: '12-17', objective: 'Bring all the threads to a climax as Janique confronts the nature of her existence and Pex executes his grand plan with the filming of "The Passion".', key_plotpoints_to_include: ['Janique confronting God', 'The filming of the crucifixion', 'The final reconciliation and reset'] },
    ],
};
