import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="display-5">Octofit Tracker</h1>
        <p className="text-muted">
          API base: {codespaceName ? `https://${codespaceName}-8000.app.github.dev` : 'http://localhost:8000'}
        </p>
        <p className="small text-warning">
          Set <strong>VITE_CODESPACE_NAME</strong> in <strong>.env.local</strong> when using a GitHub Codespace.
        </p>
      </header>

      <nav className="nav nav-pills mb-4 gap-2">
        <NavLink className="nav-link" to="/">Users</NavLink>
        <NavLink className="nav-link" to="/activities">Activities</NavLink>
        <NavLink className="nav-link" to="/teams">Teams</NavLink>
        <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
