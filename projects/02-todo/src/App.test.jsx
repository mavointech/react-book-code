import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

beforeEach(() => localStorage.clear());

describe('Todo App', () => {
  it('adds, completes and filters todos', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText(/needs doing/i), 'Learn React');
    await user.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('1 item(s) left')).toBeInTheDocument();

    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByText('0 item(s) left')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'active' }));
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
