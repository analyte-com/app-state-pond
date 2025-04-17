import { KVS } from "../utils";

function main(args: string[]) {
  let prefix: string | undefined = (args.length) ? args[0] : undefined;
  KVS.browseKeys(prefix);
}

main(process.argv.slice(2));
