// Spread (...) copies the items of an array or object into a new one
const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);

const user = { name: 'Aino', age: 17 };
const updated = { ...user, age: 18, city: 'Helsinki' };
console.log(updated);
console.log(user); // the original did not change

// Rest (...) collects the "rest" of the values
const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3, 4));

const [head, ...tail] = [10, 20, 30, 40];
console.log(head, tail);

const { age, ...others } = updated;
console.log(age, others);
