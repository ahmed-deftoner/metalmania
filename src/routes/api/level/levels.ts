import l1 from '$lib/images/l1/1.jpg';
import l2 from '$lib/images/l1/2.jpg';
import l3 from '$lib/images/l1/3.webp';


export type Question = {
    question: string,
    options: string[],
    right: string,
    img?: string
}


export function level1() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Linkin Park","Skillet","Five Finger Death Punch","Dead By Sunrise"],
            right: "Linkin Park",
            img: l1
        },
        {
            question: "Which band wrote the songs \"Change( in the house of flies)\" and \"My Own Summer (Shove It)\"?",
            options: ["Nine Inch Nails","Slipknot","Korn","Deftones"],
            right: "Deftones"
        },
        {
            question: "Name this band?",
            options: ["My Chemical Romance","Paramore","Panic! At the Disco","Fall Out Boy"],
            right: "Paramore",
            img: l2
        },
        {
            question: "What genre was pioneered by bands like Slipknot and Korn in the early 2000's?",
            options: ["Black Metal","Nu Metal","Alternative Metal","Death Metal"],
            right: "Nu Metal"
        },
        {
            question: "Name this band?",
            options: ["Rage Against The Machine","Nirvana","Foo Fighters","Prophets Of Rage"],
            right: "Nirvana",
            img: l3
        },
    );
}


export function level2() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Asking Alexandria","Architects","Sylosis","Breaking Benjamin"],
            right: "Architects",
            img: l1
        },
        {
            question: "Which band are known for their albums \"Sempiternal\" and \"Suicide Season\"?",
            options: ["Bring Me The Horizon","Chelsea Smile","Suicide Silence","While She Sleeps"],
            right: "Bring Me The Horizon"
        },
        {
            question: "Name this band?",
            options: ["Gorgoroth","Celtic Frost","Behemoth","Mayhem"],
            right: "Behemoth",
            img: l2
        },
        {
            question: "What genre was pioneered by bands like Meshuggah and Parkway Drive in the mid 2000's?",
            options: ["Grindcore","Progressive Metal","Deathcore","Metalcore"],
            right: "Metalcore"
        },
        {
            question: "Name this singer?",
            options: ["Sam Carter","Oli Sykes","Tom Middleton","Austin Carlile"],
            right: "Oli Sykes",
            img: l3
        },
    );
}


export function level3() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Boston Manor","Gleemer","Citizen","Badflower"],
            right: "Boston Manor",
            img: l1
        },
        {
            question: "Which band wrote the songs \"Holly Roller\" and \"Circle with me\"?",
            options: ["Currents","Jinjer","Sleep Token","Spiritbox"],
            right: "Spiritbox"
        },
        {
            question: "Name this band?",
            options: ["Napalm Death","Cannibal Corpse","Nile","Corpus"],
            right: "Cannibal Corpse",
            img: l2
        },
        {
            question: "Which band here does not play Djent?",
            options: ["Opeth","Invent Animate","Animals As Leaders","Periphery"],
            right: "Opeth"
        },
        {
            question: "Name this band?",
            options: ["Stand Atlantic","Dream State","Parting Gift","Bilmuri"],
            right: "Parting Gift",
            img: l3
        },
    );
}


export function level4() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Thornhill","Alpha Wolf","Crystal Lake","Polaris"],
            right: "Crystal Lake",
            img: l1
        },
        {
            question: "Which band wrote the songs \"Dead Inside\" and \"Wounds\"?",
            options: ["Eskimo Callboy","Whitechapel","Broadside","Future Palace"],
            right: "Future Palace"
        },
        {
            question: "Name this band?",
            options: ["Dayseeker","The Devil Wears Prada","Sleeping With Sirens","Pierce The Veil"],
            right: "Dayseeker",
            img: l2
        },
        {
            question: "What genre was Nine Inch Nails famous for?",
            options: ["Death Metal","Doom Metal","Industrial Metal","Thrash Metal"],
            right: "Industrial Metal"
        },
        {
            question: "Name this guitarist?",
            options: ["Lee Malia","Tom Middleton","Misha Mansoor","Tom Morello"],
            right: "Misha Mansoor",
            img: l3
        },
    );
}


export function level5() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Linkin Park","Skillet","Five Finger Death Punch","Dead By Sunrise"],
            right: "Linkin Park",
            img: l1
        },
        {
            question: "Which band wrote the songs \"Change( in the house of flies)\" and \"My Own Summer (Shove It)\"?",
            options: ["Nine Inch Nails","Slipknot","Korn","Deftones"],
            right: "Deftones"
        },
        {
            question: "Name this band?",
            options: ["My Chemical Romance","Paramore","Panic! At the Disco","Fall Out Boy"],
            right: "Paramore",
            img: l2
        },
        {
            question: "What genre was pioneered by bands like Slipknot and Korn in the early 2000's?",
            options: ["Black Metal","Nu Metal","Alternative Metal","Death Metal"],
            right: "Nu Metal"
        },
        {
            question: "Name this band?",
            options: ["Rage Against The Machine","Nirvana","Foo Fighters","Prophets Of Rage"],
            right: "Nirvana",
            img: l3
        },
    );
}