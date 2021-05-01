/**
   * Seperates a Number and String from a give String. ex. "12 MiB", it'll return 12 and MiB
   * @param str  
   */
export function seperateNoAndStr(str: string): {
  type: string;
  storageValue: number
} {
  var regex = new RegExp('([0-9\.]+)|([a-zA-Z]+)', 'g');
  let matched = str.match(regex);
  return {
    type: matched![1],
    storageValue: parseFloat(matched![0])
  }
}