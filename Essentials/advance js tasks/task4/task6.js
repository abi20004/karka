function Squares(arr) {
  return arr.filter(n => n % 2 === 0).map(n => n * n);
}
console.log(Squares([1, 2, 3, 4, 5, 6]));