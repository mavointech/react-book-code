const user = { name: 'Aino', age: 17, city: 'Helsinki' };

// Without destructuring
const name1 = user.name;
const age1 = user.age;

// With destructuring: pull values out in one line
const { name, age } = user;
console.log(name, age, name1, age1);

// Rename and give a default value
const { city: town, country = 'Finland' } = user;
console.log(town, country);

// Arrays are destructured by position
const colours = ['red', 'green', 'blue'];
const [first, second] = colours;
console.log(first, second);

// Very useful in function parameters (React props work like this)
function showUser({ name, city = 'unknown' }) {
  return `${name} lives in ${city}`;
}
console.log(showUser(user));
console.log(showUser({ name: 'Matti' }));
