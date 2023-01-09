import type { PageServerLoad, Question } from "./$types";

function level1() {
    return new Array<Question>(
        {
            question: "Name this band?",
            options: ["Linkin Park","Skillet","Five Finger Death Punch","Dead By Sunrise"],
            right: "Linkin Park",
            img: "'$lib/images/l1/1.jpg"
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
            img: "'$lib/images/l1/2.jpg"
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
            img: "'$lib/images/l1/3.webp"
        },
    );
}

export const load = (() => {
    return level1();
}) satisfies PageServerLoad