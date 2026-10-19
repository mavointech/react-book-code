const cart = ['mouse', 'keyboard'];

cart.push('monitor');          // add to the end
console.log(cart);
console.log(cart.length);
console.log(cart[0]);          // counting starts at 0
console.log(cart[cart.length - 1]); // the last item

cart.pop();                    // remove the last item
console.log(cart);
console.log(cart.indexOf('keyboard'));
console.log(cart.includes('mouse'));
console.log(cart.slice(0, 1)); // a copy of part of the array
console.log(cart.join(' + '));
