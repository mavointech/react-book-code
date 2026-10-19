import { useMemo, useState } from 'react';
import useFetch from './useFetch.js';
import UserTable from './UserTable.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function UsersExplorer() {
  const { data, loading, error } = useFetch(API_URL);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('cards');
  const [sortKey, setSortKey] = useState('name');

  // Filter + sort are DERIVED from the data, so we calculate them,
  // and useMemo remembers the result until its inputs change.
  const users = useMemo(() => {
    const list = (data ?? []).filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase()),
    );
    return [...list].sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }, [data, query, sortKey]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div>
      <div className="row" style={{ marginBottom: 12 }}>
        <input
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setView('cards')}>Cards</button>
        <button onClick={() => setView('table')}>Table</button>
        <span className="muted">{users.length} users</span>
      </div>

      {view === 'cards' ? (
        <div className="grid">
          {users.map((u) => (
            <article key={u.id} className="card">
              <h3>{u.name}</h3>
              <p>{u.email}</p>
            </article>
          ))}
        </div>
      ) : (
        <UserTable users={users} sortKey={sortKey} onSort={setSortKey} />
      )}

      {users.length === 0 && <p>No users match "{query}".</p>}
    </div>
  );
}
