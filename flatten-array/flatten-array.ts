export default class Flatten {
  static flatten(arr: {}): number[] {
    const reg = /[',]+/g
    // filter one or more ,
    const flattenArray: string[] = arr
      .toString()
      // convert every array together to string
      .split(reg)
      // null or undeinfed become , split them by one or more ,
      .filter((val: string) => val !== "")
    // revmoe extra empty array element
    return flattenArray.map((val: string) => parseInt(val, 10))
  }
}
