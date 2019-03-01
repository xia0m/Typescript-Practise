class Bracket {
  private _pair: string
  constructor(pair: string) {
    this._pair = pair
  }
  isPaired(): boolean {
    const stack: string[] = []
    const arr: string[] = this._pair.split("")
    let result: boolean = false
    arr.length === 0 ? (result = true) : (result = false)
    let top: string = ""
    for (const val of arr) {
      if (val === "[") {
        stack.push("]")
        top = "]"
      } else if (val === "(") {
        stack.push(")")
        top = ")"
      } else if (val === "{") {
        stack.push("}")
        top = "}"
      } else if (top === val) {
        stack.pop()
        top = stack[stack.length - 1]
      } else if (top !== val && (val === "]" || val === ")" || val === "}")) {
        return false
      }
    }
    stack.length === 0 ? (result = true) : (result = false)
    return result
  }
}

export default Bracket
