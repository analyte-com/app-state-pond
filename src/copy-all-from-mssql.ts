import { open, exec, query} from "./ducky";
import { connectRdb } from "./connect-mssql";
import { copyTo } from "./copyto"; 
import { logger, LogLevel } from '@mazito/logger';
import { env } from "./env";

logger.level(LogLevel.DEBUG);

export async function copyAllFromMSSql() {
  // Open the Duckdb db
  let pond = await open(`${env.POND_DB}`);

  // Connect to the MSSQL database
  const rdb = await connectRdb(env);

  await copyTo(pond, 'vclients', rdb, `select 
      IDCLI as id,
      CODIGOCLI as code,
      DESCCLI as description
      from CLIENTE
  `);

  await copyTo(pond, 'vdepartments', rdb, `select 
      IDDEPTO as id
      ,DESCDEPTO as description
      ,PLANTA as facility
      ,-1 as clientId 
      from DEPARTAMENTO
  `);    

  await copyTo(pond, 'vmaterials', rdb, `select 
      ma.IDMAT as id
      , ma.CODIGO as code
      ,ma.DESCMAT as description
      ,ma.COTIMAT as typeCode
      ,co.DESCRIPCION as type
      ,CASE ma.[REQUIERE_LOTE]
          WHEN 'S' THEN CAST(1 AS BIT)
          ELSE CAST(0 AS BIT)
      END as batchRequired
      ,CASE ma.[REQUIERE_REF]
          WHEN 'S' THEN CAST(1 AS BIT)
          ELSE CAST(0 AS BIT)
      END as batchRefRequired
      ,ma.[MASCARA_LOTE] batchMask
      ,ma.[MASCARA_REF] batchRefMask
      from MATERIAL ma, CODIGO co
      where ma.COTIMAT = co.CODIGO and co.TIPO = 'TIMAT'
  `);    

  await copyTo(pond, 'vpoints', rdb, `select 
      p.IDGRU as id
      ,p.TAG as code
      ,p.TAG as description
      ,p.IDDEPTO as departmentId
      ,p.COTIPTOMUE as type
      from PTO_MUE p
  `);    

  // Close the connection
  await rdb?.close();
};
