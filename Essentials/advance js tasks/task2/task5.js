Details({ name: 'Alice', age: 25, city: 'New York' });

function Details(person) {
  const { name, age, city } = person;
  console.log(name);
  console.log(age);
  console.log(city);
}
