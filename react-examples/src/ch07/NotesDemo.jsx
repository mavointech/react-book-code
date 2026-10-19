import useLocalStorage from './useLocalStorage.js';
import useDebounce from './useDebounce.js';
import { useState } from 'react';

const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blueberry',
  'Cherry',
  'Grape',
  'Lemon',
  'Mango',
];

export default function NotesDemo() {
  // The note is remembered even after you refresh the page
  const [note, setNote] = useLocalStorage('book-note', '');

  // Search that waits until you stop typing
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);
  const results = fruits.filter((f) =>
    f.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  return (
    <div className="grid">
      <div className="card">
        <h3>A note that remembers</h3>
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write here and refresh the page"
        />
      </div>
      <div className="card">
        <h3>Debounced search</h3>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fruit"
        />
        <p className="muted">Searching for: "{debouncedQuery}"</p>
        <ul>
          {results.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
