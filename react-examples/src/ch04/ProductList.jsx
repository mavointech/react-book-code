const products = [
  { id: 1, name: 'Mouse', price: 29 },
  { id: 2, name: 'Keyboard', price: 89 },
  { id: 3, name: 'Monitor', price: 379 },
];

export default function ProductList() {
  return (
    <ul>
      {/* map turns data into elements. Every item needs a unique key. */}
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price} EUR
        </li>
      ))}
    </ul>
  );
}
