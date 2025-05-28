// API helper methods

import { SearchItem } from "../types/searchItems";

const RETRIES = 3;
const DELAY = 500;

// delay before next try and than retry - if succeded return
export async function retry(
                            fn: () => Promise<any>,
                            RETRIES = this.RETRIES,
                            DELAY = this.DELAY) {
                                
    for (let i = 0; i < RETRIES; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === RETRIES - 1) throw err;
            await new Promise((res) => setTimeout(res, DELAY));
        }
    }
}

/**
 * Finds a SearchItem by name from a list.
 */
export function findItemByName(items: SearchItem[], name: string): SearchItem {
  const item = items.find(i => i.name === name);
  if (!item) throw new Error(`Fixture missing item "${name}"`);
  return item;
}