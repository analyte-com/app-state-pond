export { env } ;

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const entries = keys.map(key => [key, obj[key]]);
  return Object.fromEntries(entries) as Pick<T, K>;
}

const env = pick(process.env, [
  'MSSQL_USER', 'MSSQL_PASSW', 'MSSQL_DB', 'MSSQL_HOST',
  'POND', 'POND_DB', 'POND_IMPORTS', 'POND_EXPORTS'
])
