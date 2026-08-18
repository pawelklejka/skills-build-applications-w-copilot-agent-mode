import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../lib/api';

export default function Leaderboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/leaderboard`);
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard');
        }

        const payload = await response.json();
        const results = Array.isArray(payload) ? payload : payload.results ?? [];
        setItems(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch leaderboard');
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol className="list-group list-group-numbered">
        {items.map((entry) => (
          <li key={entry._id ?? entry.id ?? `${entry.userId}-${entry.points}`} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{entry.userId ?? 'User'}</span>
            <span className="badge bg-primary rounded-pill">{entry.points ?? 0}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
