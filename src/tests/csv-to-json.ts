// convert-tsv-to-json.ts
const path = Bun.argv[2];
if (!path) {
  console.error("Usage: bun convert-tsv-to-json.ts <file.tsv>");
  process.exit(1);
}

const text = await Bun.file(path).text();
const lines = text.trim().replace(/\r/g, '').split("\n");
const headers = lines.shift()?.split("\t") ?? [];

const json = lines.map(line => {
  const values = line.split("\t");
  return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
});

//console.log(headers);
console.log(JSON.stringify(json, null, 2));
