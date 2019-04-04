class SimpleCipher {
  public key: string
  public KEY_LENGTH: number = 100
  public CHARACTER_SET = "abcdefghijklmnopqrstuvwxyz"

  constructor(key?: string) {
    if (typeof key === "string" && key.length === 0) {
      throw new Error("Bad key")
    }
    key
      ? (this.key = this.validatedKey(key))
      : (this.key = this.generateRandomKey())
  }

  validatedKey(key: string): string {
    for (const letter of key) {
      if (this.CHARACTER_SET.indexOf(letter) === -1) {
        throw new Error("Bad key")
      }
    }
    return key
  }

  generateRandomKey(): string {
    let text: string = ""

    for (let i = 0; i < this.KEY_LENGTH; i++) {
      text += this.CHARACTER_SET.charAt(
        Math.floor(Math.random() * this.CHARACTER_SET.length)
      )
    }
    return text
  }

  encode(message: string): string {
    let text: string = ""
    for (let i = 0; i < message.length; i++) {
      let charCode: number =
        message.charCodeAt(i) +
        this.CHARACTER_SET.indexOf(this.key.charAt(i % this.key.length))

      if (charCode > 122) {
        charCode = charCode - 26
      }
      text += String.fromCharCode(charCode)
    }
    return text
  }

  decode(message: string): string {
    let text: string = ""
    for (let i = 0; i < message.length; i++) {
      let charCode: number =
        message.charCodeAt(i) -
        this.CHARACTER_SET.indexOf(this.key.charAt(i % this.key.length))
      if (charCode < 97) {
        charCode = charCode + 26
      }
      text += String.fromCharCode(charCode)
    }
    return text
  }
}

export default SimpleCipher
