import { useState } from 'react';
import useFetch from './useFetch.js';

export default function Posts() {
  const [userId, setUserId] = useState(1);
  // When userId changes, the url changes, and useFetch loads again.
  const {
    data: posts,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  return (
    <div className="card">
      <label>
        Author{' '}
        <select
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Loading posts...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
