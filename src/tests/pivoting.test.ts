import { getActiveConnection, READ_WRITE, safeExec, safeQuery } from "../pond";
import { logger } from "@mazito/logger";
import { cols } from "./alt-pivots/arpol-task-tree-ids";
import { pivotUsingInlineJoins } from "./alt-pivots/inline-joins";
import { pivotUsingWithCTE } from "./alt-pivots/with-cte";
import { createMaterialized, pivotUsingMaterializedJoins } from "./alt-pivots/materialized-joins";
import { createMaterializedCols, usingFulTable } from "./alt-pivots/full-table";

// Open the Duckdb db
let pond = await getActiveConnection(READ_WRITE);

let 
  tInlineJoins = 0, tWithCTE = 0, 
  tCreateMaterialized = 0, tMaterializedJoins = 0,
  tCreateColumns = 0, tFullTable = 0;

{
  // run using the Inline joins
  let sql = pivotUsingInlineJoins();
  logger.timer(`Start big query len=${sql.length}`);
  // let rs = await safeQuery(pond, sql);
  logger.elapsed(`It NEVER ENDS !!! DISCARDED !!!`);
  tInlineJoins = Number.MAX_VALUE;
}

{
  // run using the WITH CTE joins
  const t1 = (new Date()).getTime();
  let sql = pivotUsingWithCTE();
  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  const t2 = (new Date()).getTime();
  tWithCTE = (t2 - t1)/1000;
  logger.elapsed(`End of query time= ${tWithCTE.toFixed(2)}secs`);
}

{
  // create the materialized tables
  let creates = createMaterialized();
  const t1 = (new Date()).getTime();
  logger.timer(`Start materializing joins=${creates.length}`);
  for (let j=0; j < creates.length; j++) {
    let rs = await safeExec(pond, creates[j]);
  }
  const t2 = (new Date()).getTime();
  tCreateMaterialized = (t2 - t1)/1000;
  logger.elapsed(`End of creates time= ${tCreateMaterialized.toFixed(2)}secs`);
  logger.info(`Create materialized time per table= ${((t2 - t1)/creates.length/1000).toFixed(2)}secs/table`);
  
  // run using the materialized tables
  let sql =pivotUsingMaterializedJoins();
  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  const t3 = (new Date()).getTime();
  tMaterializedJoins = (t3-t2)/1000;
  logger.elapsed(`End of query time= ${tMaterializedJoins.toFixed(2)}secs`);

  logger.timer(`Start big query len=${sql.length}`);
  const createFullTable = `CREATE TABLE ALLTx AS
    (${sql.replace(';','')})
  `;
  let rs2 = await safeExec(pond, createFullTable);
  logger.elapsed(`End of create full table`);
}

{
  // create the materialized columns
  let creates = createMaterializedCols(cols);
  const t1 = (new Date()).getTime();
  logger.timer(`Start materializing cols=${creates.length}`);
  for (let j=0; j < creates.length; j++) {
    let rs = await safeExec(pond, creates[j]);
  }
  const t2 = (new Date()).getTime();
  tCreateColumns = (t2 - t1)/1000;
  logger.elapsed(`End of creates time= ${tCreateColumns.toFixed(2)}secs`);
  logger.info(`Create materialized time per column= ${((t2 - t1)/cols.length/1000).toFixed(2)}secs/column`);

  // run using the full table
  let sql = usingFulTable(cols);
  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  const t3 = (new Date()).getTime();
  tFullTable = (t3-t2)/1000;
  logger.elapsed(`End of query time= ${tFullTable.toFixed(2)}secs`);
}

console.log(`\nMaterialize ${cols.length} Task tables and columns`);
console.log(`Create Materialized Join time= ${(tCreateMaterialized/cols.length).toFixed(2)} secs/table`);
console.log(`Create Materialized Cols time= ${(tCreateColumns/cols.length).toFixed(2)} secs/col`);

console.log(`\nResults on ${cols.length} Task tables`);
console.log(`Using Inline joins time= INFINITE (hangs)`);
console.log(`Using WithCTE joins time= ${tWithCTE.toFixed(2)} secs`);
console.log(`Using Materialized Joins time= ${tMaterializedJoins.toFixed(2)} secs`);
console.log(`Using Full table time= ${tFullTable.toFixed(2)} secs`);
console.log(`Using Full table gain= ${(tMaterializedJoins/tFullTable*100).toFixed(2)} %`);

