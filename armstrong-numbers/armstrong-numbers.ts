class ArmstrongNumbers {
  static isArmstrongNumber(num: number): boolean {
    let calculatedNum: number = 0
    const tempString: string = num.toString()
    for (const temp of tempString) {
      calculatedNum += parseInt(temp) ** tempString.length
    }
    return calculatedNum === num
  }
}
export default ArmstrongNumbers
