import { logger } from "@mazito/logger";
import { cols } from "./arpol-task-tree-ids";

const COL = (id: string, col: string) =>  
  `T${id}.${col} AS 'T${id}.${col}'`

const JOIN = (id: string) => 
  `LEFT OUTER JOIN vsample_tasks T${id} ON T${id}.sampleId=s.id`;

const QUERY = (selects: string[], ojoins: string[]) => `SELECT
s.id, ${selects.join(',')}
FROM 
vsamples s 
${ojoins.join(' \n')} 
ORDER BY s.id asc 
LIMIT 10000;
`;

export function pivotUsingInlineJoins(): string {
  // Test query performance
  console.log("\nBuild query using inline joins");

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
  console.log(`sql size=${sql.length}`);
  console.log(`\nSQL=${sql}`);
  return sql;
}
