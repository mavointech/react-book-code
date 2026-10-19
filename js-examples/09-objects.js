const product = {
  id: 7,
  name: 'Gaming Tower',
  price: 1599,
  specs: { memory: '32 GB', storage: '2 TB' },
  tags: ['gaming', 'desktop'],
};

console.log(product.name);        // dot notation
console.log(product['price']);    // bracket notation
console.log(product.specs.memory);
console.log(product.tags[1]);

product.stock = 4;                // add a new property
product.price = 1499;             // change one
delete product.tags;              // remove one

console.log(product);
console.log(Object.keys(product));
console.log(Object.entries(product.specs));

const key = 'name';
console.log(product[key]);        // a variable as the key
