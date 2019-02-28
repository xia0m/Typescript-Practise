// export function keep<T>(value: T[], callback: (n: T) => boolean): T[] {
//   return value.filter(callback)
// }

// export function discard<T>(value: T[], callback: (n: T) => boolean): T[] {
//   return value.filter((val) => !callback(val))
// }

// just realized I cannot use built in fitler function
export function keep<T>(value: T[], callback: (n: T) => boolean): T[] {
  const temp: T[] = []
  for (const val of value) {
    if (callback(val)) {
      temp.push(val)
    }
  }
  return temp
}

export function discard<T>(value: T[], callback: (n: T) => boolean): T[] {
  const temp: T[] = []
  for (const val of value) {
    if (!callback(val)) {
      temp.push(val)
    }
  }
  return temp
}
