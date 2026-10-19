import { useState } from 'react';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk', bought: false },
    { id: 2, text: 'Bread', bought: true },
  ]);
  const [text, setText] = useState('');

  function addItem(e) {
    e.preventDefault();
    if (!text.trim()) return;
    // ADD: a new array made with spread
    setItems([...items, { id: Date.now(), text: text.trim(), bought: false }]);
    setText('');
  }

  // CHANGE: map returns a new array; only the matching item is a new object
  const toggle = (id) =>
    setItems(items.map((i) => (i.id === id ? { ...i, bought: !i.bought } : i)));

  // REMOVE: filter returns a new array without that item
  const remove = (id) => setItems(items.filter((i) => i.id !== id));

  const left = items.filter((i) => !i.bought).length; // derived, not stored

  return (
    <div className="card">
      <form onSubmit={addItem} className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add an item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label
              style={{ textDecoration: item.bought ? 'line-through' : 'none' }}
            >
              <input
                type="checkbox"
                checked={item.bought}
                onChange={() => toggle(item.id)}
              />{' '}
              {item.text}
            </label>{' '}
            <button
              onClick={() => remove(item.id)}
              aria-label={`Remove ${item.text}`}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <p className="muted">{left} left to buy</p>
    </div>
  );
}
