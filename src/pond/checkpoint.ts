/**
 * Checkpoint
 * 
 * After completing a set of transactions on the writer-pond we issue a 
 * checkpoint for settlement of all db changes in and active snapshot.
 * 
 * Before conduction a checkpoint we must assert that:
 * 
 *  - All pending transactions have been finished.
 *  - We have no incoming 'data_changed' events.
 * 
 * When issuing the checkpoint action the following happens:
 * 
 *  - We close the writer-pond to release all locks on it
 *  - We create new snapshot id = `snap-${timestamp}`
 *  - We copy the writer-pond to this new snapshot
 *  - We register the new snapshot in the KVS with key = `active-snap`
 *  - We reopen the write-pond to be ready for new transactions 
 */
import { copyFileSync } from "fs";
import { dirname, join } from "path";
import { logger } from "@mazito/logger";
import { KVS, env, waitRetry } from "../utils";
import { closeActiveConnection, getActiveConnection, READ_WRITE } from "./connections";
import { safeExec } from "./statements";

export {
  triggerCheckpoint
}

async function triggerCheckpoint() {
  try {
    // some basic checks ...
    if (!env.POND_DB) return;
    const currentPond = env.POND_DB!;
    const currentPath = dirname(currentPond);

    // get an active connection or raise
    let db = await getActiveConnection(READ_WRITE);

    // we first execute a CHECKPOINT on the current Db 
    // if it fails it means there may be running transactions
    let isReady = false, retries = 0;
    while (!isReady) {
      const { result, error } = await safeExec(db, "CHECKPOINT;");
      isReady = !!result && !error;
      if (!isReady) { retries += 1; await waitRetry(retries); }
    }

    // close the Db connection if it exists
    await closeActiveConnection()

    // create the a new pond snapshot
    const pondSnapshot = join(currentPath,
      `pond-${(new Date()).getTime()}.duckdb`
    );

    // copy the writer-pond file to it
    copyFileSync(currentPond, pondSnapshot);

    // register the new snapshot as active in KVS
    KVS.put('pond-active-snap', pondSnapshot);

    // reopen writer connection
    await getActiveConnection(READ_WRITE);
  }
  catch (error: any) {
    // if it fails it is not critical, we will try again latter 
    // so we just give a WARNING
    logger.warn(`duckdb triggerChekpoint failed=${error.message}`);
  }
}
