import { buildPivotedParquetSchema } from "../copy/pivot-utils";
import { getActiveConnection, READ_WRITE } from "../pond";

// Open the Duckdb db
let pond = await getActiveConnection(READ_WRITE);

await buildPivotedParquetSchema(pond);



