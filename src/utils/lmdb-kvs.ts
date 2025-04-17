/**
 * A LMDB KeyValue store for saving states, etc.
*/
import { env } from "./env";
import { open } from "lmdb" ;
import { logger } from "@mazito/logger";

export { 
  KVS 
}

class KVS {
  private static _DB: any = null;

  public static get(key: string): any | null {
    const db = KVS.openDb();
    const data = db.get(key) || null;
    return data;
  }
  
  public static put(key: string, data: any) {
    const db = KVS.openDb();
    db.put(key, data);
    // db.transaction(() => {
    // });
  }

  public static openDb(options?: string) {
    if (KVS._DB) return KVS._DB;
    let path = env.LMDB_PATH;
    logger.info(`KVS open path='${path}'`);
    try {
      const db = open({
        path: env.LMDB_PATH,
        // any options go here
        encoding: 'msgpack',
        sharedStructuresKey: Symbol.for('sharedstructures'),
        cache: true,
        // compression: true,
      });
      KVS._DB = db;
    }
    catch (err: any) {
      logger.error(`KVS openDb failed=${path} Error=`+err.message);
      KVS._DB = null;
      throw Error(`ERROR opening KVStore path:'${env.LMDB_PATH}' reason:'${err}'`);
    }
    return KVS._DB;
  }

  public static async find(q: string) {
    const db = KVS.openDb();
    if (!q) throw Error("KVS find failed Error: requires a search word.")
    let found: any[] = [];
    db.getRange()
      .filter((t: any) => q && t.key.includes(q))
      .forEach((t: any) => {
        found.push(t)
      })
    return found;  
  }

  public static browseKeys(q: string | undefined) {
    console.log(`\n---\nBrowse LMDB\n---\n`);
    const db = KVS.openDb();
    console.log(`Search ${q ? `keys containing: '${q}'` : 'all keys'}`)
    db.getRange()
      .filter((t: any) => (q ? t.key.includes(q) : true ))
      .forEach((t: any) => {
        console.log(`\n${t.key}: `, JSON.stringify(t.value, null, 2));
      })
  }
}
