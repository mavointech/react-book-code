import { useState } from 'react';

// Inline styles are JavaScript OBJECTS, with camelCase property names.
const boxStyle = {
  padding: 16, // numbers become pixels
  borderRadius: 12,
  backgroundColor: '#e3f2fd', // background-color -> backgroundColor
  border: '2px solid #1976d2',
};

export default function InlineStyles() {
  const [active, setActive] = useState(false);

  return (
    <div style={boxStyle}>
      <p
        style={{
          margin: 0,
          fontWeight: 'bold',
          color: active ? 'green' : 'crimson',
        }}
      >
        Status: {active ? 'Active' : 'Inactive'}
      </p>
      <button
        onClick={() => setActive(!active)}
        style={{ marginTop: 8, background: active ? 'green' : 'crimson' }}
      >
        Toggle
      </button>
    </div>
  );
}
