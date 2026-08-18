import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      { name: 'Ada Stone', email: 'ada.stone@example.com', fitnessLevel: 'advanced' },
      { name: 'Leo Grant', email: 'leo.grant@example.com', fitnessLevel: 'intermediate' },
      { name: 'Maya Chen', email: 'maya.chen@example.com', fitnessLevel: 'beginner' },
      { name: 'Noah Patel', email: 'noah.patel@example.com', fitnessLevel: 'advanced' }
    ]);

    const teamOne = await Team.create({
      name: 'Trail Blazers',
      members: [users[0]._id, users[1]._id, users[2]._id],
      focus: 'endurance'
    });

    const teamTwo = await Team.create({
      name: 'Grid Warriors',
      members: [users[1]._id, users[3]._id],
      focus: 'strength'
    });

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'run',
        duration: 42,
        calories: 480,
        date: new Date('2026-08-18T06:30:00Z')
      },
      {
        userId: users[1]._id,
        type: 'strength',
        duration: 35,
        calories: 260,
        date: new Date('2026-08-17T18:00:00Z')
      },
      {
        userId: users[2]._id,
        type: 'cycle',
        duration: 50,
        calories: 420,
        date: new Date('2026-08-15T07:15:00Z')
      },
      {
        userId: users[3]._id,
        type: 'yoga',
        duration: 28,
        calories: 180,
        date: new Date('2026-08-16T08:00:00Z')
      }
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id, name: 'Ada Stone', points: 1250, streak: 8 },
      { userId: users[1]._id, name: 'Leo Grant', points: 1100, streak: 6 },
      { userId: users[2]._id, name: 'Maya Chen', points: 980, streak: 4 },
      { userId: users[3]._id, name: 'Noah Patel', points: 1185, streak: 7 }
    ]);

    await Workout.insertMany([
      { title: 'Cardio Blast', difficulty: 'moderate', duration: 30, focus: 'endurance' },
      { title: 'Core Stability', difficulty: 'beginner', duration: 20, focus: 'balance' },
      { title: 'Power Lift', difficulty: 'advanced', duration: 45, focus: 'strength' },
      { title: 'Recovery Flow', difficulty: 'beginner', duration: 25, focus: 'mobility' }
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    console.log('Created users:', users.length);
    console.log('Created teams:', [teamOne.name, teamTwo.name].length);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
