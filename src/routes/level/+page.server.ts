import type { PageServerLoad } from "./$types";

export const load = (() => {
    return {
      post: "hehe"
    };
}) satisfies PageServerLoad