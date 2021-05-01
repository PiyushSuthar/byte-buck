/**
  * Returns True, if value is GiB, TiB or similar... else false
  * @param value
  */
export function isBinaryUnit(value: string = 'GiB'): boolean {
  let storageValueTypes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let indexUnit = storageValueTypes.indexOf(value)
  return indexUnit === -1
}
