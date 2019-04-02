export default class Converter {
  convert(arr: number[], base1: number, base2: number): number[] {
    if (!this.checkBase(base1)) {
      throw new Error("Wrong input base")
    }
    if (!this.checkBase(base2)) {
      throw new Error("Wrong output base")
    }

    if (!this.checkArray(arr, base1)) {
      throw new Error("Input has wrong format")
    }

    const decNum = this.convertToDecimal(arr, base1)
    // if (base2 === 10) {
    //   return decNum
    // }
    const result = this.convertFromDecimal(decNum, base2)
    return result
  }

  checkArray(arr: number[], base: number): boolean {
    if (arr.length === 0) {
      return false
    }
    if (arr.length >= 2 && arr[0] === 0) {
      return false
    }
    for (const item of arr) {
      if (item >= base) {
        return false
      } else if (item < 0) {
        return false
      } else if (!Number.isInteger(item)) {
        return false
      }
    }
    return true
  }

  checkBase(base: number): boolean {
    if (base <= 1) {
      return false
    } else if (!Number.isInteger(base)) {
      return false
    }
    return true
  }
  convertToDecimal(arr: number[], base: number): number {
    let temp: number = 0
    const newArr: number[] = arr.reverse()
    for (let i = 0; i < newArr.length; i++) {
      temp += newArr[i] * Math.pow(base, i)
    }
    return temp
  }
  convertFromDecimal(decNum: number, base: number): number[] {
    const result: number[] = []
    let num: number = decNum
    if (num === 0) {
      return [0]
    }
    while (num >= 1) {
      result.push(num % base)
      num = Math.floor(num / base)
    }
    return result.reverse()
  }
}
