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
      ,ma.CODIGO as code
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

  await copyTo(pond, 'vdepartment_materials', rdb, `select 
      ma.IDMAT as id
      ,ma.CODIGO as code
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
      ,mdep.IDDEPTO as departmentId
      ,dep.DESCDEPTO as department
    from MATERIAL ma, CODIGO co, MAT_DEPTO mdep, DEPARTAMENTO dep
    where 
      ma.COTIMAT = co.CODIGO 
      and co.TIPO = 'TIMAT'
      and ma.IDMAT=mdep.IDMAT
      and mdep.IDDEPTO=dep.IDDEPTO
  ;`);

  await copyTo(pond, 'vpoints', rdb, `select 
      p.IDGRU as id
      ,p.TAG as code
      ,p.TAG as description
      ,p.IDDEPTO as departmentId
      ,p.COTIPTOMUE as type
      from PTO_MUE p
  `);    

  await copyTo(pond, 'vsample_types', rdb, `select 
    -1 as id
    ,tm.CODIGO as code
    ,tm.DESCRIPCION as description
      ,case
      when tm.CODIGO in (select CODIGO from CODIGO where TIPO='L') then 'L' 
      when tm.CODIGO in (select CODIGO from CODIGO where TIPO='P') then 'P' 
      else 'N/A'
    end as permitedCode
      ,case
      when tm.CODIGO in (select CODIGO from CODIGO where TIPO='L') then 'Laboratorio' 
      when tm.CODIGO in (select CODIGO from CODIGO where TIPO='P') then 'Planta' 
      else 'N/A'
    end as permited
    ,tm.COMENTARIO as comment
    from CODIGO tm
    where tm.TIPO  = 'TIMUE'
  ;`);  

  await copyTo(pond, 'vsample_subtypes', rdb, `select 
      -1 as id
      ,sub.CODIGO as code
      ,sub.DESCRIPCION as description
      ,sub.COLIBRE as typeCode
      ,tm.DESCRIPCION as type
      ,sub.COMENTARIO as comment
    from CODIGO sub, CODIGO tm
    where tm.CODIGO=sub.COLIBRE 
    and sub.TIPO='SUBTIMUE' and tm.TIPO='TIMUE'
  ;`);  

  await copyTo(pond, 'vmaterial_specifications', rdb, `select 
      spec.IDESP as id
      ,spec.DESCESP as description
      ,spec.VERSION as vrs
      ,co.CODIGO as statusCode
      ,co.DESCRIPCION as status
      ,spec.FEDESDE as fromDate
      ,spec.FEHASTA as toDate
      ,spec.IDMAT as materialId
      ,mat.CODIGO as materialCode
      ,mat.DESCMAT as material
    from ESPECIFICACION spec, CODIGO co, MATERIAL mat
    where
      spec.IDMAT=mat.IDMAT
      and co.CODIGO = spec.COESTADO
        and co.TIPO = 'EESP'
        and spec.COESTADO <> 'ER'
    order by mat.DESCMAT, spec.VERSION
  ;`);

  await copyTo(pond, 'vspecification_tasks', rdb, `select 
      dm.IDDEMA as id
      ,dm.SECUENCIA as sequence
      ,ta.DESCTAR as description 
      ,ta.COTITAR as type
      ,dm.IDTAR_1 as rootId
      ,root.NOMTAR as rootCode
      ,dm.IDTAR as taskId
      ,ta.NOMTAR as taskCode
      ,dm.IDESP as specificationId
    from DET_MAT dm, TAREA ta, TAREA root
    where 
      dm.IDTAR = ta.IDTAR
      and ta.COTITAR IN ('DETE','ENSA','PREP','CALI')
      and (root.IDTAR = dm.IDTAR_1)
    order by dm.IDESP, dm.SECUENCIA
  ;`);  
  
  await copyTo(pond, 'vtasks', rdb, `select 
      lt.IDTAR as id
      ,ta.NOMTAR as code
      ,ta.DESCTAR as description
      ,ta.COTITAR as typeCode
      ,co.DESCRIPCION as type
    from  LISTA_TAR lt, TAREA ta, CODIGO co
    where  
      ta.IDTAR = lt.IDTAR 
      and lt.IDTARRAIZ = ta.IDTAR
      and ta.IDTAR != -1
      and ta.COTITAR in ('DETE','ENSA','CALI','PREP')
      and (ta.COTITAR = co.CODIGO and CO.TIPO = 'TITAR')  
    order by ta.DESCTAR
  ;`);  

  await copyTo(pond, 'vextensions', rdb, `select 
      datr.IDDEAT as id
      ,datr.NOMDEAT as code
      ,datr.DESCDEAT as description
      ,datr.COTIDEAT as typeCode
      ,datr.REQUERIDO as required
      ,datr.SQLDEAT as helper
      ,timue.COTIMUE as sampleTypeCode 
      ,datr.IDDEGRU as extensionId
      ,dgr.NOMDEGRU as extensionCode
      ,dgr.DESCDEGRU as extension
    from TIPO_MUE timue, DE_GRU dgr, DE_AT datr
    where
      timue.IDDEGRU = dgr.IDDEGRU
      and dgr.IDDEGRU = datr.IDDEGRU
    order by sampleTypeCode, extensionCode, code
  ;`);  

  // Close the connection
  await rdb?.close();
};
