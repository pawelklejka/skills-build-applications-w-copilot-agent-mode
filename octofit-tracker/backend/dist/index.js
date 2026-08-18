import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import './config/database.js';
import { getApiBaseUrl } from './config/api.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';
dotenv.config();
const app = express();
const port = Number(process.env.PORT || 8000);
app.use(cors());
app.use(express.json());
function handleError(res, message, statusCode = 500) {
    return res.status(statusCode).json({ message });
}
app.get('/api', (_req, res) => {
    res.json({
        service: 'Octofit Tracker API',
        version: '1.0.0',
        baseUrl: getApiBaseUrl(),
        routes: ['/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts']
    });
});
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', baseUrl: getApiBaseUrl() });
});
app.get('/api/users', async (_req, res) => {
    try {
        const users = await User.find({}).lean();
        res.json(users);
    }
    catch (error) {
        handleError(res, error instanceof Error ? error.message : 'Failed to fetch users');
    }
});
app.get('/api/teams', async (_req, res) => {
    try {
        const teams = await Team.find({}).populate('members').lean();
        res.json(teams);
    }
    catch (error) {
        handleError(res, error instanceof Error ? error.message : 'Failed to fetch teams');
    }
});
app.get('/api/activities', async (_req, res) => {
    try {
        const activities = await Activity.find({}).populate('userId').lean();
        res.json(activities);
    }
    catch (error) {
        handleError(res, error instanceof Error ? error.message : 'Failed to fetch activities');
    }
});
app.get('/api/leaderboard', async (_req, res) => {
    try {
        const leaderboard = await LeaderboardEntry.find({}).sort({ points: -1 }).lean();
        res.json(leaderboard);
    }
    catch (error) {
        handleError(res, error instanceof Error ? error.message : 'Failed to fetch leaderboard');
    }
});
app.get('/api/workouts', async (_req, res) => {
    try {
        const workouts = await Workout.find({}).lean();
        res.json(workouts);
    }
    catch (error) {
        handleError(res, error instanceof Error ? error.message : 'Failed to fetch workouts');
    }
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Octofit Tracker API listening on ${getApiBaseUrl()}`);
});
//# sourceMappingURL=index.js.map