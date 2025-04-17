/**
 * Some utility helpers
 */

export function cleanup(s: string) {
  return (s || '')
    .replace(/[\n\t\r]/g, '') // remove newlines and tabs
    .replace(/\s+/g, ' ')     // replace multiple spaces with a single space
    .trim(); 
}

/**
 * Helpers for delays and retries
 */
let MAX_RETRIES = 10;
let BASE_DELAY = 200; // msecs
let DELAY_INCREASE = 20; // msecs

export function setRetryParams(max: number, base: number, increase: number) {
  MAX_RETRIES = max;
  BASE_DELAY = base;
  DELAY_INCREASE = increase;
}

export function waitRetry(retries: number, maxRetries?: number) {
  if (retries >= (maxRetries?? MAX_RETRIES)) throw(
    Error(`MAX_RETRIES exceeded retries=${retries}`)
  );
  let delay = BASE_DELAY + (retries)*DELAY_INCREASE;
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function mustWait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}