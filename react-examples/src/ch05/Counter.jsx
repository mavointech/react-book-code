import { useState } from 'react';

export default function Counter() {
  // useState(0) gives back a pair: [current value, function to change it]
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <div className="row">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}
