const students = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 23 }
];

function findStudentByName(students, name) {
  return students.find(student => student.name === name);
}
console.log(findStudentByName(students, 'Bob')); 
