const name = 'Aino';           // string
const age = 17;                // number
const price = 19.99;           // numbers can have decimals
const isStudent = true;        // boolean
const nothing = null;          // "I know there is no value"
let notSetYet;                 // undefined: nothing was assigned yet
const colours = ['red', 'blue']; // array (a list)
const user = { name: 'Aino', age: 17 }; // object (labelled values)

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof nothing);   // a famous JavaScript quirk
console.log(typeof notSetYet);
console.log(typeof colours);   // arrays are objects too
console.log(Array.isArray(colours));
console.log(typeof user);
console.log(typeof price);
