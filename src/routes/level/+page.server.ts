import type { PageServerLoad } from "./$types";
import l1 from '$lib/images/l1/1.jpg';
import l2 from '$lib/images/l1/2.jpg';
import l3 from '$lib/images/l1/3.jpg';


type Question = {
    question: string,
    options: string[],
    right: string,
    img?: string
}

function level1() {
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

export const load = (() => {
    return {
        arr: level1()
    };
}) satisfies PageServerLoad