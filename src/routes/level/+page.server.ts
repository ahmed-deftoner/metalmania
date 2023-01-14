import type { PageServerLoad } from "./$types";


type Question = {
    question: string,
    options: string[],
    right: string,
    img?: string
}

export const load = (async () => {

    const response = await fetch('http://localhost:5173/api/level/?level=1', {
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