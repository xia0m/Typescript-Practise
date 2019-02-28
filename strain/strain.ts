export function keep<T>(value: T[], callback: (n: T) => boolean): T[] {
  return value.filter(callback)
}

export function discard<T>(value: T[], callback: (n: T) => boolean): T[] {
  return value.filter(callback)
}
