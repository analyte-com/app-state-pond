import * as mssql from "mssql"; // Import the mssql package
import { logger } from "@mazito/logger";

export {
  connectRdb
}

// Connect to the MSSQL database
async function connectRdb(env: any): Promise < mssql.ConnectionPool | null > {
  try {
    // Configure your MSSQL connection
    const pool = new mssql.ConnectionPool({
      user: `${env.MSSQL_USER}`,
      password: `${env.MSSQL_PASSW}`,
      database: `${env.MSSQL_DB}`,
      server: `${env.MSSQL_HOST}`, // Or your server address
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: true, // For Azure
        trustServerCertificate: true, // Change to true for local dev / self-signed certs
      },
    });

    await pool.connect();
    logger.info(`Connected to ${env.MSSQL_HOST}/${env.MSSQL_DB}`);

    return pool;
  } catch (error) {
    logger.error("Error connecting to MSSQL:", error);
    return null;
  }
};