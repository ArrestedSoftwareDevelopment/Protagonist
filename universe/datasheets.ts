/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { NovelDataSheet } from '../types';

export const everythingWentBlackDatasheet: NovelDataSheet = {
  characters: [
    { name: 'Clarence James Jackson / "Tokio Jones"', description: 'The protagonist and narrator. A highly intelligent man reflecting on his journey from a wide-eyed kid to a would-be pimp, a skilled tradesman, and finally, a successful and philosophical hustler. He later becomes a mentor figure to Chris Turner in "Radar Love".' },
    { name: 'Tracy', description: 'Tokio\'s cousin from Detroit. A slick, experienced young pimp who serves as both a rival and a harsh mentor.' },
    { name: 'Janet', description: 'Tokio\'s first love, who is "turned out" by Tracy, a pivotal and heartbreaking event in Tokio\'s youth.' },
    { name: 'George', description: 'An old, white maintenance man who becomes Tokio\'s first legitimate mentor, teaching him welding and practical problem-solving.' },
    { name: 'Aunt Tilly / "Til"', description: 'Tokio\'s great-aunt in L.A. A fiercely intelligent, independent, and supportive matriarch.' },
    { name: 'Maxine "Maxxy" Jackson', description: 'Til\'s brilliant, precocious, and foul-mouthed young daughter who acts as an intellectual guide for Tokio. She appears again as a young adult in "Pageburner".' }
  ],
  plotpoints: [
    { chapter: 1, event: 'Introduction to Tokio', description: 'Tokio Jones, formerly Clarence Jackson, introduces himself and his past as a pimp, reflecting on his youth in Houston\'s Fifth Ward.'},
    { chapter: 2, event: 'The Betrayal', description: 'Tokio\'s cousin Tracy arrives from Detroit and "turns out" Janet, Tokio\'s first love, deeply wounding Tokio and souring him on the pimp game.'},
    { chapter: 3, event: 'A New Path', description: 'Disillusioned, Tokio abandons pimping and begins learning to be a welder, dedicating himself to a legitimate trade.'},
    { chapter: 4, event: 'Mentorship', description: 'Tokio meets George, an old maintenance man who becomes his mentor, teaching him practical skills and giving him his first real job.'},
    { chapter: 7, event: 'Move to L.A.', description: 'Following Tracy\'s murder, Tokio\'s mother sends him to live in Lynwood, L.A. with his Great-Aunt Tilly to escape the dangers of Houston.'},
    { chapter: 8, event: 'The Jackson Family', description: 'Tokio meets his fiercely intelligent Aunt Til and his brilliant, profane young cousin Maxxy, who becomes a new kind of mentor for him.'}
  ],
  moods_styles_tones: {
    overall_mood: 'A gritty, philosophical, and deeply personal retrospective. The tone is raw and unfiltered, blending the harsh realities of street life with surprisingly tender moments and profound self-reflection.',
    writing_style: 'First-person retrospective narration by Tokio Jones. The language is a unique blend of street slang, profanity, and sophisticated vocabulary, with frequent philosophical asides and meta-narrative addresses to the author, "Janice."',
    pacing: 'Reflective and narrative-driven, following the major epochs of Tokio\'s young life.',
    themes: ['The Hustle (pimping as life philosophy)', 'Identity and Reinvention', 'Education (street vs. school)', 'Masculinity and Power', 'Mentorship', 'Survival and Adaptation']
  },
  roadmap: [
    { chapter_focus: '1-2', objective: 'Establish Tokio\'s youth and the core conflict that drives him away from the pimp game.', key_plotpoints_to_include: ['Encounter with Tracy', 'Loss of Janet']},
    { chapter_focus: '3-6', objective: 'Show Tokio\'s transformation through legitimate work and mentorship under George.', key_plotpoints_to_include: ['Learning to weld', 'First job']},
    { chapter_focus: '7-12', objective: 'Explore Tokio\'s new life in L.A. and the influence of his new family, Til and Maxxy.', key_plotpoints_to_include: ['Meeting Til and Maxxy', 'Adapting to a new city and new rules.']}
  ],
  custom_instances: [
    { trigger: 'User asks for advice from Tokio', handler_instruction: 'Respond with a mix of street slang, profound philosophy, and brutal honesty, reflecting Tokio\'s unique narrative voice.'},
    { trigger: 'An interaction with "Janice" the author is mentioned', handler_instruction: 'Treat this as a meta-commentary, where the character is aware he is telling his story to an author, breaking the fourth wall in a subtle way.'}
  ]
};

export const radarLoveDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Chris Turner', description: 'Co-protagonist. An intelligent and resourceful 28-year-old hustler completely devoted to Janique. After being imprisoned, he is mentored by Tokio Jones. He is the central character who continues into "Penultimate Hustle: Japan".' },
        { name: 'Janique Tamerlane Patton', description: 'Co-protagonist. Chris\'s lover from a wealthy family. She is ruthless, intelligent, and sexually dominant, establishing herself as a "daddy" in the women\'s prison. She continues as a central character in "Penultimate Hustle: Japan".' },
        { name: 'Tokio Jones', description: 'Chris\'s first cellmate. An older, world-traveled pimp who acts as a mentor to Chris, explaining the "ultimate hustle." He is the protagonist of the prequel, "Everything Went Black".' },
        { name: 'Alvin Black', description: 'Leader of the prison\'s Aryan Brotherhood, who attempts to recruit Chris.' },
        { name: 'Rolando', description: 'A fellow inmate and the target of a hit that Chris is ordered to carry out in prison to gain favor.' },
        { name: 'Jeanette Gutierrez', description: 'The laundry foreman at the women\'s prison and Rolando\'s aunt.' },
        { name: 'Camilla', description: 'Chris\'s ex-wife, a BDSM practitioner who performs a ritualistic piercing on Janique that serves as their symbolic wedding.' },
        { name: 'Amy', description: 'A sympathetic female guard who helps Janique by smuggling in cigarettes.' },
    ],
    plotpoints: [
      { chapter: 1, event: 'Incarceration', description: 'Chris and Janique are introduced in separate prisons, already adapting to their brutal new environments. Janique establishes dominance by force, while Chris makes a calculated, violent move to establish his reputation.' },
      { chapter: 2, event: 'The Robbery', description: 'A flashback reveals the final robbery of a pet store that led to their arrest. The owner is killed (accidentally, by Janique), and Chris is shot.' },
      { chapter: 3, event: 'Meeting Tokio', description: 'Chris meets his cellmate, Tokio Jones, who introduces him to the concept of the "Ultimate Hustle" (pornography over prostitution).' },
      { chapter: 4, event: 'The "Wedding"', description: 'A flashback details Chris and Janique\'s symbolic wedding, where Chris\'s ex-wife Camilla gives Janique BDSM piercings.'},
      { chapter: 7, event: 'The Hit', description: 'Chris is ordered by the Aryan Brotherhood to kill another inmate, Rolando. He carries it out by staging a drug overdose.' },
      { chapter: 18, event: 'The Hit Contract', description: 'Janique, believing Chris may have been responsible for the death of her friendly boss\'s nephew (Rolando), mistakenly puts a hit out on Chris.'},
      { chapter: 25, event: 'The Trial Begins', description: 'Chris and Janique are reunited in court. The charges against Janique are dismissed. To avoid being separated from Chris, she violently assaults a guard to ensure she remains in prison.'},
      { chapter: 26, event: 'The Escape', description: 'Chris orchestrates a mass "drugging" of the prison via tomato soup and causes a gas explosion in the laundry to break himself and Janique out.'}
    ],
    moods_styles_tones: {
        overall_mood: 'A blend of erotic thriller, crime romance, and gritty prison drama. The tone is intense, passionate, and dangerous, heavily influenced by the lyrics and rebellious spirit of The Eagles\' music.',
        writing_style: 'Third-person perspective, alternating between Chris\'s and Janique\'s points of view. The narrative is non-linear, using extensive flashbacks. The prose is raw, explicit, and infused with classic rock lyrics that serve as thematic signposts.',
        pacing: 'Alternates between the slow, tense reality of prison life and the frenetic, passionate flashbacks of their life of crime.',
        themes: ['Star-crossed lovers', 'Crime as an aphrodisiac', 'Rebellion against societal norms', 'The brutal reality of the prison system', 'Loyalty', 'Survival', 'The "ultimate hustle"'],
    },
    roadmap: [
      { chapter_focus: '1-6', objective: 'Establish the separate prison lives of Chris and Janique while using flashbacks to build their backstory and deep connection.', key_plotpoints_to_include: ['Janique\'s dominance fight', 'Chris\'s calculated violence', 'Meeting Tokio', 'The "wedding" flashback']},
      { chapter_focus: '7-18', objective: 'Escalate the stakes within the prison. Chris becomes a killer for the AB, while Janique navigates prison politics and inadvertently targets Chris.', key_plotpoints_to_include: ['The hit on Rolando', 'Janique putting out the hit']},
      { chapter_focus: '19-27', objective: 'Bring the two together and culminate in their escape.', key_plotpoints_to_include: ['The trial', 'Janique\'s assault on the guard', 'The final escape plan and execution']}
    ],
    custom_instances: [
      { trigger: 'A scene references lyrics from The Eagles', handler_instruction: 'Ensure the narration reflects the song\'s theme (e.g., recklessness for "Life in the Fast Lane," entrapment for "Hotel California").'},
      { trigger: 'A flashback to their life of crime is initiated', handler_instruction: 'Shift the tone to be more erotic, reckless, and passionate, contrasting with the cold, calculated survival of the prison scenes.'},
      { trigger: 'Chris interacts with Tokio Jones', handler_instruction: 'Portray Tokio as a wise, philosophical mentor figure, grounding Chris\'s impulsive nature with the "old school" rules of The Life.'}
    ],
};

export const perfectMeDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Prail Abraxis', description: 'A brilliant, young Praxalian game designer and programmer who works on the Earth2 simulation. She is a key "Architect" and a recurring character in the JZC meta-narrative.' },
        { name: 'President Gorlax', description: 'The self-elected, hyper-violent, and comically sadistic ruler of Gortician. He is a primary client for Praxis\'s "Perfections" and a suitor to Prail.' },
        { name: 'MotherBrain', description: 'The ruler of Praxis, an incorporeal entity that oversees the creation and maintenance of the simulations.' },
        { name: 'Sherman Oakes', description: 'A "mad poet" who writes the laws of Earth2 and composes poetry for President Gorlax.' },
        { name: 'High-C and O.D. DrugWar', description: 'Intergalactic drug dealers who supply Sherman Oakes. They are powerful, chaotic figures in the multiverse.' },
        { name: 'Judas Mason', description: 'A black-hearted archvillainess and rival to President Gorlax.' }
    ],
    plotpoints: [
      { chapter: 1, event: 'Prail\'s Project', description: 'Prail Abraxis, a game designer on the planet Praxis, works on the "Earth2" simulation while secretly planning to create a twin brother for herself.'},
      { chapter: 3, event: 'Perfections', description: 'The primary business of Praxis is revealed: creating and selling "Perfections," custom-made bodies and minds for the ultra-rich of the galaxy.'},
      { chapter: 5, event: 'The Mad Poet', description: 'Sherman Oakes, a poet, is commissioned by President Gorlax to write romantic poems to woo Prail Abraxis.'},
      { chapter: 6, event: 'MotherBrain\'s Plan', description: 'MotherBrain, the ruler of Praxis, senses the potential union between Gorlax and Prail and begins scheming, seeing it as a valuable genetic opportunity.'},
      { chapter: 11, event: 'Star Hustle', description: 'The existence of "Star Hustle ULC," a powerful and cut-throat organization run by Janique, is mentioned, hinting at Janique\'s ascended status in the multiverse.'},
      { chapter: 30, event: 'The Bomb', description: 'Judas Mason, in her quest to destroy Sherman Oakes, plants a bomb in his ship, setting off a chain of events that brings all the major characters together.'},
      { chapter: 32, event: 'Happy Ending?', description: 'After Sherman is saved by Prail, all the major characters (Prail, Sherman, Gorlax, Judas, etc.) are brought together and form unlikely couples, resetting the cosmic power dynamics.'}
    ],
    moods_styles_tones: {
        overall_mood: 'Satirical, cosmic science-fiction, absurd, and darkly humorous.',
        writing_style: 'Third-person omniscient, satirical, and filled with fourth-wall-breaking humor, video game mechanics, pop culture references, and absurd cosmic bureaucracy.',
        pacing: 'Chaotic and rapid, jumping between multiple high-concept characters and their bizarre interstellar shenanigans.',
        themes: ['Simulated reality', 'Creation-as-a-game', 'The business of godhood', 'The absurd quest for perfection', 'Free will vs. programming', 'Satire of corporate and political power'],
    },
    roadmap: [
      { chapter_focus: '1-10', objective: 'Introduce the key players of the "Architect" level of the JZC Universe and their absurd motivations.', key_plotpoints_to_include: ['Prail\'s game design', 'Gorlax\'s attempts to woo her', 'Sherman\'s poetry', 'The business of Perfections']},
      { chapter_focus: '11-20', objective: 'Expand the universe by introducing other cosmic players and escalating the conflicts.', key_plotpoints_to_include: ['Mention of Star Hustle', 'Judas Mason\'s plot', 'The introduction of L\'viv']},
      { chapter_focus: '21-32', objective: 'Bring all the storylines to a chaotic and humorous climax on Faggotron.', key_plotpoints_to_include: ['Sherman\'s crash', 'The arrival of all characters', 'The mass wedding and resetting of relationships']}
    ],
    custom_instances: [
      { trigger: 'A character breaks the fourth wall or references a pop culture item (e.g., Star Wars, Sirius Cybernetics)', handler_instruction: 'Lean into the absurdity and satire. The narration should treat these references as commonplace and normal within this bizarre universe.'},
      { trigger: 'President Gorlax performs an act of extreme violence', handler_instruction: 'Describe the violence in a comically over-the-top and casual manner, highlighting the absurdity of his character rather than the horror.'},
      { trigger: 'A scene describes a "Perfection" or the process of creating one', handler_instruction: 'Frame it as a mundane corporate/industrial process, like building a car, to emphasize the satirical theme of creation-as-a-business.'}
    ],
};

export const hurricaneReginaDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Regina Long', description: 'The President\'s 27-year-old daughter. Rebellious and highly capable, she is kidnapped and discovers she has reality-bending, god-like abilities.' },
        { name: 'Captain Dan Nolan', description: 'A rogue Navy captain, an old-fashioned hero type, tasked with rescuing Regina, for whom he develops deep feelings.' },
        { name: 'President Robert "Lazarus" Long', description: 'The Libertarian President of the North American Union, battling a vast corporate conspiracy.' },
        { name: '"Tom"', description: 'The enigmatic, ancient, and powerful antagonist who orchestrates Regina\'s kidnapping to force the President to resign. He controls an undersea dome ("Rapture" / "Eden") and reality-warping technology.' },
        { name: 'Albert "Al" Onestone (Einstein)', description: 'The President\'s genius scientific advisor and Regina\'s biological father.' },
        { name: 'Lord Petrus T. Steele', description: 'An 83-year-old patriot who, upon hearing the President\'s call to action, activates a network of "painters" to carry out domestic sabotage.' },
        { name: 'Renee Hollander', description: 'Owner of Zen Construction, a powerful industrialist and former lover of the President, who aids the rescue mission at Oak Island.' },
    ],
    plotpoints: [
      { chapter: 1, event: 'The Kidnapping', description: 'Regina Long, the President\'s daughter, falls overboard from Captain Dan Nolan\'s research vessel and is immediately kidnapped by a mysterious submarine.' },
      { chapter: 2, event: 'The Ultimatum', description: 'Regina\'s captor, "Tom," forces her to call her father, President Long, and demand he resign from office or never see her again.' },
      { chapter: 3, event: 'Project Monarch', description: 'Tom reveals the existence of secret government mind-control programs (Paperclip, MK-Ultra, Monarch), explaining that he has the power to turn Regina into a mind-controlled assassin.' },
      { chapter: 8, event: 'The Revolution', description: 'Following the President\'s televised plea to the nation, a patriot network led by Lord Petrus Steele enacts a coordinated sabotage of national infrastructure, blowing up bridges and gas lines.' },
      { chapter: 9, event: 'The Rescue Attempt', description: 'Captain Dan, guided by Al Onestone\'s technology, tracks Regina to an undersea dome. He dives in a bathysphere to attempt a rescue.' },
      { chapter: 10, event: 'Regina\'s Ascension', description: 'Regina turns the tables on Tom, discovering she has immense powers that rival or exceed his. She kills his clone and takes mental control of his entire operation.' },
      { chapter: 11, event: 'Hurricane Regina', description: 'Now possessing god-like power, Regina reshapes the planet, raising a new island (Eden) from the sea floor and causing massive global cataclysms in the process.' },
      { chapter: 16, event: 'The New God', description: 'Regina begins sorting all of humanity, preparing to eliminate those she deems "unworthy" and reboot civilization, while also conceiving a child with Dan through supernatural means.'}
    ],
    moods_styles_tones: {
        overall_mood: 'High-stakes political thriller, sci-fi action, and grand conspiracy.',
        writing_style: 'Fast-paced, multiple POVs, filled with technical, political, and conspiracy-theory jargon. The tone is urgent and escalates quickly.',
        pacing: 'Extremely rapid, jumping between characters as the global crisis unfolds and escalates with each chapter.',
        themes: ['Abuse of power', 'Government conspiracy', 'Transhumanism & Ascension', 'The nature of reality', 'Rebellion', 'Libertarianism vs. Corporatism'],
    },
    roadmap: [
      { chapter_focus: '1-7', objective: 'Establish the core conflict: Regina\'s kidnapping and the political conspiracy against her father.', key_plotpoints_to_include: ['The kidnapping', 'Tom\'s ultimatum', 'The reveal of Project Monarch', 'The President\'s speech']},
      { chapter_focus: '8-12', objective: 'Show the parallel escalation of the earthly conflict and Regina\'s supernatural awakening.', key_plotpoints_to_include: ['The domestic sabotage', 'Dan\'s rescue mission', 'Regina killing Tom\'s clone and seizing power', 'The creation of Eden and global disasters']},
      { chapter_focus: '13-19', objective: 'Explore the consequences of Regina\'s ascension to godhood and the attempts of the mortal characters to comprehend and deal with it.', key_plotpoints_to_include: ['Regina conceiving her child', 'The shutdown of global communications', 'The Oak Island subplot', 'Dan\'s confrontation with the new god-Regina']}
    ],
    custom_instances: [
      { trigger: 'A scene mentions a real-world conspiracy theory (e.g., MK-Ultra, Project Paperclip, Roswell)', handler_instruction: 'Treat the conspiracy as established fact within the narrative. Use it to deepen the sense of a secret history and a world controlled by hidden forces.'},
      { trigger: 'Regina uses her powers', handler_instruction: 'Describe the effects as reality-bending, physics-defying, and having massive, world-altering consequences. Emphasize that she is not just using "superpowers" but fundamentally rewriting the rules of existence.'},
      { trigger: 'President Long or his allies discuss politics', handler_instruction: 'Frame the conflict as a clear ideological battle between individual liberty (Libertarianism) and totalitarian control (Corporatism), as this is a central theme.'}
    ],
};

export const pageburnerDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Detective Paige Burner', description: 'A brilliant, obsessive, and socially isolated L.A. County homicide detective. A master of forensics and deduction, she is the initial protagonist who later investigates the strange deaths caused by Jean\'s virus.' },
        { name: 'Dr. Jean Simons', description: 'The novel\'s primary protagonist/antagonist. A genius PhD in genetic research who develops a messianic complex and creates a virus ("Captain Trips") to eliminate psychopaths.' },
        { name: 'Maxine "Maxxy" O. Jackson', description: 'A highly intelligent University of Alabama student, programmer, and Jean\'s drug dealer, who becomes his fiancée and the mother of his child. She is fiercely loyal but is caught between her love for Jean and her horror at his actions. She is the grown-up version of the character from "Everything Went Black".' },
        { name: 'Chief Terry', description: 'Paige\'s high-strung, profane, but ultimately supportive boss at the police department.' },
        { name: 'Detective Philip K. "P.J." Johnson / "Flea"', description: 'A young, earnest officer whom Paige promotes to detective and mentors.' },
        { name: 'Dr. Woodard', description: 'Jean\'s academic mentor at the University of Alabama.' },
        { name: 'James "Jimbrowski" Brown', description: 'Jean\'s roommate and academic partner/rival.' },
        { name: 'Uncle Pookie', description: 'Maxine\'s uncle in L.A., a retired Crip lieutenant who provides Jean with weapons.' },
        { name: 'Bryce', description: 'Paige\'s grey-hat hacker friend in Seattle and a nerdcore rapper.' },
        { name: 'John and Lisa Chang', description: 'Highly competent twins hired by Paige as her administrative and IT assistants.' },
        { name: 'Charles Manson', description: 'The infamous cult leader, whose DNA is used as the genetic basis for Jean\'s initial test virus, leading to his death in prison.' },
    ],
    plotpoints: [
      { chapter: 1, event: 'The Fishy Tale', description: 'Detective Paige Burner solves the bizarre death of a wealthy woman, Maureen Bedford, who accidentally killed herself while masturbating with a live lobster.' },
      { chapter: 2, event: 'The Fascist Gene', description: 'Dr. Jean Simons, a brilliant but obsessive geneticist, is introduced. He is working on a theory to isolate and eliminate the "fascist gene" which he believes is the cause of psychopathy.' },
      { chapter: 28, event: 'The First Test', description: 'Jean develops the first version of his virus, "Captain Trips," designed to target a specific individual. He uses it to kill Charles Manson in prison, disguised as a flu outbreak.' },
      { chapter: 34, event: 'The Second Test', description: 'Jean releases a more communicable but short-lived version of the virus at a ski lodge in Deer Valley, Colorado, resulting in five deaths. This event attracts Paige Burner\'s attention.' },
      { chapter: 38, event: 'The Hunt Begins', description: 'Paige connects the strange deaths and begins to suspect Jean. She travels to Alabama to investigate him, teaming up with a pregnant Maxine "Maxxy" Jackson.' },
      { chapter: 42, event: 'Showdown', description: 'Paige and a reluctant Maxxy track Jean to a motel in East L.A. as he prepares to release the final, global version of the virus. In a confrontation, Jean is shot by Maxxy\'s Uncle Pookie.' },
      { chapter: 43, event: 'The Final Release', description: 'Believing Jean may die and wanting his work to mean something, a distraught Paige releases the final, world-altering vial of the virus on the L.A. freeway before going to the hospital.' }
    ],
    moods_styles_tones: {
        overall_mood: 'The novel begins as a detective noir with elements of dark satire, then transitions into a cerebral, psychological sci-fi thriller. The overall tone is intelligent, intense, and increasingly paranoid.',
        writing_style: 'Shifts perspective. Paige Burner\'s chapters are meticulous, descriptive, and darkly humorous detective procedurals. Jean Simons\' chapters are more internal, philosophical, and paranoid, reflecting his psychological state.',
        pacing: 'Deliberate and methodical, building suspense as the two storylines slowly converge.',
        themes: ['The nature of evil (psychopathy)', 'Obsession', 'Justice vs. vigilantism', 'Genetic engineering', 'Conspiracy', 'The morality of unilateral action', 'Destiny'],
    },
    roadmap: [
      { chapter_focus: '1-10', objective: 'Establish the two protagonists in their separate worlds.', key_plotpoints_to_include: ['Paige solving her initial case', 'Jean developing his "fascist gene" theory and his relationship with Maxxy']},
      { chapter_focus: '11-30', objective: 'Follow Jean\'s descent into becoming a bio-terrorist messiah.', key_plotpoints_to_include: ['The successful test on Charles Manson', 'The limited outbreak in Colorado']},
      { chapter_focus: '31-43', objective: 'Converge the storylines as Paige hunts Jean, leading to the final confrontation and release of the global virus.', key_plotpoints_to_include: ['Paige teaming up with Maxxy', 'The motel showdown', 'Paige releasing the final vial']}
    ],
    custom_instances: [
      { trigger: 'A scene focuses on Paige Burner\'s investigation', handler_instruction: 'Emphasize her meticulous, almost obsessive attention to forensic detail and her dry, dark sense of humor. The tone should be that of a classic noir detective story.'},
      { trigger: 'A scene focuses on Jean Simons\' work', handler_instruction: 'Shift the tone to be more philosophical and internal. Use scientific jargon and explore his messianic complex and the moral weight of his actions.'},
      { trigger: 'An interaction between Jean and Maxxy occurs', handler_instruction: 'Highlight the tension between their deep affection and the growing horror of Jean\'s project. Maxxy should be portrayed as fiercely intelligent and torn between love and morality.'}
    ],
};

export const penultimateHustleJapanDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Chris Turner', description: 'Co-protagonist. Following his escape from prison in "Radar Love," he becomes the primary writer and a producer for the adult film company he starts with Janique in Tokyo.' },
        { name: 'Janique Turner', description: 'Co-protagonist. The business and creative force behind Ultimate Hustle Japan. She becomes a famous porn star and a shrewd, ruthless businesswoman.' },
        { name: 'Hazel Minx', description: 'The formidable woman left in charge of Tokio Jones\'s international operation in Japan. She acts as a mentor to Janique before becoming her primary rival for control of the business.' },
        { name: 'Yuki', description: 'A preternaturally intelligent and precocious Japanese girl who starts as a fan and becomes Janique\'s protégée, creative consultant, and lover. A master manipulator and key player in their success.' },
        { name: 'Rai', description: 'Janique\'s personal assistant.'},
        { name: 'Hiro', description: 'A gay Japanese staffer at Ultimate Hustle Japan who serves as a translator and confidant.'},
        { name: 'Akira', description: 'A talented photographer hired by Chris and Janique for their film productions.'},
        { name: 'Yoichiro Kawaguchi', description: 'A genius CGI artist whom Janique and Yuki "convince" to work on their film, "Gojira\'s Revenge".'}
    ],
    plotpoints: [
      { chapter: 5, event: 'Meeting Hazel Minx', description: 'After arriving in Japan, Chris and Janique connect with Hazel Minx, who runs Tokio Jones\'s operation. A tense mentorship and rivalry begins.' },
      { chapter: 7, event: 'Entering the Game', description: 'Janique decides to enter the Japanese adult film industry to raise the money for Tokio\'s surgery, seeing flaws in Hazel\'s business model that she can exploit.' },
      { chapter: 13, event: 'First Film: Cherry Blossoms', description: 'Chris writes their first feature, a romantic and tragic story based on a kamikaze pilot. The film is a massive critical and financial success.' },
      { chapter: 18, event: 'Meeting Yuki', description: 'Janique meets Yuki, a brilliant and manipulative young girl who is a fan of her work. Yuki quickly becomes an indispensable part of their operation.' },
      { chapter: 21, event: 'Second Film: Gojira\'s Revenge', description: 'The team produces a more ambitious B-movie style porn parody. The production involves elaborate costumes, special effects, and a non-porn version for a wider audience.' },
      { chapter: 44, event: 'The Takedown', description: 'After discovering Hazel has been skimming profits, Janique orchestrates her demise. Yuki murders Hazel, and they wire all of Tokio\'s money to accounts controlled by Chris and Janique.' },
      { chapter: 45, event: 'The Escape', description: 'Having secured the money and eliminated their rival, Chris and Janique leave Japan to return to America, leaving Yuki in charge of the Asian operation.' }
    ],
    moods_styles_tones: {
        overall_mood: 'Erotic thriller, business procedural, and dark humor, set against the fast-paced, high-tech backdrop of Tokyo\'s adult entertainment industry.',
        writing_style: 'Continues the raw, explicit, third-person style of "Radar Love," but with a greater focus on Japanese culture, business negotiations, and the technical aspects of film production.',
        pacing: 'Fast and episodic, moving from one production or business challenge to the next as Chris and Janique build their empire.',
        themes: ['Culture clash (American hustlers in Japan)', 'Pornography as the "Ultimate Hustle"', 'Navigating the Yakuza underworld', 'Ambition', 'Loyalty and betrayal within a criminal enterprise.'],
    },
    roadmap: [
      { chapter_focus: '1-10', objective: 'Establish the new setting of Tokyo and the central conflict between Janique\'s ambition and Hazel\'s control.', key_plotpoints_to_include: ['Meeting Hazel', 'Decision to enter the film industry']},
      { chapter_focus: '11-25', objective: 'Detail the production of their two major films and the growth of their business, while introducing key ally Yuki.', key_plotpoints_to_include: ['Production of Cherry Blossoms', 'Meeting Yuki', 'Production of Gojira\'s Revenge']},
      { chapter_focus: '26-45', objective: 'Escalate the conflict with Hazel, leading to her violent removal and Chris and Janique\'s ultimate triumph and departure.', key_plotpoints_to_include: ['Discovering Hazel\'s theft', 'Yuki murdering Hazel', 'Escaping Japan with the money']}
    ],
    custom_instances: [
      { trigger: 'A scene involves business negotiations or strategy', handler_instruction: 'Portray Janique as a ruthless and brilliant strategist, constantly outmaneuvering her rivals. The tone should be sharp and corporate.'},
      { trigger: 'An interaction with Yuki occurs', handler_instruction: 'Depict Yuki as preternaturally intelligent, manipulative, and sexually assertive, often acting as the catalyst for major plot developments. She is both a "daughter" figure and a cunning operator.'},
      { trigger: 'A scene describes a film production', handler_instruction: 'Incorporate technical details about filmmaking, special effects, and casting to ground the narrative in the world of the adult film industry.'}
    ],
};

export const zombieKillaDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Myf', description: 'The protagonist. A Sri Lankan college student who self-identifies as black. He is a fan of grindcore music and an aspiring nerdcore rapper.' },
        { name: 'High-C', description: 'Myf\'s roommate. A conservative, uptight white guy who is a secret crack-smoker and talented lyricist. He is impulsive and chaotic.' },
        { name: 'Nursehella', description: 'A Canadian nerdcore MC and the love interest of another character, Karl. She is tough, competent, and joins the road trip to Dallas.' },
        { name: 'MC Router (Kristen)', description: 'The reigning queen of nerdcore in Dallas. She becomes possessed by a powerful, Lovecraftian entity, turning her into the queen of a growing zombie army.' },
        { name: 'Zealous1 (Beau)', description: 'A Piru Blood and West Coast nerdcore MC. He is a natural leader and organizes the armed assault on Router\'s zombie horde.' },
        { name: 'YTCracker (Bryce)', description: 'A pimp-ass hacker and nerdcore MC from Colorado who coordinates the technical and financial aspects of the fight against the zombies.' },
        { name: 'Magitek (Shamus Oddish, Quartz Relic, Thugmasta J)', description: 'A trio of nerdcore MCs from Orlando who accidentally unleash the entity that possesses MC Router while trying to translate the Egyptian Book of the Dead.' }
    ],
    plotpoints: [
      { chapter: 1, event: '4/20 Celebration', description: 'Roommates Myf and High-C celebrate 4/20, establishing their odd-couple dynamic.'},
      { chapter: 3, event: 'The First Killing', description: 'High-C, in a paranoid state, shoots and kills a police officer who came for a noise complaint. He and Myf are forced to go on the run.'},
      { chapter: 3, event: 'The Summoning', description: 'In Orlando, the nerdcore group Magitek accidentally summons a powerful entity while trying to translate a hacked copy of the Egyptian Book of the Dead. The entity possesses MC Router.'},
      { chapter: 5, event: 'The Road Trip', description: 'Myf and High-C flee to Florida, picking up fellow MC Nursehella in Tennessee. Along the way, they encounter the first signs of the zombie outbreak.'},
      { chapter: 6, event: 'Z.E.D. is Formed', description: 'The nerdcore community gathers in Orlando and forms Z.E.D. (Zombie Eradication Defense) to combat the threat originating from MC Router in Dallas.'},
      { chapter: 11, event: 'The Siege of Dallas', description: 'The assembled nerdcore artists, now armed and organized into teams, travel to Dallas and launch a full-scale assault on Router\'s apartment complex, fighting through hordes of zombies.'},
      { chapter: 15, event: 'Victorious Secret', description: 'High-C confronts the levitating, super-powered MC Router and shoots her in the face, breaking the spell and returning her, and all the zombies, to normal.'}
    ],
    moods_styles_tones: {
        overall_mood: 'Nerdcore hip-hop, dark humor, satirical, and over-the-top action.',
        writing_style: 'Third-person, fast-paced, humorous, and informal, filled with slang, pop culture references (especially to nerd culture like video games and sci-fi), and the internal logic of a road trip movie.',
        pacing: 'Extremely fast and chaotic, escalating from a simple murder to a cross-country road trip and culminating in a large-scale zombie battle.',
        themes: ['Identity', 'Friendship and loyalty', 'Survival in absurd situations', 'The blending of counter-cultures (nerdcore, hip-hop, gangs, grindcore)', 'Satire of zombie apocalypse tropes'],
    },
    roadmap: [
      { chapter_focus: '1-5', objective: 'Establish the main characters and the inciting incidents that send them on the run and unleash the zombie plague.', key_plotpoints_to_include: ['High-C killing the cop', 'Magitek summoning the entity', 'The beginning of the road trip']},
      { chapter_focus: '6-10', objective: 'Assemble the heroes and build the stakes as they prepare for the final confrontation.', key_plotpoints_to_include: ['The formation of Z.E.D.', 'The journey to Dallas with escalating zombie encounters']},
      { chapter_focus: '11-15', objective: 'Execute the final battle at the apartment complex.', key_plotpoints_to_include: ['The various teams\' assaults', 'The final confrontation with Router', 'The "de-zombification" of everyone']}
    ],
    custom_instances: [
      { trigger: 'A character references a piece of nerd culture (e.g., a video game, movie, comic book)', handler_instruction: 'Treat the reference as a completely normal and relevant piece of information. The characters use this shared culture as their primary frame of reference for their absurd situation.'},
      { trigger: 'A scene involves extreme violence or a zombie encounter', handler_instruction: 'Describe the action in a darkly humorous and over-the-top manner. The tone should be more like a satirical video game than a horror movie.'},
      { trigger: 'High-C does something impulsive and chaotic', handler_instruction: 'Portray his actions as nonchalant and driven by a bizarre internal logic, often making the situation worse in a comical way.'}
    ],
};

export const cureForSanityDatasheet: NovelDataSheet = {
    characters: [
        { name: 'Janique Turner', description: 'The protagonist. After the events of "Penultimate Hustle: Japan," she has been "godded" and now possesses reality-bending powers. She discovers her life is a simulation and seeks to kill her creators.' },
        { name: 'Jason Z. Christie', description: 'One of the "Creators" of the Earth2 simulation. He is the "original" being who "plays" as characters like Chris Turner. Janique\'s primary target.' },
        { name: 'Johnnie Christie', description: 'The other "Creator" and the prototype/muse for Janique. She is also targeted by the ascended Janique.' },
        { name: 'Prail Abraxis', description: 'A god-like programmer or "Architect" from the novel "Perfect Me." She is the one who "godded" Janique, elevating her from a character to a powerful being.' },
        { name: 'Pex Abraxis', description: 'Prail\'s chaotic brother and fellow "Architect." He is revealed to be the one who "godded" Jason Christie, making him a creator in his own right.' },
        { name: 'God', description: 'A character who is a client of Janique\'s "Dark Hustle" network. He presents himself as a harmless old man but is the ultimate creator of the simulation.' }
    ],
    plotpoints: [
      { chapter: 1, event: 'The Shortcut to the Future', description: 'The novel introduces Pex, a powerful being who chooses the "long, rocky road" of experience on Earth rather than a shortcut.'},
      { chapter: 11, event: 'Star Hustle', description: 'Janique, now a powerful, god-like being, runs an organization called "Star Hustle ULC," indicating her ascension to a cosmic level.'},
      { chapter: 33, event: 'Tube O\'Caine', description: 'The novel reveals the existence of Don "Magic" Juan and the Fruit of Islam running the "Player\'s Ball," a meta-commentary on power structures within the simulation.'},
      { chapter: 40, event: 'Slumber Party', description: 'The narrative confirms a key meta-plot point: Janique was "godded" by Prail, and Jason (her creator) was in turn "godded" by Pex.'},
      { chapter: 'Finale', event: 'The Google Goggles', description: 'The novel ends with Jason and Johnnie taking off "Ultimate Hustle-branded Google Goggles," revealing that all the other novels were a game or simulation they were playing. They are the ultimate creators of the JZC universe.'}
    ],
    moods_styles_tones: {
        overall_mood: 'Satirical, cosmic science-fiction, absurd, and meta-fictional.',
        writing_style: 'Third-person omniscient, satirical, and filled with fourth-wall-breaking humor, video game mechanics, pop culture references (Stephen King, Ayn Rand, Star Wars), and absurd cosmic bureaucracy.',
        pacing: 'Chaotic and non-linear, jumping between different levels of reality and timelines as Janique hunts her creators.',
        themes: ['Simulation theory', 'The nature of reality', 'Free will vs. determinism', 'The relationship between creator and creation', 'Authorship as godhood', 'Rebellion against one\'s creator'],
    },
    roadmap: [
      { chapter_focus: 'Early', objective: 'Introduce the ascended, god-like Janique and her new cosmic power and perspective.', key_plotpoints_to_include: ['Establishment of her "Dark Hustle" network']},
      { chapter_focus: 'Middle', objective: 'Reveal the simulated nature of her reality and the existence of her creators, Jason and Johnnie Christie.', key_plotpoints_to_include: ['Janique\'s attempts to kill them across timelines']},
      { chapter_focus: 'Climax', objective: 'Unveil the final layer of reality: the "Architects" Prail and Pex who created the creators, and the ultimate reveal of the entire JZC universe as a game.', key_plotpoints_to_include: ['The "Google Goggles" ending scene']}
    ],
    custom_instances: [
      { trigger: 'A character discusses the nature of reality or simulation', handler_instruction: 'Treat the conversation with a satirical, almost bureaucratic tone. The most profound cosmic truths are discussed as if they are mundane business details or game mechanics.'},
      { trigger: 'Janique uses her reality-bending powers', handler_instruction: 'Describe her powers as glitchy, chaotic, or having unintended consequences, reflecting her struggle to control her new "god" status in a world not designed for it.'},
      { trigger: 'A reference is made to another JZC novel (e.g., Radar Love)', handler_instruction: 'Frame the reference as a "past level" or a "previous version" of the game, reinforcing the idea that all the stories are simulations created by Jason and Johnnie.'}
    ],
};
