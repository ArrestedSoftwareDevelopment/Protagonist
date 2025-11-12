/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { CharacterProfile } from '../types';

/**
 * This file centralizes the character data for all novels in the
 * Jason Z. Christie shared universe. Characters appearing in multiple
 * novels are cross-referenced in their descriptions.
 */
export const jzcCharacters: Record<string, CharacterProfile[]> = {
    'Everything Went Black': [
        { name: 'Clarence James Jackson / "Tokio Jones"', description: 'The protagonist and narrator. A highly intelligent man reflecting on his journey from a wide-eyed kid to a would-be pimp, a skilled tradesman, and finally, a successful and philosophical hustler. He later becomes a mentor figure to Chris Turner in "Radar Love".' },
        { name: 'Tracy', description: 'Tokio\'s cousin from Detroit. A slick, experienced young pimp who serves as both a rival and a harsh mentor.' },
        { name: 'Janet', description: 'Tokio\'s first love, who is "turned out" by Tracy, a pivotal and heartbreaking event in Tokio\'s youth.' },
        { name: 'George', description: 'An old, white maintenance man who becomes Tokio\'s first legitimate mentor, teaching him welding and practical problem-solving.' },
        { name: 'Aunt Tilly / "Til"', description: 'Tokio\'s great-aunt in L.A. A fiercely intelligent, independent, and supportive matriarch. She is revealed to be a high-level hustler herself.' },
        { name: 'Maxine "Maxxy" Jackson', description: 'Til\'s brilliant, precocious, and foul-mouthed young daughter who acts as an intellectual guide for Tokio. She appears again as a young adult in "Pageburner".' },
        { name: 'Yolanda / "Yo-Yo"', description: 'An older woman in Tokio\'s apartment building with whom he has his first significant sexual relationship.'},
        { name: 'Janice Livingston', description: 'The author of the book, who appears as a meta-character in the narrative through footnotes and asides, interacting with Tokio as he tells his story. She is also a character in "Penultimate Hustle: Japan".' },
        { name: 'Hue Nguyen', description: 'A young Vietnamese-American woman with whom Tokio falls deeply in love in Los Angeles.' },
        { name: 'Morgan', description: 'A bank teller who becomes Tokio\'s submissive partner and first prostitute.' },
        { name: 'Angela', description: 'The second woman to join Tokio\'s stable, brought in by Morgan.' },
        { name: 'Patra / Wilma', description: 'A powerful, intelligent, and dominant woman from Philadelphia who takes control of Tokio\'s operation and becomes his primary partner.' },
        { name: 'Jade', description: 'A backup singer for Curtis Mayfield, who joins Tokio\'s stable in Vegas.' },
        { name: 'Mary', description: 'A backup singer for Curtis Mayfield, who joins Tokio\'s stable in Vegas.' },
    ],
    'Radar Love': [
        { name: 'Chris Turner', description: 'Co-protagonist. An intelligent and resourceful 28-year-old hustler completely devoted to Janique. After being imprisoned, he is mentored by Tokio Jones. He is a central character who continues into "Penultimate Hustle: Japan".' },
        { name: 'Janique Tamerlane Patton', description: 'Co-protagonist. Chris\'s lover from a wealthy family. She is ruthless, intelligent, and sexually dominant, establishing herself as a "daddy" in the women\'s prison. She continues as a central character in "Penultimate Hustle: Japan". She also transcends her reality to become a "godded" being in "Cure for Sanity".' },
        { name: 'Tokio Jones', description: 'Chris\'s first cellmate. An older, world-traveled pimp who acts as a mentor to Chris, explaining the "ultimate hustle." He is the protagonist of the prequel, "Everything Went Black".' },
        { name: 'Alvin Black', description: 'Leader of the prison\'s Aryan Brotherhood, who attempts to recruit Chris.' },
        { name: 'Rolando', description: 'A fellow inmate and the target of a hit that Chris is ordered to carry out in prison to gain favor.' },
        { name: 'Jeanette Gutierrez', description: 'The laundry foreman at the women\'s prison and Rolando\'s aunt.' },
        { name: 'Camilla', description: 'Chris\'s ex-wife, a BDSM practitioner who performs a ritualistic piercing on Janique that serves as their symbolic wedding.' },
        { name: 'Amy', description: 'A sympathetic female guard who helps Janique by smuggling in cigarettes.' },
        { name: 'Martinez', description: 'A Marrano Jew inmate who befriends Chris after witnessing his calculated violence.'},
        { name: 'Aphasia', description: 'Janique\'s first cellmate and victim, who later becomes her "mama" in the prison family structure.'},
        { name: 'Mica', description: 'An inmate in Janique\'s "family" who is initially skeptical of her but eventually accepts her leadership.'},
        { name: 'Jill', description: 'An overweight, innocent-looking inmate in Janique\'s "family" who killed her own father.'},
        { name: 'Lexington / "Lexi"', description: 'The prison\'s resident tattoo artist who gives Janique her iconic sword tattoo.'},
        { name: 'Charles Bukowski', description: 'Chris\'s comically inept public defender, a meta-joke character.'},
    ],
    'Penultimate Hustle: Japan': [
        { name: 'Chris Turner', description: 'Co-protagonist, now a writer and producer for Ultimate Hustle Japan. He is still deeply in love with Janique, navigating their new life and complex relationship.' },
        { name: 'Janique Turner', description: 'Co-protagonist, now a porn star and the creative and business force behind the company. She is ambitious, ruthless, and brilliant.' },
        { name: 'Hazel Minx', description: 'The formidable woman left in charge of Tokio Jones\'s international operation. She acts as a mentor and eventual rival to Janique.' },
        { name: 'Yuki', description: 'A preternaturally intelligent and precocious young fan who becomes Janique\'s protégée, creative consultant, lover, and assassin.' },
        { name: 'Johnny Turner', description: 'Chris and Janique\'s four-year-old son.' },
        { name: 'Rai', description: 'Janique\'s personal assistant.' },
        { name: 'Sushi-San', description: 'A Japanese adult film star who works with Janique.' },
        { name: 'Brad', description: 'The lead engineer for Ultimate Hustle\'s technical operations.' },
        { name: 'Janice', description: 'The U.S.-based receptionist and office manager for Ultimate Hustle, who conspires with Natalia. A meta-character who also "authors" Everything Went Black.' },
        { name: 'Natalia', description: 'The company\'s Italian costume designer, who plots with Janice to take over the business.' },
        { name: 'Hiro', description: 'A gay, multilingual staffer at Ultimate Hustle Japan who assists Janique.' },
        { name: 'Yvette Kohan', description: 'An Israeli intern at the accounting firm, whom Janique seduces to gain information on Hazel\'s finances.' },
        { name: 'Yoichiro Kawaguchi', description: 'A brilliant but reclusive CGI artist who is recruited to work on "Gojira\'s Revenge".' },
        { name: 'Akira', description: 'An ace photographer recruited by Chris and Janique to work on their film projects.' }
    ],
    'Pageburner': [
        { name: 'Detective Paige Burner', description: 'A brilliant, obsessive, and socially isolated L.A. County homicide detective who becomes the head of Investigative Services. A master of forensics and deduction.' },
        { name: 'Dr. Jean Simons', description: 'The novel\'s primary protagonist/antagonist. A genius PhD in genetic research who develops a messianic complex and creates a virus to eliminate psychopaths.' },
        { name: 'Maxine "Maxxy" O. Jackson', description: 'A highly intelligent University of Alabama student, programmer, and Jean\'s fiancée. She is the same character from "Everything Went Black", now a young adult.' },
        { name: 'Chief Terry', description: 'Paige\'s high-strung, profane, but ultimately supportive boss at the police department.' },
        { name: 'Detective Philip K. "P.J." Johnson / "Flea"', description: 'A young, earnest officer whom Paige promotes to detective and mentors.' },
        { name: 'Dr. Woodard', description: 'Jean\'s academic mentor at the University of Alabama.' },
        { name: 'Uncle Pookie', description: 'Maxine\'s uncle in L.A., a retired Crip lieutenant who provides Jean with weapons.' },
        { name: 'Bryce', description: 'Paige\'s grey-hat hacker friend in Seattle and nerdcore rapper who provides her with technical assistance. He is the same character as YTCracker in "Zombie Killa".' },
        { name: 'John Chang', description: 'A brilliant temp worker with a database background whom Paige hires as her assistant.' },
        { name: 'Lisa Chang', description: 'John\'s twin sister, also hired by Paige, who has a criminal justice background.' },
        { name: 'Maureen Bedford', description: 'The wealthy victim in the novel\'s opening "lobster death" chapter.'},
        { name: 'Clement Blankenship', description: 'A bumbling uniformed officer at the first crime scene.'},
        { name: 'James "Jimbrowski" Brown', description: 'Jean\'s roommate and academic partner/rival.'},
        { name: 'Charlie', description: 'A contact in the Investigative Support Services division.'},
        { name: 'David Rogers', description: 'The county coroner who helps Paige connect the mysterious deaths.'},
        { name: 'Carl Cameron', description: 'The second victim of the virus, whose death provides a genetic link to Charles Manson.'},
        { name: 'Anthony Grier / "Angel"', description: 'The killer in the novel\'s secondary plotline involving a meth cook.'}
    ],
    'Hurricane Regina': [
        { name: 'Regina Long', description: 'The President\'s 27-year-old daughter. Rebellious and highly capable, she is kidnapped and discovers she has reality-bending, god-like abilities.' },
        { name: 'Captain Dan Nolan', description: 'A rogue Navy captain, an old-fashioned hero type, tasked with rescuing Regina, for whom he develops deep feelings.' },
        { name: 'President Robert "Lazarus" Long', description: 'The Libertarian President of the North American Union, battling a vast corporate conspiracy.' },
        { name: '"Tom"', description: 'The enigmatic, ancient, and powerful antagonist who orchestrates Regina\'s kidnapping to force the President to resign. He controls an undersea dome ("Rapture" / "Eden") and reality-warping technology.' },
        { name: 'Albert "Al" Onestone (Einstein)', description: 'The President\'s genius scientific advisor and Regina\'s biological father.' },
        { name: 'Hans "Filthy" Luker', description: 'Captain Dan\'s communications officer and loyal first mate.'},
        { name: 'Yeoman Clancy', description: 'A crewman on Captain Dan\'s ship.'},
        { name: 'Lord Petrus T. Steele', description: 'An elderly patriot who activates his network of saboteurs to fight the corporate state.'},
        { name: 'Ferret', description: 'A painter and patriot who plants nanothermite charges on infrastructure.'},
        { name: 'Renee Hollander', description: 'A powerful construction mogul and old flame of President Long, who is called in to help with the Oak Island excavation.'}
    ],
    'Zombie Killa': [
        { name: 'Myf', description: 'The protagonist. A Sri Lankan college student who self-identifies as black. He is a fan of grindcore music and possesses an unconventional worldview that helps him survive the zombie apocalypse.' },
        { name: 'High-C', description: 'Myf\'s roommate. A straight-laced white guy who is also a secret crack-smoker and aspiring nerdcore rapper. He is impulsive, chaotic, and appears as a drug dealer in "Perfect Me".' },
        { name: 'Nursehella / Danielle', description: 'A Canadian nerdcore rapper and friend of the duo. She is level-headed but also capable of violence when necessary.' },
        { name: 'MC Router / Kristen', description: 'The "queen" of the Dallas nerdcore scene, who becomes possessed by a demonic entity and starts the zombie plague.' },
        { name: 'Zealous1 / Beau', description: 'A West Coast nerdcore MC and Piru Blood, who takes charge of the combat operations against the zombies.' },
        { name: 'YTCracker / Bryce', description: 'A legendary hacker and nerdcore pioneer who coordinates the technical and financial support for the zombie-killing mission. He is the same character as Bryce in "Pageburner".' },
        { name: 'Doc Popular', description: 'A veteran nerdcore producer.'},
        { name: 'Beefy', description: 'A large and boisterous nerdcore rapper.'},
        { name: 'Benjamin Bear (Bbear)', description: 'A member of Emergency Pizza Party who acts as a stealth assassin.'},
        { name: 'Betty Rebel', description: 'A female nerdcore rapper from Emergency Pizza Party, known for her aggressive style.'},
        { name: 'MC Wreckshin', description: 'A member of Emergency Pizza Party.'},
        { name: 'Sir-Up', description: 'A member of Emergency Pizza Party with a scientific background.'},
        { name: 'Ultraklystron / Karl', description: 'Nursehella\'s boyfriend, another nerdcore rapper.'},
        { name: 'Magitek', description: 'A trio of rappers (Shamus Oddish, Quartz Relic, Thugmasta J) who accidentally unleash the entity that possesses MC Router.'},
        { name: 'MC Inadequate / Inadequizzy', description: 'A nerdcore rapper.'},
        { name: 'Chozo Ninpo', description: 'A nerdcore rapper and Monny Veeps\' boyfriend.'},
        { name: 'Monny Veeps', description: 'Chozo\'s girlfriend, who is taken hostage.'},
        { name: 'Krondor Krew', description: 'A duo of ninja-themed rappers.'},
        { name: 'Captain Dan', description: 'A pirate-themed rapper (distinct from the character in Hurricane Regina).'},
        { name: 'Soapy', description: 'A "housewife" and friend of the nerdcore scene.'},
        { name: 'Dean', description: 'A friend of the nerdcore scene.'}
    ],
    'Perfect Me': [
        { name: 'Prail Abraxis', description: 'A brilliant, young Praxalian game designer and programmer who works on the Earth2 simulation. She is a key "Architect" and a recurring character in the JZC meta-narrative, also appearing in "Cure for Sanity".' },
        { name: 'President Gorlax', description: 'The self-elected, hyper-violent, and comically sadistic ruler of Gortician. He is a primary client for Praxis\'s "Perfections" and a suitor to Prail.' },
        { name: 'Sherman Oakes', description: 'A "mad poet" who writes the laws of Earth2 and composes poetry for President Gorlax.' },
        { name: 'Vnew Vreal', description: 'Gorlax\'s beleaguered press secretary.' },
        { name: 'MotherBrain', description: 'The ruler of Praxis, an incorporeal entity that oversees the creation and maintenance of the simulations.' },
        { name: 'High-C', description: 'Intergalactic drug dealer and brother of O.D. DrugWar. The same character from "Zombie Killa".' },
        { name: 'O.D. DrugWar', description: 'Intergalactic drug dealer and brother of High-C.' },
        { name: 'L\'viv', description: 'The exiled mother of High-C and O.D. DrugWar.'},
        { name: 'Parabola Blue', description: 'A famous "Feelie" star and client of Sherman Oakes.'},
        { name: 'Judas Mason', description: 'An archvillainess who plots to destroy Sherman Oakes.'},
        { name: 'Oracle Jones', description: 'A wise, hip prostitute and friend of Judas Mason.'},
        { name: 'Tessa Rack', description: 'Oracle\'s girlfriend.'},
        { name: 'AngVenn', description: 'A journalist for the Associated Space Press and Vnew Vreal\'s love interest.'}
    ],
    'Cure for Sanity': [
        { name: 'Jason Z. Christie', description: 'One of the "Creators" of the Earth2 simulation. He is the "original" being who "plays" as characters like Chris Turner. He exists on a higher plane of reality.' },
        { name: 'Johnnie Christie', description: 'The other "Creator" and the prototype for characters like Janique. She co-authors the reality of the simulations with Jason.' },
        { name: 'Pex Abraxis', description: 'Prail\'s chaotic and mischievous brother, an "Architect" who "godded" Jason Christie and enjoys disrupting Prail\'s simulations. He is first mentioned conceptually in "Perfect Me".' },
        { name: 'Prail Abraxis', description: 'An "Architect" from the novel "Perfect Me". Her act of "godding" Janique within the simulation is a key event that bridges the two realities.' },
        { name: 'Janique Turner', description: 'A character from the Earth2 simulation ("Radar Love") who becomes self-aware and "godded," gaining powers that allow her to perceive and interact with the "Creator" level of reality.' },
        { name: 'Yeshua Bin Joseph', description: 'The historical Jesus, recruited by Pex to alter history as part of his game against Prail.'},
        { name: 'Mary', description: 'Yeshua\'s wife, who travels through time with him.'},
        { name: 'God', description: 'The ultimate creator figure in the cosmology, who interacts with the other characters.'}
    ],
};
