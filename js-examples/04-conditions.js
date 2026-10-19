const stock = 3;

if (stock === 0) {
  console.log('Out of stock');
} else if (stock <= 5) {
  console.log(`Only ${stock} left`);
} else {
  console.log('In stock');
}

// The ternary operator: condition ? valueIfTrue : valueIfFalse
const label = stock > 0 ? 'Available' : 'Sold out';
console.log(label);

// && and || combine conditions
const loggedIn = true;
const isAdmin = false;
console.log(loggedIn && isAdmin); // both must be true
console.log(loggedIn || isAdmin); // at least one must be true
console.log(!loggedIn);           // the opposite

// === compares value AND type. Always use it instead of ==
console.log(5 === 5);
console.log(5 === '5');
console.log(5 == '5'); // true (surprising!)
