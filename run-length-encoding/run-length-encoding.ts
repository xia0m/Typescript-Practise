class Encoding {
  public static encode(str: string): string {
    let result = "",
      counter = 1
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] !== str[i]) {
        if (counter === 1) {
          result += str[i]
        } else {
          result += counter + str[i]
          counter = 1
        }
      } else {
        counter++
      }
    }
    return result
  }
  public static decode(str: string): string {
    let result = ""
    let counter = 0
    const reg = /[a-zA-Z]|\s/g
    const numArray: string[] = str.split(reg)
    // console.log('numArray is ',numArray);
    for (let i = 0; i < numArray.length - 1; i++) {
      if (numArray[i] === "") {
        result += str[counter]
        counter++
      } else {
        result += Array(parseInt(numArray[i], 10) + 1).join(
          str[counter + numArray[i].length]
        )
        counter = counter + numArray[i].length + 1
        // console.log('result is ',result)
      }
    }
    return result
  }
}

export default Encoding
