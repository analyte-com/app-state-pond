# Duckpond

Use Duckdb with Bun. 

Tested on Ubuntu 22.04 and Windows Server 2022.

## Install 

On Linux install Duckdb from
https://github.com/duckdb/duckdb/releases/download/v1.2.0/duckdb_cli-linux-amd64.zip

On Windows install Duckdb from
https://github.com/duckdb/duckdb/releases/download/v1.2.0/duckdb_cli-windows-amd64.zip

In Windows it requires installation of the Microsoft Visual C++ Redistributable, from
https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170

And then install dependencies:

```bash
bun install
```

## Environment

This repo already contains in the `pond` folder and example Duckdb database and an example text file for importing.

Copy the `.env-example` file to `.env` and fix the paths so they point to the folders where this repo was installed.

## Export from MSSQL

Exports data from the MSSQL Db to Parquet files:
```bash
bun index.ts copy-from-mssql
```

**IMPORTANT**: this will only work on a Windows Server with an MSSQLServer Db.

## Import into Duckdb

Imports all Parquet files into a Duckdb Db:
```bash
bun index.ts import-all
```

This will run on Windows, Linux and Mac. And the created Duckdb can be used by the AppStateAPI. 
