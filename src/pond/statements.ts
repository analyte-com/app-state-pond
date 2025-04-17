import { DuckDBConnection, DuckDBInstance } from '@duckdb/node-api';
import { logger, LogLevel } from '@mazito/logger';
import { cleanup } from '../utils';

export {
  safeExec, 
  safeQuery,
  type ResultOrError
}

type ResultOrError = { result?: any, error?: Error}; 

/**
 * Safely executes some SQL statement
 * It will catch all exceptions on failure and never throw one.
 * @param stmt - the SQL statement to execute 
 * @returns - some result if Ok, Error if exec failed
 */
async function safeExec(
  dbx: DuckDBConnection, 
  stmt: string
): Promise<ResultOrError> {
  if (!dbx || !stmt) return { 
    error: Error('No db connection or statement') 
  };
  try {
    stmt = cleanup(stmt);
    logger.elapsed(`duckdb exec stmt='${stmt}'`);
    const done = await dbx.run(stmt);
    logger.elapsed(`duckdb exec done=${JSON.stringify(done)}`);
    return { 
      result: done 
    }
  }
  catch (error: any) {
    const errm = `duckdb exec error=${error.message}`;
    logger.error(errm);
    return { error: Error(errm) }
  }
}

/**
 * Safely execute a Query
 * It will catch all exceptions on failure and never throw one.
 * @param @dbx - an open Duckdb connection
 * @param stmt - the SQL query to run
 * @param onEach - optional, if present runs the callback on every row
 * @returns - a set of rows if Ok, Null if failed
 */
async function safeQuery(
  dbx: DuckDBConnection, 
  stmt: string,
  onEach?: (r: any) => void
): Promise<ResultOrError> {
  if (!dbx || !stmt) return { 
    error: Error('No db connection or statement') 
  };
  try {
    stmt = cleanup(stmt);
    logger.elapsed(`duckdb query stmt='${stmt}'`);
    const reader = await dbx.runAndReadAll(stmt);
    const rows = reader.getRows();
    
    const n = rows.length;
    logger.elapsed(`duckdb query rows=${n}`);
    logger.debug(`duckdb query row 0: `, rows[0]);
    logger.debug(`duckdb query row ${n-1}:`, rows[n-1]);

    // run the callback on each row
    // console.log(onEach);
    if (onEach) (rows || []).forEach((r: any) => onEach(r))

    return { 
      result: { rows: rows, count: n, query: stmt } 
    };
  }
  catch (error: any) {
    const errm = `duckdb query error=${error.message}`;
    logger.error(errm);
    return { error: Error(errm) }
  }
}
