import parquet, { ParquetSchema } from "@dsnp/parquetjs";
import { logger } from "@mazito/logger";
import { type ParquetType } from "./parquet-utils";
import { safeQuery } from "../pond";

export {
  buildPivotedParquetSchema
  //buildParquetSchema,
  //cleanupValue
}

const NOT_NULL = 1;

function parquetField(type: string, nullable?: number) {
  if (type.includes('E:')) type = 'ENUM';
  switch (type) {
    case 'ALFA': return { type: 'UTF8', optional: (nullable != NOT_NULL) };
    case 'ENUM': return { type: 'UTF8', optional: (nullable != NOT_NULL) };
    case 'NUME': return { type: 'DOUBLE', optional: (nullable != NOT_NULL) }; 
    case 'INT': return { type: 'INT64', optional: (nullable != NOT_NULL) }; 
    case 'DATETIME': return { type: 'TIMESTAMP_MICROS', optional: (nullable != NOT_NULL) }; 
  }  
}

/**
 * Builds the Parquet schema for the seto of SQL columns. 
 * @param sqlcols = Array of {
    id: "id",
    type: 'ENSA', ...
    valueType: "NUME" | "ALFA" | 'E:%',
  }
 * @returns a ParquetSchema
 */
async function buildPivotedParquetSchema(
  pond: any
): Promise<ParquetSchema> {
  let columns: any = {};

  // first column MUST be the sampleId
  columns['sampleId'] = { type: 'INT64', optional: false }

  // now we build a column with subcolumns for each Task in TaskTrees
  const rs = await safeQuery(pond, `select 
      tt.id as id, 
      ta.typeCode as type,  
      ta.valueTypeCode as valueType
    from vtask_trees tt 
    join vtasks ta on (ta.id=tt.taskId) 
    where tt.id <> -1 and ta.typeCode = 'DETE'
    order by tt.id; 
  `);
  if (!rs.result) throw Error('Could not query vtask_trees'); 

  // now we build a column with subcolumns for each Task in TaskTrees
  const rows = rs.result.rows;
  rows.forEach((t: any) => {
    const [id, isType, valueType] = t;

    // we derive the column name from the TaskTree Id 
    const name = `T${id.toString()}`;

    // we build a Field inside the column for each important data
    const fields = {
      id: parquetField('INT', NOT_NULL),
      state: parquetField('ALFA', NOT_NULL),
      value: parquetField(valueType), // allow NULL
      offDetection: parquetField('ALFA'),
      valueState: parquetField('ALFA'),
      doneUtc: parquetField('DATETIME'),
      doneById: parquetField('INT'),
      doneBy: parquetField('ALFA'),
      instrumentId: parquetField('INT'),
      instrument: parquetField('ALFA'),
      intrumentState: parquetField('ALFA'),
      modified: parquetField('ALFA'),
      repetitionNum: parquetField('ALFA'),
      replicationNum: parquetField('ALFA'),
      notes: parquetField('ALFA')
    }

    // finally we create the Parquet column for the Task
    columns[name] = {
      optional: true,
      repeated: false,
      fields: fields
    };
  });
  //console.log(JSON.stringify(columns, null, 2));  
  logger.info(`buildPivotParquetSchema totalColumns=${Object.keys(columns).length}`)

  // and we build the schema
  //console.log(new parquet.ParquetSchema(columns));
  return new parquet.ParquetSchema(columns);
}
  