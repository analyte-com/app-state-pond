import { exec } from "../pond/ducky";
import { logger } from "@mazito/logger";
import { env } from "../utils/env";

export async function importMetadataTo(
  pond: any,
  tableName: string
) {
  try {
    const csvName = `${env.POND_METADATA}/${tableName}.csv`
  
    await exec(pond, `DROP TABLE if exists ${tableName};`);
  
    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_csv('${csvName}', header = true, strict_mode=false);
    `);
  }
  catch (error) {
    logger.error(`importMetadataTo failed='${tableName}'`, error);
  }
}

