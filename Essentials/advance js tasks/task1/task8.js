function Word(sentence, word) {
  return sentence.includes(word);
}
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
const result = Word(sentence, word);
console.log(result);  