import { getActiveConnection, READ_WRITE, safeQuery } from "../pond";
//import { buildPivotedParquetSchema } from "../copy/pivot-utils";
//import { pivotToParquet } from "../copy/pivot-sample-tasks";
import { env } from "../utils";
import { logger } from "@mazito/logger";
import { cols } from './arpol-task-tree-ids';

// Open the Duckdb db
let pond = await getActiveConnection(READ_WRITE);

// Not ready yet !
//await buildPivotedParquetSchema(pond);
//await pivotToParquet(pond, `${env.POND_IMPORTS}/vpivoted_sample_tasks`);

const T_AS = (id: string) => `T${id} AS (
  SELECT sampleId, value, doneUtc, doneBy FROM vsample_tasks WHERE taskTreeId=${id}
)`;

const T_LEFTJOIN = (id: string) => `LEFT OUTER JOIN T${id} ON T${id}.sampleId=s.id`;

async function pivotUsingWITH() {
  // Test query performance
  const sqlWith: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlWith.push(T_AS(taskTreeId));
  })
  console.log(`slqWith count=${sqlWith.length}`);

  const sqlSelect: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlSelect.push(`T${taskTreeId}.value AS 'T${taskTreeId}.value'`);
    sqlSelect.push(`T${taskTreeId}.doneUtc AS 'T${taskTreeId}.doneUtc'`);
    sqlSelect.push(`T${taskTreeId}.doneBy AS 'T${taskTreeId}.doneBy'`);
  })
  console.log(`slqSelect count=${sqlSelect.length}`);

  const sqlLeftJoins: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlLeftJoins.push(T_LEFTJOIN(taskTreeId));
  })
  console.log(`slqLeftJoins count=${sqlLeftJoins.length}`);

  const sql = `
  WITH 
    ${sqlWith.join(', \n ')}
  SELECT 
    s.id, ${sqlSelect.join(',')}
  FROM 
    vsamples s 
    ${sqlLeftJoins.join(' \n ')} 
  ORDER BY s.id asc 
  LIMIT 10000;`;
  console.log(sql);

  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  logger.elapsed('End of query');
  //console.log(rs.result.rows.slice(0,20));
}

async function pivotUsingINLINE() {
  // Test query performance
  const sqlSelect: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlSelect.push(`T${taskTreeId}.value AS 'T${taskTreeId}.value'`);
    sqlSelect.push(`T${taskTreeId}.doneUtc AS 'T${taskTreeId}.doneUtc'`);
    sqlSelect.push(`T${taskTreeId}.doneBy AS 'T${taskTreeId}.doneBy'`);
    sqlSelect.push(`T${taskTreeId}.*`);
  })
  console.log(`slqSelect count=${sqlSelect.length}`);

  const sqlLeftJoins: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlLeftJoins.push(`LEFT OUTER JOIN vsample_tasks 
      T${taskTreeId} ON T${taskTreeId}.sampleId=s.id
    `);
  })
  console.log(`slqLeftJoins count=${sqlLeftJoins.length}`);

  const sql = `
  SELECT 
    s.id, ${sqlSelect.join(',')}
  FROM 
    vsamples s 
    ${sqlLeftJoins.join(' \n ')} 
  ORDER BY s.id asc 
  LIMIT 10000;`;
  console.log(sql);

  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  logger.elapsed('End of query');
  //console.log(rs.result.rows.slice(0,20));
}

await pivotUsingWITH();
//await pivotUsingINLINE(); // HANGS !!!
