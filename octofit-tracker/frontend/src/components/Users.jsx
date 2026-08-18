import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../lib/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        setUsers(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id ?? user.id ?? `${user.name}-${user.email}`} className="list-group-item">
            <strong>{user.name ?? 'Unnamed user'}</strong>
            {user.email ? <div>{user.email}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
