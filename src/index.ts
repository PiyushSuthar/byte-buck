import { formatBytes, convertToBytes, seperateNoAndStr, isBinaryUnit } from "./utils";

/**
 * Adds the given Bytes...
 * @param values Values you would like to add.
 * @param decimal {OPTIONAL} No.s after decimal point.
 * @param wantBinaryUnit {OPTIONAL} True, if You want output like GiB, TiB, KiB, etc... Else false.
 * @author GitHub.com/PiyushSuthar
 * @returns Sum of the given bytes
 */
export default function addStorageValue(
  values: string[],
  decimal: number = 4,
  wantBinaryUnit: boolean = false
): string {

  let totalBytes = 0
  values.forEach(value => {
    let { type, storageValue } = seperateNoAndStr(value)
    totalBytes = totalBytes + convertToBytes(storageValue, type, isBinaryUnit(type))
  })

  return formatBytes(totalBytes, decimal, wantBinaryUnit)
}

export * from './utils'