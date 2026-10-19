const price = 1234.5;
const date = new Date('2026-10-18T10:30:00Z');

const euro = (locale) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' });

console.log(price.toFixed(2));
console.log(euro('fi-FI').format(price).replace(/\s/g, ' '));
console.log(euro('en-GB').format(price));
console.log(date.toISOString());

const options = { timeZone: 'UTC', dateStyle: 'long' };
console.log(date.toLocaleDateString('fi-FI', { timeZone: 'UTC' }));
console.log(date.toLocaleDateString('en-GB', options));
