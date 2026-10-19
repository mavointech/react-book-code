import { useReducer } from 'react';
import { counterReducer, initialState } from './counterReducer.js';

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="app">
      <h2>Counter with undo</h2>
      <p className="count">{state.count}</p>
      <div className="row">
        <button onClick={() => dispatch({ type: 'decrement', amount: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: 'undo' })}>Undo</button>
        <button onClick={() => dispatch({ type: 'increment', amount: 1 })}>
          +
        </button>
      </div>
    </div>
  );
}
