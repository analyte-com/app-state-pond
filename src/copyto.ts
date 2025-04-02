import { write } from "bun";
import * as sql from "mssql"; // Import the mssql package
import { exec } from "./ducky";
import { logger } from "@mazito/logger";
import { env } from "./env";

const SEPR = '|'; // CSV delimiter used instead of ','

export async function copyToCSV(
  pool: sql.ConnectionPool,
  queryStmt: string,
  csvName: string
) {
  let writer;
  try {
    // open file
    const file = Bun.file(csvName);
    writer = file.writer();
    logger.info(`copyToCSV: file= '${csvName}'`);
    
    // run the query
    logger.timer(`copyToCSV: query start`);
    let request = new sql.Request(pool);
    request.arrayRowMode = true;
    const result = await request.query(queryStmt);
    logger.elapsed(`copyToCSV: query end`);
    
    // write header row
    const columns = result.recordset.columns;
    let headerRow = (columns || []).map(t => {
      return `${t.name}`
    }).join(SEPR)
    logger.elapsed(`copyToCSV: header= '${headerRow}'`);
    writer.write(headerRow + '\n');

    // write data rows
    const data = [].concat(result?.recordset as any);
    for (let j = 0; j < data.length; j++) {
      let dataRow = (data[j] || []).map(t => {
        return (''+t)
          // remove all characters that are not:
          // - printable ASCII (except control chars)
          // - printable Unicode (letters, marks, numbers, symbols, punctuation, spaces)
          // This excludes control characters and other non-printable codes.
          .replace(/[^\P{C}]/gu, '')  // remove all control chars
          .replaceAll(SEPR, '')       // remove SEPR char 
          .replace('null','NULL');    // convert to db NULL
      }).join(SEPR);
      // logger.debug(dataRow);
      writer.write(dataRow + '\n');
    }

    // done ! 
    logger.elapsed(`copyToCSV: done= ${data.length} rows`);
  } 
  catch (error) {
    logger.error(`copyToCSV: failed= '${csvName}'`, error);
  } 
  finally {
    // close file
    writer?.flush();
    writer?.end();
  }
};

export async function copyTo(
  pond: any,
  tableName: string,
  rdb: sql.ConnectionPool,
  query: string
) {
  try {
    const csvName = `${env.POND_IMPORTS}/${tableName}.csv`
    
    await copyToCSV(rdb, query, csvName);
  
    await exec(pond, `DROP TABLE if exists ${tableName};`);
  
    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_csv('${csvName}', header = true);
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