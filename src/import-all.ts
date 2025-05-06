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
import { logger, LogLevel } from '@mazito/logger';
import { env, KVS } from "./utils";
import { triggerCheckpoint, getActiveConnection, READ_WRITE } from "./pond";

logger.level(LogLevel.DEBUG);

export async function importAll() {
  // Open the Duckdb db
  let pond = await getActiveConnection(READ_WRITE);

  // Open KVS
  KVS.openDb();

  // some Metadata files 
  await importMetadataTo(pond, 'sample_columns');

  // the Parquet data files
  await importFromParquetTo(pond, 'vcodes');
  await importFromParquetTo(pond, 'vclients');
  await importFromParquetTo(pond, 'vdepartments');    
  await importFromParquetTo(pond, 'vdepartment_materials');    
  await importFromParquetTo(pond, 'vmaterials');    
  await importFromParquetTo(pond, 'vmaterial_specifications');    
  await importFromParquetTo(pond, 'vpoints');    
  await importFromParquetTo(pond, 'vsample_subtypes');    
  await importFromParquetTo(pond, 'vsample_types');    
  await importFromParquetTo(pond, 'vspecification_tasks');    
  await importFromParquetTo(pond, 'vtasks');    
  await importFromParquetTo(pond, 'vtask_trees');    
  await importFromParquetTo(pond, 'vextensions');    
  await importFromParquetTo(pond, 'vuser_departments');    
  await importFromParquetTo(pond, 'vsamples');    
  await importFromParquetTo(pond, 'vsample_tasks');    

  await triggerCheckpoint();
};
