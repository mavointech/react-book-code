const order = { id: 1004, items: [{ id: 21, qty: 2 }], paid: true };

// Object -> text (to send to a server or save in localStorage)
const text = JSON.stringify(order);
console.log(text);
console.log(typeof text);

// Text -> object
const back = JSON.parse(text);
console.log(back.items[0].qty);

// Pretty printing for humans
console.log(JSON.stringify(order, null, 2));

// Broken JSON throws, so wrap it in try/catch
try {
  JSON.parse('{ not json }');
} catch (error) {
  console.log('Could not read the data');
}
