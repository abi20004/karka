const input = [1, 3, 7, 10, 2];

function fNumber(numbers) {
  return numbers.find(num => num % 2 === 0);
}
console.log(fNumber(input));