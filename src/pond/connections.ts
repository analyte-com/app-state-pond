import { DuckDBConnection, DuckDBInstance } from '@duckdb/node-api';
import { logger, LogLevel } from '@mazito/logger';
import { env } from "../utils/env";
import { mustWait } from "../utils/helpers";

export {
  openWriter,
  openReader,
  closeInstance,
  getActiveConnection,
  closeActiveConnection,
  READ_ONLY,
  READ_WRITE,
  MAX_RETRIES,
  BASE_DELAY,
  DELAY_INCREASE
}

let activeConnection: DuckDBConnection | null = null;
let activeInstance: DuckDBInstance | null = null;

const READ_ONLY = {access_mode: 'READ_ONLY'};
const READ_WRITE = {access_mode: 'READ_WRITE'};
const MAX_RETRIES = 10;
const BASE_DELAY = 200; // msecs
const DELAY_INCREASE = 20; // msecs

/**
 * Opens a READ_WRITE instance of the given Duckdb database.
 * If the db file does not exist, it will create it.
 * If it fails for some reason, it will retry MAX_RETRIES times.
 * @param dbPath - the full database path, including file name and extension.
 * @returns - a Duckdb instance we can connect to.
 * @throws - error if not able to open it
 */
async function openWriter(dbPath: string): Promise<DuckDBInstance | null> {
  let retries = 0;
  let locked = false;
  const dbfile = dbPath || './temp.duckdb';

  while (!locked) {
    try {
      logger.elapsed(`duckdb openWriter create=${dbfile} retries=${retries}`);
      const instance = await DuckDBInstance.create(dbfile, READ_WRITE); 
      locked = true;
      return instance;
    }
    catch (error: any) {
      if (retries >= MAX_RETRIES) {
        const errm = "duckdb openWriter MAX_RETRIES exceeded error="+error.message;
        logger.error(errm);
        throw Error(errm);
      }      

      // give it another retry
      let delay = BASE_DELAY + (retries)*DELAY_INCREASE;
      retries += 1;
      logger.elapsed(`duckdb openWriter mustWait retries=${retries} delayed=${delay}`);
      await mustWait(delay);
    }
  }

  return null;
}  

/**
 * Opens a READ_ONLY instance of the given Duckdb database.
 * If the db file does not exist, it will create it.
 * If it fails for some reason, it will retry MAX_RETRIES times.
 * @param dbPath - the full database path, including file name and extension.
 * @returns - a Duckdb instance we can connect to.
 * @throws - error if not able to open it
 */
async function openReader(dbPath: string): Promise<DuckDBInstance | null> {
  let retries = 0;
  let locked = false;
  const dbfile = dbPath || './temp.db';

  while (!locked) {
    try {
      logger.elapsed(`duckdb openReader create=${dbfile} retries=${retries}`);
      const instance = await DuckDBInstance.create(dbfile, READ_ONLY); 
      locked = true;
      return instance;
    }
    catch (error: any) {
      if (retries >= MAX_RETRIES) {
        const errm = "duckdb openReader MAX_RETRIES exceeded error="+error.message;
        logger.error(errm);
        throw Error(errm);
      }      

      // give it another retry
      let delay = BASE_DELAY + (retries)*DELAY_INCREASE;
      retries += 1;
      logger.elapsed(`duckdb openReader mustWait retries=${retries} delayed=${delay}`);
      await mustWait(delay);
    }
  }

  return null;
}  

/**
 * Closes an open instance, or the last active instance.
 * @param instance 
 */
async function closeInstance(instance?: DuckDBInstance) {
  try {
    if (instance) instance.closeSync(); 
  }
  catch (error: any) {
    // the instance may have been already closed, etc ...
    // this is not a critical error, we just give a warning
    logger.warn(`duckdb closeInstance failed=${error.message}`);
  }
}

/**
 * Gets a writer connection to the active Duckdb database.
 * If no activeInstance it will open one, connect to it and keep it open so 
 * next calls will give the available active connection.
 * @param dbpath 
 */
async function getActiveConnection(mode: any): Promise<DuckDBConnection> {
  try {
    // if available just return it
    if (activeConnection) return activeConnection;

    // if no active instance, must open one and connect
    if (!activeInstance) {
      if (mode.access_mode === READ_WRITE.access_mode)
        activeInstance = await openWriter(env.POND_DB!)
      if (mode.access_mode === READ_ONLY.access_mode)
        activeInstance = await openReader(env.POND_DB!)
      throw Error(`Invalid access mode=${mode.access_mode}`)
    }
      
    activeConnection = await activeInstance?.connect() as DuckDBConnection;
    return activeConnection;
  }
  catch (error: any) {
    const errm = "duckdb getWriterConnection error="+error.message;
    logger.error(errm);
    throw Error(errm);
  }
}

/**
 * We close the active connection AND the active instance too. 
 */
async function closeActiveConnection() {
  try {
    if (activeConnection) activeConnection.closeSync(); 
    if (activeInstance) closeInstance(activeInstance);
  }
  catch (error: any) {
    // the connection may have been already closed, etc ...
    // this is not a critical error, we just give a warning
    logger.warn(`duckdb closeActiveConnection failed=${error.message}`);
  }
}