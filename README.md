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

## Run:

```bash
bun index.ts
```

The output must be something like:
~~~~
2025-02-08 00:23:33.018 INF Open Duckdb '/var/duckdb/db/pond.db': {"connection":{}}
2025-02-08 00:23:33.019 INF Logger level set to 'DBG'
2025-02-08 00:23:33.020 DTS (0.000s) Exec: DROP TABLE IF EXISTS tarmue
2025-02-08 00:23:33.025 DTS (0.005s) Done:  {"result":{}}
2025-02-08 00:23:33.025 DTS (0.000s) Exec: CREATE TABLE tarmue AS SELECT * FROM read_csv('/var/duckdb/imports/TARMUE.txt')
2025-02-08 00:23:33.425 DTS (0.400s) Done:  {"result":{}}
2025-02-08 00:23:33.427 DTS (0.000s) Query: SELECT concat(idmue), concat(idtarmue), concat(idtarraiz,':',idtar), cotitar, nomtar2, valor, stsval, ststar FROM tarmue WHERE valor <> 'NULL' ORDER BY idmue, idtarmue
2025-02-08 00:23:33.604 DTS (0.177s) Done: 36149 rows
2025-02-08 00:23:33.604 DBG Row 0:  [ "1", "2", "7:7", "DETE", "VA100", "14.24", "0", "R" ]
2025-02-08 00:23:33.606 DBG Row 36148: [ "2529", "108690266", "31:31", "DETE", "MCK", "19", "0",
  "R"
]
~~~~
