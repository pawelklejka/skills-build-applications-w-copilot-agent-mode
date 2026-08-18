import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../lib/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const apiUrl = import.meta.env.VITE_CODESPACE_NAME
          ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`
          : 'http://localhost:8000/api/activities';

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        setActivities(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch activities');
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity) => (
          <li key={activity._id ?? activity.id ?? `${activity.type}-${activity.date}`} className="list-group-item">
            <strong>{activity.type ?? 'Activity'}</strong>
            {activity.description ? <div>{activity.description}</div> : null}
            {activity.duration ? <div>Duration: {activity.duration}</div> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
