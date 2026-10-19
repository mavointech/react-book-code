// A function declaration
function add(a, b) {
  return a + b;
}

// An arrow function (you will see these everywhere in React)
const multiply = (a, b) => a * b;

// An arrow function with a body and a default parameter
const greet = (name = 'friend') => {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(greet());
console.log(greet('Aino'));

// Functions are values: you can pass them to other functions
const twice = (fn, value) => fn(fn(value));
console.log(twice((n) => n * 2, 5));
