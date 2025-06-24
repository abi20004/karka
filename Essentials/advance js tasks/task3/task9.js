const tasks = [
  { taskName: 'Task 1', dueDate: '2023-06-01' },
  { taskName: 'Task 2', dueDate: '2024-05-01' },
  { taskName: 'Task 3', dueDate: '2024-01-01' }
];

function findTask(tasks) {
  const today = new Date();
  return tasks.find(task => new Date(task.dueDate) < today);
}
console.log(findTask(tasks)); 