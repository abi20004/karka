const input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function counts(words) {
  return words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});
}
console.log(counts(input)); 
