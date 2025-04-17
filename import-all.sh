#!/bin/bash
#bun run index.ts import-all

POND="/c/dev/app-state-pond/db/duck"
DATE=$(date -u +"%Y%m%d_%H%M%S")
SNAP="read-pond-${DATE}.db" 

# copy write-pond to new Snapshot
cp -v ${POND}/write-pond.db  ${POND}/${SNAP}

# update symlink to the new Snapshot
SYMLINK=${POND}/pond.db
rm ${SYMLINK}
ln -s ${POND}/${SNAP} ${SYMLINK}



