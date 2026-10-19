import { useEffect, useRef, useState } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null); // will point at the real <input> element
  // A value that survives renders WITHOUT causing one
  const renders = useRef(0);
  const [text, setText] = useState('');

  renders.current += 1;

  // Focus the input when the component first appears
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="card">
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="I am focused automatically"
      />
      <button
        onClick={() => {
          setText('');
          inputRef.current.focus();
        }}
      >
        Clear
      </button>
      <p className="muted">
        This component has rendered {renders.current} times
      </p>
    </div>
  );
}
