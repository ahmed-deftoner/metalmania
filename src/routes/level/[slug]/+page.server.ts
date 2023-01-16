import type { PageServerLoad } from "../$types";


type Question = {
    question: string,
    options: string[],
    right: string,
    img?: string
}

export const load = (async ({url, params}) => {

    const response = await fetch(url.origin + '/api/level/?level=' + params.slug, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept-type': 'application/json'
        }
      });

    const levels: Array<Question> = await response.json();
  
    return {
        arr: levels
    };
}) satisfies PageServerLoad