const cart = [
  { item: 'apple', price: 1.5 },
  { item: 'banana', price: 2.0 },
  { item: 'orange', price: 1.25 }
];

function Total(value) {
  return value.reduce((total, item) => total + item.price, 0);
}
console.log(Total(cart));