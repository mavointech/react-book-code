import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import FocusInput from './FocusInput.jsx';
import ThemeDemo from './ThemeDemo.jsx';
import { useTheme } from './ThemeContext.jsx';
import CartReducerDemo from './CartReducerDemo.jsx';
import { cartReducer, initialCart } from './cartReducer.js';
import NotesDemo from './NotesDemo.jsx';
import MemoDemo from './MemoDemo.jsx';

beforeEach(() => localStorage.clear());

describe('Chapter 7 examples', () => {
  it('FocusInput focuses on mount', () => {
    render(<FocusInput />);
    expect(screen.getByPlaceholderText(/focused automatically/)).toHaveFocus();
  });

  it('ThemeDemo shares the theme with a deep child', async () => {
    render(<ThemeDemo />);
    expect(screen.getByText('light')).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole('button', { name: /switch to dark/i }),
    );
    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  it('useTheme throws outside a provider', () => {
    function Bad() {
      useTheme();
      return null;
    }
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Bad />)).toThrow(/ThemeProvider/);
    spy.mockRestore();
  });

  it('cartReducer is pure and handles actions', () => {
    const mouse = { id: 1, name: 'Mouse', price: 29 };
    let s = cartReducer(initialCart, { type: 'add', item: mouse });
    s = cartReducer(s, { type: 'add', item: mouse });
    expect(s.items).toEqual([{ ...mouse, quantity: 2 }]);
    expect(initialCart.items).toEqual([]); // not mutated
    expect(cartReducer(s, { type: 'remove', id: 1 }).items).toEqual([]);
    expect(() => cartReducer(s, { type: 'nope' })).toThrow();
  });

  it('CartReducerDemo shows the total', async () => {
    const user = userEvent.setup();
    render(<CartReducerDemo />);
    await user.click(screen.getByRole('button', { name: 'Add Mouse' }));
    await user.click(screen.getByRole('button', { name: 'Add Mouse' }));
    await user.click(screen.getByRole('button', { name: 'Add Keyboard' }));
    expect(screen.getByText('Total: 147 EUR')).toBeInTheDocument();
  });

  it('NotesDemo remembers the note and debounces the search', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { unmount } = render(<NotesDemo />);
    await user.type(screen.getByPlaceholderText(/Write here/), 'hello');
    expect(JSON.parse(localStorage.getItem('book-note'))).toBe('hello');
    unmount();
    render(<NotesDemo />);
    expect(screen.getByPlaceholderText(/Write here/)).toHaveValue('hello');

    await user.type(screen.getByPlaceholderText('Search fruit'), 'ban');
    expect(screen.getByText('Searching for: ""')).toBeInTheDocument(); // not yet
    act(() => vi.advanceTimersByTime(500));
    expect(screen.getByText('Searching for: "ban"')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('MemoDemo: the child does not re-render when only the parent changes', async () => {
    const user = userEvent.setup();
    render(<MemoDemo />);
    expect(screen.getByText('Child rendered 1 time(s)')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Parent clicks/ }));
    await user.click(screen.getByRole('button', { name: /Parent clicks/ }));
    expect(screen.getByText('Child rendered 1 time(s)')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'green' }));
    expect(
      screen.getByText('green', { selector: 'strong' }),
    ).toBeInTheDocument();
  });
});
