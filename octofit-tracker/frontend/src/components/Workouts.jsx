import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../lib/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const apiUrl = import.meta.env.VITE_CODESPACE_NAME
          ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts`
          : 'http://localhost:8000/api/workouts';

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch workouts');
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        setWorkouts(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch workouts');
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout) => (
          <li key={workout._id ?? workout.id ?? workout.name} className="list-group-item">
            <strong>{workout.name ?? 'Workout'}</strong>
            {workout.notes ? <div>{workout.notes}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
