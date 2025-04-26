export const codesView = `select
  TIPO as type
  ,CODIGO as code
  ,DESCRIPCION as description
  ,case 
    when COLIBRE IS NULL then ''
    else COLIBRE
  end as freeCode
  ,TISIST as isSystem
  ,case 
    when COMENTARIO IS NULL then ''
    else COMENTARIO
  end as comment
  from CODIGO
  order by type, code 
`;

export const clientsView = `select
    IDCLI as id,
    CODIGOCLI as code,
    DESCCLI as description
    from CLIENTE
    order by IDCLI
`;

export const departmentsView = `select 
    IDDEPTO as id
    ,DESCDEPTO as description
    ,PLANTA as facility
    ,-1 as clientId 
    from DEPARTAMENTO
    order by IDDEPTO
`;    

export const materialsView = `select 
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
    order by ma.IDMAT
`;    

export const departmentMaterialsView = `select 
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
  order by ma.IDMAT, mdep.IDDEPTO  
`;

export const pointsView = `select 
    p.IDGRU as id
    ,p.TAG as code
    ,p.TAG as description
    ,p.IDDEPTO as departmentId
    ,p.COTIPTOMUE as type
    from PTO_MUE p
    order by p.IDGRU
`;    

export const sampleTypesView = `select 
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
  order by tm.CODIGO
`;  

export const sampleSubtypesView = `select 
    -1 as id
    ,sub.CODIGO as code
    ,sub.DESCRIPCION as description
    ,sub.COLIBRE as typeCode
    ,tm.DESCRIPCION as type
    ,sub.COMENTARIO as comment
  from CODIGO sub, CODIGO tm
  where tm.CODIGO=sub.COLIBRE 
  and sub.TIPO='SUBTIMUE' and tm.TIPO='TIMUE'
  order by sub.CODIGO
`;  

export const materialSpecificationsView = `select 
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
`;

export const specificationTasksView = `select 
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
`;  

export const tasksView = `select 
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
`;  

export const extensionsView = `select 
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
`;  

export const userDepartmentsView = `select 
    u.IDUSUA as userId
    ,u.login as userCode
    ,u.NOMBRE as userFullname
    ,u.CARGO as userRole
    ,ued.IDDEPTO as departmentId
    ,dep.DESCDEPTO as department
    ,ued.RESPMUE as responsibleCode
    ,ued.PUEDESOLICITAR as canRequest
    ,ued.PUEDETOMAR as canCollect 
    ,ued.PUEDEENVIAR as canSend
    ,ued.PUEDEASIGNAR as canAssign -- corresponde con puedeIngresar
    ,ued.PUEDEEDITAR as canEdit
    ,ued.PUEDEFINALIZAR as canClose
    ,ued.PUEDEREPROCESAR as canReprocess
    ,ued.PUEDERECLASIFICAR as canReclasify
    ,ued.PUEDEREVISAR as canReview
    ,ued.EDITA_ESPECIFS_DE as canSpecify
  from 
    USUARIO_EN_DEPARTAMENTO ued, 
    USUARIO u, 
    DEPARTAMENTO dep
  where 
    ued.LOGIN=u.LOGIN
    and ued.IDDEPTO = dep.IDDEPTO
    and ued.IDDEPTO <> -1
  order by userId, departmentId
`;  

export const samplesView = `select
    --muestra
    m.UID as uid,
    m.IDMUE as 'id', 
    --m.IDMUTO as 'toId',
    m.NOMBRE as 'code',
    m.COTIMUE as 'typeCode',
    m.COSUBTIMUE as 'subtypeCode', 
    m.COESTADO as 'stateCode', 
    m.COSUBESTADO as 'substateCode',
    m.RESPMUE as 'belongsTo', 
    m.FETOMADESDE as 'collectStartUtc', 
    m.FETOMAHASTA as 'collectEndUtc',
    m.FEESTADO as 'stateUtc', 
    m.RESPONSABLE as 'createdBy', 
    m.RECLASIFICACION as 'reclasified',
    m.REPROCESO as 'reprocessed', 
    m.CLASIFICACION as 'clasified', 
    m.CALIFICACION as 'qualified',
    m.COMENTARIO as 'comment'
    --departamento
    ,d.IDDEPTO as 'departmentId'
    ,d.DESCDEPTO as 'department' 
    ,d.PLANTA as 'facility'
    ,m.TAGPTOMUE as 'pointTag'
    ,d.COMENTARIO as 'departmentComment'
    --material
    ,mat.IDMAT as 'materialId'
    ,mat.CODIGO as 'materialCode'
    ,CASE 
      WHEN m.IDESP IS NULL THEN -1
      ELSE m.IDESP
    END as 'specificationId' 
    ,mat.COTIMAT as 'materialType'
    ,mat.DESCMAT as 'material'
    ,CASE  
      WHEN m.DESCPRONOCATA IS NULL THEN ''
      ELSE m.DESCPRONOCATA
    END as 'uncataloged'
    ,m.LOTE as 'batch'
    ,m.REFERENCIA as 'batchRef'
    ,mat.COMENTARIO as 'materialComment'
    -- cliente
    ,cli.IDCLI as clientId
    ,cli.CODIGOCLI as clientCode
    ,cli.DESCCLI as client
    -- proveedor
    ,prv.IDPRO as supplierId
    ,prv.CODIGOPRO as supplierCode
    ,prv.DESCPRO as supplier
  from MUESTRA m, DEPARTAMENTO d, MATERIAL mat, CLIENTE cli, PROVEEDOR prv
  where 
    m.IDMUE >= @startId and m.IDMUE <= @endId
    and m.IDDEPTO = d.IDDEPTO
    and m.IDMAT = mat.IDMAT
    and m.IDCLI = cli.IDCLI 
    and m.IDPRO = prv.IDPRO
  order by IDMUE asc
`;  

export const sampleTasksView = `select
    -- tarea mue
    tm.IDTARMUE as 'id'
    --,tm.IDTARMUE2 as 'id2'
    ,tm.COTITAR as 'typeCode'
    ,tm.NOMTAR2 as 'description'
    -- muestra 
    ,tm.IDMUE as 'sampleId'
    -- tareas
    ,tm.IDLISTA as 'taskTreeId' 
    ,tm.SECUENCIA as 'sequence'
    ,tm.NIVEL as 'level'
    ,t.IDTAR as 'taskId'
    ,tm.IDTARRAIZ as 'taskRootId'
    ,concat(tm.IDLISTA,'/',tm.IDTARRAIZ,'/',tm.IDTAR) as 'taskPath'
    ,case 
      when tm.IDTARRAIZ = tm.IDTAR then t.NOMTAR
      else concat(troot.NOMTAR,'/',t.NOMTAR)
    end as 'taskName'
    ,case 
      when tm.IDTARRAIZ = tm.IDTAR then t.DESCTAR
      else concat(troot.DESCTAR,'/',t.DESCTAR)
    end as 'taskDescription'
    -- valor
    ,dete.COTIVAL as 'valueTypeCode'
    ,case 
      when ltrim(rtrim(tm.VALOR)) LIKE '<%' then '<'
      when ltrim(rtrim(tm.VALOR)) LIKE '>%' then '>'
      else ''
    end as valueOffdetection
    ,replace(ltrim(case 
      when ltrim(rtrim(VALOR)) LIKE '[<>]%' then SUBSTRING(ltrim(rtrim(tm.VALOR)), 2, LEN(tm.VALOR)) 
      else tm.VALOR end),',', '.') 
    as 'value'
    ,tm.COUDMTARMUE as 'valueUdm'
    ,tm.STSVAL as 'valueStateCode'
    -- status de la tareas
    ,tm.STSTAR as 'stateCode'
    ,tm.STSMOD as 'modifiedCode' 
    ,tm.FEREALIZADA as 'doneUtc'
    ,case when tm.REALIZADAPOR IS NULL then -1 else tm.REALIZADAPOR end as 'doneById'
    ,case when tm.REALIZADAPOR IS NULL then '' else u.NOMBRE end as 'doneBy'
    ,concat(tm.NOTAS,' ',tm.COMENTARIO) AS 'notes'
    ,tm.TIREAL as 'timeUsed'
    ,tm.COUDMTI as 'timeUsedUdm'
    -- repeticiones y replicas de la tarea
    ,tm.REPETICION as 'repetitionNum'
    ,tm.REPLICADO as 'replicationNum'
    -- instrumento
    ,case when tm.IDEQUI IS NULL then -1 else tm.IDEQUI end as 'instrumentId'
    ,case when tm.IDEQUI IS NULL then '' else equi.DESCEQUI end as 'instrument'
    ,tm.STSEQUI as 'intrumentStateCode'
    -- tarea
    ,t.SIMPLE as 'taskIsSimple'
    ,t.TINETO as 'taskTimeUsed'
    ,t.COUDMTIEMPO as 'taskNetTimeUdm'
    ,t.COSTO as 'taskCost'
    ,t.COUDMCOSTO as 'taskCostUdm'
    -- DEPRECATED ,tm.STSREP
  from TAREA_MUE tm 
    join TAREA t on tm.idtar = t.idtar
    join TAREA troot ON tm.IDTARRAIZ = troot.IDTAR
    left join EQUIPO equi ON tm.IDEQUI = equi.IDEQUI
    left join USUARIO u ON tm.REALIZADAPOR = u.IDUSUA
    left join DETERMINACION dete ON tm.IDTAR = dete.IDTAR and tm.COTITAR = 'DETE'
    left join ENSAYO ensa ON tm.IDTAR = ensa.IDTAR and tm.COTITAR = 'ENSA'
    left join MEDICION medi ON tm.IDTAR = medi.IDTAR and tm.COTITAR = 'MED'
  where 
    tm.IDTARMUE >= @startId and tm.IDTARMUE <= @endId
  order by tm.IDTARMUE asc, tm.IDMUE asc
`;


/*
-- Draft view for creating the full path for tasks in LISTA_TAR
CREATE VIEW vTASKTREE as
WITH HierarchyCTE AS (
    -- Base case: select all root nodes (where IDTAR1 = -1)
    SELECT 
        IDLISTA,
        IDTARRAIZ,
        IDTAR1,
        IDTAR,
        SECUENCIA,
        NOMTAR2,
        PRIORIDAD,
        REPETICION,
        COMENTARIO,
        NIVEL,
        IDLISTA AS IDROOT  -- For root nodes, IDROOT is their own IDLISTA
    FROM 
        [dbo].[LISTA_TAR]
    WHERE 
        IDTAR1 = -1
    
    UNION ALL
    
    -- Recursive case: join child nodes with their parents
    SELECT 
        c.IDLISTA,
        c.IDTARRAIZ,
        c.IDTAR1,
        c.IDTAR,
        c.SECUENCIA,
        c.NOMTAR2,
        c.PRIORIDAD,
        c.REPETICION,
        c.COMENTARIO,
        c.NIVEL,
        p.IDROOT  -- Inherit the IDROOT from the parent
    FROM 
        [dbo].[LISTA_TAR] c
    INNER JOIN 
        HierarchyCTE p ON c.IDTAR1 = p.IDLISTA  -- Match child's IDTAR1 to parent's IDLISTA
    WHERE 
        c.IDTAR1 <> -1
)
SELECT 
    IDLISTA as id,
    IDROOT rootId,
    IDTAR1 parentId,
    IDTARRAIZ as taskRootId,
    IDTAR taskId,
    SECUENCIA sequence,
    NOMTAR2 description,
    PRIORIDAD priority,
    REPETICION repetition,
    COMENTARIO comment,
    NIVEL level
FROM 
    HierarchyCTE;
*/