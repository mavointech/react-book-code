import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter.jsx';
import StaleState from './StaleState.jsx';
import Events from './Events.jsx';
import LivePreview from './LivePreview.jsx';
import Temperature from './Temperature.jsx';
import ShoppingList from './ShoppingList.jsx';

describe('Chapter 5 examples', () => {
  it('Counter counts', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole('button', { name: '+1' }));
    await user.click(screen.getByRole('button', { name: '+1' }));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('StaleState: wrong adds 1, right adds 3', async () => {
    const user = userEvent.setup();
    render(<StaleState />);
    await user.click(screen.getByRole('button', { name: 'Add 3 (wrong)' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    await user.click(screen.getByRole('button', { name: 'Add 3 (right)' }));
    expect(screen.getByText('Count: 3')).toBeInTheDocument();
  });

  it('Events handles submit without reloading', async () => {
    const user = userEvent.setup();
    render(<Events />);
    await user.type(screen.getByPlaceholderText('Type your name'), 'Aino');
    await user.click(screen.getByRole('button', { name: 'Send' }));
    expect(screen.getByText('Submitted: Aino')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your name')).toHaveValue('');
  });

  it('LivePreview is controlled', async () => {
    const user = userEvent.setup();
    render(<LivePreview />);
    const post = screen.getByRole('button', { name: 'Post' });
    expect(post).toBeDisabled();
    await user.type(screen.getByPlaceholderText('Write a message'), 'Hi');
    expect(screen.getByText('2 characters')).toBeInTheDocument();
    await user.click(screen.getByRole('checkbox'));
    expect(post).toBeEnabled();
  });

  it('Temperature keeps both inputs in sync', async () => {
    const user = userEvent.setup();
    render(<Temperature />);
    const [celsius, fahrenheit] = screen.getAllByRole('spinbutton');
    expect(fahrenheit).toHaveValue(68);
    await user.clear(celsius);
    await user.type(celsius, '100');
    expect(fahrenheit).toHaveValue(212);
    await user.clear(fahrenheit);
    await user.type(fahrenheit, '32');
    expect(celsius).toHaveValue(0);
  });

  it('ShoppingList adds, toggles and removes', async () => {
    const user = userEvent.setup();
    render(<ShoppingList />);
    expect(screen.getByText('1 left to buy')).toBeInTheDocument();
    await user.type(screen.getByPlaceholderText('Add an item'), 'Eggs');
    await user.click(screen.getByRole('button', { name: 'Add' }));
    expect(screen.getByText('2 left to buy')).toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: /Milk/ }));
    expect(screen.getByText('1 left to buy')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Remove Eggs' }));
    expect(screen.queryByText('Eggs')).not.toBeInTheDocument();
  });
});
