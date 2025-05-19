import { logger, LogLevel } from '@mazito/logger';
import { copyAllFromMSSql } from "./src/copy-all-from-mssql";
import { importAll } from "./src/import-all";
import { importOne } from "./src/import-one";
import { env } from "./src/utils/env";

logger.level(LogLevel.DEBUG);

const args = Bun.argv.slice(2); 

async function run() {
  logger.info('Env', env);
  logger.info('Args', args);

  if (!args.length) {
    console.log(`\nUsage
      \n  bun index.ts import-all
      \n  bun index.ts import-one vname
      \n  bun index.ts copy-from-mssql
    `)
    return;
  }

  if (args[0] === 'import-all') {
    await importAll();
    return;
  }  

  if (args[0] === 'import-one') {
    await importOne(args[1]);
    return;
  }  

  if (args[0] === 'copy-from-mssql') {
    await copyAllFromMSSql();
    return;
  }  

  logger.info("No action selected");
};

run().catch((error) => {
  logger.error("Error running Pond", error);
});
