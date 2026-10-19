import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem.jsx';

describe('TodoItem', () => {
  const todo = { id: 7, title: 'Buy milk', done: false };

  it('shows the title and calls onToggle with the id', async () => {
    const onToggle = vi.fn();
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={() => {}} />);

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith(7);
  });

  it('calls onDelete when Delete is clicked', async () => {
    const onDelete = vi.fn();
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={onDelete} />);
    await userEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(onDelete).toHaveBeenCalledWith(7);
  });
});
