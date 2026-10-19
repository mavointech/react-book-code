// const: the value can never be reassigned
const shopName = 'NordTech';

// let: the value can change later
let visitors = 0;
visitors = visitors + 1;
visitors += 1; // short way to write the line above

console.log(shopName, 'has had', visitors, 'visitors');

// Trying to change a const gives an error
try {
  shopName = 'Other';
} catch (error) {
  console.log('Error:', error.message);
}
