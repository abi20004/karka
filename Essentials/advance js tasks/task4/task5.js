function personInfo(person) {
  const { firstName, lastName, age } = person;
  return `${firstName} ${lastName} is ${age} years old`;
}
console.log(personInfo({ firstName: 'John', lastName: 'Doe', age: 30 }));

