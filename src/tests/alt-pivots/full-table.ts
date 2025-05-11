import { logger } from "@mazito/logger";

// we create the ALLTx table 
const CREATEALL = `CREATE OR REPLACE TABLE ALLTx AS (
  SELECT distinct sampleId FROM vsample_tasks
);`;

// we create one column for each taskTreeId 
const COLx = (id: string) => `ALTER TABLE ALLTx 
  ADD COLUMN t${id} STRUCT(
    id BIGINT,
    valueOffdetection VARCHAR,
    value VARCHAR,
    valueUdm VARCHAR,
    valueStateCode VARCHAR,
    valueState VARCHAR,
    stateCode VARCHAR,
    state VARCHAR,
    modifiedCode VARCHAR,
    modified VARCHAR,
    doneUtc TIMESTAMP,
    doneById BIGINT,
    doneBy VARCHAR,
    notes VARCHAR,
    timeUsed DOUBLE,
    timeUsedUdm VARCHAR,
    repeatedCode VARCHAR,
    repeated VARCHAR,
    repetitionNum BIGINT,
    replicationNum BIGINT,
    instrumentId BIGINT,
    instrument VARCHAR,
    intrumentStateCode VARCHAR,
    instrumentState VARCHAR
  )
;`.replace('\t',' ');

const UPDATEx = (id: string) => `UPDATE ALLTx 
  SET T${id} = row(
    ta${id}.id
    ,ta${id}.valueOffdetection
    ,ta${id}.value
    ,ta${id}.valueUdm
    ,ta${id}.valueStateCode
    ,ta${id}.valueState
    ,ta${id}.stateCode
    ,ta${id}.state
    ,ta${id}.modifiedCode
    ,ta${id}.modified
    ,ta${id}.doneUtc
    ,ta${id}.doneById
    ,ta${id}.doneBy
    ,ta${id}.notes
    ,ta${id}.timeUsed
    ,ta${id}.timeUsedUdm
    ,ta${id}.repeatedCode
    ,ta${id}.repeated
    ,ta${id}.repetitionNum
    ,ta${id}.replicationNum
    ,ta${id}.instrumentId
    ,ta${id}.instrument
    ,ta${id}.intrumentStateCode
    ,ta${id}.instrumentState
  ) 
  FROM (SELECT * FROM vsample_tasks WHERE taskTreeId=${id}) AS ta${id} 
  WHERE ALLTx.sampleId = ta${id}.sampleId
;`;

const COL = (id: string, col: string) =>  
  `T${id}.${col} as 'T${id}.${col}'`

const QUERY = (selects: string[]) => `SELECT 
sampleId, ${selects.join(',')} 
FROM ALLTx 
ORDER BY sampleId asc 
LIMIT 10000;
`;

export function createMaterializedCols(cols: any[]): string[] {
  // Test query performance
  console.log("\nBuild Materialized columns Tx");
  const sqlCreates: string[] = [];

  // first recreate the Full table
  sqlCreates.push(CREATEALL);

  // now we create one column per Task and update it
  cols.forEach(({taskTreeId}) => {
    sqlCreates.push(COLx(taskTreeId));
    sqlCreates.push(UPDATEx(taskTreeId));
  })
  console.log(`sqlCreates count=${sqlCreates.length}`);
  console.log(`sqlCreates=`, sqlCreates)
  return sqlCreates;
}

export function usingFulTable(cols: any[]): string {
  // Test query performance
  console.log("\nBuild query using Full table (NO joins)");

  const sqlSelect: string[] = [];
  cols.forEach(({taskTreeId, valueTypeCode}) => {
    sqlSelect.push(COL(taskTreeId, 'value'));
    sqlSelect.push(COL(taskTreeId, 'doneUtc'));
    sqlSelect.push(COL(taskTreeId, 'doneBy'));
  })
  console.log(`sqlSelect count=${sqlSelect.length}`);

  const sql = QUERY(sqlSelect);
  console.log(`SQL size=${sql.length}`);
  console.log(`SQL query=\n${sql}`);
  return sql;
}
