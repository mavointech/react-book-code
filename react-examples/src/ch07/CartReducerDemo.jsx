import { useReducer } from 'react';
import { cartReducer, initialCart } from './cartReducer.js';

const products = [
  { id: 1, name: 'Mouse', price: 29 },
  { id: 2, name: 'Keyboard', price: 89 },
];

export default function CartReducerDemo() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="card">
      <div className="row">
        {products.map((p) => (
          <button key={p.id} onClick={() => dispatch({ type: 'add', item: p })}>
            Add {p.name}
          </button>
        ))}
        <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
      </div>
      <ul>
        {cart.items.map((i) => (
          <li key={i.id}>
            {i.name} x {i.quantity} = {i.price * i.quantity} EUR{' '}
            <button onClick={() => dispatch({ type: 'remove', id: i.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <strong>Total: {total} EUR</strong>
    </div>
  );
}
