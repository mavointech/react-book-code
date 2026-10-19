import { useState } from 'react';
import examples from './examples.js';

// A small "example browser": pick an example from the list to run it.
export default function App() {
  const [selected, setSelected] = useState(examples[0].id);
  const current = examples.find((e) => e.id === selected);
  const Example = current.component;

  return (
    <div className="shell">
      <header className="shell__bar">
        <strong>Book examples</strong>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {examples.map((e) => (
            <option key={e.id} value={e.id}>{e.title}</option>
          ))}
        </select>
      </header>
      <main className="shell__body">
        <Example />
      </main>
    </div>
  );
}
