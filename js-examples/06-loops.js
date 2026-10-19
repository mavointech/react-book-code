// for: when you know how many times
for (let i = 1; i <= 3; i++) {
  console.log('Round', i);
}

// for...of: go through every item of an array
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}

// while: repeat as long as a condition is true
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log('Liftoff!');
