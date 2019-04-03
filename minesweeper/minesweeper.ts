export default class Minesweeper {
  annotate(board: string[]): string[] {
    const boardArray: string[][] = []
    const result: string[] = []
    for (const item of board) {
      boardArray.push(item.split(""))
    }
    // convert boardArray from array of string to 2 dimensional array

    for (let outIndex = 0; outIndex < boardArray.length; outIndex++) {
      for (
        let insideIndex = 0;
        insideIndex < boardArray[0].length;
        insideIndex++
      ) {
        // loop throught each cell in the 2 dimensional array
        if (boardArray[outIndex][insideIndex] === " ") {
          const returnNum = this.countSurrounding(
            boardArray,
            outIndex,
            insideIndex
          )
          returnNum === 0
            ? (boardArray[outIndex][insideIndex] = " ".toString())
            : (boardArray[outIndex][insideIndex] = returnNum.toString())
        }
      }
    }

    for (const item of boardArray) {
      // convert boardArray from  2 dimensional array to array of string
      result.push(item.join(""))
    }
    return result
  }
  countSurrounding(
    arrs: string[][],
    outIndex: number,
    insideIndex: number
  ): number {
    let result: number = 0
    // console.log(arrs)
    loopOutside: for (let i = outIndex - 1; i <= outIndex + 1; i++) {
      loopInside: for (let j = insideIndex - 1; j <= insideIndex + 1; j++) {
        if (i < 0 || i >= arrs.length) {
          // check edge case
          // 1.when at first row
          // 2.when at last row
          continue loopOutside
        }
        if (j < 0 || j >= arrs[i].length) {
          // check edge case
          // 1.when at left most column
          // 2.when at right most column
          continue loopInside
        }
        if (arrs[i][j] === "*") {
          result++
        }
      }
    }
    return result
  }
}
