var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// node_modules/@duckdb/node-bindings/duckdb.js
var require_duckdb = __commonJS((exports, module) => {
  module.exports = __require(`@duckdb/node-bindings-${process.platform}-${process.arch}/duckdb.node`);
});

// node_modules/@duckdb/node-api/lib/DuckDBTypeId.js
var require_DuckDBTypeId = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTypeId = undefined;
  var DuckDBTypeId;
  (function(DuckDBTypeId2) {
    DuckDBTypeId2[DuckDBTypeId2["INVALID"] = 0] = "INVALID";
    DuckDBTypeId2[DuckDBTypeId2["BOOLEAN"] = 1] = "BOOLEAN";
    DuckDBTypeId2[DuckDBTypeId2["TINYINT"] = 2] = "TINYINT";
    DuckDBTypeId2[DuckDBTypeId2["SMALLINT"] = 3] = "SMALLINT";
    DuckDBTypeId2[DuckDBTypeId2["INTEGER"] = 4] = "INTEGER";
    DuckDBTypeId2[DuckDBTypeId2["BIGINT"] = 5] = "BIGINT";
    DuckDBTypeId2[DuckDBTypeId2["UTINYINT"] = 6] = "UTINYINT";
    DuckDBTypeId2[DuckDBTypeId2["USMALLINT"] = 7] = "USMALLINT";
    DuckDBTypeId2[DuckDBTypeId2["UINTEGER"] = 8] = "UINTEGER";
    DuckDBTypeId2[DuckDBTypeId2["UBIGINT"] = 9] = "UBIGINT";
    DuckDBTypeId2[DuckDBTypeId2["FLOAT"] = 10] = "FLOAT";
    DuckDBTypeId2[DuckDBTypeId2["DOUBLE"] = 11] = "DOUBLE";
    DuckDBTypeId2[DuckDBTypeId2["TIMESTAMP"] = 12] = "TIMESTAMP";
    DuckDBTypeId2[DuckDBTypeId2["DATE"] = 13] = "DATE";
    DuckDBTypeId2[DuckDBTypeId2["TIME"] = 14] = "TIME";
    DuckDBTypeId2[DuckDBTypeId2["INTERVAL"] = 15] = "INTERVAL";
    DuckDBTypeId2[DuckDBTypeId2["HUGEINT"] = 16] = "HUGEINT";
    DuckDBTypeId2[DuckDBTypeId2["UHUGEINT"] = 32] = "UHUGEINT";
    DuckDBTypeId2[DuckDBTypeId2["VARCHAR"] = 17] = "VARCHAR";
    DuckDBTypeId2[DuckDBTypeId2["BLOB"] = 18] = "BLOB";
    DuckDBTypeId2[DuckDBTypeId2["DECIMAL"] = 19] = "DECIMAL";
    DuckDBTypeId2[DuckDBTypeId2["TIMESTAMP_S"] = 20] = "TIMESTAMP_S";
    DuckDBTypeId2[DuckDBTypeId2["TIMESTAMP_MS"] = 21] = "TIMESTAMP_MS";
    DuckDBTypeId2[DuckDBTypeId2["TIMESTAMP_NS"] = 22] = "TIMESTAMP_NS";
    DuckDBTypeId2[DuckDBTypeId2["ENUM"] = 23] = "ENUM";
    DuckDBTypeId2[DuckDBTypeId2["LIST"] = 24] = "LIST";
    DuckDBTypeId2[DuckDBTypeId2["STRUCT"] = 25] = "STRUCT";
    DuckDBTypeId2[DuckDBTypeId2["MAP"] = 26] = "MAP";
    DuckDBTypeId2[DuckDBTypeId2["ARRAY"] = 33] = "ARRAY";
    DuckDBTypeId2[DuckDBTypeId2["UUID"] = 27] = "UUID";
    DuckDBTypeId2[DuckDBTypeId2["UNION"] = 28] = "UNION";
    DuckDBTypeId2[DuckDBTypeId2["BIT"] = 29] = "BIT";
    DuckDBTypeId2[DuckDBTypeId2["TIME_TZ"] = 30] = "TIME_TZ";
    DuckDBTypeId2[DuckDBTypeId2["TIMESTAMP_TZ"] = 31] = "TIMESTAMP_TZ";
    DuckDBTypeId2[DuckDBTypeId2["ANY"] = 34] = "ANY";
    DuckDBTypeId2[DuckDBTypeId2["VARINT"] = 35] = "VARINT";
    DuckDBTypeId2[DuckDBTypeId2["SQLNULL"] = 36] = "SQLNULL";
  })(DuckDBTypeId || (exports.DuckDBTypeId = DuckDBTypeId = {}));
});

// node_modules/@duckdb/node-api/lib/sql.js
var require_sql = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.quotedString = quotedString;
  exports.quotedIdentifier = quotedIdentifier;
  function quotedString(input) {
    return `'${input.replace(`'`, `''`)}'`;
  }
  function quotedIdentifier(input) {
    return `"${input.replace(`"`, `""`)}"`;
  }
});

// node_modules/@duckdb/node-api/lib/DuckDBType.js
var require_DuckDBType = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBSQLNullType = exports.DuckDBVarIntType = exports.DuckDBAnyType = exports.DuckDBTimestampTZType = exports.DuckDBTimeTZType = exports.DuckDBBitType = exports.DuckDBUnionType = exports.DuckDBUUIDType = exports.DuckDBArrayType = exports.DuckDBMapType = exports.DuckDBStructType = exports.DuckDBListType = exports.DuckDBEnumType = exports.DuckDBTimestampNanosecondsType = exports.DuckDBTimestampMillisecondsType = exports.DuckDBTimestampSecondsType = exports.DuckDBDecimalType = exports.DuckDBBlobType = exports.DuckDBVarCharType = exports.DuckDBUHugeIntType = exports.DuckDBHugeIntType = exports.DuckDBIntervalType = exports.DuckDBTimeType = exports.DuckDBDateType = exports.DuckDBTimestampMicrosecondsType = exports.DuckDBTimestampType = exports.DuckDBDoubleType = exports.DuckDBFloatType = exports.DuckDBUBigIntType = exports.DuckDBUIntegerType = exports.DuckDBUSmallIntType = exports.DuckDBUTinyIntType = exports.DuckDBBigIntType = exports.DuckDBIntegerType = exports.DuckDBSmallIntType = exports.DuckDBTinyIntType = exports.DuckDBBooleanType = exports.BaseDuckDBType = undefined;
  var DuckDBTypeId_1 = require_DuckDBTypeId();
  var sql_1 = require_sql();

  class BaseDuckDBType {
    typeId;
    alias;
    constructor(typeId, alias) {
      this.typeId = typeId;
      this.alias = alias;
    }
    toString() {
      return DuckDBTypeId_1.DuckDBTypeId[this.typeId];
    }
  }
  exports.BaseDuckDBType = BaseDuckDBType;

  class DuckDBBooleanType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.BOOLEAN, alias);
    }
    static instance = new DuckDBBooleanType;
    static create(alias) {
      return alias ? new DuckDBBooleanType(alias) : DuckDBBooleanType.instance;
    }
  }
  exports.DuckDBBooleanType = DuckDBBooleanType;

  class DuckDBTinyIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TINYINT, alias);
    }
    static instance = new DuckDBTinyIntType;
    static create(alias) {
      return alias ? new DuckDBTinyIntType(alias) : DuckDBTinyIntType.instance;
    }
    static Max = 2 ** 7 - 1;
    static Min = -(2 ** 7);
  }
  exports.DuckDBTinyIntType = DuckDBTinyIntType;

  class DuckDBSmallIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.SMALLINT, alias);
    }
    static instance = new DuckDBSmallIntType;
    static create(alias) {
      return alias ? new DuckDBSmallIntType(alias) : DuckDBSmallIntType.instance;
    }
    static Max = 2 ** 15 - 1;
    static Min = -(2 ** 15);
  }
  exports.DuckDBSmallIntType = DuckDBSmallIntType;

  class DuckDBIntegerType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.INTEGER, alias);
    }
    static instance = new DuckDBIntegerType;
    static create(alias) {
      return alias ? new DuckDBIntegerType(alias) : DuckDBIntegerType.instance;
    }
    static Max = 2 ** 31 - 1;
    static Min = -(2 ** 31);
  }
  exports.DuckDBIntegerType = DuckDBIntegerType;

  class DuckDBBigIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.BIGINT, alias);
    }
    static instance = new DuckDBBigIntType;
    static create(alias) {
      return alias ? new DuckDBBigIntType(alias) : DuckDBBigIntType.instance;
    }
    static Max = 2n ** 63n - 1n;
    static Min = -(2n ** 63n);
  }
  exports.DuckDBBigIntType = DuckDBBigIntType;

  class DuckDBUTinyIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UTINYINT, alias);
    }
    static instance = new DuckDBUTinyIntType;
    static create(alias) {
      return alias ? new DuckDBUTinyIntType(alias) : DuckDBUTinyIntType.instance;
    }
    static Max = 2 ** 8 - 1;
    static Min = 0;
  }
  exports.DuckDBUTinyIntType = DuckDBUTinyIntType;

  class DuckDBUSmallIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.USMALLINT, alias);
    }
    static instance = new DuckDBUSmallIntType;
    static create(alias) {
      return alias ? new DuckDBUSmallIntType(alias) : DuckDBUSmallIntType.instance;
    }
    static Max = 2 ** 16 - 1;
    static Min = 0;
  }
  exports.DuckDBUSmallIntType = DuckDBUSmallIntType;

  class DuckDBUIntegerType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UINTEGER, alias);
    }
    static instance = new DuckDBUIntegerType;
    static create(alias) {
      return alias ? new DuckDBUIntegerType(alias) : DuckDBUIntegerType.instance;
    }
    static Max = 2 ** 32 - 1;
    static Min = 0;
  }
  exports.DuckDBUIntegerType = DuckDBUIntegerType;

  class DuckDBUBigIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UBIGINT, alias);
    }
    static instance = new DuckDBUBigIntType;
    static create(alias) {
      return alias ? new DuckDBUBigIntType(alias) : DuckDBUBigIntType.instance;
    }
    static Max = 2n ** 64n - 1n;
    static Min = 0n;
  }
  exports.DuckDBUBigIntType = DuckDBUBigIntType;

  class DuckDBFloatType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.FLOAT, alias);
    }
    static instance = new DuckDBFloatType;
    static create(alias) {
      return alias ? new DuckDBFloatType(alias) : DuckDBFloatType.instance;
    }
    static Min = Math.fround(-340282350000000000000000000000000000000);
    static Max = Math.fround(340282350000000000000000000000000000000);
  }
  exports.DuckDBFloatType = DuckDBFloatType;

  class DuckDBDoubleType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.DOUBLE, alias);
    }
    static instance = new DuckDBDoubleType;
    static create(alias) {
      return alias ? new DuckDBDoubleType(alias) : DuckDBDoubleType.instance;
    }
    static Min = -Number.MAX_VALUE;
    static Max = Number.MAX_VALUE;
  }
  exports.DuckDBDoubleType = DuckDBDoubleType;

  class DuckDBTimestampType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP, alias);
    }
    static instance = new DuckDBTimestampType;
    static create(alias) {
      return alias ? new DuckDBTimestampType(alias) : DuckDBTimestampType.instance;
    }
  }
  exports.DuckDBTimestampType = DuckDBTimestampType;
  exports.DuckDBTimestampMicrosecondsType = DuckDBTimestampType;

  class DuckDBDateType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.DATE, alias);
    }
    static instance = new DuckDBDateType;
    static create(alias) {
      return alias ? new DuckDBDateType(alias) : DuckDBDateType.instance;
    }
  }
  exports.DuckDBDateType = DuckDBDateType;

  class DuckDBTimeType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIME, alias);
    }
    static instance = new DuckDBTimeType;
    static create(alias) {
      return alias ? new DuckDBTimeType(alias) : DuckDBTimeType.instance;
    }
  }
  exports.DuckDBTimeType = DuckDBTimeType;

  class DuckDBIntervalType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.INTERVAL, alias);
    }
    static instance = new DuckDBIntervalType;
    static create(alias) {
      return alias ? new DuckDBIntervalType(alias) : DuckDBIntervalType.instance;
    }
  }
  exports.DuckDBIntervalType = DuckDBIntervalType;

  class DuckDBHugeIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.HUGEINT, alias);
    }
    static instance = new DuckDBHugeIntType;
    static create(alias) {
      return alias ? new DuckDBHugeIntType(alias) : DuckDBHugeIntType.instance;
    }
    static Max = 2n ** 127n - 1n;
    static Min = -(2n ** 127n);
  }
  exports.DuckDBHugeIntType = DuckDBHugeIntType;

  class DuckDBUHugeIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UHUGEINT, alias);
    }
    static instance = new DuckDBUHugeIntType;
    static create(alias) {
      return alias ? new DuckDBUHugeIntType(alias) : DuckDBUHugeIntType.instance;
    }
    static Max = 2n ** 128n - 1n;
    static Min = 0n;
  }
  exports.DuckDBUHugeIntType = DuckDBUHugeIntType;

  class DuckDBVarCharType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.VARCHAR, alias);
    }
    static instance = new DuckDBVarCharType;
    static create(alias) {
      return alias ? new DuckDBVarCharType(alias) : DuckDBVarCharType.instance;
    }
  }
  exports.DuckDBVarCharType = DuckDBVarCharType;

  class DuckDBBlobType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.BLOB, alias);
    }
    static instance = new DuckDBBlobType;
    static create(alias) {
      return alias ? new DuckDBBlobType(alias) : DuckDBBlobType.instance;
    }
  }
  exports.DuckDBBlobType = DuckDBBlobType;

  class DuckDBDecimalType extends BaseDuckDBType {
    width;
    scale;
    constructor(width, scale, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.DECIMAL, alias);
      this.width = width;
      this.scale = scale;
    }
    toString() {
      return `DECIMAL(${this.width},${this.scale})`;
    }
    static default = new DuckDBDecimalType(18, 3);
  }
  exports.DuckDBDecimalType = DuckDBDecimalType;

  class DuckDBTimestampSecondsType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_S, alias);
    }
    static instance = new DuckDBTimestampSecondsType;
    static create(alias) {
      return alias ? new DuckDBTimestampSecondsType(alias) : DuckDBTimestampSecondsType.instance;
    }
  }
  exports.DuckDBTimestampSecondsType = DuckDBTimestampSecondsType;

  class DuckDBTimestampMillisecondsType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_MS, alias);
    }
    static instance = new DuckDBTimestampMillisecondsType;
    static create(alias) {
      return alias ? new DuckDBTimestampMillisecondsType(alias) : DuckDBTimestampMillisecondsType.instance;
    }
  }
  exports.DuckDBTimestampMillisecondsType = DuckDBTimestampMillisecondsType;

  class DuckDBTimestampNanosecondsType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_NS, alias);
    }
    static instance = new DuckDBTimestampNanosecondsType;
    static create(alias) {
      return alias ? new DuckDBTimestampNanosecondsType(alias) : DuckDBTimestampNanosecondsType.instance;
    }
  }
  exports.DuckDBTimestampNanosecondsType = DuckDBTimestampNanosecondsType;

  class DuckDBEnumType extends BaseDuckDBType {
    values;
    internalTypeId;
    constructor(values, internalTypeId, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.ENUM, alias);
      this.values = values;
      this.internalTypeId = internalTypeId;
    }
    toString() {
      return `ENUM(${this.values.map(sql_1.quotedString).join(", ")})`;
    }
  }
  exports.DuckDBEnumType = DuckDBEnumType;

  class DuckDBListType extends BaseDuckDBType {
    valueType;
    constructor(valueType, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.LIST, alias);
      this.valueType = valueType;
    }
    toString() {
      return `${this.valueType}[]`;
    }
  }
  exports.DuckDBListType = DuckDBListType;

  class DuckDBStructType extends BaseDuckDBType {
    entryNames;
    entryTypes;
    constructor(entryNames, entryTypes, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.STRUCT, alias);
      if (entryNames.length !== entryTypes.length) {
        throw new Error(`Could not create DuckDBStructType:         entryNames length (${entryNames.length}) does not match entryTypes length (${entryTypes.length})`);
      }
      this.entryNames = entryNames;
      this.entryTypes = entryTypes;
    }
    get entryCount() {
      return this.entryNames.length;
    }
    toString() {
      const parts = [];
      for (let i = 0;i < this.entryNames.length; i++) {
        parts.push(`${(0, sql_1.quotedIdentifier)(this.entryNames[i])} ${this.entryTypes[i]}`);
      }
      return `STRUCT(${parts.join(", ")})`;
    }
  }
  exports.DuckDBStructType = DuckDBStructType;

  class DuckDBMapType extends BaseDuckDBType {
    keyType;
    valueType;
    constructor(keyType, valueType, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.MAP, alias);
      this.keyType = keyType;
      this.valueType = valueType;
    }
    toString() {
      return `MAP(${this.keyType}, ${this.valueType})`;
    }
  }
  exports.DuckDBMapType = DuckDBMapType;

  class DuckDBArrayType extends BaseDuckDBType {
    valueType;
    length;
    constructor(valueType, length, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.ARRAY, alias);
      this.valueType = valueType;
      this.length = length;
    }
    toString() {
      return `${this.valueType}[${this.length}]`;
    }
  }
  exports.DuckDBArrayType = DuckDBArrayType;

  class DuckDBUUIDType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UUID, alias);
    }
    static instance = new DuckDBUUIDType;
    static create(alias) {
      return alias ? new DuckDBUUIDType(alias) : DuckDBUUIDType.instance;
    }
  }
  exports.DuckDBUUIDType = DuckDBUUIDType;

  class DuckDBUnionType extends BaseDuckDBType {
    memberTags;
    memberTypes;
    constructor(memberTags, memberTypes, alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.UNION, alias);
      if (memberTags.length !== memberTypes.length) {
        throw new Error(`Could not create DuckDBUnionType:         tags length (${memberTags.length}) does not match valueTypes length (${memberTypes.length})`);
      }
      this.memberTags = memberTags;
      this.memberTypes = memberTypes;
    }
    get memberCount() {
      return this.memberTags.length;
    }
    toString() {
      const parts = [];
      for (let i = 0;i < this.memberTags.length; i++) {
        parts.push(`${(0, sql_1.quotedIdentifier)(this.memberTags[i])} ${this.memberTypes[i]}`);
      }
      return `UNION(${parts.join(", ")})`;
    }
  }
  exports.DuckDBUnionType = DuckDBUnionType;

  class DuckDBBitType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.BIT, alias);
    }
    static instance = new DuckDBBitType;
    static create(alias) {
      return alias ? new DuckDBBitType(alias) : DuckDBBitType.instance;
    }
  }
  exports.DuckDBBitType = DuckDBBitType;

  class DuckDBTimeTZType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIME_TZ, alias);
    }
    toString() {
      return "TIME WITH TIME ZONE";
    }
    static instance = new DuckDBTimeTZType;
    static create(alias) {
      return alias ? new DuckDBTimeTZType(alias) : DuckDBTimeTZType.instance;
    }
  }
  exports.DuckDBTimeTZType = DuckDBTimeTZType;

  class DuckDBTimestampTZType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_TZ, alias);
    }
    toString() {
      return "TIMESTAMP WITH TIME ZONE";
    }
    static instance = new DuckDBTimestampTZType;
    static create(alias) {
      return alias ? new DuckDBTimestampTZType(alias) : DuckDBTimestampTZType.instance;
    }
  }
  exports.DuckDBTimestampTZType = DuckDBTimestampTZType;

  class DuckDBAnyType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.ANY, alias);
    }
    static instance = new DuckDBAnyType;
    static create(alias) {
      return alias ? new DuckDBAnyType(alias) : DuckDBAnyType.instance;
    }
  }
  exports.DuckDBAnyType = DuckDBAnyType;

  class DuckDBVarIntType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.VARINT, alias);
    }
    static instance = new DuckDBVarIntType;
    static create(alias) {
      return alias ? new DuckDBVarIntType(alias) : DuckDBVarIntType.instance;
    }
    static Max = 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368n;
    static Min = -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368n;
  }
  exports.DuckDBVarIntType = DuckDBVarIntType;

  class DuckDBSQLNullType extends BaseDuckDBType {
    constructor(alias) {
      super(DuckDBTypeId_1.DuckDBTypeId.SQLNULL, alias);
    }
    static instance = new DuckDBSQLNullType;
    static create(alias) {
      return alias ? new DuckDBSQLNullType(alias) : DuckDBSQLNullType.instance;
    }
  }
  exports.DuckDBSQLNullType = DuckDBSQLNullType;
});

// node_modules/@duckdb/node-api/lib/DuckDBLogicalType.js
var require_DuckDBLogicalType = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBUnionLogicalType = exports.DuckDBArrayLogicalType = exports.DuckDBMapLogicalType = exports.DuckDBStructLogicalType = exports.DuckDBListLogicalType = exports.DuckDBEnumLogicalType = exports.DuckDBDecimalLogicalType = exports.DuckDBLogicalType = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBType_1 = require_DuckDBType();
  var DuckDBTypeId_1 = require_DuckDBTypeId();

  class DuckDBLogicalType {
    logical_type;
    constructor(logical_type) {
      this.logical_type = logical_type;
    }
    static create(logical_type) {
      switch (node_bindings_1.default.get_type_id(logical_type)) {
        case node_bindings_1.default.Type.DECIMAL:
          return new DuckDBDecimalLogicalType(logical_type);
        case node_bindings_1.default.Type.ENUM:
          return new DuckDBEnumLogicalType(logical_type);
        case node_bindings_1.default.Type.LIST:
          return new DuckDBListLogicalType(logical_type);
        case node_bindings_1.default.Type.STRUCT:
          return new DuckDBStructLogicalType(logical_type);
        case node_bindings_1.default.Type.MAP:
          return new DuckDBMapLogicalType(logical_type);
        case node_bindings_1.default.Type.ARRAY:
          return new DuckDBArrayLogicalType(logical_type);
        case node_bindings_1.default.Type.UNION:
          return new DuckDBUnionLogicalType(logical_type);
        default:
          return new DuckDBLogicalType(logical_type);
      }
    }
    static createDecimal(width, scale) {
      return new DuckDBDecimalLogicalType(node_bindings_1.default.create_decimal_type(width, scale));
    }
    static createEnum(member_names) {
      return new DuckDBEnumLogicalType(node_bindings_1.default.create_enum_type(member_names));
    }
    static createList(valueType) {
      return new DuckDBListLogicalType(node_bindings_1.default.create_list_type(valueType.logical_type));
    }
    static createStruct(entryNames, entryLogicalTypes) {
      const length = entryNames.length;
      if (length !== entryLogicalTypes.length) {
        throw new Error(`Could not create struct:         entryNames length (${entryNames.length}) does not match entryLogicalTypes length (${entryLogicalTypes.length})`);
      }
      const member_types = [];
      const member_names = [];
      for (let i = 0;i < length; i++) {
        member_types.push(entryLogicalTypes[i].logical_type);
        member_names.push(entryNames[i]);
      }
      return new DuckDBStructLogicalType(node_bindings_1.default.create_struct_type(member_types, member_names));
    }
    static createMap(keyType, valueType) {
      return new DuckDBMapLogicalType(node_bindings_1.default.create_map_type(keyType.logical_type, valueType.logical_type));
    }
    static createArray(valueType, length) {
      return new DuckDBArrayLogicalType(node_bindings_1.default.create_array_type(valueType.logical_type, length));
    }
    static createUnion(memberTags, memberLogicalTypes) {
      const length = memberTags.length;
      if (length !== memberLogicalTypes.length) {
        throw new Error(`Could not create union:         memberTags length (${memberTags.length}) does not match memberLogicalTypes length (${memberLogicalTypes.length})`);
      }
      const member_types = [];
      const member_names = [];
      for (let i = 0;i < length; i++) {
        member_types.push(memberLogicalTypes[i].logical_type);
        member_names.push(memberTags[i]);
      }
      return new DuckDBUnionLogicalType(node_bindings_1.default.create_union_type(member_types, member_names));
    }
    get typeId() {
      return node_bindings_1.default.get_type_id(this.logical_type);
    }
    get alias() {
      return node_bindings_1.default.logical_type_get_alias(this.logical_type) || undefined;
    }
    set alias(newAlias) {
      node_bindings_1.default.logical_type_set_alias(this.logical_type, newAlias);
    }
    asType() {
      const alias = this.alias;
      switch (this.typeId) {
        case DuckDBTypeId_1.DuckDBTypeId.BOOLEAN:
          return DuckDBType_1.DuckDBBooleanType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TINYINT:
          return DuckDBType_1.DuckDBTinyIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.SMALLINT:
          return DuckDBType_1.DuckDBSmallIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.INTEGER:
          return DuckDBType_1.DuckDBIntegerType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.BIGINT:
          return DuckDBType_1.DuckDBBigIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.UTINYINT:
          return DuckDBType_1.DuckDBUTinyIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.USMALLINT:
          return DuckDBType_1.DuckDBUSmallIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.UINTEGER:
          return DuckDBType_1.DuckDBUIntegerType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.UBIGINT:
          return DuckDBType_1.DuckDBUBigIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.FLOAT:
          return DuckDBType_1.DuckDBFloatType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.DOUBLE:
          return DuckDBType_1.DuckDBDoubleType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP:
          return DuckDBType_1.DuckDBTimestampType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.DATE:
          return DuckDBType_1.DuckDBDateType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIME:
          return DuckDBType_1.DuckDBTimeType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.INTERVAL:
          return DuckDBType_1.DuckDBIntervalType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.HUGEINT:
          return DuckDBType_1.DuckDBHugeIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.UHUGEINT:
          return DuckDBType_1.DuckDBUHugeIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.VARCHAR:
          return DuckDBType_1.DuckDBVarCharType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.BLOB:
          return DuckDBType_1.DuckDBBlobType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.DECIMAL:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_S:
          return DuckDBType_1.DuckDBTimestampSecondsType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_MS:
          return DuckDBType_1.DuckDBTimestampMillisecondsType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_NS:
          return DuckDBType_1.DuckDBTimestampNanosecondsType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.ENUM:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.LIST:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.STRUCT:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.MAP:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.ARRAY:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.UUID:
          return DuckDBType_1.DuckDBUUIDType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.UNION:
          throw new Error("Expected override");
        case DuckDBTypeId_1.DuckDBTypeId.BIT:
          return DuckDBType_1.DuckDBBitType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIME_TZ:
          return DuckDBType_1.DuckDBTimeTZType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_TZ:
          return DuckDBType_1.DuckDBTimestampTZType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.ANY:
          return DuckDBType_1.DuckDBAnyType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.VARINT:
          return DuckDBType_1.DuckDBVarIntType.create(alias);
        case DuckDBTypeId_1.DuckDBTypeId.SQLNULL:
          return DuckDBType_1.DuckDBSQLNullType.create(alias);
        default:
          throw new Error(`Unexpected type id: ${this.typeId}`);
      }
    }
  }
  exports.DuckDBLogicalType = DuckDBLogicalType;

  class DuckDBDecimalLogicalType extends DuckDBLogicalType {
    get width() {
      return node_bindings_1.default.decimal_width(this.logical_type);
    }
    get scale() {
      return node_bindings_1.default.decimal_scale(this.logical_type);
    }
    get internalTypeId() {
      return node_bindings_1.default.decimal_internal_type(this.logical_type);
    }
    asType() {
      return new DuckDBType_1.DuckDBDecimalType(this.width, this.scale, this.alias);
    }
  }
  exports.DuckDBDecimalLogicalType = DuckDBDecimalLogicalType;

  class DuckDBEnumLogicalType extends DuckDBLogicalType {
    get valueCount() {
      return node_bindings_1.default.enum_dictionary_size(this.logical_type);
    }
    value(index) {
      return node_bindings_1.default.enum_dictionary_value(this.logical_type, index);
    }
    values() {
      const values = [];
      const count = this.valueCount;
      for (let i = 0;i < count; i++) {
        values.push(this.value(i));
      }
      return values;
    }
    get internalTypeId() {
      return node_bindings_1.default.enum_internal_type(this.logical_type);
    }
    asType() {
      return new DuckDBType_1.DuckDBEnumType(this.values(), this.internalTypeId, this.alias);
    }
  }
  exports.DuckDBEnumLogicalType = DuckDBEnumLogicalType;

  class DuckDBListLogicalType extends DuckDBLogicalType {
    get valueType() {
      return DuckDBLogicalType.create(node_bindings_1.default.list_type_child_type(this.logical_type));
    }
    asType() {
      return new DuckDBType_1.DuckDBListType(this.valueType.asType(), this.alias);
    }
  }
  exports.DuckDBListLogicalType = DuckDBListLogicalType;

  class DuckDBStructLogicalType extends DuckDBLogicalType {
    get entryCount() {
      return node_bindings_1.default.struct_type_child_count(this.logical_type);
    }
    entryName(index) {
      return node_bindings_1.default.struct_type_child_name(this.logical_type, index);
    }
    entryLogicalType(index) {
      return DuckDBLogicalType.create(node_bindings_1.default.struct_type_child_type(this.logical_type, index));
    }
    entryType(index) {
      return this.entryLogicalType(index).asType();
    }
    entryNames() {
      const names = [];
      const count = this.entryCount;
      for (let i = 0;i < count; i++) {
        names.push(this.entryName(i));
      }
      return names;
    }
    entryLogicalTypes() {
      const valueTypes = [];
      const count = this.entryCount;
      for (let i = 0;i < count; i++) {
        valueTypes.push(this.entryLogicalType(i));
      }
      return valueTypes;
    }
    entryTypes() {
      const valueTypes = [];
      const count = this.entryCount;
      for (let i = 0;i < count; i++) {
        valueTypes.push(this.entryType(i));
      }
      return valueTypes;
    }
    asType() {
      return new DuckDBType_1.DuckDBStructType(this.entryNames(), this.entryTypes(), this.alias);
    }
  }
  exports.DuckDBStructLogicalType = DuckDBStructLogicalType;

  class DuckDBMapLogicalType extends DuckDBLogicalType {
    get keyType() {
      return DuckDBLogicalType.create(node_bindings_1.default.map_type_key_type(this.logical_type));
    }
    get valueType() {
      return DuckDBLogicalType.create(node_bindings_1.default.map_type_value_type(this.logical_type));
    }
    asType() {
      return new DuckDBType_1.DuckDBMapType(this.keyType.asType(), this.valueType.asType(), this.alias);
    }
  }
  exports.DuckDBMapLogicalType = DuckDBMapLogicalType;

  class DuckDBArrayLogicalType extends DuckDBLogicalType {
    get valueType() {
      return DuckDBLogicalType.create(node_bindings_1.default.array_type_child_type(this.logical_type));
    }
    get length() {
      return node_bindings_1.default.array_type_array_size(this.logical_type);
    }
    asType() {
      return new DuckDBType_1.DuckDBArrayType(this.valueType.asType(), this.length, this.alias);
    }
  }
  exports.DuckDBArrayLogicalType = DuckDBArrayLogicalType;

  class DuckDBUnionLogicalType extends DuckDBLogicalType {
    get memberCount() {
      return node_bindings_1.default.union_type_member_count(this.logical_type);
    }
    memberTag(index) {
      return node_bindings_1.default.union_type_member_name(this.logical_type, index);
    }
    memberLogicalType(index) {
      return DuckDBLogicalType.create(node_bindings_1.default.union_type_member_type(this.logical_type, index));
    }
    memberType(index) {
      return this.memberLogicalType(index).asType();
    }
    memberTags() {
      const tags = [];
      const count = this.memberCount;
      for (let i = 0;i < count; i++) {
        tags.push(this.memberTag(i));
      }
      return tags;
    }
    memberLogicalTypes() {
      const valueTypes = [];
      const count = this.memberCount;
      for (let i = 0;i < count; i++) {
        valueTypes.push(this.memberLogicalType(i));
      }
      return valueTypes;
    }
    memberTypes() {
      const valueTypes = [];
      const count = this.memberCount;
      for (let i = 0;i < count; i++) {
        valueTypes.push(this.memberType(i));
      }
      return valueTypes;
    }
    asType() {
      return new DuckDBType_1.DuckDBUnionType(this.memberTags(), this.memberTypes(), this.alias);
    }
  }
  exports.DuckDBUnionLogicalType = DuckDBUnionLogicalType;
});

// node_modules/@duckdb/node-api/lib/DuckDBAppender.js
var require_DuckDBAppender = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBAppender = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBLogicalType_1 = require_DuckDBLogicalType();

  class DuckDBAppender {
    appender;
    constructor(appender) {
      this.appender = appender;
    }
    close() {
      node_bindings_1.default.appender_close(this.appender);
    }
    flush() {
      node_bindings_1.default.appender_flush(this.appender);
    }
    get columnCount() {
      return node_bindings_1.default.appender_column_count(this.appender);
    }
    columnType(columnIndex) {
      return DuckDBLogicalType_1.DuckDBLogicalType.create(node_bindings_1.default.appender_column_type(this.appender, columnIndex)).asType();
    }
    endRow() {
      node_bindings_1.default.appender_end_row(this.appender);
    }
    appendDefault() {
      node_bindings_1.default.append_default(this.appender);
    }
    appendBoolean(value) {
      node_bindings_1.default.append_bool(this.appender, value);
    }
    appendTinyInt(value) {
      node_bindings_1.default.append_int8(this.appender, value);
    }
    appendSmallInt(value) {
      node_bindings_1.default.append_int16(this.appender, value);
    }
    appendInteger(value) {
      node_bindings_1.default.append_int32(this.appender, value);
    }
    appendBigInt(value) {
      node_bindings_1.default.append_int64(this.appender, value);
    }
    appendHugeInt(value) {
      node_bindings_1.default.append_hugeint(this.appender, value);
    }
    appendUTinyInt(value) {
      node_bindings_1.default.append_uint8(this.appender, value);
    }
    appendUSmallInt(value) {
      node_bindings_1.default.append_uint16(this.appender, value);
    }
    appendUInteger(value) {
      node_bindings_1.default.append_uint32(this.appender, value);
    }
    appendUBigInt(value) {
      node_bindings_1.default.append_uint64(this.appender, value);
    }
    appendUHugeInt(value) {
      node_bindings_1.default.append_uhugeint(this.appender, value);
    }
    appendFloat(value) {
      node_bindings_1.default.append_float(this.appender, value);
    }
    appendDouble(value) {
      node_bindings_1.default.append_double(this.appender, value);
    }
    appendDate(value) {
      node_bindings_1.default.append_date(this.appender, value);
    }
    appendTime(value) {
      node_bindings_1.default.append_time(this.appender, value);
    }
    appendTimestamp(value) {
      node_bindings_1.default.append_timestamp(this.appender, value);
    }
    appendInterval(value) {
      node_bindings_1.default.append_interval(this.appender, value);
    }
    appendVarchar(value) {
      node_bindings_1.default.append_varchar(this.appender, value);
    }
    appendBlob(value) {
      node_bindings_1.default.append_blob(this.appender, value);
    }
    appendNull() {
      node_bindings_1.default.append_null(this.appender);
    }
    appendDataChunk(dataChunk) {
      node_bindings_1.default.append_data_chunk(this.appender, dataChunk.chunk);
    }
  }
  exports.DuckDBAppender = DuckDBAppender;
});

// ../../../../../../bun-vfs$$/node_modules/os/index.js
var exports_os = {};
__export(exports_os, {
  uptime: () => A,
  type: () => V,
  totalmem: () => N,
  tmpdir: () => U,
  release: () => x,
  platform: () => O,
  networkInterfaces: () => j,
  loadavg: () => y,
  hostname: () => k,
  homedir: () => _,
  getNetworkInterfaces: () => B,
  freemem: () => I,
  endianness: () => L,
  default: () => E,
  cpus: () => b,
  arch: () => M,
  EOL: () => X
});
var c, a, m, s, p, d, l = (r, n) => () => (n || r((n = { exports: {} }).exports, n), n.exports), h = (r, n, t, i) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of s(n))
      !d.call(r, o) && o !== t && a(r, o, { get: () => n[o], enumerable: !(i = m(n, o)) || i.enumerable });
  return r;
}, g = (r, n, t) => (t = r != null ? c(p(r)) : {}, h(n || !r || !r.__esModule ? a(t, "default", { value: r, enumerable: true }) : t, r)), f, u, E, L, k, y, A, I, N, b, V, x, M, O, U, X, _, j, B;
var init_os = __esm(() => {
  c = Object.create;
  a = Object.defineProperty;
  m = Object.getOwnPropertyDescriptor;
  s = Object.getOwnPropertyNames;
  p = Object.getPrototypeOf;
  d = Object.prototype.hasOwnProperty;
  f = l((e) => {
    e.endianness = function() {
      return "LE";
    };
    e.hostname = function() {
      return typeof location < "u" ? location.hostname : "";
    };
    e.loadavg = function() {
      return [];
    };
    e.uptime = function() {
      return 0;
    };
    e.freemem = function() {
      return Number.MAX_VALUE;
    };
    e.totalmem = function() {
      return Number.MAX_VALUE;
    };
    e.cpus = function() {
      return [];
    };
    e.type = function() {
      return "Browser";
    };
    e.release = function() {
      return typeof navigator < "u" ? navigator.appVersion : "";
    };
    e.networkInterfaces = e.getNetworkInterfaces = function() {
      return {};
    };
    e.arch = function() {
      return "javascript";
    };
    e.platform = function() {
      return "browser";
    };
    e.tmpdir = e.tmpDir = function() {
      return "/tmp";
    };
    e.EOL = `
`;
    e.homedir = function() {
      return "/";
    };
  });
  u = g(f());
  E = u.default;
  ({ endianness: L, hostname: k, loadavg: y, uptime: A, freemem: I, totalmem: N, cpus: b, type: V, release: x, arch: M, platform: O, tmpdir: U, EOL: X, homedir: _, networkInterfaces: j, getNetworkInterfaces: B } = u.default);
});

// node_modules/@duckdb/node-api/lib/conversion/displayStringForDuckDBValue.js
var require_displayStringForDuckDBValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.displayStringForDuckDBValue = displayStringForDuckDBValue;
  var sql_1 = require_sql();
  function displayStringForDuckDBValue(value) {
    if (value == null) {
      return "NULL";
    }
    if (typeof value === "string") {
      return (0, sql_1.quotedString)(value);
    }
    return value.toString();
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBArrayValue.js
var require_DuckDBArrayValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBArrayValue = undefined;
  exports.arrayValue = arrayValue;
  var displayStringForDuckDBValue_1 = require_displayStringForDuckDBValue();

  class DuckDBArrayValue {
    items;
    constructor(items) {
      this.items = items;
    }
    toString() {
      return `[${this.items.map(displayStringForDuckDBValue_1.displayStringForDuckDBValue).join(", ")}]`;
    }
  }
  exports.DuckDBArrayValue = DuckDBArrayValue;
  function arrayValue(items) {
    return new DuckDBArrayValue(items);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBBitValue.js
var require_DuckDBBitValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBBitValue = undefined;
  exports.bitValue = bitValue;

  class DuckDBBitValue {
    data;
    constructor(data) {
      this.data = data;
    }
    padding() {
      return this.data[0];
    }
    get length() {
      return (this.data.length - 1) * 8 - this.padding();
    }
    getBool(index) {
      const offset = index + this.padding();
      const dataIndex = Math.floor(offset / 8) + 1;
      const byte = this.data[dataIndex] >> 7 - offset % 8;
      return (byte & 1) !== 0;
    }
    toBools() {
      const bools = [];
      const length = this.length;
      for (let i = 0;i < length; i++) {
        bools.push(this.getBool(i));
      }
      return bools;
    }
    getBit(index) {
      return this.getBool(index) ? 1 : 0;
    }
    toBits() {
      const bits = [];
      const length = this.length;
      for (let i = 0;i < length; i++) {
        bits.push(this.getBit(i));
      }
      return bits;
    }
    toString() {
      const length = this.length;
      const chars = Array.from({ length });
      for (let i = 0;i < length; i++) {
        chars[i] = this.getBool(i) ? "1" : "0";
      }
      return chars.join("");
    }
    static fromString(str, on = "1") {
      return DuckDBBitValue.fromLengthAndPredicate(str.length, (i) => str[i] === on);
    }
    static fromBits(bits, on = 1) {
      return DuckDBBitValue.fromLengthAndPredicate(bits.length, (i) => bits[i] === on);
    }
    static fromBools(bools) {
      return DuckDBBitValue.fromLengthAndPredicate(bools.length, (i) => bools[i]);
    }
    static fromLengthAndPredicate(length, predicate) {
      const byteCount = Math.ceil(length / 8) + 1;
      const paddingBitCount = (8 - length % 8) % 8;
      const data = new Uint8Array(byteCount);
      let byteIndex = 0;
      data[byteIndex++] = paddingBitCount;
      let byte = 0;
      let byteBit = 0;
      while (byteBit < paddingBitCount) {
        byte <<= 1;
        byte |= 1;
        byteBit++;
      }
      let bitIndex = 0;
      while (byteIndex < byteCount) {
        while (byteBit < 8) {
          byte <<= 1;
          if (predicate(bitIndex++)) {
            byte |= 1;
          }
          byteBit++;
        }
        data[byteIndex++] = byte;
        byte = 0;
        byteBit = 0;
      }
      return new DuckDBBitValue(data);
    }
  }
  exports.DuckDBBitValue = DuckDBBitValue;
  function bitValue(str) {
    return DuckDBBitValue.fromString(str);
  }
});

// node_modules/@duckdb/node-api/lib/conversion/stringFromBlob.js
var require_stringFromBlob = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.stringFromBlob = stringFromBlob;
  function stringFromBlob(bytes) {
    const byteStrings = [];
    for (const byte of bytes) {
      if (byte <= 31 || byte === 34 || byte === 39 || byte >= 127) {
        byteStrings.push(`\\x${byte.toString(16).toUpperCase().padStart(2, "0")}`);
      } else {
        byteStrings.push(String.fromCharCode(byte));
      }
    }
    return byteStrings.join("");
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBBlobValue.js
var require_DuckDBBlobValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBBlobValue = undefined;
  exports.blobValue = blobValue;
  var stringFromBlob_1 = require_stringFromBlob();
  var textEncoder = new TextEncoder;

  class DuckDBBlobValue {
    bytes;
    constructor(bytes) {
      this.bytes = bytes;
    }
    toString() {
      return (0, stringFromBlob_1.stringFromBlob)(this.bytes);
    }
    static fromString(str) {
      return new DuckDBBlobValue(Buffer.from(textEncoder.encode(str)));
    }
  }
  exports.DuckDBBlobValue = DuckDBBlobValue;
  function blobValue(bytes) {
    return new DuckDBBlobValue(bytes);
  }
});

// node_modules/@duckdb/node-api/lib/conversion/dateTimeStringConversion.js
var require_dateTimeStringConversion = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getDuckDBDateStringFromYearMonthDay = getDuckDBDateStringFromYearMonthDay;
  exports.getDuckDBDateStringFromDays = getDuckDBDateStringFromDays;
  exports.getDuckDBTimeStringFromParts = getDuckDBTimeStringFromParts;
  exports.getDuckDBTimeStringFromPartsNS = getDuckDBTimeStringFromPartsNS;
  exports.getDuckDBTimeStringFromPositiveMicroseconds = getDuckDBTimeStringFromPositiveMicroseconds;
  exports.getDuckDBTimeStringFromPositiveNanoseconds = getDuckDBTimeStringFromPositiveNanoseconds;
  exports.getDuckDBTimeStringFromMicrosecondsInDay = getDuckDBTimeStringFromMicrosecondsInDay;
  exports.getDuckDBTimeStringFromNanosecondsInDay = getDuckDBTimeStringFromNanosecondsInDay;
  exports.getDuckDBTimeStringFromMicroseconds = getDuckDBTimeStringFromMicroseconds;
  exports.getDuckDBTimestampStringFromDaysAndMicroseconds = getDuckDBTimestampStringFromDaysAndMicroseconds;
  exports.getDuckDBTimestampStringFromDaysAndNanoseconds = getDuckDBTimestampStringFromDaysAndNanoseconds;
  exports.getDuckDBTimestampStringFromMicroseconds = getDuckDBTimestampStringFromMicroseconds;
  exports.getDuckDBTimestampStringFromSeconds = getDuckDBTimestampStringFromSeconds;
  exports.getDuckDBTimestampStringFromMilliseconds = getDuckDBTimestampStringFromMilliseconds;
  exports.getDuckDBTimestampStringFromNanoseconds = getDuckDBTimestampStringFromNanoseconds;
  exports.getDuckDBIntervalString = getDuckDBIntervalString;
  var DAYS_IN_400_YEARS = 146097;
  var MILLISECONDS_PER_DAY_NUM = 86400000;
  var MICROSECONDS_PER_SECOND = 1000000n;
  var MICROSECONDS_PER_MILLISECOND = 1000n;
  var NANOSECONDS_PER_SECOND = 1000000000n;
  var SECONDS_PER_MINUTE = 60n;
  var MINUTES_PER_HOUR = 60n;
  var MICROSECONDS_PER_DAY = 86400000000n;
  var NANOSECONDS_PER_DAY = 86400000000000n;
  var NEGATIVE_INFINITY_TIMESTAMP = -9223372036854775807n;
  var POSITIVE_INFINITY_TIMESTAMP = 9223372036854775807n;
  function getDuckDBDateStringFromYearMonthDay(year, month, dayOfMonth) {
    const yearStr = String(Math.abs(year)).padStart(4, "0");
    const monthStr = String(month).padStart(2, "0");
    const dayOfMonthStr = String(dayOfMonth).padStart(2, "0");
    return `${yearStr}-${monthStr}-${dayOfMonthStr}${year < 0 ? " (BC)" : ""}`;
  }
  function getDuckDBDateStringFromDays(days) {
    const absDays = Math.abs(days);
    const sign = days < 0 ? -1 : 1;
    const num400YearIntervals = Math.floor(absDays / DAYS_IN_400_YEARS);
    const yearsFrom400YearIntervals = sign * num400YearIntervals * 400;
    const absDaysFromRemainingInterval = absDays % DAYS_IN_400_YEARS;
    const millisecondsFromRemainingInterval = sign * absDaysFromRemainingInterval * MILLISECONDS_PER_DAY_NUM;
    const date = new Date(millisecondsFromRemainingInterval);
    let year = yearsFrom400YearIntervals + date.getUTCFullYear();
    if (year < 0) {
      year--;
    }
    const month = date.getUTCMonth() + 1;
    const dayOfMonth = date.getUTCDate();
    return getDuckDBDateStringFromYearMonthDay(year, month, dayOfMonth);
  }
  function getDuckDBTimeStringFromParts(hoursPart, minutesPart, secondsPart, microsecondsPart) {
    const hoursStr = String(hoursPart).padStart(2, "0");
    const minutesStr = String(minutesPart).padStart(2, "0");
    const secondsStr = String(secondsPart).padStart(2, "0");
    const microsecondsStr = String(microsecondsPart).padStart(6, "0").replace(/0+$/, "");
    return `${hoursStr}:${minutesStr}:${secondsStr}${microsecondsStr.length > 0 ? `.${microsecondsStr}` : ""}`;
  }
  function getDuckDBTimeStringFromPartsNS(hoursPart, minutesPart, secondsPart, nanosecondsPart) {
    const hoursStr = String(hoursPart).padStart(2, "0");
    const minutesStr = String(minutesPart).padStart(2, "0");
    const secondsStr = String(secondsPart).padStart(2, "0");
    const nanosecondsStr = String(nanosecondsPart).padStart(9, "0").replace(/0+$/, "");
    return `${hoursStr}:${minutesStr}:${secondsStr}${nanosecondsStr.length > 0 ? `.${nanosecondsStr}` : ""}`;
  }
  function getDuckDBTimeStringFromPositiveMicroseconds(positiveMicroseconds) {
    const microsecondsPart = positiveMicroseconds % MICROSECONDS_PER_SECOND;
    const seconds = positiveMicroseconds / MICROSECONDS_PER_SECOND;
    const secondsPart = seconds % SECONDS_PER_MINUTE;
    const minutes = seconds / SECONDS_PER_MINUTE;
    const minutesPart = minutes % MINUTES_PER_HOUR;
    const hoursPart = minutes / MINUTES_PER_HOUR;
    return getDuckDBTimeStringFromParts(hoursPart, minutesPart, secondsPart, microsecondsPart);
  }
  function getDuckDBTimeStringFromPositiveNanoseconds(positiveNanoseconds) {
    const nanosecondsPart = positiveNanoseconds % NANOSECONDS_PER_SECOND;
    const seconds = positiveNanoseconds / NANOSECONDS_PER_SECOND;
    const secondsPart = seconds % SECONDS_PER_MINUTE;
    const minutes = seconds / SECONDS_PER_MINUTE;
    const minutesPart = minutes % MINUTES_PER_HOUR;
    const hoursPart = minutes / MINUTES_PER_HOUR;
    return getDuckDBTimeStringFromPartsNS(hoursPart, minutesPart, secondsPart, nanosecondsPart);
  }
  function getDuckDBTimeStringFromMicrosecondsInDay(microsecondsInDay) {
    const positiveMicroseconds = microsecondsInDay < 0 ? microsecondsInDay + MICROSECONDS_PER_DAY : microsecondsInDay;
    return getDuckDBTimeStringFromPositiveMicroseconds(positiveMicroseconds);
  }
  function getDuckDBTimeStringFromNanosecondsInDay(nanosecondsInDay) {
    const positiveNanoseconds = nanosecondsInDay < 0 ? nanosecondsInDay + NANOSECONDS_PER_DAY : nanosecondsInDay;
    return getDuckDBTimeStringFromPositiveNanoseconds(positiveNanoseconds);
  }
  function getDuckDBTimeStringFromMicroseconds(microseconds) {
    const negative = microseconds < 0;
    const positiveMicroseconds = negative ? -microseconds : microseconds;
    const positiveString = getDuckDBTimeStringFromPositiveMicroseconds(positiveMicroseconds);
    return negative ? `-${positiveString}` : positiveString;
  }
  function getDuckDBTimestampStringFromDaysAndMicroseconds(days, microsecondsInDay, timezone) {
    const dateStr = getDuckDBDateStringFromDays(Number(days));
    const timeStr = getDuckDBTimeStringFromMicrosecondsInDay(microsecondsInDay);
    const timezoneStr = timezone ? ` ${timezone}` : "";
    return `${dateStr} ${timeStr}${timezoneStr}`;
  }
  function getDuckDBTimestampStringFromDaysAndNanoseconds(days, nanosecondsInDay, timezone) {
    const dateStr = getDuckDBDateStringFromDays(Number(days));
    const timeStr = getDuckDBTimeStringFromNanosecondsInDay(nanosecondsInDay);
    const timezoneStr = timezone ? ` ${timezone}` : "";
    return `${dateStr} ${timeStr}${timezoneStr}`;
  }
  function getDuckDBTimestampStringFromMicroseconds(microseconds, timezone) {
    if (microseconds === NEGATIVE_INFINITY_TIMESTAMP) {
      return "-infinity";
    }
    if (microseconds === POSITIVE_INFINITY_TIMESTAMP) {
      return "infinity";
    }
    let days = microseconds / MICROSECONDS_PER_DAY;
    let microsecondsPart = microseconds % MICROSECONDS_PER_DAY;
    if (microsecondsPart < 0) {
      days--;
      microsecondsPart += MICROSECONDS_PER_DAY;
    }
    return getDuckDBTimestampStringFromDaysAndMicroseconds(days, microsecondsPart, timezone);
  }
  function getDuckDBTimestampStringFromSeconds(seconds, timezone) {
    return getDuckDBTimestampStringFromMicroseconds(seconds * MICROSECONDS_PER_SECOND, timezone);
  }
  function getDuckDBTimestampStringFromMilliseconds(milliseconds, timezone) {
    return getDuckDBTimestampStringFromMicroseconds(milliseconds * MICROSECONDS_PER_MILLISECOND, timezone);
  }
  function getDuckDBTimestampStringFromNanoseconds(nanoseconds, timezone) {
    let days = nanoseconds / NANOSECONDS_PER_DAY;
    let nanosecondsPart = nanoseconds % NANOSECONDS_PER_DAY;
    if (nanosecondsPart < 0) {
      days--;
      nanosecondsPart += NANOSECONDS_PER_DAY;
    }
    return getDuckDBTimestampStringFromDaysAndNanoseconds(days, nanosecondsPart, timezone);
  }
  function numberAndUnit(value, baseUnit) {
    return `${value} ${baseUnit}${Math.abs(value) !== 1 ? "s" : ""}`;
  }
  function getDuckDBIntervalString(months, days, microseconds) {
    const parts = [];
    if (months !== 0) {
      const sign = months < 0 ? -1 : 1;
      const absMonths = Math.abs(months);
      const absYears = Math.floor(absMonths / 12);
      const years = sign * absYears;
      const extraMonths = sign * (absMonths - absYears * 12);
      if (years !== 0) {
        parts.push(numberAndUnit(years, "year"));
      }
      if (extraMonths !== 0) {
        parts.push(numberAndUnit(extraMonths, "month"));
      }
    }
    if (days !== 0) {
      parts.push(numberAndUnit(days, "day"));
    }
    if (microseconds !== 0n) {
      parts.push(getDuckDBTimeStringFromMicroseconds(microseconds));
    }
    if (parts.length > 0) {
      return parts.join(" ");
    }
    return "00:00:00";
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBDateValue.js
var require_DuckDBDateValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBDateValue = undefined;
  exports.dateValue = dateValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBDateValue {
    days;
    constructor(days) {
      this.days = days;
    }
    get isFinite() {
      return node_bindings_1.default.is_finite_date(this);
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBDateStringFromDays)(this.days);
    }
    toParts() {
      return node_bindings_1.default.from_date(this);
    }
    static fromParts(parts) {
      return new DuckDBDateValue(node_bindings_1.default.to_date(parts).days);
    }
    static Epoch = new DuckDBDateValue(0);
    static Max = new DuckDBDateValue(2 ** 31 - 2);
    static Min = new DuckDBDateValue(-(2 ** 31 - 2));
    static PosInf = new DuckDBDateValue(2 ** 31 - 1);
    static NegInf = new DuckDBDateValue(-(2 ** 31 - 1));
  }
  exports.DuckDBDateValue = DuckDBDateValue;
  function dateValue(days) {
    return new DuckDBDateValue(days);
  }
});

// node_modules/@duckdb/node-api/lib/conversion/stringFromDecimal.js
var require_stringFromDecimal = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.stringFromDecimal = stringFromDecimal;
  function getDecimalSeparator(locales) {
    const decimalSeparator = new Intl.NumberFormat(locales, { useGrouping: false }).formatToParts(0.1).find((part) => part.type === "decimal")?.value ?? ".";
    return decimalSeparator;
  }
  var cachedDecimalSeparators = {};
  function getCachedDecimalSeparator(locales) {
    const cacheKey = JSON.stringify(locales);
    if (cacheKey in cachedDecimalSeparators) {
      return cachedDecimalSeparators[cacheKey];
    }
    const decimalSeparator = getDecimalSeparator(locales);
    cachedDecimalSeparators[cacheKey] = decimalSeparator;
    return decimalSeparator;
  }
  function formatWholePart(localeOptions, val) {
    if (localeOptions) {
      const { minimumFractionDigits: _minFD, maximumFractionDigits: _maxFD, ...restOptions } = localeOptions.options ?? {};
      return val.toLocaleString(localeOptions?.locales, restOptions);
    }
    return String(val);
  }
  function formatFractionalPart(localeOptions, val, scale) {
    const fractionalPartStr = String(val).padStart(scale, "0");
    if (!localeOptions) {
      return fractionalPartStr;
    }
    const minFracDigits = localeOptions?.options?.minimumFractionDigits ?? 0;
    const maxFracDigits = localeOptions?.options?.maximumFractionDigits ?? 20;
    return fractionalPartStr.padEnd(minFracDigits, "0").slice(0, maxFracDigits);
  }
  function stringFromDecimal(scaledValue, scale, localeOptions) {
    if (scale > 0) {
      const scaleFactor = BigInt(10) ** BigInt(scale);
      const absScaledValue = scaledValue < 0 ? -scaledValue : scaledValue;
      const prefix = scaledValue < 0 ? "-" : "";
      const wholePartNum = absScaledValue / scaleFactor;
      const wholePartStr = formatWholePart(localeOptions, wholePartNum);
      const fractionalPartNum = absScaledValue % scaleFactor;
      const fractionalPartStr = formatFractionalPart(localeOptions, fractionalPartNum, scale);
      const decimalSeparatorStr = localeOptions ? getCachedDecimalSeparator(localeOptions.locales) : ".";
      return `${prefix}${wholePartStr}${decimalSeparatorStr}${fractionalPartStr}`;
    }
    if (localeOptions) {
      return scaledValue.toLocaleString(localeOptions?.locales, localeOptions?.options);
    }
    return String(scaledValue);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBDecimalValue.js
var require_DuckDBDecimalValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBDecimalValue = undefined;
  exports.decimalValue = decimalValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var stringFromDecimal_1 = require_stringFromDecimal();

  class DuckDBDecimalValue {
    width;
    scale;
    value;
    constructor(value, width, scale) {
      this.width = width;
      this.scale = scale;
      this.value = value;
    }
    toString() {
      return (0, stringFromDecimal_1.stringFromDecimal)(this.value, this.scale);
    }
    toDouble() {
      return node_bindings_1.default.decimal_to_double(this);
    }
    static fromDouble(double, width, scale) {
      const decimal = node_bindings_1.default.double_to_decimal(double, width, scale);
      return new DuckDBDecimalValue(decimal.value, decimal.width, decimal.scale);
    }
  }
  exports.DuckDBDecimalValue = DuckDBDecimalValue;
  function decimalValue(value, width, scale) {
    return new DuckDBDecimalValue(value, width, scale);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBIntervalValue.js
var require_DuckDBIntervalValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBIntervalValue = undefined;
  exports.intervalValue = intervalValue;
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBIntervalValue {
    months;
    days;
    micros;
    constructor(months, days, micros) {
      this.months = months;
      this.days = days;
      this.micros = micros;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBIntervalString)(this.months, this.days, this.micros);
    }
  }
  exports.DuckDBIntervalValue = DuckDBIntervalValue;
  function intervalValue(months, days, micros) {
    return new DuckDBIntervalValue(months, days, micros);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBListValue.js
var require_DuckDBListValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBListValue = undefined;
  exports.listValue = listValue;
  var displayStringForDuckDBValue_1 = require_displayStringForDuckDBValue();

  class DuckDBListValue {
    items;
    constructor(items) {
      this.items = items;
    }
    toString() {
      return `[${this.items.map(displayStringForDuckDBValue_1.displayStringForDuckDBValue).join(", ")}]`;
    }
  }
  exports.DuckDBListValue = DuckDBListValue;
  function listValue(items) {
    return new DuckDBListValue(items);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBMapValue.js
var require_DuckDBMapValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBMapValue = undefined;
  exports.mapValue = mapValue;
  var displayStringForDuckDBValue_1 = require_displayStringForDuckDBValue();

  class DuckDBMapValue {
    entries;
    constructor(entries) {
      this.entries = entries;
    }
    toString() {
      return `{${this.entries.map(({ key, value }) => `${(0, displayStringForDuckDBValue_1.displayStringForDuckDBValue)(key)}: ${(0, displayStringForDuckDBValue_1.displayStringForDuckDBValue)(value)}`).join(", ")}}`;
    }
  }
  exports.DuckDBMapValue = DuckDBMapValue;
  function mapValue(entries) {
    return new DuckDBMapValue(entries);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBStructValue.js
var require_DuckDBStructValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBStructValue = undefined;
  exports.structValue = structValue;
  var displayStringForDuckDBValue_1 = require_displayStringForDuckDBValue();

  class DuckDBStructValue {
    entries;
    constructor(entries) {
      this.entries = entries;
    }
    toString() {
      const parts = [];
      for (const name in this.entries) {
        parts.push(`${(0, displayStringForDuckDBValue_1.displayStringForDuckDBValue)(name)}: ${(0, displayStringForDuckDBValue_1.displayStringForDuckDBValue)(this.entries[name])}`);
      }
      return `{${parts.join(", ")}}`;
    }
  }
  exports.DuckDBStructValue = DuckDBStructValue;
  function structValue(entries) {
    return new DuckDBStructValue(entries);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimestampSecondsValue.js
var require_DuckDBTimestampSecondsValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimestampSecondsValue = undefined;
  exports.timestampSecondsValue = timestampSecondsValue;
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBTimestampSecondsValue {
    seconds;
    constructor(seconds) {
      this.seconds = seconds;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimestampStringFromSeconds)(this.seconds);
    }
    static Epoch = new DuckDBTimestampSecondsValue(0n);
    static Max = new DuckDBTimestampSecondsValue(9223372036854n);
    static Min = new DuckDBTimestampSecondsValue(-9223372022400n);
  }
  exports.DuckDBTimestampSecondsValue = DuckDBTimestampSecondsValue;
  function timestampSecondsValue(seconds) {
    return new DuckDBTimestampSecondsValue(seconds);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimestampMillisecondsValue.js
var require_DuckDBTimestampMillisecondsValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimestampMillisecondsValue = undefined;
  exports.timestampMillisValue = timestampMillisValue;
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();
  var DuckDBTimestampSecondsValue_1 = require_DuckDBTimestampSecondsValue();

  class DuckDBTimestampMillisecondsValue {
    milliseconds;
    constructor(milliseconds) {
      this.milliseconds = milliseconds;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimestampStringFromMilliseconds)(this.milliseconds);
    }
    static Epoch = new DuckDBTimestampMillisecondsValue(0n);
    static Max = new DuckDBTimestampMillisecondsValue((2n ** 63n - 2n) / 1000n);
    static Min = new DuckDBTimestampMillisecondsValue(DuckDBTimestampSecondsValue_1.DuckDBTimestampSecondsValue.Min.seconds * 1000n);
  }
  exports.DuckDBTimestampMillisecondsValue = DuckDBTimestampMillisecondsValue;
  function timestampMillisValue(milliseconds) {
    return new DuckDBTimestampMillisecondsValue(milliseconds);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimestampNanosecondsValue.js
var require_DuckDBTimestampNanosecondsValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimestampNanosecondsValue = undefined;
  exports.timestampNanosValue = timestampNanosValue;
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBTimestampNanosecondsValue {
    nanoseconds;
    constructor(nanoseconds) {
      this.nanoseconds = nanoseconds;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimestampStringFromNanoseconds)(this.nanoseconds);
    }
    static Epoch = new DuckDBTimestampNanosecondsValue(0n);
    static Max = new DuckDBTimestampNanosecondsValue(2n ** 63n - 2n);
    static Min = new DuckDBTimestampNanosecondsValue(-9223286400000000000n);
  }
  exports.DuckDBTimestampNanosecondsValue = DuckDBTimestampNanosecondsValue;
  function timestampNanosValue(nanoseconds) {
    return new DuckDBTimestampNanosecondsValue(nanoseconds);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimestampValue.js
var require_DuckDBTimestampValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimestampMicrosecondsValue = exports.DuckDBTimestampValue = undefined;
  exports.timestampValue = timestampValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();
  var DuckDBTimestampMillisecondsValue_1 = require_DuckDBTimestampMillisecondsValue();

  class DuckDBTimestampValue {
    micros;
    constructor(micros) {
      this.micros = micros;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimestampStringFromMicroseconds)(this.micros);
    }
    toParts() {
      return node_bindings_1.default.from_timestamp(this);
    }
    static fromParts(parts) {
      return new DuckDBTimestampValue(node_bindings_1.default.to_timestamp(parts).micros);
    }
    static Epoch = new DuckDBTimestampValue(0n);
    static Max = new DuckDBTimestampValue(2n ** 63n - 2n);
    static Min = new DuckDBTimestampValue(DuckDBTimestampMillisecondsValue_1.DuckDBTimestampMillisecondsValue.Min.milliseconds * 1000n);
    static PosInf = new DuckDBTimestampValue(2n ** 63n - 1n);
    static NegInf = new DuckDBTimestampValue(-(2n ** 63n - 1n));
  }
  exports.DuckDBTimestampValue = DuckDBTimestampValue;
  exports.DuckDBTimestampMicrosecondsValue = DuckDBTimestampValue;
  function timestampValue(micros) {
    return new DuckDBTimestampValue(micros);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimestampTZValue.js
var require_DuckDBTimestampTZValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimestampTZValue = undefined;
  exports.timestampTZValue = timestampTZValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();
  var DuckDBTimestampValue_1 = require_DuckDBTimestampValue();

  class DuckDBTimestampTZValue {
    micros;
    constructor(micros) {
      this.micros = micros;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimestampStringFromMicroseconds)(this.micros);
    }
    toParts() {
      return node_bindings_1.default.from_timestamp(this);
    }
    static fromParts(parts) {
      return new DuckDBTimestampTZValue(node_bindings_1.default.to_timestamp(parts).micros);
    }
    static Epoch = new DuckDBTimestampTZValue(0n);
    static Max = new DuckDBTimestampTZValue(DuckDBTimestampValue_1.DuckDBTimestampValue.Max.micros);
    static Min = new DuckDBTimestampTZValue(DuckDBTimestampValue_1.DuckDBTimestampValue.Min.micros);
    static PosInf = new DuckDBTimestampTZValue(DuckDBTimestampValue_1.DuckDBTimestampValue.PosInf.micros);
    static NegInf = new DuckDBTimestampTZValue(DuckDBTimestampValue_1.DuckDBTimestampValue.NegInf.micros);
  }
  exports.DuckDBTimestampTZValue = DuckDBTimestampTZValue;
  function timestampTZValue(micros) {
    return new DuckDBTimestampTZValue(micros);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimeTZValue.js
var require_DuckDBTimeTZValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimeTZValue = undefined;
  exports.timeTZValue = timeTZValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBTimeTZValue {
    bits;
    micros;
    offset;
    constructor(bits, micros, offset) {
      this.bits = bits;
      this.micros = micros;
      this.offset = offset;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimeStringFromMicrosecondsInDay)(this.micros);
    }
    toParts() {
      return node_bindings_1.default.from_time_tz(this);
    }
    static TimeBits = 40;
    static OffsetBits = 24;
    static MaxOffset = 16 * 60 * 60 - 1;
    static MinOffset = -DuckDBTimeTZValue.MaxOffset;
    static MaxMicros = 24n * 60n * 60n * 1000n * 1000n;
    static MinMicros = 0n;
    static fromBits(bits) {
      const micros = BigInt.asUintN(DuckDBTimeTZValue.TimeBits, bits >> BigInt(DuckDBTimeTZValue.OffsetBits));
      const offset = DuckDBTimeTZValue.MaxOffset - Number(BigInt.asUintN(DuckDBTimeTZValue.OffsetBits, bits));
      return new DuckDBTimeTZValue(bits, micros, offset);
    }
    static fromMicrosAndOffset(micros, offset) {
      const bits = BigInt.asUintN(DuckDBTimeTZValue.TimeBits, micros) << BigInt(DuckDBTimeTZValue.OffsetBits) | BigInt.asUintN(DuckDBTimeTZValue.OffsetBits, BigInt(DuckDBTimeTZValue.MaxOffset - offset));
      return new DuckDBTimeTZValue(bits, micros, offset);
    }
    static fromParts(parts) {
      return DuckDBTimeTZValue.fromMicrosAndOffset(node_bindings_1.default.to_time(parts.time).micros, parts.offset);
    }
    static Max = DuckDBTimeTZValue.fromMicrosAndOffset(DuckDBTimeTZValue.MaxMicros, DuckDBTimeTZValue.MinOffset);
    static Min = DuckDBTimeTZValue.fromMicrosAndOffset(DuckDBTimeTZValue.MinMicros, DuckDBTimeTZValue.MaxOffset);
  }
  exports.DuckDBTimeTZValue = DuckDBTimeTZValue;
  function timeTZValue(micros, offset) {
    return DuckDBTimeTZValue.fromMicrosAndOffset(micros, offset);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBTimeValue.js
var require_DuckDBTimeValue = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBTimeValue = undefined;
  exports.timeValue = timeValue;
  var node_bindings_1 = __importDefault(require_duckdb());
  var dateTimeStringConversion_1 = require_dateTimeStringConversion();

  class DuckDBTimeValue {
    micros;
    constructor(micros) {
      this.micros = micros;
    }
    toString() {
      return (0, dateTimeStringConversion_1.getDuckDBTimeStringFromMicrosecondsInDay)(this.micros);
    }
    toParts() {
      return node_bindings_1.default.from_time(this);
    }
    static fromParts(parts) {
      return new DuckDBTimeValue(node_bindings_1.default.to_time(parts).micros);
    }
    static Max = new DuckDBTimeValue(24n * 60n * 60n * 1000n * 1000n);
    static Min = new DuckDBTimeValue(0n);
  }
  exports.DuckDBTimeValue = DuckDBTimeValue;
  function timeValue(micros) {
    return new DuckDBTimeValue(micros);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBUnionValue.js
var require_DuckDBUnionValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBUnionValue = undefined;
  exports.unionValue = unionValue;

  class DuckDBUnionValue {
    tag;
    value;
    constructor(tag, value) {
      this.tag = tag;
      this.value = value;
    }
    toString() {
      if (this.value == null) {
        return "NULL";
      }
      return this.value.toString();
    }
  }
  exports.DuckDBUnionValue = DuckDBUnionValue;
  function unionValue(tag, value) {
    return new DuckDBUnionValue(tag, value);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBUUIDValue.js
var require_DuckDBUUIDValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBUUIDValue = undefined;
  exports.uuidValue = uuidValue;

  class DuckDBUUIDValue {
    hugeint;
    constructor(hugeint) {
      this.hugeint = hugeint;
    }
    toString() {
      const flipped = this.hugeint ^ 0x80000000000000000000000000000000n;
      const hex = (flipped & 0xffffffffffffffffffffffffffffffffn | 0x100000000000000000000000000000000n).toString(16);
      return `${hex.substring(1, 9)}-${hex.substring(9, 13)}-${hex.substring(13, 17)}-${hex.substring(17, 21)}-${hex.substring(21, 33)}`;
    }
    static Max = new DuckDBUUIDValue(2n ** 127n - 1n);
    static Min = new DuckDBUUIDValue(-(2n ** 127n));
  }
  exports.DuckDBUUIDValue = DuckDBUUIDValue;
  function uuidValue(hugeint) {
    return new DuckDBUUIDValue(hugeint);
  }
});

// node_modules/@duckdb/node-api/lib/values/DuckDBValue.js
var require_DuckDBValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
});

// node_modules/@duckdb/node-api/lib/values/index.js
var require_values = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === undefined)
      k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m2[k2];
      } };
    }
    Object.defineProperty(o, k22, desc);
  } : function(o, m2, k2, k22) {
    if (k22 === undefined)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(require_DuckDBArrayValue(), exports);
  __exportStar(require_DuckDBBitValue(), exports);
  __exportStar(require_DuckDBBlobValue(), exports);
  __exportStar(require_DuckDBDateValue(), exports);
  __exportStar(require_DuckDBDecimalValue(), exports);
  __exportStar(require_DuckDBIntervalValue(), exports);
  __exportStar(require_DuckDBListValue(), exports);
  __exportStar(require_DuckDBMapValue(), exports);
  __exportStar(require_DuckDBStructValue(), exports);
  __exportStar(require_DuckDBTimestampMillisecondsValue(), exports);
  __exportStar(require_DuckDBTimestampNanosecondsValue(), exports);
  __exportStar(require_DuckDBTimestampSecondsValue(), exports);
  __exportStar(require_DuckDBTimestampTZValue(), exports);
  __exportStar(require_DuckDBTimestampValue(), exports);
  __exportStar(require_DuckDBTimeTZValue(), exports);
  __exportStar(require_DuckDBTimeValue(), exports);
  __exportStar(require_DuckDBUnionValue(), exports);
  __exportStar(require_DuckDBUUIDValue(), exports);
  __exportStar(require_DuckDBValue(), exports);
});

// node_modules/@duckdb/node-api/lib/DuckDBVector.js
var require_DuckDBVector = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBVarIntVector = exports.DuckDBTimestampTZVector = exports.DuckDBTimeTZVector = exports.DuckDBBitVector = exports.DuckDBUnionVector = exports.DuckDBUUIDVector = exports.DuckDBArrayVector = exports.DuckDBMapVector = exports.DuckDBStructVector = exports.DuckDBListVector = exports.DuckDBEnum4Vector = exports.DuckDBEnum2Vector = exports.DuckDBEnum1Vector = exports.DuckDBTimestampNanosecondsVector = exports.DuckDBTimestampMillisecondsVector = exports.DuckDBTimestampSecondsVector = exports.DuckDBDecimal16Vector = exports.DuckDBDecimal8Vector = exports.DuckDBDecimal4Vector = exports.DuckDBDecimal2Vector = exports.DuckDBBlobVector = exports.DuckDBVarCharVector = exports.DuckDBUHugeIntVector = exports.DuckDBHugeIntVector = exports.DuckDBIntervalVector = exports.DuckDBTimeVector = exports.DuckDBDateVector = exports.DuckDBTimestampVector = exports.DuckDBDoubleVector = exports.DuckDBFloatVector = exports.DuckDBUBigIntVector = exports.DuckDBUIntegerVector = exports.DuckDBUSmallIntVector = exports.DuckDBUTinyIntVector = exports.DuckDBBigIntVector = exports.DuckDBIntegerVector = exports.DuckDBSmallIntVector = exports.DuckDBTinyIntVector = exports.DuckDBBooleanVector = exports.DuckDBVector = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var os_1 = __importDefault((init_os(), __toCommonJS(exports_os)));
  var DuckDBLogicalType_1 = require_DuckDBLogicalType();
  var DuckDBType_1 = require_DuckDBType();
  var DuckDBTypeId_1 = require_DuckDBTypeId();
  var values_1 = require_values();
  var littleEndian = os_1.default.endianness() === "LE";
  function getUInt8(dataView, offset) {
    return dataView.getUint8(offset);
  }
  function getInt16(dataView, offset) {
    return dataView.getInt16(offset, littleEndian);
  }
  function getUInt16(dataView, offset) {
    return dataView.getUint16(offset, littleEndian);
  }
  function getInt32(dataView, offset) {
    return dataView.getInt32(offset, littleEndian);
  }
  function getUInt32(dataView, offset) {
    return dataView.getUint32(offset, littleEndian);
  }
  function getInt64(dataView, offset) {
    return dataView.getBigInt64(offset, littleEndian);
  }
  function getUInt64(dataView, offset) {
    return dataView.getBigUint64(offset, littleEndian);
  }
  function getInt128(dataView, offset) {
    const lower = getUInt64(dataView, offset);
    const upper = getInt64(dataView, offset + 8);
    return (upper << BigInt(64)) + lower;
  }
  function getUInt128(dataView, offset) {
    const lower = getUInt64(dataView, offset);
    const upper = getUInt64(dataView, offset + 8);
    return BigInt.asUintN(64, upper) << BigInt(64) | BigInt.asUintN(64, lower);
  }
  function getStringBytes(dataView, offset) {
    const lengthInBytes = dataView.getUint32(offset, true);
    if (lengthInBytes <= 12) {
      return new Uint8Array(dataView.buffer, dataView.byteOffset + offset + 4, lengthInBytes);
    } else {
      return node_bindings_1.default.get_data_from_pointer(dataView.buffer, dataView.byteOffset + offset + 8, lengthInBytes);
    }
  }
  var textDecoder = new TextDecoder;
  function getString(dataView, offset) {
    const stringBytes = getStringBytes(dataView, offset);
    return textDecoder.decode(stringBytes);
  }
  function getBuffer(dataView, offset) {
    const stringBytes = getStringBytes(dataView, offset);
    return Buffer.from(stringBytes);
  }
  function getVarIntFromBytes(bytes) {
    const firstByte = bytes[0];
    const positive = (firstByte & 128) > 0;
    const uint64Mask = positive ? 0n : 0xffffffffffffffffn;
    const uint8Mask = positive ? 0 : 255;
    const dv = new DataView(bytes.buffer, bytes.byteOffset + 3, bytes.byteLength - 3);
    const lastUint64Offset = dv.byteLength - 8;
    let offset = 0;
    let result = 0n;
    while (offset <= lastUint64Offset) {
      result = result << 64n | dv.getBigUint64(offset) ^ uint64Mask;
      offset += 8;
    }
    while (offset < dv.byteLength) {
      result = result << 8n | BigInt(dv.getUint8(offset) ^ uint8Mask);
      offset += 1;
    }
    return positive ? result : -result;
  }
  function getBoolean1(dataView, offset) {
    return getUInt8(dataView, offset) !== 0;
  }
  function getBoolean2(dataView, offset) {
    return getUInt16(dataView, offset) !== 0;
  }
  function getBoolean4(dataView, offset) {
    return getUInt32(dataView, offset) !== 0;
  }
  function getBoolean8(dataView, offset) {
    return getUInt64(dataView, offset) !== BigInt(0);
  }
  function makeGetBoolean() {
    switch (node_bindings_1.default.sizeof_bool) {
      case 1:
        return getBoolean1;
      case 2:
        return getBoolean2;
      case 4:
        return getBoolean4;
      case 8:
        return getBoolean8;
      default:
        throw new Error(`Unsupported boolean size: ${node_bindings_1.default.sizeof_bool}`);
    }
  }
  var getBoolean = makeGetBoolean();
  function getDecimal2(dataView, offset, type) {
    const value = getInt16(dataView, offset);
    return new values_1.DuckDBDecimalValue(BigInt(value), type.width, type.scale);
  }
  function getDecimal4(dataView, offset, type) {
    const value = getInt32(dataView, offset);
    return new values_1.DuckDBDecimalValue(BigInt(value), type.width, type.scale);
  }
  function getDecimal8(dataView, offset, type) {
    const value = getInt64(dataView, offset);
    return new values_1.DuckDBDecimalValue(value, type.width, type.scale);
  }
  function getDecimal16(dataView, offset, type) {
    const value = getInt128(dataView, offset);
    return new values_1.DuckDBDecimalValue(value, type.width, type.scale);
  }
  function vectorData(vector, byteCount) {
    return node_bindings_1.default.vector_get_data(vector, byteCount);
  }

  class DuckDBValidity {
    data;
    offset;
    constructor(data, offset) {
      this.data = data;
      this.offset = offset;
    }
    static fromVector(vector, itemCount) {
      const bigintCount = Math.ceil(itemCount / 64);
      const bytes = node_bindings_1.default.vector_get_validity(vector, bigintCount * 8);
      const bigints = new BigUint64Array(bytes.buffer, bytes.byteOffset, bigintCount);
      return new DuckDBValidity(bigints, 0);
    }
    itemValid(itemIndex) {
      if (!this.data) {
        return true;
      }
      const bit = this.offset + itemIndex;
      return (this.data[Math.floor(bit / 64)] & BigInt(1) << BigInt(bit % 64)) !== BigInt(0);
    }
    slice(offset) {
      return new DuckDBValidity(this.data, this.offset + offset);
    }
  }

  class DuckDBVector {
    static standardSize() {
      return node_bindings_1.default.vector_size();
    }
    static create(vector, itemCount, knownType) {
      const vectorType = knownType ? knownType : DuckDBLogicalType_1.DuckDBLogicalType.create(node_bindings_1.default.vector_get_column_type(vector)).asType();
      switch (vectorType.typeId) {
        case DuckDBTypeId_1.DuckDBTypeId.BOOLEAN:
          return DuckDBBooleanVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TINYINT:
          return DuckDBTinyIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.SMALLINT:
          return DuckDBSmallIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.INTEGER:
          return DuckDBIntegerVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.BIGINT:
          return DuckDBBigIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.UTINYINT:
          return DuckDBUTinyIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.USMALLINT:
          return DuckDBUSmallIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.UINTEGER:
          return DuckDBUIntegerVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.UBIGINT:
          return DuckDBUBigIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.FLOAT:
          return DuckDBFloatVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.DOUBLE:
          return DuckDBDoubleVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP:
          return DuckDBTimestampVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.DATE:
          return DuckDBDateVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIME:
          return DuckDBTimeVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.INTERVAL:
          return DuckDBIntervalVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.HUGEINT:
          return DuckDBHugeIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.UHUGEINT:
          return DuckDBUHugeIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.VARCHAR:
          return DuckDBVarCharVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.BLOB:
          return DuckDBBlobVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.DECIMAL:
          if (vectorType instanceof DuckDBType_1.DuckDBDecimalType) {
            const { width } = vectorType;
            if (width <= 0) {
              throw new Error(`DECIMAL width not positive: ${width}`);
            } else if (width <= 4) {
              return DuckDBDecimal2Vector.fromRawVector(vectorType, vector, itemCount);
            } else if (width <= 9) {
              return DuckDBDecimal4Vector.fromRawVector(vectorType, vector, itemCount);
            } else if (width <= 18) {
              return DuckDBDecimal8Vector.fromRawVector(vectorType, vector, itemCount);
            } else if (width <= 38) {
              return DuckDBDecimal16Vector.fromRawVector(vectorType, vector, itemCount);
            } else {
              throw new Error(`DECIMAL width too large: ${width}`);
            }
          }
          throw new Error("DuckDBType has DECIMAL type id but is not an instance of DuckDBDecimalType");
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_S:
          return DuckDBTimestampSecondsVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_MS:
          return DuckDBTimestampMillisecondsVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_NS:
          return DuckDBTimestampNanosecondsVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.ENUM:
          if (vectorType instanceof DuckDBType_1.DuckDBEnumType) {
            const { internalTypeId } = vectorType;
            switch (internalTypeId) {
              case DuckDBTypeId_1.DuckDBTypeId.UTINYINT:
                return DuckDBEnum1Vector.fromRawVector(vectorType, vector, itemCount);
              case DuckDBTypeId_1.DuckDBTypeId.USMALLINT:
                return DuckDBEnum2Vector.fromRawVector(vectorType, vector, itemCount);
              case DuckDBTypeId_1.DuckDBTypeId.UINTEGER:
                return DuckDBEnum4Vector.fromRawVector(vectorType, vector, itemCount);
              default:
                throw new Error(`unsupported ENUM internal type: ${internalTypeId}`);
            }
          }
          throw new Error("DuckDBType has ENUM type id but is not an instance of DuckDBEnumType");
        case DuckDBTypeId_1.DuckDBTypeId.LIST:
          if (vectorType instanceof DuckDBType_1.DuckDBListType) {
            return DuckDBListVector.fromRawVector(vectorType, vector, itemCount);
          }
          throw new Error("DuckDBType has LIST type id but is not an instance of DuckDBListType");
        case DuckDBTypeId_1.DuckDBTypeId.STRUCT:
          if (vectorType instanceof DuckDBType_1.DuckDBStructType) {
            return DuckDBStructVector.fromRawVector(vectorType, vector, itemCount);
          }
          throw new Error("DuckDBType has STRUCT type id but is not an instance of DuckDBStructType");
        case DuckDBTypeId_1.DuckDBTypeId.MAP:
          if (vectorType instanceof DuckDBType_1.DuckDBMapType) {
            return DuckDBMapVector.fromRawVector(vectorType, vector, itemCount);
          }
          throw new Error("DuckDBType has MAP type id but is not an instance of DuckDBMapType");
        case DuckDBTypeId_1.DuckDBTypeId.ARRAY:
          if (vectorType instanceof DuckDBType_1.DuckDBArrayType) {
            return DuckDBArrayVector.fromRawVector(vectorType, vector, itemCount);
          }
          throw new Error("DuckDBType has ARRAY type id but is not an instance of DuckDBArrayType");
        case DuckDBTypeId_1.DuckDBTypeId.UUID:
          return DuckDBUUIDVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.UNION:
          if (vectorType instanceof DuckDBType_1.DuckDBUnionType) {
            return DuckDBUnionVector.fromRawVector(vectorType, vector, itemCount);
          }
          throw new Error("DuckDBType has UNION type id but is not an instance of DuckDBUnionType");
        case DuckDBTypeId_1.DuckDBTypeId.BIT:
          return DuckDBBitVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIME_TZ:
          return DuckDBTimeTZVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.TIMESTAMP_TZ:
          return DuckDBTimestampTZVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.ANY:
          throw new Error(`Invalid vector type: ANY`);
        case DuckDBTypeId_1.DuckDBTypeId.VARINT:
          return DuckDBVarIntVector.fromRawVector(vector, itemCount);
        case DuckDBTypeId_1.DuckDBTypeId.SQLNULL:
          throw new Error(`Invalid vector type: SQLNULL`);
        default:
          throw new Error(`Invalid type id: ${vectorType.typeId}`);
      }
    }
    toArray() {
      const items = [];
      for (let i = 0;i < this.itemCount; i++) {
        items.push(this.getItem(i));
      }
      return items;
    }
  }
  exports.DuckDBVector = DuckDBVector;

  class DuckDBBooleanVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * node_bindings_1.default.sizeof_bool);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBBooleanVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBBooleanType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getBoolean(this.dataView, itemIndex * node_bindings_1.default.sizeof_bool) : null;
    }
    slice(offset, length) {
      return new DuckDBBooleanVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * node_bindings_1.default.sizeof_bool, length * node_bindings_1.default.sizeof_bool), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBBooleanVector = DuckDBBooleanVector;

  class DuckDBTinyIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Int8Array.BYTES_PER_ELEMENT);
      const items = new Int8Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTinyIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTinyIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBTinyIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTinyIntVector = DuckDBTinyIntVector;

  class DuckDBSmallIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Int16Array.BYTES_PER_ELEMENT);
      const items = new Int16Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBSmallIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBSmallIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBSmallIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBSmallIntVector = DuckDBSmallIntVector;

  class DuckDBIntegerVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Int32Array.BYTES_PER_ELEMENT);
      const items = new Int32Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBIntegerVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBIntegerType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBIntegerVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBIntegerVector = DuckDBIntegerVector;

  class DuckDBBigIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBBigIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBBigIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBBigIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBBigIntVector = DuckDBBigIntVector;

  class DuckDBUTinyIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Uint8Array.BYTES_PER_ELEMENT);
      const items = new Uint8Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUTinyIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBUTinyIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBUTinyIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBUTinyIntVector = DuckDBUTinyIntVector;

  class DuckDBUSmallIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Uint16Array.BYTES_PER_ELEMENT);
      const items = new Uint16Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUSmallIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBUSmallIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBUSmallIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBUSmallIntVector = DuckDBUSmallIntVector;

  class DuckDBUIntegerVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Uint32Array.BYTES_PER_ELEMENT);
      const items = new Uint32Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUIntegerVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBUIntegerType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBUIntegerVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBUIntegerVector = DuckDBUIntegerVector;

  class DuckDBUBigIntVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigUint64Array.BYTES_PER_ELEMENT);
      const items = new BigUint64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUBigIntVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBUBigIntType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBUBigIntVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBUBigIntVector = DuckDBUBigIntVector;

  class DuckDBFloatVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Float32Array.BYTES_PER_ELEMENT);
      const items = new Float32Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBFloatVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBFloatType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBFloatVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBFloatVector = DuckDBFloatVector;

  class DuckDBDoubleVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Float64Array.BYTES_PER_ELEMENT);
      const items = new Float64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDoubleVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBDoubleType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.items[itemIndex] : null;
    }
    slice(offset, length) {
      return new DuckDBDoubleVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBDoubleVector = DuckDBDoubleVector;

  class DuckDBTimestampVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimestampVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimestampType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimestampValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimestampVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimestampVector = DuckDBTimestampVector;

  class DuckDBDateVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * Int32Array.BYTES_PER_ELEMENT);
      const items = new Int32Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDateVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBDateType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBDateValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBDateVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBDateVector = DuckDBDateVector;

  class DuckDBTimeVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimeVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimeType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimeValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimeVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimeVector = DuckDBTimeVector;

  class DuckDBIntervalVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBIntervalVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBIntervalType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      const itemStart = itemIndex * 16;
      const months = getInt32(this.dataView, itemStart);
      const days = getInt32(this.dataView, itemStart + 4);
      const micros = getInt64(this.dataView, itemStart + 8);
      return new values_1.DuckDBIntervalValue(months, days, micros);
    }
    slice(offset, length) {
      return new DuckDBIntervalVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBIntervalVector = DuckDBIntervalVector;

  class DuckDBHugeIntVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBHugeIntVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBHugeIntType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getInt128(this.dataView, itemIndex * 16) : null;
    }
    getDouble(itemIndex) {
      return this.validity.itemValid(itemIndex) ? node_bindings_1.default.hugeint_to_double(getInt128(this.dataView, itemIndex * 16)) : null;
    }
    slice(offset, length) {
      return new DuckDBHugeIntVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBHugeIntVector = DuckDBHugeIntVector;

  class DuckDBUHugeIntVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUHugeIntVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBUHugeIntType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getUInt128(this.dataView, itemIndex * 16) : null;
    }
    getDouble(itemIndex) {
      return this.validity.itemValid(itemIndex) ? node_bindings_1.default.uhugeint_to_double(getUInt128(this.dataView, itemIndex * 16)) : null;
    }
    slice(offset, length) {
      return new DuckDBUHugeIntVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBUHugeIntVector = DuckDBUHugeIntVector;

  class DuckDBVarCharVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBVarCharVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBVarCharType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getString(this.dataView, itemIndex * 16) : null;
    }
    slice(offset, length) {
      return new DuckDBVarCharVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBVarCharVector = DuckDBVarCharVector;

  class DuckDBBlobVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBBlobVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBBlobType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBBlobValue(getBuffer(this.dataView, itemIndex * 16)) : null;
    }
    slice(offset, length) {
      return new DuckDBBlobVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBBlobVector = DuckDBBlobVector;

  class DuckDBDecimal2Vector extends DuckDBVector {
    decimalType;
    dataView;
    validity;
    _itemCount;
    constructor(decimalType, dataView, validity, itemCount) {
      super();
      this.decimalType = decimalType;
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(decimalType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 2);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDecimal2Vector(decimalType, dataView, validity, itemCount);
    }
    get type() {
      return this.decimalType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getDecimal2(this.dataView, itemIndex * 2, this.decimalType) : null;
    }
    getScaledValue(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getInt16(this.dataView, itemIndex * 2) : null;
    }
    slice(offset, length) {
      return new DuckDBDecimal2Vector(this.decimalType, new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 2, length * 2), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBDecimal2Vector = DuckDBDecimal2Vector;

  class DuckDBDecimal4Vector extends DuckDBVector {
    decimalType;
    dataView;
    validity;
    _itemCount;
    constructor(decimalType, dataView, validity, itemCount) {
      super();
      this.decimalType = decimalType;
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(decimalType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 4);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDecimal4Vector(decimalType, dataView, validity, itemCount);
    }
    get type() {
      return this.decimalType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getDecimal4(this.dataView, itemIndex * 4, this.decimalType) : null;
    }
    getScaledValue(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getInt32(this.dataView, itemIndex * 4) : null;
    }
    slice(offset, length) {
      return new DuckDBDecimal4Vector(this.decimalType, new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 4, length * 4), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBDecimal4Vector = DuckDBDecimal4Vector;

  class DuckDBDecimal8Vector extends DuckDBVector {
    decimalType;
    dataView;
    validity;
    _itemCount;
    constructor(decimalType, dataView, validity, itemCount) {
      super();
      this.decimalType = decimalType;
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(decimalType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 8);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDecimal8Vector(decimalType, dataView, validity, itemCount);
    }
    get type() {
      return this.decimalType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getDecimal8(this.dataView, itemIndex * 8, this.decimalType) : null;
    }
    getScaledValue(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getInt64(this.dataView, itemIndex * 8) : null;
    }
    slice(offset, length) {
      return new DuckDBDecimal8Vector(this.decimalType, new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 8, length * 8), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBDecimal8Vector = DuckDBDecimal8Vector;

  class DuckDBDecimal16Vector extends DuckDBVector {
    decimalType;
    dataView;
    validity;
    _itemCount;
    constructor(decimalType, dataView, validity, itemCount) {
      super();
      this.decimalType = decimalType;
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(decimalType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBDecimal16Vector(decimalType, dataView, validity, itemCount);
    }
    get type() {
      return this.decimalType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getDecimal16(this.dataView, itemIndex * 16, this.decimalType) : null;
    }
    getScaledValue(itemIndex) {
      return this.validity.itemValid(itemIndex) ? getInt128(this.dataView, itemIndex * 16) : null;
    }
    slice(offset, length) {
      return new DuckDBDecimal16Vector(this.decimalType, new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBDecimal16Vector = DuckDBDecimal16Vector;

  class DuckDBTimestampSecondsVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimestampSecondsVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimestampSecondsType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimestampSecondsValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimestampSecondsVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimestampSecondsVector = DuckDBTimestampSecondsVector;

  class DuckDBTimestampMillisecondsVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimestampMillisecondsVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimestampMillisecondsType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimestampMillisecondsValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimestampMillisecondsVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimestampMillisecondsVector = DuckDBTimestampMillisecondsVector;

  class DuckDBTimestampNanosecondsVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimestampNanosecondsVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimestampNanosecondsType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimestampNanosecondsValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimestampNanosecondsVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimestampNanosecondsVector = DuckDBTimestampNanosecondsVector;

  class DuckDBEnum1Vector extends DuckDBVector {
    enumType;
    items;
    validity;
    constructor(enumType, items, validity) {
      super();
      this.enumType = enumType;
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(enumType, vector, itemCount) {
      const data = vectorData(vector, itemCount);
      const items = new Uint8Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBEnum1Vector(enumType, items, validity);
    }
    get type() {
      return this.enumType;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.enumType.values[this.items[itemIndex]] : null;
    }
    slice(offset, length) {
      return new DuckDBEnum1Vector(this.enumType, this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBEnum1Vector = DuckDBEnum1Vector;

  class DuckDBEnum2Vector extends DuckDBVector {
    enumType;
    items;
    validity;
    constructor(enumType, items, validity) {
      super();
      this.enumType = enumType;
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(enumType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 2);
      const items = new Uint16Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBEnum2Vector(enumType, items, validity);
    }
    get type() {
      return this.enumType;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.enumType.values[this.items[itemIndex]] : null;
    }
    slice(offset, length) {
      return new DuckDBEnum2Vector(this.enumType, this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBEnum2Vector = DuckDBEnum2Vector;

  class DuckDBEnum4Vector extends DuckDBVector {
    enumType;
    items;
    validity;
    constructor(enumType, items, validity) {
      super();
      this.enumType = enumType;
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(enumType, vector, itemCount) {
      const data = vectorData(vector, itemCount * 4);
      const items = new Uint32Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBEnum4Vector(enumType, items, validity);
    }
    get type() {
      return this.enumType;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? this.enumType.values[this.items[itemIndex]] : null;
    }
    slice(offset, length) {
      return new DuckDBEnum4Vector(this.enumType, this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBEnum4Vector = DuckDBEnum4Vector;

  class DuckDBListVector extends DuckDBVector {
    listType;
    entryData;
    validity;
    childData;
    _itemCount;
    constructor(listType, entryData, validity, childData, itemCount) {
      super();
      this.listType = listType;
      this.entryData = entryData;
      this.validity = validity;
      this.childData = childData;
      this._itemCount = itemCount;
    }
    static fromRawVector(listType, vector, itemCount) {
      const data = vectorData(vector, itemCount * BigUint64Array.BYTES_PER_ELEMENT * 2);
      const entryData = new BigUint64Array(data.buffer, data.byteOffset, itemCount * 2);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      const child_vector = node_bindings_1.default.list_vector_get_child(vector);
      const child_vector_size = node_bindings_1.default.list_vector_get_size(vector);
      const childData = DuckDBVector.create(child_vector, child_vector_size, listType.valueType);
      return new DuckDBListVector(listType, entryData, validity, childData, itemCount);
    }
    get type() {
      return this.listType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItemVector(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      const entryDataStartIndex = itemIndex * 2;
      const offset = Number(this.entryData[entryDataStartIndex]);
      const length = Number(this.entryData[entryDataStartIndex + 1]);
      return this.childData.slice(offset, length);
    }
    getItem(itemIndex) {
      const vector = this.getItemVector(itemIndex);
      if (!vector) {
        return null;
      }
      return new values_1.DuckDBListValue(vector.toArray());
    }
    slice(offset, length) {
      const entryDataStartIndex = offset * 2;
      return new DuckDBListVector(this.listType, this.entryData.slice(entryDataStartIndex, entryDataStartIndex + length * 2), this.validity.slice(offset), this.childData, length);
    }
  }
  exports.DuckDBListVector = DuckDBListVector;

  class DuckDBStructVector extends DuckDBVector {
    structType;
    _itemCount;
    entryVectors;
    validity;
    constructor(structType, itemCount, entryVectors, validity) {
      super();
      this.structType = structType;
      this._itemCount = itemCount;
      this.entryVectors = entryVectors;
      this.validity = validity;
    }
    static fromRawVector(structType, vector, itemCount) {
      const entryCount = structType.entryCount;
      const entryVectors = [];
      for (let i = 0;i < entryCount; i++) {
        const child_vector = node_bindings_1.default.struct_vector_get_child(vector, i);
        entryVectors.push(DuckDBVector.create(child_vector, itemCount, structType.entryTypes[i]));
      }
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBStructVector(structType, itemCount, entryVectors, validity);
    }
    get type() {
      return this.structType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      const entries = {};
      const entryCount = this.structType.entryCount;
      for (let i = 0;i < entryCount; i++) {
        entries[this.structType.entryNames[i]] = this.entryVectors[i].getItem(itemIndex);
      }
      return new values_1.DuckDBStructValue(entries);
    }
    getItemValue(itemIndex, entryIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      return this.entryVectors[entryIndex].getItem(itemIndex);
    }
    slice(offset, length) {
      return new DuckDBStructVector(this.structType, length, this.entryVectors.map((entryVector) => entryVector.slice(offset, length)), this.validity.slice(offset));
    }
  }
  exports.DuckDBStructVector = DuckDBStructVector;

  class DuckDBMapVector extends DuckDBVector {
    mapType;
    listVector;
    constructor(mapType, listVector) {
      super();
      this.mapType = mapType;
      this.listVector = listVector;
    }
    static fromRawVector(mapType, vector, itemCount) {
      const listVectorType = new DuckDBType_1.DuckDBListType(new DuckDBType_1.DuckDBStructType(["key", "value"], [mapType.keyType, mapType.valueType]));
      return new DuckDBMapVector(mapType, DuckDBListVector.fromRawVector(listVectorType, vector, itemCount));
    }
    get type() {
      return this.mapType;
    }
    get itemCount() {
      return this.listVector.itemCount;
    }
    getItem(itemIndex) {
      const itemVector = this.listVector.getItemVector(itemIndex);
      if (!itemVector) {
        return null;
      }
      if (!(itemVector instanceof DuckDBStructVector)) {
        throw new Error("item in map list vector is not a struct");
      }
      const entries = [];
      const itemEntryCount = itemVector.itemCount;
      for (let i = 0;i < itemEntryCount; i++) {
        const key = itemVector.getItemValue(i, 0);
        const value = itemVector.getItemValue(i, 1);
        entries.push({ key, value });
      }
      return new values_1.DuckDBMapValue(entries);
    }
    slice(offset, length) {
      return new DuckDBMapVector(this.mapType, this.listVector.slice(offset, length));
    }
  }
  exports.DuckDBMapVector = DuckDBMapVector;

  class DuckDBArrayVector extends DuckDBVector {
    arrayType;
    validity;
    childData;
    _itemCount;
    constructor(arrayType, validity, childData, itemCount) {
      super();
      this.arrayType = arrayType;
      this.validity = validity;
      this.childData = childData;
      this._itemCount = itemCount;
    }
    static fromRawVector(arrayType, vector, itemCount) {
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      const child_vector = node_bindings_1.default.array_vector_get_child(vector);
      const childItemsPerArray = DuckDBArrayVector.itemSize(arrayType) * arrayType.length;
      const childData = DuckDBVector.create(child_vector, itemCount * childItemsPerArray, arrayType.valueType);
      return new DuckDBArrayVector(arrayType, validity, childData, itemCount);
    }
    static itemSize(arrayType) {
      if (arrayType.valueType instanceof DuckDBType_1.DuckDBArrayType) {
        return DuckDBArrayVector.itemSize(arrayType.valueType);
      } else {
        return 1;
      }
    }
    get type() {
      return this.arrayType;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      return new values_1.DuckDBArrayValue(this.childData.slice(itemIndex * this.arrayType.length, this.arrayType.length).toArray());
    }
    slice(offset, length) {
      return new DuckDBArrayVector(this.arrayType, this.validity.slice(offset), this.childData.slice(offset * this.arrayType.length, length * this.arrayType.length), length);
    }
  }
  exports.DuckDBArrayVector = DuckDBArrayVector;

  class DuckDBUUIDVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBUUIDVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBUUIDType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBUUIDValue(getInt128(this.dataView, itemIndex * 16)) : null;
    }
    slice(offset, length) {
      return new DuckDBUUIDVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBUUIDVector = DuckDBUUIDVector;

  class DuckDBUnionVector extends DuckDBVector {
    unionType;
    structVector;
    constructor(unionType, structVector) {
      super();
      this.unionType = unionType;
      this.structVector = structVector;
    }
    static fromRawVector(unionType, vector, itemCount) {
      const entryNames = ["tag"];
      const entryTypes = [DuckDBType_1.DuckDBUTinyIntType.instance];
      const memberCount = unionType.memberCount;
      for (let i = 0;i < memberCount; i++) {
        entryNames.push(unionType.memberTags[i]);
        entryTypes.push(unionType.memberTypes[i]);
      }
      const structVectorType = new DuckDBType_1.DuckDBStructType(entryNames, entryTypes);
      return new DuckDBUnionVector(unionType, DuckDBStructVector.fromRawVector(structVectorType, vector, itemCount));
    }
    get type() {
      return this.unionType;
    }
    get itemCount() {
      return this.structVector.itemCount;
    }
    getItem(itemIndex) {
      const tagValue = this.structVector.getItemValue(itemIndex, 0);
      if (tagValue == null) {
        return null;
      }
      const memberIndex = Number(tagValue);
      const tag = this.unionType.memberTags[memberIndex];
      const entryIndex = memberIndex + 1;
      const value = this.structVector.getItemValue(itemIndex, entryIndex);
      return new values_1.DuckDBUnionValue(tag, value);
    }
    slice(offset, length) {
      return new DuckDBUnionVector(this.unionType, this.structVector.slice(offset, length));
    }
  }
  exports.DuckDBUnionVector = DuckDBUnionVector;

  class DuckDBBitVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBBitVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBBitType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      const bytes = getStringBytes(this.dataView, itemIndex * 16);
      return bytes ? new values_1.DuckDBBitValue(bytes) : null;
    }
    slice(offset, length) {
      return new DuckDBBitVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBBitVector = DuckDBBitVector;

  class DuckDBTimeTZVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigUint64Array.BYTES_PER_ELEMENT);
      const items = new BigUint64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimeTZVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimeTZType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? values_1.DuckDBTimeTZValue.fromBits(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimeTZVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimeTZVector = DuckDBTimeTZVector;

  class DuckDBTimestampTZVector extends DuckDBVector {
    items;
    validity;
    constructor(items, validity) {
      super();
      this.items = items;
      this.validity = validity;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * BigInt64Array.BYTES_PER_ELEMENT);
      const items = new BigInt64Array(data.buffer, data.byteOffset, itemCount);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBTimestampTZVector(items, validity);
    }
    get type() {
      return DuckDBType_1.DuckDBTimestampTZType.instance;
    }
    get itemCount() {
      return this.items.length;
    }
    getItem(itemIndex) {
      return this.validity.itemValid(itemIndex) ? new values_1.DuckDBTimestampTZValue(this.items[itemIndex]) : null;
    }
    slice(offset, length) {
      return new DuckDBTimestampTZVector(this.items.slice(offset, offset + length), this.validity.slice(offset));
    }
  }
  exports.DuckDBTimestampTZVector = DuckDBTimestampTZVector;

  class DuckDBVarIntVector extends DuckDBVector {
    dataView;
    validity;
    _itemCount;
    constructor(dataView, validity, itemCount) {
      super();
      this.dataView = dataView;
      this.validity = validity;
      this._itemCount = itemCount;
    }
    static fromRawVector(vector, itemCount) {
      const data = vectorData(vector, itemCount * 16);
      const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
      const validity = DuckDBValidity.fromVector(vector, itemCount);
      return new DuckDBVarIntVector(dataView, validity, itemCount);
    }
    get type() {
      return DuckDBType_1.DuckDBVarIntType.instance;
    }
    get itemCount() {
      return this._itemCount;
    }
    getItem(itemIndex) {
      if (!this.validity.itemValid(itemIndex)) {
        return null;
      }
      const bytes = getStringBytes(this.dataView, itemIndex * 16);
      return bytes ? getVarIntFromBytes(bytes) : null;
    }
    slice(offset, length) {
      return new DuckDBVarIntVector(new DataView(this.dataView.buffer, this.dataView.byteOffset + offset * 16, length * 16), this.validity.slice(offset), length);
    }
  }
  exports.DuckDBVarIntVector = DuckDBVarIntVector;
});

// node_modules/@duckdb/node-api/lib/DuckDBDataChunk.js
var require_DuckDBDataChunk = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBDataChunk = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBVector_1 = require_DuckDBVector();

  class DuckDBDataChunk {
    chunk;
    vectors = [];
    constructor(chunk) {
      this.chunk = chunk;
    }
    static create(logical_types) {
      return new DuckDBDataChunk(node_bindings_1.default.create_data_chunk(logical_types));
    }
    reset() {
      node_bindings_1.default.data_chunk_reset(this.chunk);
    }
    get columnCount() {
      return node_bindings_1.default.data_chunk_get_column_count(this.chunk);
    }
    getColumnVector(columnIndex) {
      if (this.vectors[columnIndex]) {
        return this.vectors[columnIndex];
      }
      const vector = DuckDBVector_1.DuckDBVector.create(node_bindings_1.default.data_chunk_get_vector(this.chunk, columnIndex), this.rowCount);
      this.vectors[columnIndex] = vector;
      return vector;
    }
    getColumnValues(columnIndex) {
      return this.getColumnVector(columnIndex).toArray();
    }
    getColumns() {
      const columns = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        columns.push(this.getColumnValues(columnIndex));
      }
      return columns;
    }
    getRows() {
      const rows = [];
      const vectors = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        vectors.push(this.getColumnVector(columnIndex));
      }
      const rowCount = this.rowCount;
      for (let rowIndex = 0;rowIndex < rowCount; rowIndex++) {
        const row = [];
        for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
          row.push(vectors[columnIndex].getItem(rowIndex));
        }
        rows.push(row);
      }
      return rows;
    }
    get rowCount() {
      return node_bindings_1.default.data_chunk_get_size(this.chunk);
    }
    set rowCount(count) {
      node_bindings_1.default.data_chunk_set_size(this.chunk, count);
    }
  }
  exports.DuckDBDataChunk = DuckDBDataChunk;
});

// node_modules/@duckdb/node-api/lib/DuckDBResult.js
var require_DuckDBResult = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBResult = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBDataChunk_1 = require_DuckDBDataChunk();
  var DuckDBLogicalType_1 = require_DuckDBLogicalType();

  class DuckDBResult {
    result;
    constructor(result) {
      this.result = result;
    }
    get returnType() {
      return node_bindings_1.default.result_return_type(this.result);
    }
    get statementType() {
      return node_bindings_1.default.result_statement_type(this.result);
    }
    get columnCount() {
      return node_bindings_1.default.column_count(this.result);
    }
    columnName(columnIndex) {
      return node_bindings_1.default.column_name(this.result, columnIndex);
    }
    columnNames() {
      const columnNames = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        columnNames.push(this.columnName(columnIndex));
      }
      return columnNames;
    }
    columnTypeId(columnIndex) {
      return node_bindings_1.default.column_type(this.result, columnIndex);
    }
    columnLogicalType(columnIndex) {
      return DuckDBLogicalType_1.DuckDBLogicalType.create(node_bindings_1.default.column_logical_type(this.result, columnIndex));
    }
    columnType(columnIndex) {
      return DuckDBLogicalType_1.DuckDBLogicalType.create(node_bindings_1.default.column_logical_type(this.result, columnIndex)).asType();
    }
    columnTypes() {
      const columnTypes = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        columnTypes.push(this.columnType(columnIndex));
      }
      return columnTypes;
    }
    get rowsChanged() {
      return node_bindings_1.default.rows_changed(this.result);
    }
    async fetchChunk() {
      return new DuckDBDataChunk_1.DuckDBDataChunk(await node_bindings_1.default.fetch_chunk(this.result));
    }
    async fetchAllChunks() {
      const chunks = [];
      while (true) {
        const chunk = await this.fetchChunk();
        if (chunk.rowCount === 0) {
          return chunks;
        }
        chunks.push(chunk);
      }
    }
    async getColumns() {
      const chunks = await this.fetchAllChunks();
      if (chunks.length === 0) {
        return [];
      }
      const firstChunk = chunks[0];
      const columns = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        columns.push(firstChunk.getColumnValues(columnIndex));
      }
      for (let chunkIndex = 1;chunkIndex < chunks.length; chunkIndex++) {
        for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
          const vector = chunks[chunkIndex].getColumnVector(columnIndex);
          for (let itemIndex = 0;itemIndex < vector.itemCount; itemIndex++) {
            columns[columnIndex].push(vector.getItem(itemIndex));
          }
        }
      }
      return columns;
    }
    async getRows() {
      const chunks = await this.fetchAllChunks();
      const rows = [];
      for (const chunk of chunks) {
        const chunkVectors = [];
        const columnCount = chunk.columnCount;
        for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
          chunkVectors.push(chunk.getColumnVector(columnIndex));
        }
        const rowCount = chunk.rowCount;
        for (let rowIndex = 0;rowIndex < rowCount; rowIndex++) {
          const row = [];
          for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
            row.push(chunkVectors[columnIndex].getItem(rowIndex));
          }
          rows.push(row);
        }
      }
      return rows;
    }
  }
  exports.DuckDBResult = DuckDBResult;
});

// node_modules/@duckdb/node-api/lib/DuckDBResultReader.js
var require_DuckDBResultReader = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBResultReader = undefined;

  class DuckDBResultReader {
    result;
    chunks;
    chunkSizeRuns;
    currentRowCount_;
    done_;
    constructor(result) {
      this.result = result;
      this.chunks = [];
      this.chunkSizeRuns = [];
      this.currentRowCount_ = 0;
      this.done_ = false;
    }
    get returnType() {
      return this.result.returnType;
    }
    get statementType() {
      return this.result.statementType;
    }
    get columnCount() {
      return this.result.columnCount;
    }
    columnName(columnIndex) {
      return this.result.columnName(columnIndex);
    }
    columnNames() {
      return this.result.columnNames();
    }
    columnTypeId(columnIndex) {
      return this.result.columnTypeId(columnIndex);
    }
    columnLogicalType(columnIndex) {
      return this.result.columnLogicalType(columnIndex);
    }
    columnType(columnIndex) {
      return this.result.columnType(columnIndex);
    }
    columnTypes() {
      return this.result.columnTypes();
    }
    get rowsChanged() {
      return this.result.rowsChanged;
    }
    get currentRowCount() {
      return this.currentRowCount_;
    }
    get done() {
      return this.done_;
    }
    value(columnIndex, rowIndex) {
      if (this.currentRowCount_ === 0) {
        throw Error(`No rows have been read`);
      }
      let chunkIndex = 0;
      let currentRowIndex = rowIndex;
      for (const run of this.chunkSizeRuns) {
        if (currentRowIndex < run.rowCount) {
          chunkIndex += Math.floor(currentRowIndex / run.chunkSize);
          const rowIndexInChunk = currentRowIndex % run.chunkSize;
          const chunk = this.chunks[chunkIndex];
          return chunk.getColumnVector(columnIndex).getItem(rowIndexInChunk);
        }
        chunkIndex += run.chunkCount;
        currentRowIndex -= run.rowCount;
      }
      throw Error(`Row index ${rowIndex} requested, but only ${this.currentRowCount_} row have been read so far.`);
    }
    async readAll() {
      return this.fetchChunks();
    }
    async readUntil(targetRowCount) {
      return this.fetchChunks(targetRowCount);
    }
    async fetchChunks(targetRowCount) {
      while (!(this.done_ || targetRowCount !== undefined && this.currentRowCount_ >= targetRowCount)) {
        const chunk = await this.result.fetchChunk();
        if (chunk.rowCount > 0) {
          this.updateChunkSizeRuns(chunk);
          this.chunks.push(chunk);
          this.currentRowCount_ += chunk.rowCount;
        } else {
          this.done_ = true;
        }
      }
    }
    updateChunkSizeRuns(chunk) {
      if (this.chunkSizeRuns.length > 0) {
        const lastRun = this.chunkSizeRuns[this.chunkSizeRuns.length - 1];
        if (lastRun.chunkSize === chunk.rowCount) {
          lastRun.chunkCount += 1;
          lastRun.rowCount += lastRun.chunkSize;
          return;
        }
      }
      this.chunkSizeRuns.push({
        chunkCount: 1,
        chunkSize: chunk.rowCount,
        rowCount: chunk.rowCount
      });
    }
    getColumns() {
      if (this.chunks.length === 0) {
        return [];
      }
      const firstChunk = this.chunks[0];
      const columns = [];
      const columnCount = this.columnCount;
      for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
        columns.push(firstChunk.getColumnValues(columnIndex));
      }
      for (let chunkIndex = 1;chunkIndex < this.chunks.length; chunkIndex++) {
        for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
          const vector = this.chunks[chunkIndex].getColumnVector(columnIndex);
          for (let itemIndex = 0;itemIndex < vector.itemCount; itemIndex++) {
            columns[columnIndex].push(vector.getItem(itemIndex));
          }
        }
      }
      return columns;
    }
    getRows() {
      const rows = [];
      for (const chunk of this.chunks) {
        const chunkVectors = [];
        const columnCount = chunk.columnCount;
        for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
          chunkVectors.push(chunk.getColumnVector(columnIndex));
        }
        const rowCount = chunk.rowCount;
        for (let rowIndex = 0;rowIndex < rowCount; rowIndex++) {
          const row = [];
          for (let columnIndex = 0;columnIndex < columnCount; columnIndex++) {
            row.push(chunkVectors[columnIndex].getItem(rowIndex));
          }
          rows.push(row);
        }
      }
      return rows;
    }
  }
  exports.DuckDBResultReader = DuckDBResultReader;
});

// node_modules/@duckdb/node-api/lib/DuckDBPendingResult.js
var require_DuckDBPendingResult = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBPendingResult = exports.DuckDBPendingResultState = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBResult_1 = require_DuckDBResult();
  var DuckDBResultReader_1 = require_DuckDBResultReader();
  var DuckDBPendingResultState;
  (function(DuckDBPendingResultState2) {
    DuckDBPendingResultState2[DuckDBPendingResultState2["RESULT_READY"] = 0] = "RESULT_READY";
    DuckDBPendingResultState2[DuckDBPendingResultState2["RESULT_NOT_READY"] = 1] = "RESULT_NOT_READY";
    DuckDBPendingResultState2[DuckDBPendingResultState2["NO_TASKS_AVAILABLE"] = 3] = "NO_TASKS_AVAILABLE";
  })(DuckDBPendingResultState || (exports.DuckDBPendingResultState = DuckDBPendingResultState = {}));

  class DuckDBPendingResult {
    pending_result;
    constructor(pending_result) {
      this.pending_result = pending_result;
    }
    runTask() {
      const pending_state = node_bindings_1.default.pending_execute_task(this.pending_result);
      switch (pending_state) {
        case node_bindings_1.default.PendingState.RESULT_READY:
          return DuckDBPendingResultState.RESULT_READY;
        case node_bindings_1.default.PendingState.RESULT_NOT_READY:
          return DuckDBPendingResultState.RESULT_NOT_READY;
        case node_bindings_1.default.PendingState.ERROR:
          throw new Error(`Failure running pending result task: ${node_bindings_1.default.pending_error(this.pending_result)}`);
        case node_bindings_1.default.PendingState.NO_TASKS_AVAILABLE:
          return DuckDBPendingResultState.NO_TASKS_AVAILABLE;
        default:
          throw new Error(`Unexpected pending state: ${pending_state}`);
      }
    }
    async getResult() {
      return new DuckDBResult_1.DuckDBResult(await node_bindings_1.default.execute_pending(this.pending_result));
    }
    async read() {
      return new DuckDBResultReader_1.DuckDBResultReader(await this.getResult());
    }
    async readAll() {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.getResult());
      await reader.readAll();
      return reader;
    }
    async readUntil(targetRowCount) {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.getResult());
      await reader.readUntil(targetRowCount);
      return reader;
    }
  }
  exports.DuckDBPendingResult = DuckDBPendingResult;
});

// node_modules/@duckdb/node-api/lib/DuckDBPreparedStatement.js
var require_DuckDBPreparedStatement = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBPreparedStatement = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBPendingResult_1 = require_DuckDBPendingResult();
  var DuckDBResult_1 = require_DuckDBResult();
  var DuckDBResultReader_1 = require_DuckDBResultReader();

  class DuckDBPreparedStatement {
    prepared_statement;
    constructor(prepared_statement) {
      this.prepared_statement = prepared_statement;
    }
    get statementType() {
      return node_bindings_1.default.prepared_statement_type(this.prepared_statement);
    }
    get parameterCount() {
      return node_bindings_1.default.nparams(this.prepared_statement);
    }
    parameterName(parameterIndex) {
      return node_bindings_1.default.parameter_name(this.prepared_statement, parameterIndex);
    }
    parameterTypeId(parameterIndex) {
      return node_bindings_1.default.param_type(this.prepared_statement, parameterIndex);
    }
    clearBindings() {
      node_bindings_1.default.clear_bindings(this.prepared_statement);
    }
    parameterIndex(parameterName) {
      return node_bindings_1.default.bind_parameter_index(this.prepared_statement, parameterName);
    }
    bindBoolean(parameterIndex, value) {
      node_bindings_1.default.bind_boolean(this.prepared_statement, parameterIndex, value);
    }
    bindTinyInt(parameterIndex, value) {
      node_bindings_1.default.bind_int8(this.prepared_statement, parameterIndex, value);
    }
    bindSmallInt(parameterIndex, value) {
      node_bindings_1.default.bind_int16(this.prepared_statement, parameterIndex, value);
    }
    bindInteger(parameterIndex, value) {
      node_bindings_1.default.bind_int32(this.prepared_statement, parameterIndex, value);
    }
    bindBigInt(parameterIndex, value) {
      node_bindings_1.default.bind_int64(this.prepared_statement, parameterIndex, value);
    }
    bindHugeInt(parameterIndex, value) {
      node_bindings_1.default.bind_hugeint(this.prepared_statement, parameterIndex, value);
    }
    bindUTinyInt(parameterIndex, value) {
      node_bindings_1.default.bind_uint8(this.prepared_statement, parameterIndex, value);
    }
    bindUSmallInt(parameterIndex, value) {
      node_bindings_1.default.bind_uint16(this.prepared_statement, parameterIndex, value);
    }
    bindUInteger(parameterIndex, value) {
      node_bindings_1.default.bind_uint32(this.prepared_statement, parameterIndex, value);
    }
    bindUBigInt(parameterIndex, value) {
      node_bindings_1.default.bind_uint64(this.prepared_statement, parameterIndex, value);
    }
    bindUHugeInt(parameterIndex, value) {
      node_bindings_1.default.bind_uhugeint(this.prepared_statement, parameterIndex, value);
    }
    bindDecimal(parameterIndex, value) {
      node_bindings_1.default.bind_decimal(this.prepared_statement, parameterIndex, value);
    }
    bindFloat(parameterIndex, value) {
      node_bindings_1.default.bind_float(this.prepared_statement, parameterIndex, value);
    }
    bindDouble(parameterIndex, value) {
      node_bindings_1.default.bind_double(this.prepared_statement, parameterIndex, value);
    }
    bindDate(parameterIndex, value) {
      node_bindings_1.default.bind_date(this.prepared_statement, parameterIndex, value);
    }
    bindTime(parameterIndex, value) {
      node_bindings_1.default.bind_time(this.prepared_statement, parameterIndex, value);
    }
    bindTimestamp(parameterIndex, value) {
      node_bindings_1.default.bind_timestamp(this.prepared_statement, parameterIndex, value);
    }
    bindInterval(parameterIndex, value) {
      node_bindings_1.default.bind_interval(this.prepared_statement, parameterIndex, value);
    }
    bindVarchar(parameterIndex, value) {
      node_bindings_1.default.bind_varchar(this.prepared_statement, parameterIndex, value);
    }
    bindBlob(parameterIndex, value) {
      node_bindings_1.default.bind_blob(this.prepared_statement, parameterIndex, value);
    }
    bindNull(parameterIndex) {
      node_bindings_1.default.bind_null(this.prepared_statement, parameterIndex);
    }
    async run() {
      return new DuckDBResult_1.DuckDBResult(await node_bindings_1.default.execute_prepared(this.prepared_statement));
    }
    async runAndRead() {
      return new DuckDBResultReader_1.DuckDBResultReader(await this.run());
    }
    async runAndReadAll() {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.run());
      await reader.readAll();
      return reader;
    }
    async runAndReadUntil(targetRowCount) {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.run());
      await reader.readUntil(targetRowCount);
      return reader;
    }
    start() {
      return new DuckDBPendingResult_1.DuckDBPendingResult(node_bindings_1.default.pending_prepared(this.prepared_statement));
    }
  }
  exports.DuckDBPreparedStatement = DuckDBPreparedStatement;
});

// node_modules/@duckdb/node-api/lib/DuckDBExtractedStatements.js
var require_DuckDBExtractedStatements = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBExtractedStatements = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBPreparedStatement_1 = require_DuckDBPreparedStatement();

  class DuckDBExtractedStatements {
    connection;
    extracted_statements;
    statement_count;
    constructor(connection, extracted_statements, statement_count) {
      this.connection = connection;
      this.extracted_statements = extracted_statements;
      this.statement_count = statement_count;
    }
    get count() {
      return this.statement_count;
    }
    async prepare(index) {
      return new DuckDBPreparedStatement_1.DuckDBPreparedStatement(await node_bindings_1.default.prepare_extracted_statement(this.connection, this.extracted_statements, index));
    }
  }
  exports.DuckDBExtractedStatements = DuckDBExtractedStatements;
});

// node_modules/@duckdb/node-api/lib/DuckDBConnection.js
var require_DuckDBConnection = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBConnection = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBAppender_1 = require_DuckDBAppender();
  var DuckDBExtractedStatements_1 = require_DuckDBExtractedStatements();
  var DuckDBPreparedStatement_1 = require_DuckDBPreparedStatement();
  var DuckDBResult_1 = require_DuckDBResult();
  var DuckDBResultReader_1 = require_DuckDBResultReader();

  class DuckDBConnection {
    connection;
    constructor(connection) {
      this.connection = connection;
    }
    static async create(instance) {
      return instance.connect();
    }
    interrupt() {
      node_bindings_1.default.interrupt(this.connection);
    }
    get progress() {
      return node_bindings_1.default.query_progress(this.connection);
    }
    async run(sql) {
      return new DuckDBResult_1.DuckDBResult(await node_bindings_1.default.query(this.connection, sql));
    }
    async runAndRead(sql) {
      return new DuckDBResultReader_1.DuckDBResultReader(await this.run(sql));
    }
    async runAndReadAll(sql) {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.run(sql));
      await reader.readAll();
      return reader;
    }
    async runAndReadUntil(sql, targetRowCount) {
      const reader = new DuckDBResultReader_1.DuckDBResultReader(await this.run(sql));
      await reader.readUntil(targetRowCount);
      return reader;
    }
    async prepare(sql) {
      return new DuckDBPreparedStatement_1.DuckDBPreparedStatement(await node_bindings_1.default.prepare(this.connection, sql));
    }
    async extractStatements(sql) {
      const { extracted_statements, statement_count } = await node_bindings_1.default.extract_statements(this.connection, sql);
      if (statement_count === 0) {
        throw new Error(`Failed to extract statements: ${node_bindings_1.default.extract_statements_error(extracted_statements)}`);
      }
      return new DuckDBExtractedStatements_1.DuckDBExtractedStatements(this.connection, extracted_statements, statement_count);
    }
    async createAppender(schema, table) {
      return new DuckDBAppender_1.DuckDBAppender(node_bindings_1.default.appender_create(this.connection, schema, table));
    }
  }
  exports.DuckDBConnection = DuckDBConnection;
});

// node_modules/@duckdb/node-api/lib/DuckDBInstance.js
var require_DuckDBInstance = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DuckDBInstance = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  var DuckDBConnection_1 = require_DuckDBConnection();

  class DuckDBInstance {
    db;
    constructor(db) {
      this.db = db;
    }
    static async create(path, options) {
      if (options) {
        const config = node_bindings_1.default.create_config();
        for (const optionName in options) {
          const optionValue = String(options[optionName]);
          node_bindings_1.default.set_config(config, optionName, optionValue);
        }
        return new DuckDBInstance(await node_bindings_1.default.open(path, config));
      } else {
        return new DuckDBInstance(await node_bindings_1.default.open(path));
      }
    }
    async connect() {
      return new DuckDBConnection_1.DuckDBConnection(await node_bindings_1.default.connect(this.db));
    }
  }
  exports.DuckDBInstance = DuckDBInstance;
});

// node_modules/@duckdb/node-api/lib/configurationOptionDescriptions.js
var require_configurationOptionDescriptions = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.configurationOptionDescriptions = configurationOptionDescriptions;
  var node_bindings_1 = __importDefault(require_duckdb());
  function configurationOptionDescriptions() {
    const descriptions = {};
    const count = node_bindings_1.default.config_count();
    for (let i = 0;i < count; i++) {
      const { name, description } = node_bindings_1.default.get_config_flag(i);
      descriptions[name] = description;
    }
    return descriptions;
  }
});

// node_modules/@duckdb/node-api/lib/enums.js
var require_enums = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.StatementType = exports.ResultReturnType = undefined;
  var node_bindings_1 = __importDefault(require_duckdb());
  exports.ResultReturnType = node_bindings_1.default.ResultType;
  exports.StatementType = node_bindings_1.default.StatementType;
});

// node_modules/@duckdb/node-api/lib/version.js
var require_version = __commonJS((exports) => {
  var __importDefault = exports && exports.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.version = version;
  var node_bindings_1 = __importDefault(require_duckdb());
  function version() {
    return node_bindings_1.default.library_version();
  }
});

// node_modules/@duckdb/node-api/lib/index.js
var require_lib = __commonJS((exports) => {
  var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === undefined)
      k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m2[k2];
      } };
    }
    Object.defineProperty(o, k22, desc);
  } : function(o, m2, k2, k22) {
    if (k22 === undefined)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.double_to_uhugeint = exports.uhugeint_to_double = exports.double_to_hugeint = exports.hugeint_to_double = undefined;
  var node_bindings_1 = require_duckdb();
  Object.defineProperty(exports, "hugeint_to_double", { enumerable: true, get: function() {
    return node_bindings_1.hugeint_to_double;
  } });
  Object.defineProperty(exports, "double_to_hugeint", { enumerable: true, get: function() {
    return node_bindings_1.double_to_hugeint;
  } });
  Object.defineProperty(exports, "uhugeint_to_double", { enumerable: true, get: function() {
    return node_bindings_1.uhugeint_to_double;
  } });
  Object.defineProperty(exports, "double_to_uhugeint", { enumerable: true, get: function() {
    return node_bindings_1.double_to_uhugeint;
  } });
  __exportStar(require_DuckDBAppender(), exports);
  __exportStar(require_DuckDBConnection(), exports);
  __exportStar(require_DuckDBDataChunk(), exports);
  __exportStar(require_DuckDBExtractedStatements(), exports);
  __exportStar(require_DuckDBInstance(), exports);
  __exportStar(require_DuckDBLogicalType(), exports);
  __exportStar(require_DuckDBPendingResult(), exports);
  __exportStar(require_DuckDBPreparedStatement(), exports);
  __exportStar(require_DuckDBResult(), exports);
  __exportStar(require_DuckDBType(), exports);
  __exportStar(require_DuckDBTypeId(), exports);
  __exportStar(require_DuckDBVector(), exports);
  __exportStar(require_configurationOptionDescriptions(), exports);
  __exportStar(require_enums(), exports);
  __exportStar(require_sql(), exports);
  __exportStar(require_values(), exports);
  __exportStar(require_version(), exports);
});

// src/ducky.ts
var import_node_api = __toESM(require_lib(), 1);

// src/logger.ts
var LogLevelCodes = {
  1: "DBG",
  2: "INF",
  3: "WRN",
  4: "ERR",
  5: "FTL"
};

class Logger {
  _level = 2 /* INFO */;
  _lastTs = null;
  level(v) {
    if (!v || this._level === v)
      return this._level;
    this._level = v;
    const lvlcode = LogLevelCodes[v];
    this.info(`Logger level set to '${lvlcode}'`);
    return this._level;
  }
  debug(message, obj) {
    logIt(1 /* DEBUG */, message, obj);
  }
  info(message, obj) {
    logIt(2 /* INFO */, message, obj);
  }
  warn(message, obj) {
    logIt(3 /* WARN */, message, obj);
  }
  error(message, obj) {
    logIt(4 /* ERROR */, message, obj);
  }
  fatal(message, obj) {
    logIt(5 /* FATAL */, message, obj);
  }
  timer(message, obj) {
    this._lastTs = Date.now();
    const dt = 0;
    logIt(1 /* DEBUG */, `(${dt.toFixed(3)}s) ${message}`, obj, true);
  }
  elapsed(message, obj) {
    if (!this._lastTs)
      this._lastTs = Date.now();
    const ts = Date.now();
    const dt = (ts - this._lastTs) / 1000;
    logIt(1 /* DEBUG */, `(${dt.toFixed(3)}s) ${message}`, obj, true);
  }
}
var logger = new Logger;
function logIt(lvl, message, obj, isTiming) {
  let lvlcode = LogLevelCodes[lvl];
  if (lvl < logger._level)
    return;
  if (isTiming)
    lvlcode = "DTS";
  const smsg = `${getISOTimeString()} ${lvlcode} ${message || ""}`;
  if (!obj)
    console.log(smsg);
  else
    console.log(smsg, obj);
}
function getISOTimeString() {
  const now = new Date;
  const ye = now.getFullYear();
  const mo = String(now.getMonth() + 1).padStart(2, "0");
  const dy = String(now.getDate()).padStart(2, "0");
  const hr = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  const se = String(now.getSeconds()).padStart(2, "0");
  const ms = String(now.getMilliseconds()).padStart(3, "0");
  return `${ye}-${mo}-${dy} ${hr}:${mi}:${se}.${ms}`;
}

// src/ducky.ts
var logLevel = 1 /* DEBUG */;
async function open(dbname) {
  try {
    dbname = dbname || "./temp.db";
    const db = await import_node_api.DuckDBInstance.create(dbname);
    const dbx = await db.connect();
    logger.info(`Open Duckdb '${dbname}':`, JSON.stringify(dbx));
    return dbx;
  } catch (err) {
    logger.fatal(`Open Duckdb '${dbname}':`, err);
    return null;
  }
}
async function exec(dbx, stmt) {
  if (!dbx || !stmt)
    return;
  stmt = cleanup(stmt);
  try {
    logger.level(logLevel);
    logger.timer(`Exec: ${stmt}`);
    const done = await dbx.run(stmt);
    logger.elapsed(`Done: `, JSON.stringify(done));
  } catch (err) {
    logger.error(`Exec: `, err);
    return;
  }
}
async function query(dbx, stmt, onEach) {
  if (!dbx || !stmt)
    return [];
  stmt = cleanup(stmt);
  try {
    logger.level(logLevel);
    logger.timer(`Query: ${stmt}`);
    const reader = await dbx.runAndReadAll(stmt);
    const rows = reader.getRows();
    const n = rows.length;
    logger.elapsed(`Done: ${n} rows`);
    logger.debug(`Row 0: `, rows[0]);
    logger.debug(`Row ${n - 1}:`, rows[n - 1]);
    if (onEach)
      (rows || []).forEach((r) => onEach(r));
    return rows;
  } catch (err) {
    logger.error(`Query: `, err);
    return [];
  }
}
function cleanup(s2) {
  return (s2 || "").replace(/[\n\t\r]/g, "").replace(/\s+/g, " ").trim();
}

// index.ts
async function run() {
  let dbx = await open(`${process.env.POND_DB}`);
  await exec(dbx, `DROP TABLE IF EXISTS tarmue`);
  await exec(dbx, `CREATE TABLE tarmue AS 
      SELECT * 
      FROM read_csv('${process.env.POND_IMPORTS}/TARMUE.txt')`);
  await query(dbx, `SELECT 
      concat(idmue), concat(idtarmue), concat(idtarraiz,':',idtar), 
      cotitar, nomtar2, valor, stsval, ststar
    FROM tarmue 
    WHERE valor <> 'NULL'
    ORDER BY idmue, idtarmue`, (r) => console.log(r));
}
run().catch((err) => console.log("Run ", err));
