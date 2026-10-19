// A pretend "server": returns a promise that finishes after a delay.
// (We use this so the example works without internet.)
function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) reject(new Error('Product not found'));
      else resolve({ id, name: `Product ${id}` });
    }, 100);
  });
}

// 1. With .then() and .catch()
getProduct(1)
  .then((product) => console.log('then:', product.name))
  .catch((error) => console.log('error:', error.message));

// 2. With async / await (easier to read)
async function main() {
  console.log('A: before waiting');
  const product = await getProduct(2);   // pauses HERE, not the whole page
  console.log('A: got', product.name);

  // Run several requests at the same time
  const [p3, p4] = await Promise.all([getProduct(3), getProduct(4)]);
  console.log('A: got', p3.name, 'and', p4.name);

  // Handle problems with try / catch
  try {
    await getProduct(0);
  } catch (error) {
    console.log('A: caught ->', error.message);
  } finally {
    console.log('A: done');
  }
}

main();
console.log('B: this runs first, while we wait');
