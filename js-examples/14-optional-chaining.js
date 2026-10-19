const user = { name: 'Aino', address: { city: 'Helsinki' } };
const guest = { name: 'Guest' };

// Without ?. this line would crash for a guest
// console.log(guest.address.city);  // TypeError!

console.log(user.address?.city);   // 'Helsinki'
console.log(guest.address?.city);  // undefined, no crash

// ?? gives a fallback ONLY for null or undefined
console.log(guest.address?.city ?? 'No city');
console.log(0 ?? 10);   // 0 (zero is a real value)
console.log(0 || 10);   // 10 (|| treats 0 as "empty": watch out!)
console.log('' ?? 'x'); // '' (empty string is kept)

// Works with methods and arrays too
console.log(guest.getCity?.());
console.log(guest.orders?.[0]);
