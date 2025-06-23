function replace(str, old, news) {
  return str.replaceAll(old, news);
}
const inputStr = 'apple banana apple grape apple';
const result1 = replace(inputStr, 'apple', 'orange');
console.log(result1); 