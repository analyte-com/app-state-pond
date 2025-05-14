import { safeExec, safeQuery } from "../pond";
import { logger } from "@mazito/logger";
import { createMaterializedCols, usingFulTable } from "./build-result-columns";

let tBuildPivoted = 0, tFullTable = 0;
let cols: any = [];

export async function buildPivotedSampleResults(pond: any, tableName: string) {
  { // get all possible columns
    let sql = `SELECT distinct taskTreeId, valueTypeCode FROM vsample_tasks ORDER BY taskTreeId`;
    let rs = await safeQuery(pond, sql);
    cols = rs.result.rows.map((t: any) => { return {taskTreeId: t[0], valueTypeCode: t[1]} });
    logger.info(`Distinct tasks to pivot count= ${cols.length}`);
    //logger.info(`Distint tasks to pivot `, cols);
  }

  { // create the materialized columns
    let creates = createMaterializedCols(cols, tableName);
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

  console.log(`\nMaterialize ${cols.length} Task columns`);
  console.log(`Create Materialized Cols time= ${(tBuildPivoted/cols.length).toFixed(2)} secs/col`);
};
