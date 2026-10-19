import { counterReducer, initialState } from './counterReducer.js';

describe('counterReducer', () => {
  it('increments and remembers history', () => {
    const next = counterReducer(initialState, { type: 'increment', amount: 2 });
    expect(next.count).toBe(2);
    expect(next.history).toEqual([0]);
  });

  it('undoes the last change', () => {
    let state = counterReducer(initialState, { type: 'increment', amount: 5 });
    state = counterReducer(state, { type: 'undo' });
    expect(state.count).toBe(0);
  });

  it('ignores undo when there is no history', () => {
    expect(counterReducer(initialState, { type: 'undo' })).toBe(initialState);
  });

  it('throws on unknown actions', () => {
    expect(() => counterReducer(initialState, { type: 'nope' })).toThrow();
  });
});
