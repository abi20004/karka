function merge(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(merge([1, 2, 2], [3, 4, 5]));