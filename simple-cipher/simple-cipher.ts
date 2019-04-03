class SimpleCipher {
  public key: string
  public KEY_LENGTH: number = 100
  public CHARACTER_SET = "abcdefghijklmnopqrstuvwxyz"

  constructor(key?: string) {
    key
      ? (this.key = this.validatedKey(key))
      : (this.key = this.generateRandomKey())
  }

  validatedKey(key: string): string {
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
    return message
  }

  decode(message: string): string {
    return message
  }
}

export default SimpleCipher
