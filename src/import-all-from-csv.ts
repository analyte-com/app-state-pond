import { open } from "./ducky";
import { importTo } from "./copyto"; 
import { logger, LogLevel } from '@mazito/logger';
import { env } from "./env";

logger.level(LogLevel.DEBUG);

export async function importAllFromCsv() {
  // Open the Duckdb db
  let pond = await open(`${env.POND_DB}`);

  await importTo(pond, 'vclients');
  await importTo(pond, 'vdepartments');    
  await importTo(pond, 'vmaterials');    
  await importTo(pond, 'vpoints');    
};

