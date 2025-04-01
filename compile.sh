#!/bin/bash

# IMPORTANT
# As 1-Apr-2025 this is not working anymore
# error: Could not resolve: "@duckdb/node-bindings-linux-arm64/duckdb.node"
# and others ...
# 'bun install' does not install them 
# need to find how to do it manually

# first needs bundling
rm -rf bundle
mkdir bundle
bun build index.ts --target bun --outdir ./bundle

# AFTER that we can compele it (otherwise it fails)
#rm -rf dist
#mkdir dist
#bun build ./bundle/index.js --target bun --bytecode --compile --minify --outfile ./dist/index.exe
bun build --compile --target=bun-windows-x64 ./bundle/index.js --outfile ./dist/exeindex

# need to distribute the Duckdb bins or it will not run
#mkdir dist/node_modules
#mkdir dist/node_modules/@duckdb
#cp -r node_modules/@duckdb/node-bindings-win32-x64 dist/node_modules/@duckdb

# and an .env-example file
#cp .env-example dist/
#cp .env-example dist/.env

