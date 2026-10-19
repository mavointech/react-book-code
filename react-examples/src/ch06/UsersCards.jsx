import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function UsersCards() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        setUsers(await response.json());
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadUsers();

    return () => controller.abort(); // cancel the request if we leave early
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="error">Something went wrong: {error}</p>;

  return (
    <div className="grid">
      {users.map((user) => (
        <article key={user.id} className="card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="muted">
            {user.company.name} - {user.address.city}
          </p>
        </article>
      ))}
    </div>
  );
}
