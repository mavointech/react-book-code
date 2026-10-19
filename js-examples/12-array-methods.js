const products = [
  { id: 1, name: 'Mouse', price: 29, stock: 60 },
  { id: 2, name: 'Keyboard', price: 89, stock: 0 },
  { id: 3, name: 'Monitor', price: 379, stock: 18 },
  { id: 4, name: 'Webcam', price: 59, stock: 5 },
];

// map: turn every item into something else (same length)
const names = products.map((p) => p.name);
console.log(names);

// filter: keep only the items that pass a test
const inStock = products.filter((p) => p.stock > 0);
console.log(inStock.length, 'products in stock');

// find: the FIRST item that passes (or undefined)
const monitor = products.find((p) => p.name === 'Monitor');
console.log(monitor);

// some / every: yes-or-no questions about the whole array
console.log(products.some((p) => p.stock === 0));
console.log(products.every((p) => p.price > 20));

// reduce: combine everything into ONE value
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log('Total price:', total);

// sort: changes the array itself, so copy it first
const cheapFirst = [...products].sort((a, b) => a.price - b.price);
console.log(cheapFirst.map((p) => p.name));

// Chaining: the output of one method is the input of the next
const report = products
  .filter((p) => p.stock > 0)
  .map((p) => `${p.name}: ${p.price} EUR`);
console.log(report);
