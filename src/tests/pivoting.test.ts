import { getActiveConnection, READ_WRITE } from "../pond";
import { buildPivotedParquetSchema } from "../copy/pivot-utils";
import { pivotToParquet } from "../copy/pivot-sample-tasks";
import { env } from "../utils";

// Open the Duckdb db
let pond = await getActiveConnection(READ_WRITE);

await buildPivotedParquetSchema(pond);

await pivotToParquet(pond, `${env.POND_IMPORTS}/vpivoted_sample_tasks`);



