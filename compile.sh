#!/bin/bash

# first needs bundling
rm -rf bundle
mkdir bundle
bun build index.ts  --outdir ./bundle

# AFTER that we can compele it (otherwise it fails)
rm -rf dist
mkdir dist
bun build ./bundle/index.js --compile --bytecode --minify --outfile ./dist/index.exe

# need to distribute the Duckdb bins or it will not run
mkdir dist/node_modules
mkdir dist/node_modules/@duckdb
cp -r node_modules/@duckdb/node-bindings-linux-x64 dist/node_modules/@duckdb

# and an .env-example file
cp .env-example dist/
cp .env-example dist/.env

