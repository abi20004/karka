const employees = [
  { id: 1, name: 'Alice', position: 'Manager' },
  { id: 2, name: 'Bob', position: 'Engineer' },
  { id: 3, name: 'Charlie', position: 'Technician' }
];

function EmployeeById(employees, id) {
  return employees.find(emp => emp.id === id);
}
console.log(EmployeeById(employees, 2));