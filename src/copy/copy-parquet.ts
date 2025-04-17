import * as sql from "mssql"; // Import the mssql package
import parquet, { ParquetSchema, ParquetWriter } from "@dsnp/parquetjs";
import { exec } from "../pond/ducky";
import { logger } from "@mazito/logger";
import { buildParquetSchema, cleanupValue } from "./parquet-utils";
import { env } from "../utils/env";

/**
 * Copy from MSSQL to a paged Parquet file
 * @param pool 
 * @param queryStmt 
 * @param fileName 
 */
async function exportToParquetPaged(
  pool: sql.ConnectionPool,
  queryStmt: string,
  fileName: string
) {
  let writer: ParquetWriter | null = null;
  let parquetSchema: ParquetSchema | null = null;
  let columns: any[] = [];
  
  try {
    logger.info(`copyToParquet: file= '${fileName}'`);
    let page = 1, total = 0;
    const MAX_ROWS = 50000;
    let hasMoreData = true;

    while (hasMoreData) {
      // run the query limited to MAX_ROWS rows
      const result = await queryChunkedByPage(pool, queryStmt, page, MAX_ROWS);
      
      // we need the Parquet schema to create the writer 
      // we use the first Chunked page for this
      if (page === 1) {
        columns = result.recordset.columns;
        parquetSchema = buildParquetSchema(columns);
      }

      // we open the ParquetWriter and we create one file for each page
      // with the name 'vxxx001.parquet' and following 
      const chunkName = `${fileName}${page.toString().padStart(3, '0')}`;
      writer = await parquet.ParquetWriter.openFile(
        parquetSchema!, 
        `${chunkName}.parquet`
      );

      // now we can write the data 
      const chunk = [].concat(result?.recordset as any);
      await writeParquetChunk(writer, columns, chunk, chunkName);

      // now flush the file to disk
      await writer?.close();
      writer = null;

      // check if we've reached the end
      hasMoreData = (result.recordset.length >= MAX_ROWS);
      total = total + chunk.length;
      page = page + 1;
    }

    logger.elapsed(`copyToParquet: done= ${total} rows`);
  } 
  catch (error) {
    logger.error(`copyToParquet: failed= '${fileName}'`, error);
  } 
  finally {
    // now flush the file to disk
    if (writer) await writer?.close();
    logger.elapsed(`copyToParquet: writer closed`);
  }
};

/**
 * Copies from MSSQL to a Parquet file, using IDs as limits.
 * @param pool 
 * @param queryStmt 
 * @param fileName 
 * @param minMaxStmt - the uqery to get Min and Max ID values
 */
async function exportToParquetById(
  pool: sql.ConnectionPool,
  queryStmt: string,
  fileName: string,
  minMaxStmt: string
) {
  let writer: ParquetWriter | null = null;
  let parquetSchema: ParquetSchema | null = null;
  let columns: any[] = [];
  
  try {
    logger.info(`copyToParquet: file= '${fileName}'`);
    let page = 1, total = 0;
    const MAX_ROWS = 50000;
    let hasMoreData = true;
    let idColIndex = 0;
    let startId = 0, endId = 0, lastId = 0;

    // get limits for the ID values
    let [min, max] = await queryMinMax(pool, minMaxStmt);
    startId = min;
    lastId = max;

    while (hasMoreData) {
      // run the query limited to MAX_ROWS rows
      endId = startId + MAX_ROWS -1;
      const result = await queryChunkedByIds(pool, queryStmt, startId, endId);
      
      // we need the Parquet schema to create the writer 
      // we use the first Chunked page for this
      if (page === 1) {
        columns = result.recordset.columns;
        parquetSchema = buildParquetSchema(columns);

        // find which column is the ID column
        columns.forEach((t,k) => { 
          if (t.name.toLowerCase() == 'id') idColIndex = k;
        });
      }

      // we open the ParquetWriter and we create one file for each page
      // with the name 'vxxx001.parquet' and following 
      const chunkName = `${fileName}${page.toString().padStart(3, '0')}`;
      writer = await parquet.ParquetWriter.openFile(
        parquetSchema!, 
        `${chunkName}.parquet`
      );

      // now we can write the data 
      const chunk = [].concat(result?.recordset as any);
      await writeParquetChunk(writer, columns, chunk, chunkName);

      // now flush the file to disk
      await writer?.close();
      writer = null;

      // check if we've reached the end
      //const last = chunk.length ? chunk[chunk.length - 1][idColIndex] || ;
      hasMoreData = (endId < lastId!);
      //console.log(last, lastId, hasMoreData);
      
      total = total + chunk.length;
      startId = endId + 1;
      page = page + 1;
    }

    logger.elapsed(`copyToParquet: done= ${total} rows`);
  } 
  catch (error) {
    logger.error(`copyToParquet: failed= '${fileName}'`, error);
  } 
  finally {
    // now flush the file to disk
    if (writer) await writer?.close();
    logger.elapsed(`copyToParquet: writer closed`);
  }
};


/**
 * Executes the query to get Min and Max ID
 * @returns min, max
 */
async function queryMinMax(
  pool: sql.ConnectionPool,
  stmt: string
): Promise<[number, number]> {
  logger.timer(`copyToParquet: query min/max sql= ${stmt}`);
  
  let request = new sql.Request(pool);
  request.arrayRowMode = true;
  const result = await request.query(`${stmt}`);
  let [min, max] = result.recordset[0];

  logger.elapsed(`copyToParquet: query min= ${min} max = ${max}`);
  return [min, max];
}

/**
 * Query chunks using AX_ROWS rows, starting at given @page
 * @param pool 
 * @param page 
 * @param stmt - the query to execute
 * @param MAX_ROWS 
 * @returns 
 */
async function queryChunkedByPage(
  pool: sql.ConnectionPool,
  stmt: string,
  page: number, 
  MAX_ROWS: number
): Promise<any> {
  logger.timer(`copyToParquet: query start page= ${page}`);
  
  let request = new sql.Request(pool);
  request.arrayRowMode = true;
  
  const result = await request
    .input('pageSize', sql.Int, MAX_ROWS)
    .input('offset', sql.Int, ((page - 1) * MAX_ROWS))
    .query(`${stmt} OFFSET @offset ROWS FETCH NEXT @pageSize ROWS ONLY`);

  logger.elapsed(`copyToParquet: query end page= ${page} count= ${result.recordset.length}`);
  return result;
}

/**
 * Query chunks using a range of IDs as limits
 * @param pool 
 * @param stmt 
 * @param startId 
 * @param endId 
 * @returns 
 */
async function queryChunkedByIds(
  pool: sql.ConnectionPool,
  stmt: string,
  startId: number, 
  endId: number
): Promise<any> {
  logger.timer(`copyToParquet: query start startId= ${startId}`);
  
  let request = new sql.Request(pool);
  request.arrayRowMode = true;
  
  const result = await request
    .input('startId', sql.Int, startId)
    .input('endId', sql.Int, endId)
    .query(`${stmt}`);

  logger.elapsed(`copyToParquet: query end start= ${startId} end= ${endId} count= ${result.recordset.length}`);
  return result;
}

/**
 * Writes ths data chunk to a parquet file
 * @param writer 
 * @param columns 
 * @param data 
 */
async function writeParquetChunk(
  writer: any, 
  columns: any[], 
  data: any[],
  chunkName: string
) {
  for (let j = 0; j < data.length; j++) {
    // the data row we will write to Parquet
    //  it is an object with the column names as keys
    const parquetRow: any = {};

    // traverse the columns of each result row 
    // and build the parquet row
    for (let k=0; k < (data[j] as any[]).length; k++) {
      // we do some cleanup of the value before copying it
      parquetRow[columns[k].name] = cleanupValue(data[j][k], columns[k]);
    }
    //console.log(`data ${j}: `, data[j]);
    //console.log(`row ${j}: `, JSON.stringify(parquetRow));
    
    // logger.debug(dataRow);
    await writer.appendRow(parquetRow);
  }

  logger.elapsed(`copyToParquet: saved file= ${chunkName} rows= ${data.length}`);
}

/**
 * Copies from an MSSQL table to a Duckdb table
 * @param pond 
 * @param tableName 
 * @param rdb 
 * @param query 
 * @returns 
 */
export async function copyToParquetPaged(
  pond: any,
  tableName: string,
  rdb: sql.ConnectionPool,
  query: string
) {
  try {
    const fileName = `${env.POND_IMPORTS}/${tableName}`
    
    await exportToParquetPaged(rdb, query, fileName);
    
    await exec(pond, `DROP TABLE if exists ${tableName};`);
  
    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_parquet('${fileName}*.parquet');
    `);
  }
  catch (error) {
    logger.error(`copyTo failed='${tableName}'`, error);
  }
}

export async function copyToParquetById(
  pond: any,
  tableName: string,
  rdb: sql.ConnectionPool,
  query: string,
  minMaxQuery: string
) {
  try {
    const fileName = `${env.POND_IMPORTS}/${tableName}`;
    await exportToParquetById(rdb, query, fileName, minMaxQuery);
    
    await exec(pond, `DROP TABLE if exists ${tableName};`);

    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_parquet('${fileName}*.parquet');
    `);
  }
  catch (error) {
    logger.error(`copyTo failed='${tableName}'`, error);
  }
}
