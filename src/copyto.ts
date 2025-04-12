import { write } from "bun";
import * as sql from "mssql"; // Import the mssql package
import parquet, { ParquetWriter } from "@dsnp/parquetjs";
import { exec } from "./ducky";
import { logger } from "@mazito/logger";
import { buildParquetSchema, cleanupValue } from "./parquet-utils";
import { env } from "./env";


export async function copyToParquet(
  pool: sql.ConnectionPool,
  queryStmt: string,
  fileName: string
) {
  let writer: ParquetWriter | null = null;
  
  try {
    logger.info(`copyToParquet: file= '${fileName}'`);
    let page = 1, total = 0;
    const PAGE_SIZE = 25000;
    let hasMoreData = true;
    let columns: any[] = [];

    while (hasMoreData) {
      const result = await queryChunked(pool, queryStmt, page, PAGE_SIZE);
      
      if (page === 1) {
        // we need the Parquet schema to create the writer 
        // we use the first Chunked page for this
        columns = result.recordset.columns;
        let parquetSchema = buildParquetSchema(columns);

        // we can open ParquetWriter now
        writer = await parquet.ParquetWriter.openFile(parquetSchema, fileName);
      }

      // now we can write the data 
      const chunk = [].concat(result?.recordset as any);
      await writeParquetChunk(writer, columns, chunk)

      // check if we've reached the end
      hasMoreData = (result.recordset.length >= PAGE_SIZE);
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
    await writer?.close();
    logger.elapsed(`copyToParquet: writer closed`);
  }
};

/**
 * Executes the query returning a max of PAGE_SIZE rows, starting at given @page
 * @param pool 
 * @param page 
 * @param stmt - the query to execute
 * @param PAGE_SIZE 
 * @returns 
 */
async function queryChunked(
  pool: sql.ConnectionPool,
  stmt: string,
  page: number, 
  PAGE_SIZE: number
): Promise<any> {
  logger.timer(`copyToParquet: query start page= ${page}`);
  
  let request = new sql.Request(pool);
  request.arrayRowMode = true;
  
  const result = await request
    .input('pageSize', sql.Int, PAGE_SIZE)
    .input('offset', sql.Int, ((page - 1) * PAGE_SIZE))
    .query(`${stmt} OFFSET @offset ROWS FETCH NEXT @pageSize ROWS ONLY`);

  logger.elapsed(`copyToParquet: query end page= ${page} count= ${result.recordset.length}`);
  return result;
}

async function writeParquetChunk(writer: any, columns: any[], data: any[]) {
  for (let j = 0; j < data.length; j++) {
    // the data row we will write to Parquet
    //  it is an object with the column names as keys
    const parquetRow: any = {};

    // traverse the columns of each result row 
    // and build the parquet row
    for (let k=0; k < (data[j] as any[]).length; k++) {
      // we do some cleanup of the value before copying it
      parquetRow[columns[k].name] = cleanupValue(data[j][k]);
    }
    //console.log(`data ${j}: `, data[j]);
    //console.log(`row ${j}: `, parquetRow);
    
    // logger.debug(dataRow);
    await writer.appendRow(parquetRow);
  }

  logger.elapsed(`copyToParquet: appended rows= ${data.length}`);
}

export async function copyTo(
  pond: any,
  tableName: string,
  rdb: sql.ConnectionPool,
  query: string
) {
  try {
    const fileName = `${env.POND_IMPORTS}/${tableName}.parquet`
    
    await copyToParquet(rdb, query, fileName);
    return;
    
    await exec(pond, `DROP TABLE if exists ${tableName};`);
  
    let described = await exec(pond, `DESCRIBE SELECT * FROM '${fileName}'`);
    console.log(described);

    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_parquet('${fileName}');
    `);
  }
  catch (error) {
    logger.error(`copyTo failed='${tableName}'`, error);
  }
}

export async function importTo(
  pond: any,
  tableName: string
) {
  try {
    const csvName = `${env.POND_IMPORTS}/${tableName}.csv`
  
    await exec(pond, `DROP TABLE if exists ${tableName};`);
  
    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_csv('${csvName}', header = true);
    `);
  }
  catch (error) {
    logger.error(`importTo failed='${tableName}'`, error);
  }
}