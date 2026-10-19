import { useState } from 'react';

export default function StaleState() {
  const [count, setCount] = useState(0);

  // WRONG: all three lines read the SAME old value of count,
  // so the result is +1, not +3.
  function addThreeWrong() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  // RIGHT: pass a function. React gives it the latest value each time.
  function addThreeRight() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <div className="card">
      <h2>Count: {count}</h2>
      <div className="row">
        <button onClick={addThreeWrong}>Add 3 (wrong)</button>
        <button onClick={addThreeRight}>Add 3 (right)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
