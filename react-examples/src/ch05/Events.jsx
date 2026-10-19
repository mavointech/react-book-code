import { useState } from 'react';

export default function Events() {
  const [log, setLog] = useState([]);
  const [name, setName] = useState('');

  // each log line gets its own unique id, to use as a key
  const add = (message) =>
    setLog((old) => [{ id: Math.random(), message }, ...old].slice(0, 5));

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading
    add(`Submitted: ${name || '(empty)'}`);
    setName('');
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="row">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
        />
        <button type="submit">Send</button>
      </form>

      <div
        className="row"
        style={{ marginTop: 12 }}
        onMouseEnter={() => add('Mouse entered the box')}
        onMouseLeave={() => add('Mouse left the box')}
      >
        <button onClick={(event) => add(`Clicked a <${event.target.tagName}>`)}>
          Click me
        </button>
        <span className="muted">Move the mouse over this row</span>
      </div>

      <ul>
        {log.map((entry) => (
          <li key={entry.id}>{entry.message}</li>
        ))}
      </ul>
    </div>
  );
}
