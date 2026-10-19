import { useState } from 'react';

// A CONTROLLED input: React state is the single source of truth.
// The input always shows `text`, and typing updates `text`.
export default function LivePreview() {
  const [text, setText] = useState('');
  const [agree, setAgree] = useState(false);
  const [colour, setColour] = useState('blue');

  return (
    <div className="card">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a message"
      />
      <p>
        Preview: <strong style={{ color: colour }}>{text || '...'}</strong>
      </p>
      <p className="muted">{text.length} characters</p>

      <select value={colour} onChange={(e) => setColour(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="crimson">Red</option>
        <option value="seagreen">Green</option>
      </select>

      <label style={{ display: 'block', marginTop: 8 }}>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />{' '}
        I agree
      </label>
      <button disabled={!agree || text === ''} style={{ marginTop: 8 }}>
        Post
      </button>
    </div>
  );
}
