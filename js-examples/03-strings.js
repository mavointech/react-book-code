const first = 'Aino';
const last = 'Virtanen';

// Old way: join with +
console.log('Hello ' + first + ' ' + last + '!');

// Better way: a template literal (backticks) with ${ }
console.log(`Hello ${first} ${last}!`);
console.log(`2 + 3 = ${2 + 3}`);

const text = '  React is fun  ';
console.log(text.trim());
console.log(text.trim().toUpperCase());
console.log(text.trim().length);
console.log(text.includes('fun'));
console.log(text.trim().split(' '));
console.log('react'.replace('r', 'R'));
