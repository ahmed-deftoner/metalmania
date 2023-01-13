import { writable, type Writable} from "svelte/store";

export const completed: Writable<Array<Boolean>> = writable(Array.prototype.fill(false, 0, 4));