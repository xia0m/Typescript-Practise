export default function accumulate<T, U>(
  arr: T[],
  callback: (val: T) => U
): U[] {
  const result: U[] = []
  for (const val of arr) {
    result.push(callback(val))
  }
  return result
}
