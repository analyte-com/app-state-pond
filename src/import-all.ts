import { open } from "./ducky";
import { importTo } from "./copyto"; 
import { logger, LogLevel } from '@mazito/logger';
import { env } from "./env";

logger.level(LogLevel.DEBUG);

export async function importAll() {
  // Open the Duckdb db
  let pond = await open(`${env.POND_DB}`);

  await importTo(pond, 'vclients');
  await importTo(pond, 'vdepartments');    
  await importTo(pond, 'vdepartment_materials');    
  await importTo(pond, 'vmaterials');    
  await importTo(pond, 'vmaterial_specifications');    
  await importTo(pond, 'vpoints');    
  await importTo(pond, 'vsample_subtypes');    
  await importTo(pond, 'vsample_types');    
  await importTo(pond, 'vspecification_tasks');    
  await importTo(pond, 'vtasks');    
  await importTo(pond, 'vextensions');    
  await importTo(pond, 'vuser_departments');    
  await importTo(pond, 'vsamples');    
};


