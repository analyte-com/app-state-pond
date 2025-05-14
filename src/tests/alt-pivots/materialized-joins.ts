import { logger } from "@mazito/logger";
import { cols } from "./arpol-task-tree-ids";

// we create one materialized table for each taskTreeId 
const CREATEx = (id: string) => `CREATE OR REPLACE TABLE T${id} AS 
  SELECT * FROM vsample_tasks WHERE taskTreeId=${id}
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

export function createMaterialized(): string[] {
  // Test query performance
  console.log("\nBuild Materialized tables Tx");

  const sqlCreates: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlCreates.push(CREATEx(taskTreeId));
  })
  console.log(`sqlCreates count=${sqlCreates.length}`);
  console.log(`sqlCreates=`, sqlCreates)
  return sqlCreates;
}

export function pivotUsingMaterializedJoins(): string {
  // Test query performance
  console.log("\nBuild query using Materialized joins");

  const sqlSelect: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlSelect.push(COL(taskTreeId, 'value'));
    sqlSelect.push(COL(taskTreeId, 'doneUtc'));
    sqlSelect.push(COL(taskTreeId, 'doneBy'));
  })
  console.log(`sqlSelect count=${sqlSelect.length}`);

  const sqlLeftJoins: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlLeftJoins.push(JOIN(taskTreeId));
  })
  console.log(`sqlLeftJoins count=${sqlLeftJoins.length}`);

  const sql = QUERY(sqlSelect, sqlLeftJoins);
  console.log(`SQL size=${sql.length}`);
  console.log(`SQL query=\n${sql}`);
  return sql;
}
