import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="app">
      <h1>Counter</h1>
      <p className="count">{count}</p>

      <div className="row">
        <button onClick={() => setCount((c) => c - step)}>- {step}</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((c) => c + step)}>+ {step}</button>
      </div>

      <div className="step">
        <label>
          Step:{' '}
          <input
            type="number"
            min="1"
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
          />
        </label>
      </div>
    </div>
  );
}
