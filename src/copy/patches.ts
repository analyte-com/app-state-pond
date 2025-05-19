/**
 * Apply a set of patches to a newly created Pond
*/
import { exec } from "../pond/ducky";
import { logger } from "@mazito/logger";
import { env } from "../utils/env";

// This is a set of EXEC commands we can apply to the Pond db AFTER importing 
// all the needed data. It can be used to create views, indexes or other patches.
const patches: string[] = [

// The tasks columns metadata
`CREATE OR REPLACE VIEW tasks_columns AS 
  SELECT 
    tr.id, 
    tr.description, 
    ta.typeCode, 
    ta.valueTypeCode, 
    ta.valueUdm, 
    ta.valueMin, ta.valueMax, ta.valueRef, ta.valueEnums,
    ta.valueFormat,
    'Tarea' as group,
    't' as groupCode
  FROM vtask_trees tr JOIN vtasks ta on tr.taskId = ta.id 
  WHERE ta.typeCode = 'DETE'
;`

// more views here ...
];

export async function applyPatches(pond: any) {
  for (let j=0; j < (patches || []).length; j++) {
    await exec(pond, patches[j]);
  }
}
