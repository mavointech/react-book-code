import { useMemo, useState } from 'react';
import useFetch from './useFetch.js';
import UserCard from './UserCard.jsx';
import UserTable from './UserTable.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  const { data, loading, error } = useFetch(API_URL);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('cards');
  const [sortKey, setSortKey] = useState('name');

  const users = useMemo(() => {
    const list = (data ?? []).filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase()),
    );
    return [...list].sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [data, query, sortKey]);

  if (loading) return <p className="app">Loading users...</p>;
  if (error) return <p className="app error">Error: {error}</p>;

  return (
    <div className="app">
      <h1>Users</h1>

      <div className="toolbar">
        <input
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setView('cards')}>Cards</button>
        <button onClick={() => setView('table')}>Table</button>
      </div>

      {view === 'cards' ? (
        <div className="grid">
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      ) : (
        <UserTable users={users} sortKey={sortKey} onSort={setSortKey} />
      )}

      {users.length === 0 && <p>No users match "{query}".</p>}
    </div>
  );
}
