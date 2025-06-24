const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 22 }
];

function groupBy(arr, property) {
  return arr.reduce((result, obj) => {
    const key = obj[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
    return result;
  }, {});
}
console.log(groupBy(people, 'age'));