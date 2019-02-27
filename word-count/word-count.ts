class Words {
  public count(sentense: string): Map<string, number> {
    const wordCount = new Map<string, number>()
    const wordsArray: string[] = sentense
      .replace(/(\s+)/gm, ' ')
      .trim()
      .toLowerCase()
      .split(' ')
    for (const word of wordsArray) {
      if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word)! + 1)
      } else {
        wordCount.set(word, 1)
      }
    }
    return wordCount
  }
}

export default Words
