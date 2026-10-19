import formatPrice, { addVat, VAT_RATE } from './math.js';

console.log(formatPrice(addVat(100)));
console.log(`VAT rate: ${VAT_RATE * 100}%`);
