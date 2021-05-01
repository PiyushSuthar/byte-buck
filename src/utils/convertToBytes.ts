/**
   * Converts a Given Human readable byte to Bytes.
   * @param {Number} value Byte No. ex. from "12.3 MiB" give 12.3
   * @param {String} type Byte Type ex. from "12.3 MiB" give "MiB"
   * @param {Boolean} binaryUnits {OPTIONAL} Will return TiB (true) or TB (false) 
   */
export function convertToBytes(value = 1, type = "KiB", binaryUnits = true) {
  var unitMultiple = binaryUnits ? 1024 : 1000
  var unitNames = (unitMultiple === 1024) ?
    ["bytes", "kib", "mib", "gib", "tib", "pib", "eib", "zib", "yib"] :
    ["bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
  return value * Math.pow(unitMultiple, unitNames.indexOf(type.toLocaleLowerCase()))
}