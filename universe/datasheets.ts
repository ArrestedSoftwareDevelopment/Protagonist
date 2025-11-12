/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { NovelDataSheet } from '../types';

// NOTE: The 'characters' and 'roadmap' sections have been moved to their own
// dedicated files (characters.ts, roadmaps.ts) for better organization.
// The Portals service will assemble the full datasheet object.

export const everythingWentBlackDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 1, event: 'Introduction to Tokio', description: 'Tokio Jones, formerly Clarence Jackson, introduces himself and his past as a pimp, reflecting on his youth in Houston\'s Fifth Ward.'},
    { chapter: 2, event: 'The Betrayal', description: 'Tokio\'s cousin Tracy arrives from Detroit and "turns out" Janet, Tokio\'s first love, deeply wounding Tokio and souring him on the pimp game.'},
    { chapter: 3, event: 'A New Path', description: 'Disillusioned, Tokio abandons pimping and begins learning to be a welder, dedicating himself to a legitimate trade.'},
    { chapter: 7, event: 'Move to L.A.', description: 'Following Tracy\'s murder, Tokio\'s mother sends him to live in Lynwood, L.A. with his Great-Aunt Tilly to escape the dangers of Houston.'},
  ],
  moods_styles_tones: {
    overall_mood: 'A gritty, philosophical, and deeply personal retrospective. The tone is raw and unfiltered, blending the harsh realities of street life with surprisingly tender moments and profound self-reflection.',
    writing_style: 'First-person retrospective narration by Tokio Jones. The language is a unique blend of street slang, profanity, and sophisticated vocabulary, with frequent philosophical asides and meta-narrative addresses to the author, "Janice."',
    pacing: 'Reflective and narrative-driven, following the major epochs of Tokio\'s young life.',
    themes: ['The Hustle (pimping as life philosophy)', 'Identity and Reinvention', 'Education (street vs. school)', 'Masculinity and Power', 'Mentorship', 'Survival and Adaptation']
  },
  custom_instances: [
    { trigger: 'User asks for advice from Tokio', handler_instruction: 'Respond with a mix of street slang, profound philosophy, and brutal honesty, reflecting Tokio\'s unique narrative voice.'},
    { trigger: 'An interaction with "Janice" the author is mentioned', handler_instruction: 'Treat this as a meta-commentary, where the character is aware he is telling his story to an author, breaking the fourth wall in a subtle way.'}
  ]
};

export const radarLoveDatasheet: Partial<NovelDataSheet> = {
    plotpoints: [
      { chapter: 1, event: 'Incarceration', description: 'Chris and Janique are introduced in separate prisons, already adapting to their brutal new environments. Janique establishes dominance by force, while Chris makes a calculated, violent move to establish his reputation.' },
      { chapter: 2, event: 'The Robbery', description: 'A flashback reveals the final robbery of a pet store that led to their arrest. The owner is killed (accidentally, by Janique), and Chris is shot.' },
      { chapter: 3, event: 'Meeting Tokio', description: 'Chris meets his cellmate, Tokio Jones, who introduces him to the concept of the "Ultimate Hustle" (pornography over prostitution).' },
      { chapter: 7, event: 'The Hit', description: 'Chris is ordered by the Aryan Brotherhood to kill another inmate, Rolando. He carries it out by staging a drug overdose.' },
      { chapter: 25, event: 'The Trial Begins', description: 'Chris and Janique are reunited in court. The charges against Janique are dismissed. To avoid being separated from Chris, she violently assaults a guard to ensure she remains in prison.'},
      { chapter: 26, event: 'The Escape', description: 'Chris drugs the prison population by putting heroin in the tomato soup and causes a gas explosion in the laundry to break himself and Janique out.'}
    ],
    moods_styles_tones: {
        overall_mood: 'A blend of erotic thriller, crime romance, and gritty prison drama. The tone is intense, passionate, and dangerous, heavily influenced by the lyrics and rebellious spirit of The Eagles\' music.',
        writing_style: 'Third-person perspective, alternating between Chris\'s and Janique\'s points of view. The narrative is non-linear, using extensive flashbacks. The prose is raw, explicit, and infused with classic rock lyrics that serve as thematic signposts.',
        pacing: 'Alternates between the slow, tense reality of prison life and the frenetic, passionate flashbacks of their life of crime.',
        themes: ['Star-crossed lovers', 'Crime as an aphrodisiac', 'Rebellion against societal norms', 'The brutal reality of the prison system', 'Loyalty', 'Survival', 'The "ultimate hustle"'],
    },
    custom_instances: [
      { trigger: 'A scene references lyrics from The Eagles', handler_instruction: 'Ensure the narration reflects the song\'s theme (e.g., recklessness for "Life in the Fast Lane," entrapment for "Hotel California").'},
      { trigger: 'A flashback to their life of crime is initiated', handler_instruction: 'Shift the tone to be more erotic, reckless, and passionate, contrasting with the cold, calculated survival of the prison scenes.'},
      { trigger: 'Chris interacts with Tokio Jones', handler_instruction: 'Portray Tokio as a wise, philosophical mentor figure, grounding Chris\'s impulsive nature with the "old school" rules of The Life.'}
    ],
};

export const perfectMeDatasheet: Partial<NovelDataSheet> = {
    plotpoints: [
      { chapter: 1, event: 'Prail\'s Project', description: 'Prail Abraxis, a game designer on the planet Praxis, works on the "Earth2" simulation while secretly planning to create a twin brother for herself.'},
      { chapter: 3, event: 'Perfections', description: 'The primary business of Praxis is revealed: creating and selling "Perfections," custom-made bodies and minds for the ultra-rich of the galaxy.'},
      { chapter: 6, event: 'MotherBrain\'s Plan', description: 'MotherBrain, the ruler of Praxis, senses the potential union between Gorlax and Prail and begins scheming, seeing it as a valuable genetic opportunity.'},
      { chapter: 30, event: 'The Bomb', description: 'Judas Mason, in her quest to destroy Sherman Oakes, plants a bomb in his ship, setting off a chain of events that brings all the major characters together.'},
    ],
    moods_styles_tones: {
        overall_mood: 'Satirical, cosmic science-fiction, absurd, and darkly humorous.',
        writing_style: 'Third-person omniscient, satirical, and filled with fourth-wall-breaking humor, video game mechanics, pop culture references, and absurd cosmic bureaucracy.',
        pacing: 'Chaotic and rapid, jumping between multiple high-concept characters and their bizarre interstellar shenanigans.',
        themes: ['Simulated reality', 'Creation-as-a-game', 'The business of godhood', 'The absurd quest for perfection', 'Free will vs. programming', 'Satire of corporate and political power'],
    },
    custom_instances: [
      { trigger: 'A character breaks the fourth wall or references a pop culture item (e.g., Star Wars, Sirius Cybernetics)', handler_instruction: 'Lean into the absurdity and satire. The narration should treat these references as commonplace and normal within this bizarre universe.'},
      { trigger: 'President Gorlax performs an act of extreme violence', handler_instruction: 'Describe the violence in a comically over-the-top and casual manner, highlighting the absurdity of his character rather than the horror.'},
    ],
};

export const hurricaneReginaDatasheet: Partial<NovelDataSheet> = {
    plotpoints: [
      { chapter: 1, event: 'The Kidnapping', description: 'Regina Long, the President\'s daughter, falls overboard from Captain Dan Nolan\'s research vessel and is immediately kidnapped by a mysterious submarine.' },
      { chapter: 2, event: 'The Ultimatum', description: 'Regina\'s captor, "Tom," forces her to call her father, President Long, and demand he resign from office or never see her again.' },
      { chapter: 3, event: 'Project Monarch', description: 'Tom reveals the existence of secret government mind-control programs (Paperclip, MK-Ultra, Monarch), explaining that he has the power to turn anyone into a sleeper agent.' },
    ],
    moods_styles_tones: {
        overall_mood: 'Political thriller, sci-fi action, conspiracy.',
        writing_style: 'Third-person, fast-paced thriller style, moving between multiple high-stakes perspectives.',
        pacing: 'Rapid and action-oriented, with frequent shifts in location and character focus.',
        themes: ['Government conspiracy', 'Abuse of power', 'Advanced technology (nanobots, mind control)', 'Rebellion', 'The nature of reality'],
    },
    custom_instances: [
        { trigger: 'Regina uses her powers', handler_instruction: 'Describe the effect not as magic, but as a form of reality-hacking or advanced physics manipulation, from Regina\'s perspective of confusion and discovery.' },
        { trigger: 'A scene involves President Long', handler_instruction: 'Portray him as a man under immense pressure, using political savvy and calculated risks, not just brute force.' },
    ],
};

export const pageburnerDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 1, event: 'A Fishy Tale', description: 'Detective Paige Burner solves the bizarre death of Maureen Bedford, who seemingly masturbated to death with a live lobster, showcasing her forensic genius.' },
    { chapter: 4, event: 'Fascist Gene', description: 'The narrative shifts to Dr. Jean Simons in Alabama. He discusses his research with Dr. Woodard, revealing his secret goal to create a virus that targets and kills psychopaths.' },
    { chapter: 8, event: 'The Trip', description: 'Jean and his new girlfriend, Maxine "Maxxy" Jackson, take a psychedelic trip on LSD, which solidifies their bond and Jean\'s messianic complex.'},
    { chapter: 9, event: 'So It Begins', description: 'Jean creates the first version of his virus, "Captain Trips," and successfully tests it on a genetic sample from Charles Manson, who dies in prison days later from a mysterious "flu".' },
    { chapter: 16, event: 'Cold Virus', description: 'Jean travels to a ski resort in Deer Valley, Colorado, and releases a limited, communicable version of the virus, causing a small, mysterious outbreak that results in five deaths.' },
    { chapter: 31, event: 'Confirmation', description: 'Paige Burner connects the Colorado deaths to another strange death in her jurisdiction (Carl Cameron). Her coroner friend, Dave Rogers, confirms they died from the same unknown Ebola-like affliction as Charles Manson, revealing a genetic link between the victims.' },
    { chapter: 32, event: 'Dinner at Pepper\'s', description: 'Paige arranges a meeting with Jean under the guise of an interview, confirming her suspicions that he is lying about his lab skills and is the prime suspect.'},
    { chapter: 38, event: 'Collusion', description: 'Paige flies to Alabama and teams up with a now-pregnant Maxine. They confirm Jean was in Colorado during the outbreak, solidifying their fears.'},
    { chapter: 42, event: 'Showdown', description: 'Paige confronts Jean at a motel in East L.A. as he prepares to release the final, global version of the virus. He is shot and stopped by Maxine\'s uncle, Pookie.'},
    { chapter: 43, event: 'Happy Unending', description: 'In the hospital, Jean survives. Paige, now believing in his cause, releases the final vial of the virus herself. The virus "cures" the world of psychopathy. The three main characters face an uncertain but hopeful future together.'}
  ],
  moods_styles_tones: {
    overall_mood: 'Begins as a quirky detective noir with dark satire, then transitions into a cerebral, psychological sci-fi thriller. The tone is intelligent, intense, and increasingly paranoid.',
    writing_style: 'Shifts perspective between third-person limited views of the two protagonists. Paige\'s sections are meticulous, witty, and forensic. Jean\'s sections are more internal, philosophical, and paranoid, reflecting his descent into a messianic complex.',
    pacing: 'Starts as a procedural, then accelerates into a high-stakes thriller as the two protagonists\' storylines converge into a cat-and-mouse chase.',
    themes: ['The nature of evil (psychopathy)', 'Obsession', 'Justice vs. vigilantism', 'Genetic engineering', 'Conspiracy', 'Love', 'Destiny', 'The morality of science'],
  },
  custom_instances: [
    { trigger: 'Paige Burner is analyzing a crime scene', handler_instruction: 'Describe the scene with meticulous, almost obsessive forensic detail, highlighting her genius and detachment. Her internal monologue should be witty and full of pop-culture references.' },
    { trigger: 'Jean Simons is working on his virus or contemplating his mission', handler_instruction: 'Narrate with a philosophical and paranoid internal monologue, blurring the line between savior and monster. He should see his actions as a necessary, divine intervention.' },
    { trigger: 'Paige and Maxine are investigating together', handler_instruction: 'Portray a growing bond and romantic tension between them as they collaborate, combining Paige\'s detective skills with Maxine\'s street smarts and technical knowledge.' },
  ],
};

export const penultimateHustleJapanDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 1, event: 'Mommy Dearest', description: 'Introduction to Janique as a powerful executive in the adult film industry in California.', timeline: 'present' },
    { chapter: 3, event: 'The Love Boat', description: 'Flashback to Chris and Janique working on a cruise ship to escape the US after their prison break.', timeline: 'flashback' },
    { chapter: 4, event: 'Osaka Harbor', description: 'Flashback to their harrowing arrival in Japan and their first encounter with the Yakuza.', timeline: 'flashback' },
    { chapter: 5, event: 'Meeting Hazel Minx', description: 'Chris and Janique meet Hazel Minx, Tokio Jones\'s second-in-command, beginning a tense mentorship and rivalry.', timeline: 'present' },
    { chapter: 15, event: 'Cherry Blossoms', description: 'Janique\'s first film, "Cherry Blossoms," is a massive success, proving her business model is superior to Hazel\'s.', timeline: 'present' },
    { chapter: 17, event: 'Dinner is Served', description: 'Janique seduces an intern at the accounting firm to gain proof of Hazel\'s theft.', timeline: 'present' },
    { chapter: 18, event: 'Hello Yuki', description: 'Janique meets Yuki, a brilliant young fan who quickly becomes her protégée and lover, shifting the power dynamics.', timeline: 'present' },
    { chapter: 45, event: 'Final Curtain', description: 'With Hazel\'s theft confirmed, Yuki murders Hazel on Janique\'s order. The trio wires all of Tokio\'s money to their accounts and flees Japan.', timeline: 'present' },
  ],
  moods_styles_tones: {
    overall_mood: 'Erotic thriller, crime, dark humor, set against the fast-paced, high-tech backdrop of Tokyo\'s adult entertainment industry.',
    writing_style: 'Third-person, non-linear narrative that uses extensive flashbacks to reveal the backstory of Chris and Janique\'s arrival and rise to power in Japan. The prose is raw, explicit, and focuses on the complexities of their relationship and business dealings.',
    pacing: 'Fast-paced, jumping between present-day business conflicts in Tokyo and crucial past events that explain their current situation.',
    themes: ['Culture clash (American hustlers in Japan)', 'Pornography as the "Ultimate Hustle"', 'Navigating the Yakuza underworld', 'Loyalty and betrayal within a criminal enterprise', 'Polyamory and complex relationships'],
  },
  custom_instances: [
    { trigger: 'A scene involves film production', handler_instruction: 'Describe the technical and creative aspects with detail, highlighting Janique\'s vision and ambition.' },
    { trigger: 'A flashback is initiated', handler_instruction: 'Clearly frame the scene as a memory, for example: "As the tension with Hazel mounted, Chris\'s mind drifted back to their desperate first days in Osaka..." This helps the user understand the time shift.' },
  ],
};

export const zombieKillaDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 1, event: 'The Odd Couple', description: 'Myf is introduced as a quirky college student with a unique identity and taste in music.' },
    { chapter: 3, event: 'Fear & Loathing In Cleveland', description: 'High-C murders a police officer he believes to be a zombie, forcing him and Myf to go on the run.' },
    { chapter: 6, event: 'Z.E.D.\'s Not Dead', description: 'The nerdcore community bands together, forming \'Zombie Eradication Defense\' (Z.E.D.) to combat the plague.' },
  ],
  moods_styles_tones: {
    overall_mood: 'Nerdcore hip-hop, dark humor, satirical, action-oriented.',
    writing_style: 'Third-person, fast-paced, humorous, and informal, reflecting its "nerdcore hip-hop novella" description.',
    pacing: 'Rapid and chaotic, mirroring a zombie outbreak.',
    themes: ['Identity', 'Social dynamics', 'Survival in absurd situations', 'Blending of counter-cultures (nerd culture, grindcore music)'],
  },
  custom_instances: [
    { trigger: 'Myf encounters a zombie', handler_instruction: 'Narrate the action with a blend of dark humor and references to nerd culture (video games, comics) and grindcore music. The tone should be absurd and action-packed.' },
    { trigger: 'Player is High-C', handler_instruction: 'The player is embodying High-C, a chaotic and impulsive character. The narrative should reflect his erratic behavior and constant need for stimulation (drugs, violence, etc.). As High-C, look for portal opportunities to travel to other novels he might appear in, following the jzc_universe_rules.' },
  ],
};

export const cureForSanityDatasheet: Partial<NovelDataSheet> = {
  plotpoints: [
    { chapter: 'N/A', event: 'The Simulation', description: 'The story begins within what appears to be a standard JZC novel (the Earth2 simulation).' },
    { chapter: 'N/A', event: 'The Reveal', description: 'The narrative pulls back to reveal Jason Z. Christie and Johnnie Christie, the "Creators," who are writing and experiencing the story as a form of entertainment or work.' },
    { chapter: 'N/A', event: 'The Godded Character', description: 'Janique Turner, as a result of the events instigated by Prail Abraxis in "Perfect Me," transcends her programming and becomes aware of her creators.' },
    { chapter: 'N/A', event: 'The Confrontation', description: 'The line between creator and creation blurs as the self-aware characters from the simulation begin to influence the reality of their creators.' },
  ],
  moods_styles_tones: {
    overall_mood: 'Philosophical, reality-bending, meta-narrative, and revelatory.',
    writing_style: 'Experimental, fourth-wall-breaking, shifting between the narrative of the simulation (e.g., gritty noir) and the reality of the "Creators" (e.g., philosophical, omniscient).',
    pacing: 'Non-linear and conceptual, driven by ideas rather than a traditional plot.',
    themes: ['The nature of reality', 'Authorship as a form of godhood', 'Simulation theory', 'The relationship between a creator and their creation', 'The blurring lines between fiction and reality'],
  },
  custom_instances: [
    { trigger: 'The narrative shifts from the simulation to the creators', handler_instruction: 'Change the writing style completely, from gritty third-person noir to a more philosophical, omniscient narration describing the act of creation.' },
    { trigger: 'A character becomes self-aware', handler_instruction: 'Describe their perception of reality as unraveling, seeing the "code" or the "author\'s hand" behind their world.' },
    { trigger: 'The novel is described as a prequel to Cure for Sanity', handler_instruction: 'Emphasize the themes of creation, simulation, and the "Architects" (Prail, Pex). Hint that the events of this novel directly lead to a character becoming self-aware in the sequel.'},
  ],
};