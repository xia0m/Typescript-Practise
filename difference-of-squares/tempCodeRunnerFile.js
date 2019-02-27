function sumOfSquaresFn() {
  let sum = 0
  for (let i = 1; i <= 5; i++) {
    sum += Math.pow(i, 2)
  }
  return sum
}
console.log(sumOfSquaresFn())