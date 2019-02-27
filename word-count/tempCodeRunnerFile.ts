function Words(sentense: string): Map<string, number> {
  const wordsCount = new Map()
  const wordArray: string[] = sentense.split(' ')
  console.log(wordArray)
  
  return wordsCount
}
Words("a b c d efefe : wefe")
