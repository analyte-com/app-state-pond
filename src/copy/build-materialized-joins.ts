import { safeExec, safeQuery } from "../pond";
import { logger } from "@mazito/logger";
import { createMaterializedCols, usingFulTable } from "./build-result-columns";

let tBuildJoins = 0;
let cols: any = [];

// we create one materialized table for each taskTreeId 
const CREATEx = (id: string, dataType: string) => `CREATE OR REPLACE TABLE T${id} AS 
  SELECT
    id
    ,sampleId
    ,${dataType === 'NUME' 
      ? `CASE WHEN NOT REGEXP_MATCHES(value, '^-?[0-9]+(\.[0-9]+)?$') 
         THEN value ELSE valueOffDetection END` 
      : `valueOffDetection`
    } as 'valueOffDetection'
    ,${dataType === 'NUME' 
      ? `CASE WHEN REGEXP_MATCHES(value, '^-?[0-9]+(\.[0-9]+)?$') 
         THEN CAST(value AS DOUBLE) ELSE NULL END` 
      : `value`
    } as 'value'
    ,valueUdm
    ,valueStateCode
    ,valueState
    ,stateCode
    ,state
    ,modifiedCode
    ,modified
    ,doneUtc
    ,doneById
    ,doneBy
    ,notes
    ,timeUsed
    ,timeUsedUdm
    ,repeatedCode
    ,repeated
    ,repetitionNum
    ,replicationNum
    ,instrumentId
    ,instrument
    ,intrumentStateCode
    ,instrumentState
  FROM vsample_tasks WHERE taskTreeId=${id}
;`;

const COL = (id: string, col: string) =>  
  `T${id}.${col} AS 'T${id}.${col}'`

const JOIN = (id: string) => 
  `LEFT OUTER JOIN T${id} ON T${id}.sampleId=s.id`;

const QUERY = (selects: string[], ojoins: string[]) => `SELECT 
s.id, ${selects.join(',')}
FROM 
vsamples s 
${ojoins.join(' \n')} 
ORDER BY s.id asc 
LIMIT 10000;
`;

export function createMaterializedJoins(cols: any[]): string[] {
  // Test query performance
  console.log("\nBuild Materialized tables Tx");

  const sqlCreates: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlCreates.push(CREATEx(taskTreeId, valueTypeCode));
  })
  console.log(`sqlCreates count=${sqlCreates.length}`);
  console.log(`sqlCreates=`, sqlCreates)
  return sqlCreates;
}

/**
 * Builds the materialized joinable tables needed for pivoting
 * There is one table 'Tx' per task with just its tasks
 * @param pond 
 * @param tableName 
 */
export async function buildMaterializedJoins(pond: any, tableName: string) {
  // get all possible columns
  let sql = `SELECT distinct taskTreeId, valueTypeCode FROM vsample_tasks ORDER BY taskTreeId`;
  let rs = await safeQuery(pond, sql);
  cols = rs.result.rows.map((t: any) => { return {taskTreeId: t[0], valueTypeCode: t[1]} });
  logger.info(`Distinct tasks to pivot count= ${cols.length}`);
  //logger.info(`Distint tasks to pivot `, cols);

  // create the materialized joins
  let creates = createMaterializedJoins(cols);
  const t1 = (new Date()).getTime();
  logger.timer(`Start materializing tables=${cols.length} stmts=${creates.length}`);
  for (let j=0; j < creates.length; j++) {
    let rs = await safeExec(pond, creates[j]);
  }
  const t2 = (new Date()).getTime();
  tBuildJoins = (t2 - t1)/1000;
  logger.elapsed(`End of create pivoted`);
  logger.info(`Create pivoted time= ${tBuildJoins.toFixed(2)}secs`);
  logger.info(`Create pivoted table time per column= ${((t2 - t1)/cols.length/1000).toFixed(2)}secs/column`);

  console.log(`\nMaterialized ${cols.length} Task columns`);
  console.log(`Create Materialized Cols time= ${(tBuildJoins/cols.length).toFixed(2)} secs/col`);
};
