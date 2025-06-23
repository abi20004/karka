
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 }
];

function getStudentScore(studentsList, studentName) {
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].name === studentName) {
      return studentsList[i].score;
    }
  }
  return 'Student not found';
}

const score = getStudentScore(students, 'Bob');
console.log(score); 