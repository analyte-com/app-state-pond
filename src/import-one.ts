/**
 * Imports ALL Parquet files into the Duck Db.
 * NOTE: there is one (or more) parquet files per table. 
 * The file name prefix is the same as the table, but it may include page numbers
 * such as 'vsamples001.parquet', 'vsamples002.parquet', etc.
 * All files have the '.parquet' extension
 */
import { open } from "./pond/ducky";
import { importFromParquetTo } from "./copy/import-parquet"; 
import { importMetadataTo } from "./copy/import-metadata";
import { buildMaterializedJoins } from "./copy/build-materialized-joins";
import { applyPatches } from "./copy/patches";
import { logger, LogLevel } from '@mazito/logger';
import { env, KVS } from "./utils";
import { triggerCheckpoint, getActiveConnection, READ_WRITE } from "./pond";

logger.level(LogLevel.DEBUG);

export async function importOne(vname: string) {
  // Open the Duckdb db
  let pond = await getActiveConnection(READ_WRITE);

  // Open KVS
  KVS.openDb();

  // the Parquet data filesort-all
  await importFromParquetTo(pond, vname);
 
  // we can create additional views, indexes, etc here ...
  await applyPatches(pond);

  await triggerCheckpoint();
};
