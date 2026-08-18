import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../lib/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/teams`);
        if (!response.ok) {
          throw new Error('Failed to fetch teams');
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        setTeams(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch teams');
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team._id ?? team.id ?? team.name} className="list-group-item">
            <strong>{team.name ?? 'Team'}</strong>
            {team.members ? <div>{team.members.length} members</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
