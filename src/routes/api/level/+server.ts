import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { level1 } from './levels';
 
export const GET: RequestHandler = async ({ url }) => {
  const level: Number = Number(url.searchParams.get('level') ?? '1');

  if (level > 5) {
     throw error(404, "level not found");
  }
  return json(level1());
}

