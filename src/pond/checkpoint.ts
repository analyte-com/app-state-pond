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
import { copyFileSync, statSync } from "fs";
import { readdir, stat, unlink } from "fs/promises";
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
    logger.timer(`duckdb checkpoint write-pond='${currentPond}'`);

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
    logger.elapsed(`duckdb checkpoint isReady=${isReady}`);

    // create the a new pond snapshot
    const ts = (new Date()).getTime();
    const snapshot = `snap-${ts}.duckdb`;
    const snapshotPond = `${currentPath}/${snapshot}`;

    // copy the writer-pond file to it
    copyFileSync(currentPond, snapshotPond);
    const size = (statSync(snapshotPond).size / (1024*1024)).toFixed(1);
    logger.elapsed(`duckdb checkpoint copy snapshot='${snapshot}' size=${size}Mb`);

    // register the new snapshot as active in KVS
    KVS.put('pond-snap-timestamp', ts);
    KVS.put('pond-active-snap', snapshot);
    logger.elapsed(`duckdb checkpoint enabled snapshot`);

    // finally remove old snapshots
    setTimeout(() => { removeOldSnapshots(); }, 250);
  }
  catch (error: any) {
    // if it fails it is not critical, we will try again latter 
    // so we just give a WARNING
    logger.warn(`duckdb checkpoint failed=${error.message}`);
  }
}


async function removeOldSnapshots() {
  const dir = dirname(env.POND_DB!);
  const maxAgeSeconds = 1*60; // 1 mins
  const trace = 'duckdb removeOldSnapshots';

  const now = Date.now();
  const files = await readdir(dir);
  logger.info(trace+` before=${now}`);

  for (const file of files) {
    const fullPath = join(dir, file);
    const { mtimeMs } = await stat(fullPath);
    if ((now - mtimeMs) / 1000 > maxAgeSeconds) {
      try {
        // only remove snapshot files 
        if (!file.startsWith("snap-")) continue;
        await unlink(fullPath);
        logger.info(trace+` removed='${file}'`);
      }
      catch (err: any) {
        // give warning, not a serious error
        logger.warn(trace+` failed='${err.message}'`);
      }
    }
  }

  logger.info(`duckdb removeOldSnapshots done`);
}