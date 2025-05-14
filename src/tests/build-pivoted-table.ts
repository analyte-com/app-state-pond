import { getActiveConnection, READ_WRITE, safeExec, safeQuery } from "../pond";
import { logger } from "@mazito/logger";
import { cols as someCols } from "./alt-pivots/arpol-task-tree-ids";
import { createMaterializedCols, usingFulTable } from "./alt-pivots/full-table";

// Open the Duckdb db
let pond = await getActiveConnection(READ_WRITE);

let tBuildPivoted = 0, tFullTable = 0;
let cols: any = [];

{
  // get all possible columns
  let sql = `SELECT distinct taskTreeId, valueTypeCode FROM vsample_tasks ORDER BY taskTreeId`;
  let rs = await safeQuery(pond, sql);
  cols = rs.result.rows.map((t: any) => { return {taskTreeId: t[0], valueTypeCode: t[1]} });
  logger.info(`Distint tasks to pivot count= ${cols.length}`);
  logger.info(`Distint tasks to pivot `, cols);
}

{
  // create the materialized columns
  let creates = createMaterializedCols(cols);

  const t1 = (new Date()).getTime();
  logger.timer(`Start materializing cols=${cols.length} stmts=${creates.length}`);
  for (let j=0; j < creates.length; j++) {
    let rs = await safeExec(pond, creates[j]);
  }
  const t2 = (new Date()).getTime();
  tBuildPivoted = (t2 - t1)/1000;
  logger.elapsed(`End of create pivoted`);
  logger.info(`Create pivoted time= ${tBuildPivoted.toFixed(2)}secs`);
  logger.info(`Create pivoted table time per column= ${((t2 - t1)/cols.length/1000).toFixed(2)}secs/column`);
}

{
  // run using the full table
  const t1 = (new Date()).getTime();
  let sql = usingFulTable(someCols);
  logger.timer(`Start big query len=${sql.length}`);
  let rs = await safeQuery(pond, sql);
  const t2 = (new Date()).getTime();
  tFullTable = (t2-t1)/1000;
  logger.elapsed(`End of query time= ${tFullTable.toFixed(2)}secs`);
}

console.log(`\nMaterialize ${cols.length} Task columns`);
console.log(`Create Materialized Cols time= ${(tBuildPivoted/cols.length).toFixed(2)} secs/col`);

console.log(`\nResults on ${cols.length} Task tables`);
console.log(`Using Full table time= ${tFullTable.toFixed(2)} secs`);

/*
Preliminary results

2025-05-10 21:55:18.695 DTS (4068.608s) End of create pivoted
2025-05-10 21:55:18.695 INF (4068.608s) Create pivoted time= 4068.61secs
2025-05-10 21:55:18.695 INF (4068.608s) Create pivoted table time per column= 2.50secs/column
On 1630 columns
*/