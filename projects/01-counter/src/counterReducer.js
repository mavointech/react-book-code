export const initialState = { count: 0, history: [] };

export function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.amount,
        history: [...state.history, state.count],
      };
    case 'decrement':
      return {
        count: state.count - action.amount,
        history: [...state.history, state.count],
      };
    case 'undo': {
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      return { count: previous, history: state.history.slice(0, -1) };
    }
    case 'reset':
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
