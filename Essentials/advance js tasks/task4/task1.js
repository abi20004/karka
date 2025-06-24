function findFirstPositive(arr) {
  return arr.find(num => num > 0);
}
console.log(findFirstPositive([-5, -3, 0, 9, 2])); 