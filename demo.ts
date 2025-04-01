import { open, exec, query} from './src/ducky.ts';

async function run() {
  let dbx = await open(`${process.env.POND_DB}`);

  await exec(dbx, 
    `DROP TABLE IF EXISTS tarmue`
  );
  
  await exec(dbx, 
    `CREATE TABLE tarmue AS 
      SELECT * 
      FROM read_csv('${process.env.POND_IMPORTS}/TARMUE.txt')`
  );
  
  await query(dbx, 
    `SELECT 
      concat(idmue), concat(idtarmue), concat(idtarraiz,':',idtar), 
      cotitar, nomtar2, valor, stsval, ststar
    FROM tarmue 
    WHERE valor <> 'NULL'
    ORDER BY idmue, idtarmue`,
    // (r: any) => console.log(r) // optional onEach row callback
  )  
}

run()
  .catch((err) => (console.log("Run ", err)));
  
/*
const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');
db.all('SELECT 42 AS answer', (err, res) => {
    if (err) throw err;
    console.log(res);
});
*/
