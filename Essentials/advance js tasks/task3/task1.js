const input1 = ['apple', 'banana', 'cherry', 'date'];

function find(strings) {
  return strings.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

console.log(find(input1));