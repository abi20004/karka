const input = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

function flattenArray(arr) {
  return arr.reduce((flat, current) => flat.concat(current), []);
}
console.log(flattenArray(input));