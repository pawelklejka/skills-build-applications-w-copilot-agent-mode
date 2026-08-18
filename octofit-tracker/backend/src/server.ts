import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import './config/database.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

function handleError(res: Response, message: string, statusCode = 500) {
  return res.status(statusCode).json({ message });
}

app.get('/api', (_req: Request, res: Response<Record<string, unknown>>) => {
  res.json({
    service: 'Octofit Tracker API',
    version: '1.0.0',
    baseUrl,
    routes: ['/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts']
  });
});

app.get('/api/health', (_req: Request, res: Response<{ status: string; baseUrl: string }>) => {
  res.json({ status: 'ok', baseUrl });
});

app.get('/api/users', async (_req: Request, res: Response) => {
  try {
    const users = await User.find({}).lean();
    res.json(users);
  } catch (error) {
    handleError(res, error instanceof Error ? error.message : 'Failed to fetch users');
  }
});

app.get('/api/teams', async (_req: Request, res: Response) => {
  try {
    const teams = await Team.find({}).populate('members').lean();
    res.json(teams);
  } catch (error) {
    handleError(res, error instanceof Error ? error.message : 'Failed to fetch teams');
  }
});

app.get('/api/activities', async (_req: Request, res: Response) => {
  try {
    const activities = await Activity.find({}).populate('userId').lean();
    res.json(activities);
  } catch (error) {
    handleError(res, error instanceof Error ? error.message : 'Failed to fetch activities');
  }
});

app.get('/api/leaderboard', async (_req: Request, res: Response) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}).sort({ points: -1 }).lean();
    res.json(leaderboard);
  } catch (error) {
    handleError(res, error instanceof Error ? error.message : 'Failed to fetch leaderboard');
  }
});

app.get('/api/workouts', async (_req: Request, res: Response) => {
  try {
    const workouts = await Workout.find({}).lean();
    res.json(workouts);
  } catch (error) {
    handleError(res, error instanceof Error ? error.message : 'Failed to fetch workouts');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Octofit Tracker API listening on ${baseUrl}`);
});
