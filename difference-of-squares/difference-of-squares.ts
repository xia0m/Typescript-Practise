class Squares {
  private _num: number
  public squareOfSum: number
  public sumOfSquares: number
  public difference: number
  constructor(num: number) {
    this._num = num
    this.squareOfSum = this.squareOfSumFn()
    this.sumOfSquares = this.sumOfSquaresFn()
    this.difference = this.differenceFn()
  }
  squareOfSumFn(): number {
    let sum = 0
    for (let i = 1; i <= this._num; i++) {
      sum += i
    }
    return Math.pow(sum, 2)
  }
  sumOfSquaresFn(): number {
    let sum = 0
    for (let i = 1; i <= this._num; i++) {
      sum += Math.pow(i, 2)
    }
    return sum
  }
  differenceFn(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}

export default Squares
