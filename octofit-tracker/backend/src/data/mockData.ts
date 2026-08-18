export type ResourceItem = {
  id: number;
  [key: string]: unknown;
};

export const users: ResourceItem[] = [
  { id: 1, name: 'Ada Stone', email: 'ada@example.com', fitnessLevel: 'advanced' },
  { id: 2, name: 'Leo Grant', email: 'leo@example.com', fitnessLevel: 'intermediate' },
  { id: 3, name: 'Maya Chen', email: 'maya@example.com', fitnessLevel: 'beginner' }
];

export const teams: ResourceItem[] = [
  { id: 1, name: 'Trail Blazers', members: 12, focus: 'endurance' },
  { id: 2, name: 'Grid Warriors', members: 9, focus: 'strength' },
  { id: 3, name: 'Sunrise Runners', members: 14, focus: 'recovery' }
];

export const activities: ResourceItem[] = [
  { id: 1, userId: 1, type: 'run', duration: 42, calories: 480 },
  { id: 2, userId: 2, type: 'strength', duration: 35, calories: 260 },
  { id: 3, userId: 3, type: 'cycle', duration: 50, calories: 420 }
];

export const leaderboard: ResourceItem[] = [
  { id: 1, name: 'Ada Stone', points: 1250, streak: 8 },
  { id: 2, name: 'Leo Grant', points: 1100, streak: 6 },
  { id: 3, name: 'Maya Chen', points: 980, streak: 4 }
];

export const workouts: ResourceItem[] = [
  { id: 1, title: 'Cardio Blast', difficulty: 'moderate', duration: 30 },
  { id: 2, title: 'Core Stability', difficulty: 'beginner', duration: 20 },
  { id: 3, title: 'Power Lift', difficulty: 'advanced', duration: 45 }
];
