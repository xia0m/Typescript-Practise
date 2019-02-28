export function keep<T>(value: T[], callback: (n: T) => boolean): T[] {
  return value.filter(callback)
}

export function discard<T>(value: T[], callback: (n: T) => boolean): T[] {
  const temp: T[] = value.filter(callback)
  const arr: T[] = []
  for (let i = 0; i < value.length; i++) {
    if (temp.indexOf(value[i]) === -1) {
      arr.push(value[i])
    }
  }
  return arr
}
