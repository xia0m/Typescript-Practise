export function keep<T>(value,fn){
  return value.filter(fn)
}

export function discard<T>(value,fn){
  return undefined
}