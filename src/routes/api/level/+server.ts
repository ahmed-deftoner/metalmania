import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { level1, level2, level3, level4, level5 } from './levels';
 
export const GET: RequestHandler = async ({ url }) => {
  const level: Number = Number(url.searchParams.get('level') ?? '1');

  if (level == 1) {
    return json(level1());
  } else if (level == 2) {
    return json(level2()) 
  } else if (level == 3) {
    return json(level3()) 
  } else if (level == 4) {
    return json(level4()) 
  } else if (level == 5) {
    return json(level5()) 
  }
  throw error(404, "level not found");
}

