import { exec } from "./pond/ducky";
import { logger } from "@mazito/logger";
import { env } from "../utils/env";

export async function importFromParquetTo(
  pond: any,
  tableName: string
) {
  try {
    const fileName = `${env.POND_IMPORTS}/${tableName}`;
    
    await exec(pond, `DROP TABLE if exists ${tableName};`);

    await exec(pond, `
      CREATE TABLE ${tableName} AS 
      SELECT * FROM read_parquet('${fileName}*.parquet');
    `);
  }
  catch (error) {
    logger.error(`importTo failed='${tableName}'`, error);
  }
}
