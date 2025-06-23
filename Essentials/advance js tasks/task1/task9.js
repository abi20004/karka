function printArrayKeys(arr) {
  let keys = arr.keys();
  for (let key of keys) {
    console.log(key);
  }
}
printArrayKeys(['apple', 'banana', 'cherry']);