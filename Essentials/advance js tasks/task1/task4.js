const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

function fruits(Lists) {
  return Lists.filter(word => word.length > 5);
}
const result = fruits(words);
console.log(result);