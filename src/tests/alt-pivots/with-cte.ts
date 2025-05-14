import { cols } from "./arpol-task-tree-ids";

const COL = (id: string, col: string) =>  
  `T${id}.${col} AS 'T${id}.${col}'`

const Tx = (id: string) => 
//  `T${id} AS (SELECT *sampleId, value, doneUtc, doneBy FROM vsample_tasks WHERE taskTreeId=${id})`;
  ` T${id} AS (SELECT * FROM vsample_tasks WHERE taskTreeId=${id})`;

const JOIN = (id: string) => 
  ` LEFT OUTER JOIN T${id} ON T${id}.sampleId=s.id`;

const QUERY = (withs: string[], selects: string[], ojoins: string[]) => `
WITH  
${withs.join(',\n')}
SELECT 
s.id, ${selects.join(',')}
FROM 
 vsamples s
${ojoins.join('\n')} 
ORDER BY s.id asc 
LIMIT 10000;`;

export function pivotUsingWithCTE(): string {
  // Test query performance
  console.log("\nBuild query using With CTE joins");
  
  const sqlWith: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlWith.push(Tx(taskTreeId));
  })
  console.log(`sqlWith count=${sqlWith.length}`);

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

  const sql = QUERY(sqlWith, sqlSelect, sqlLeftJoins);
  console.log(`sql size=${sql.length}`);
  console.log(`\nSQL=${sql}`);

  return sql;
}
