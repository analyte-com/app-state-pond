import parquet, { ParquetSchema, ParquetWriter } from "@dsnp/parquetjs";
import { logger } from "@mazito/logger";
import { buildPivotedParquetSchema, taskColumnName, parquetValue } from "./pivot-utils";
import { safeQuery, safeExec, getActiveConnection, READ_WRITE } from "../pond";
import { env } from "../utils/env";
import type { DuckDBConnection } from "@duckdb/node-api";

/**
 * Pivot VSAMPLE_TASKS to a Parquet file
 * @param fileName 
 */
export async function pivotToParquet(
  pond: DuckDBConnection,
  fileName: string
) {
  let parquetSchema: ParquetSchema | null = null;
  let columns: any[] = [];
  logger.context('pivotToParquet').timer();
  
  try {
    let page = 1, total = 0;
    const MAX_ROWS = 50000;
    let hasMoreData = true;
    let startId = 0, endId = 0, lastId = 0;
    logger.info(`file= '${fileName}'`);
    
    // we need the Pivot schema constructed from the TaskTrees tables
    parquetSchema = await buildPivotedParquetSchema(pond);

    // get limits for the sampleId values
    [startId, lastId] = await queryMinMax(pond);

    while (hasMoreData) {
      // run the query limited to MAX_ROWS rows
      // query is "id >= startId and id < endId"
      endId = Number(startId) + MAX_ROWS - 1; 
      const chunk = await queryChunkedByIds(pond, startId, endId);

      // and we create one file for each chunked page
      // with the name 'vxxx001.parquet' and following 
      const chunkName = `${fileName}${page.toString().padStart(3, '0')}.parquet`;

      // we now PIVOT this data set and write it to the new parquet file
      // the pivoted data will have one row per sample, 
      // and the sample tasks as columns 
      await pivotChunkToParquet(chunkName, parquetSchema, chunk); 

      // check if we've reached the end
      //const last = chunk.length ? chunk[chunk.length - 1][idColIndex] || ;
      hasMoreData = (endId < lastId!);
      //console.log(last, lastId, hasMoreData);
      
      total = total + chunk.length;
      startId = endId + 1;
      page = page + 1;
    }

    logger.elapsed(`done= ${total} rows`);
  } 
  catch (error) {
    logger.error(`failed= '${fileName}'`, error);
  } 
  finally {
    // now flush the file to disk
    //if (writer) await writer?.close();
    logger.elapsed(`writer closed`).context();
  }
};

async function queryMinMax(
  pond: DuckDBConnection
): Promise<[number, number]> {
  logger.info(`query min/max sampleId`);
  const rs = await safeQuery(pond, `
    select 32200 as min, 32250 as max 
    from VSAMPLE_TASKS 
  `);
  if (rs.error) throw rs.error;
  //select 0 as min, max(sampleId) as max 
  
  const [min, max] = rs.result.rows[0];
  logger.info(`sampleId min=${min} max=${max}`);
  return [min, max];
}

async function queryChunkedByIds(
  pond: DuckDBConnection,
  startId: number, 
  endId: number
): Promise<any> {
  logger.info(`queryChunkedByIds: start= ${startId} end= ${endId}`);

  // query the sample tasks table
  // it is already in Duckdb 
  let rs = await safeQuery(pond, `select 
      sampleId, taskTreeId, valueTypeCode,
      id,
      stateCode,
      value, 
      valueOffDetection,
      valueStateCode,
      doneUtc,
      doneById,
      doneBy,
      instrumentId,
      instrument,
      intrumentStateCode,
      modifiedCode,
      repetitionNum,
      replicationNum,
      notes
    from VSAMPLE_TASKS 
    where sampleId >= ${startId} and sampleId <= ${endId}
    order by sampleId asc, id asc;
  `)
  if (rs.error) throw rs.error;

  logger.elapsed(`queryChunkedByIds: start= ${startId} end= ${endId} count= ${rs.result.rows.length}`);
  return rs.result.rows;
}


async function pivotChunkToParquet(
  chunkFileName: string, 
  parquetSchema: ParquetSchema,
  rows: any[]
) {
    let current: any | null = null, count = 0;

    // we open the ParquetWriter with the
    // and we create one file for each page
    // with the name 'vxxx001.parquet' and following 
    let writer = await parquet.ParquetWriter.openFile(parquetSchema, chunkFileName);

    // pivot it using IDTAR as columns
    for (let j=0; j < rows.length; j++) {
      let [
        sampleId, taskTreeId, valueTypeCode,
        id,
        state,
        value, 
        offDetection,
        valueState,
        doneUtc,
        doneById,
        doneBy,
        instrumentId,
        instrument,
        intrumentState,
        modified,
        repetitionNum,
        replicationNum,
        notes
      ] = rows[j];  
      const t = {
        id,
        state,
        value, 
        offDetection,
        valueState,
        doneUtc,
        doneById,
        doneBy,
        instrumentId,
        instrument,
        intrumentState,
        modified,
        repetitionNum,
        replicationNum,
        notes
      };
      sampleId = BigInt(sampleId);

      // check if we have a current and the current sampleId has changed
      if (current !== null && current.sampleId !== sampleId) {
        // it has changed
        // first push the current to pivoted parquet file 
        console.log(`Write count=${count} ${sampleId} ${taskTreeId}`);
        await writer.appendRow(current);
        count = count + 1;

        // now we set this as the new current 
        current = { 'sampleId': sampleId };  
      }

      // we still have no current sampleId, we need one
      if (current === null) {
        // this is a new current, start it
        current = { 'sampleId': sampleId }; 
      }

      // first apply all needed casts to the data fields in this row
      // most of the are ALFA so we dont need to change them
      t.id = parquetValue('INT', t.id);
      t.instrumentId = parquetValue('INT', t.instrumentId);
      t.doneById = parquetValue('INT', t.doneById);
      t.value = parquetValue(valueTypeCode, t.value);
      t.doneUtc = parquetValue('DATETIME', t.doneUtc);
      t.repetitionNum = parquetValue('INT', t.repetitionNum);
      t.replicationNum = parquetValue('INT', t.replicationNum);

      // now we can add this task as a column to current sample
      const colName = taskColumnName(taskTreeId);
      current[colName] = { ...t } ;
    };

    // we may have one last row remaining in the current buffer
    if (current !== null) {
      // push the last current to pivoted parquet file 
      await writer.appendRow(current);
      count = count + 1;
    }

    await writer?.close();
}
