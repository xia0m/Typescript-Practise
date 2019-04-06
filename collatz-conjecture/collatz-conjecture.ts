class CollatzConjecture {
  static steps(num: number): number {
    if (num <= 0) {
      throw new Error("Only positive numbers are allowed")
    }
    let numSteps: number = 0
    while (num !== 1) {
      // check whether num is even or odd
      // if it is even, num = num /2
      // if it is odd, num = num*3 + 1
      num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1)
      numSteps++
      // increse the actual steps by 1
    }

    return numSteps
  }
}

export default CollatzConjecture
