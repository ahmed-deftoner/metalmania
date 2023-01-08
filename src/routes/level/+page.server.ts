import type { PageServerLoad, Question } from "./$types";

function level1() {
    const level1: Array<Question> = [
        {
            question: "hehe",
            options: ["linkin park","bmth","paramore","jeje"],
            right: "bmth"
        }
    ];
}

export const load = (() => {
    return {
      post: "hehe"
    };
}) satisfies PageServerLoad