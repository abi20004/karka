const items = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 700 }
];


function Products(products) {
  const total = products.reduce((sum, { price }) => sum + price, 0);
  const average = total / products.length;

  return products
    .filter(({ price }) => price > average)
    .map(({ name }) => name);
}
console.log(Products(items)); 