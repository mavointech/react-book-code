import { memo, useCallback, useMemo, useRef, useState } from 'react';

// memo() makes React skip re-drawing this component
// when its props did not change
const Expensive = memo(function Expensive({ onPick, items }) {
  const renders = useRef(0);
  renders.current += 1;
  return (
    <div className="card">
      <p>Child rendered {renders.current} time(s)</p>
      {items.map((item) => (
        <button key={item} onClick={() => onPick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
});

export default function MemoDemo() {
  const [count, setCount] = useState(0);
  const [picked, setPicked] = useState('nothing');

  // Without useCallback / useMemo these would be NEW every render,
  // and memo() could never skip the child.
  const handlePick = useCallback((item) => setPicked(item), []);
  const items = useMemo(() => ['red', 'green', 'blue'], []);

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div className="card row">
        <button onClick={() => setCount(count + 1)}>
          Parent clicks: {count}
        </button>
        <span>
          You picked: <strong>{picked}</strong>
        </span>
      </div>
      <Expensive onPick={handlePick} items={items} />
    </div>
  );
}
