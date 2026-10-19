import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Clock from './Clock.jsx';
import TitleEffect from './TitleEffect.jsx';
import UsersCards from './UsersCards.jsx';
import UsersExplorer from './UsersExplorer.jsx';
import Posts from './Posts.jsx';

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'l@x.org',
    company: { name: 'Romaguera' },
    address: { city: 'Gwenborough' },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'e@x.org',
    company: { name: 'Deckow' },
    address: { city: 'Wisokyburgh' },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'c@x.org',
    company: { name: 'Hoeger' },
    address: { city: 'McKenziehaven' },
  },
];

function mockFetch(handler) {
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url) => handler(String(url))),
  );
}
const ok = (data) => ({ ok: true, status: 200, json: async () => data });

afterEach(() => vi.unstubAllGlobals());

describe('Chapter 6 examples', () => {
  it('Clock ticks and cleans up its timer', () => {
    vi.useFakeTimers();
    const { unmount } = render(<Clock />);
    const before = screen.getByText(/The time is/).textContent;
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByText(/The time is/).textContent).not.toBe(before);
    unmount();
    expect(vi.getTimerCount()).toBe(0); // cleanup removed the interval
    vi.useRealTimers();
  });

  it('TitleEffect updates the document title', async () => {
    render(<TitleEffect />);
    expect(document.title).toBe('You clicked 0 times');
    await userEvent.click(screen.getByRole('button'));
    expect(document.title).toBe('You clicked 1 times');
  });

  it('UsersCards shows loading, then the users', async () => {
    mockFetch(() => ok(users));
    render(<UsersCards />);
    expect(screen.getByText('Loading users...')).toBeInTheDocument();
    expect(await screen.findByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('UsersCards shows an error for a failed request', async () => {
    mockFetch(() => ({ ok: false, status: 500, json: async () => ({}) }));
    render(<UsersCards />);
    expect(await screen.findByText(/Request failed: 500/)).toBeInTheDocument();
  });

  it('UsersExplorer searches and switches to the table', async () => {
    const user = userEvent.setup();
    mockFetch(() => ok(users));
    render(<UsersExplorer />);
    await screen.findByText('Leanne Graham');
    await user.type(screen.getByPlaceholderText('Search by name...'), 'er');
    expect(screen.getByText('1 users')).toBeInTheDocument(); // Ervin only
    await user.clear(screen.getByPlaceholderText('Search by name...'));
    await user.type(screen.getByPlaceholderText('Search by name...'), 'zzz');
    expect(screen.getByText(/No users match "zzz"/)).toBeInTheDocument();
    await user.clear(screen.getByPlaceholderText('Search by name...'));
    await user.click(screen.getByRole('button', { name: 'Table' }));
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(4);
  });

  it('Posts loads again when the author changes', async () => {
    const user = userEvent.setup();
    const calls = [];
    mockFetch((url) => {
      calls.push(url);
      const id = new URL(url).searchParams.get('userId');
      return ok([{ id: 1, title: `Post by user ${id}` }]);
    });
    render(<Posts />);
    expect(await screen.findByText('Post by user 1')).toBeInTheDocument();
    await user.selectOptions(screen.getByRole('combobox'), '3');
    expect(await screen.findByText('Post by user 3')).toBeInTheDocument();
    expect(calls).toHaveLength(2);
  });
});
