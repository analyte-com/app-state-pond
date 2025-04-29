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
    task.IDTAR as id
    ,task.NOMTAR as code
    ,task.DESCTAR as description
    ,task.COTITAR as typeCode
    ,co.DESCRIPCION as type
    ,task.TINETO as taskNetTime
    ,task.COUDMTIEMPO as taskNetTimeUdm
    ,task.COSTO as taskCost
    ,task.COUDMCOSTO as taskCostUdm
    -- values
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then det.COTIVAL
      when task.COTITAR = 'MEDI' then medi.COTIVALOR
      when task.COTITAR = 'CALI' then cali.COTIVAL
      else ''
    end as valueTypeCode
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then det.COUDMDET
      when task.COTITAR = 'MEDI' then medi.COUDMMED
      when task.COTITAR = 'CALI' then 'NUME'
      else ''
    end as valueUdm
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then cast(det.DECIMALES as varchar(2))
      when task.COTITAR = 'MEDI' then ''
      when task.COTITAR = 'CALI' then ''
      else ''
    end as decimals
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then cast(det.VALMIN as varchar)
      when task.COTITAR = 'MEDI' then ''
      when task.COTITAR = 'CALI' then cast(cali.VALMIN as varchar)
      else ''
    end as valueMin
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then cast(det.VALMAX as varchar)
      when task.COTITAR = 'MEDI' then ''
      when task.COTITAR = 'CALI' then cast(cali.VALMAX as varchar)
      else ''
    end as valueMax
    ,case
      when task.COTITAR = 'ENSA' then ''
      when task.COTITAR = 'DETE' then cast(det.VALREF as varchar)
      when task.COTITAR = 'MEDI' then ''
      when task.COTITAR = 'CALI' then cast(cali.VALREF as varchar)
      else ''
    end as valueRef
    ,case
      when det.COTIVAL like 'E:%' then (SELECT STRING_AGG(CODIGO, ',') AS enums FROM ENUM WHERE TIPO like RIGHT(det.COTIVAL, LEN(det.COTIVAL)-2) GROUP BY TIPO)
      when medi.COTIVALOR like 'E:%' then (SELECT STRING_AGG(CODIGO, ',') AS enums FROM ENUM WHERE TIPO like RIGHT(det.COTIVAL, LEN(det.COTIVAL)-2) GROUP BY TIPO)
      else ''
    end as valueEnums
    ,case 
      when prop.IDPROP IS NULL then -1
      else prop.IDPROP
    end as propertyId
    ,case 
      when prop.DESCPROP IS NULL then 'N/A'
      else prop.DESCPROP
    end as property
    ,case 
      when task.COTITAR = 'ENSA' then ensa.IDMET
      when task.COTITAR = 'DETE' then det.IDMET
      when task.COTITAR = 'MEDI' then medi.IDMET
      when task.COTITAR = 'CALI' then cali.IDMET
      else ''
    end as methodId
    ,case 
      when met.DESCMET IS NULL then ''
      else met.DESCMET
    end as method
    ,case 
      when task.COTITAR = 'ENSA' then ensa.NORMA
      when task.COTITAR = 'DETE' then det.NORMA
      when task.COTITAR = 'MEDI' then ''
      when task.COTITAR = 'CALI' then ''
      else ''
    end standard
    ,case 
      when task.COTITAR = 'ENSA' then ensa.COMENTARIO
      when task.COTITAR = 'DETE' then det.COMENTARIO
      when task.COTITAR = 'MEDI' then medi.COMENTARIO
      when task.COTITAR = 'CALI' then cali.COMENTARIO
      else ''
    end as comment
  from  
    TAREA task
    inner join CODIGO co on (task.COTITAR = co.CODIGO and co.TIPO = 'TITAR')
    left outer join DETERMINACION det on det.IDTAR = task.IDTAR
    left outer join ENSAYO ensa on ensa.IDTAR =  task.IDTAR
    left outer join MEDICION medi on medi.IDTAR =  task.IDTAR
    left outer join CALIBRACION cali on cali.IDTAR =  task.IDTAR
    left outer join METODO met on (met.IDMET=ensa.IDMET or met.IDMET=det.IDMET or met.IDMET=medi.IDMET or met.IDMET=cali.IDMET)
    left outer join PROPIEDAD prop on (prop.IDPROP=det.IDPROP)
  where  
    task.IDTAR != -1
    and task.COTITAR in ('DETE','ENSA','CALI','PREP')
  order by task.DESCTAR
`;  

// El arbol de tareas, basado en LISTA_TAR pero con mejoras en:
// - la descripcion completa de la tarea cuando incluye varios hijos y nietos
// - un mejor ordenamineto basado en orden del Root y secuencia de cada hijo 
export const tasksTreeView = `
  WITH HierarchyCTE AS (
    -- Base case: root nodes (IDTAR1 = -1)
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
        IDLISTA AS IDROOT,
        CAST(RTRIM(NOMTAR2) AS VARCHAR(1000)) AS fullName  -- Explicit CAST with sufficient length
    FROM 
        [dbo].[LISTA_TAR]
    WHERE 
        IDTAR1 = -1
    
    UNION ALL
    
    -- Recursive case: child nodes
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
        p.IDROOT,
        CAST(p.fullName + ' / ' + RTRIM(c.NOMTAR2) AS VARCHAR(1000))  -- Same CAST in recursive part
    FROM 
        [dbo].[LISTA_TAR] c
    INNER JOIN 
        HierarchyCTE p ON c.IDTAR1 = p.IDLISTA
    WHERE 
        c.IDTAR1 <> -1
  )
  SELECT 
    tree.IDLISTA as id
    ,tree.IDROOT rootId
    ,tree.IDTAR1 parentId
    ,tree.SECUENCIA as sequence
    ,tree.NIVEL as level
    ,tree.FULLNAME as description
    ,tree.PRIORIDAD as priority
    ,tree.REPETICION as repetition
    ,tree.IDTARRAIZ as taskRootId
    ,tree.IDTAR as taskId
    ,tree.NOMTAR2 as taskName
    ,case 
      when tree.COMENTARIO IS NULL then ''
      else tree.COMENTARIO 
    end as comment
    ,case 
      when tree.IDLISTA = -1 then tree.NOMTAR2
      else rtrim(cast(troot.NOMTAR2 as varchar))+'/'+right('000'+cast(tree.SECUENCIA as varchar),3)
    end as ordering
  FROM 
    HierarchyCTE tree
    left outer join HierarchyCTE troot on troot.IDLISTA = tree.IDROOT
  ORDER by ordering asc	
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

export const sampleTasksView = `SELECT
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
    ,tm.IDTARRAIZ as 'taskRootId'
    ,tm.IDTAR as 'taskId'
    -- valor
    ,case 
		  when tm.COTITAR = 'DETE' then dete.COTIVAL 
		  when tm.COTITAR = 'MEDI' then medi.COTIVALOR
		  else ''
    end as 'valueTypeCode'
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
	  ,costsval.DESCRIPCION as 'valueState'
    -- status de la tareas
    ,tm.STSTAR as 'stateCode'
  	,coststar.DESCRIPCION as 'state'
    ,tm.STSMOD as 'modifiedCode' 
	  ,costsmod.DESCRIPCION as 'modified'
    ,tm.FEREALIZADA as 'doneUtc'
    ,case when tm.REALIZADAPOR IS NULL then -1 else tm.REALIZADAPOR end as 'doneById'
    ,case when tm.REALIZADAPOR IS NULL then '' else u.NOMBRE end as 'doneBy'
    ,cast(tm.NOTAS+' '+tm.COMENTARIO as varchar) AS 'notes'
    ,tm.TIREAL as 'timeUsed'
    ,tm.COUDMTI as 'timeUsedUdm'
    -- repeticiones y replicas de la tarea
	  ,tm.STSREP as 'repeatedCode'
	  ,costsrep.DESCRIPCION as 'repeated'
    ,tm.REPETICION as 'repetitionNum'
    ,tm.REPLICADO as 'replicationNum'
    -- instrumento
    ,case when tm.IDEQUI IS NULL then -1 else tm.IDEQUI end as 'instrumentId'
    ,case when tm.IDEQUI IS NULL then '' else equi.DESCEQUI end as 'instrument'
    ,tm.STSEQUI as 'intrumentStateCode'
	  ,costsequi.DESCRIPCION as 'instrumentState'
  FROM TAREA_MUE tm 
    join TAREA t on tm.idtar = t.idtar
    join TAREA troot on tm.IDTARRAIZ = troot.IDTAR
    left join CODIGO coststar on tm.STSTAR = coststar.CODIGO and coststar.TIPO='STSTAR'
    left join CODIGO costsval on tm.STSVAL = costsval.CODIGO and costsval.TIPO='STSVAL'
    left join CODIGO costsmod on tm.STSMOD = costsmod.CODIGO and costsmod.TIPO='STSMOD'
    left join CODIGO costsrep on tm.STSREP = costsrep.CODIGO and costsrep.TIPO='STSREP'
    left join CODIGO costsequi on tm.STSEQUI = costsequi.CODIGO and costsequi.TIPO='STSEQUI'
    left join EQUIPO equi on tm.IDEQUI = equi.IDEQUI
    left join USUARIO u on tm.REALIZADAPOR = u.IDUSUA
    left join DETERMINACION dete on tm.IDTAR = dete.IDTAR and tm.COTITAR = 'DETE'
    left join MEDICION medi on tm.IDTAR = medi.IDTAR and tm.COTITAR = 'MED'
  WHERE 
    tm.IDTARMUE >= @startId and tm.IDTARMUE <= @endId
  ORDER BY tm.IDTARMUE asc, tm.IDMUE asc
`;
