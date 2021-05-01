/**
   * Converts the Bytes to Human Readable Form
   * @param bytes bytes to convert
   * @param decimals {OPTIONAL} No.s after decimal point
   * @param binaryUnits {OPTIONAL} TiB (true) or TB (false) 
   * @returns ex. 12.2 MiB or MB
   */
export function formatBytes(bytes: number, decimals: number = 2, binaryUnits: boolean): string {
  if (bytes === 0) return '0 Bytes';

  var unitMultiple = (binaryUnits) ? 1024 : 1000;

  // 1000 bytes in 1 Kilobyte (KB) or 1024 bytes for the binary version (KiB)
  var unitNames = (unitMultiple === 1024) ?
    ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] :
    ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  var unitChanges = Math.floor(
    Math.log(bytes) / Math.log(unitMultiple)
  );

  return parseFloat((bytes / Math.pow(unitMultiple, unitChanges)).toFixed(decimals || 0)) + ' ' + unitNames[unitChanges];
}