import parquet, { ParquetSchema } from "@dsnp/parquetjs";
import * as sql from "mssql"; // Import the mssql package

export {
  buildParquetSchema,
  cleanupValue
}

type ParquetType = {
  type: string,
  optional: boolean
}

function toParquetType(col: any): ParquetType {
  let isoptional = col.nullable ;
  let istype = 'UTF8';

  if (
    (col.type === sql.Bit)
  ) istype = 'BOOLEAN';

  if (
    (col.type === sql.Int)
    || (col.type === sql.SmallInt)
    || (col.type === sql.TinyInt)
  ) istype = 'INT64';

  if (
    (col.type === sql.BigInt)
  ) istype = 'INT96';

  if (
    (col.type === sql.Decimal)
    || (col.type === sql.Float)
    || (col.type === sql.Money)
    || (col.type === sql.Numeric)
    || (col.type === sql.SmallMoney)
    || (col.type === sql.Real)
  ) istype = 'DOUBLE';

  if ((col.type === sql.Char)
    || (col.type === sql.NChar)
    || (col.type === sql.Text)
    || (col.type === sql.NText)
    || (col.type === sql.VarChar)
    || (col.type === sql.NVarChar)
    || (col.type === sql.Xml)
  ) istype = 'UTF8';

  if ((col.type === sql.Time)
    || (col.type === sql.Date)
    || (col.type === sql.DateTime)
    || (col.type === sql.DateTime2)
    || (col.type === sql.DateTimeOffset)
    || (col.type === sql.SmallDateTime)
  ) istype = 'TIMESTAMP_MICROS';

  return { type: istype, optional: isoptional }
}

function isDateType(col: any): boolean {
  if ((col.type === sql.Time)
    || (col.type === sql.Date)
    || (col.type === sql.DateTime)
    || (col.type === sql.DateTime2)
    || (col.type === sql.DateTimeOffset)
    || (col.type === sql.SmallDateTime)
  ) return true;
  return false;
}

// Explicitly convert to UTC microseconds
function convertToUTCParquetTimestampMicros(dateValue: any) {
  if (!(dateValue instanceof Date)) return null;
  return Date.UTC(
    dateValue.getUTCFullYear(),
    dateValue.getUTCMonth(),
    dateValue.getUTCDate(),
    dateValue.getUTCHours(),
    dateValue.getUTCMinutes(),
    dateValue.getUTCSeconds(),
    dateValue.getUTCMilliseconds()
  ) * 1000;
}

function cleanupValue(value: any, column?: any): any {
  if (typeof value === 'string') {
    if (value.toUpperCase() === 'NULL') return null;
    return value.replace(/[^\P{C}]/gu, '')  // remove all control chars
  }
  if (isDateType(column)) {
    //console.log('isDateType', column.name, value, value+'');
    return convertToUTCParquetTimestampMicros(value);
  }
  return value;
}


/**
 * Builds the Parquet schema for the seto of SQL columns. 
 * @param sqlcols = Array of {
    index: 0,
    name: "id",
    length: undefined,
    type: [sql.Int],
    scale: undefined,
    precision: undefined,
    nullable: false,
    caseSensitive: false,
    identity: false,
    readOnly: false,
  }
 * @returns a ParquetSchema
 */
function buildParquetSchema(sqlcols: any[]): ParquetSchema {
  let columns: any = {};
  sqlcols.forEach(t => {
    columns[t.name] = toParquetType(t);
  })
  return new parquet.ParquetSchema(columns);
}
