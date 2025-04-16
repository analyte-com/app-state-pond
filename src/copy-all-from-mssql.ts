/**
 * Copies a set of views/queries from the MSSQL Db to Parquet files.
 * The copy can be made using pagination for the query (copyToParquetPaged), 
 * which is useful for small tables.
 * Or can be copied paginating by a range of Ids (copyToParquetById), 
 * which is useful for bigger tables (like MUESTRA or TAREA_MUE).
 */
import { open, exec, query} from "./copy/ducky";
import { connectRdb } from "./copy/connect-mssql";
import { copyToParquetById, copyToParquetPaged } from "./copy/copy-parquet"; 
import { logger, LogLevel } from "@mazito/logger";
import { env } from "./utils/env";
import * as views from "./qualify-views";

logger.level(LogLevel.DEBUG);

export async function copyAllFromMSSql() {
  // Open the Duckdb db
  let pond = await open(`${env.POND_DB}`);

  // Connect to the MSSQL database
  const rdb = await connectRdb(env);

  await copyToParquetPaged(pond, 'vclients', rdb, views.clientsView);

  await copyToParquetPaged(pond, 'vdepartments', rdb, views.departmentsView);    

  await copyToParquetPaged(pond, 'vmaterials', rdb, views.materialsView);    

  await copyToParquetPaged(pond, 'vdepartment_materials', rdb, views.departmentMaterialsView);

  await copyToParquetPaged(pond, 'vpoints', rdb, views.pointsView);    

  await copyToParquetPaged(pond, 'vsample_types', rdb, views.sampleTypesView);  

  await copyToParquetPaged(pond, 'vsample_subtypes', rdb, views.sampleSubtypesView);  

  await copyToParquetPaged(pond, 'vmaterial_specifications', rdb, views.materialSpecificationsView);

  await copyToParquetPaged(pond, 'vspecification_tasks', rdb, views.specificationTasksView);  
  
  await copyToParquetPaged(pond, 'vtasks', rdb, views.tasksView);  

  await copyToParquetPaged(pond, 'vextensions', rdb, views.extensionsView);  

  await copyToParquetPaged(pond, 'vuser_departments', rdb, views.userDepartmentsView);  

  await copyToParquetById(pond, 'vsamples', rdb, 
    views.samplesView, 
    'select 0 as MIN, MAX(IDMUE) from MUESTRA'
  );  

  // Close the connection
  await rdb?.close();
};
