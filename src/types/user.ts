export interface ContributorProfile {
  address: string;
  username: string;
  bio?: string;
  avatar?: string;
  stats: {
    tasksCompleted: number;
    totalEarned: {
      amount: number;
      token: string;
    }[];
    reputation: number;
    level: number;
    xp: number;
  };
  badges: Badge[];
  activeChains: string[];
  skills: string[];
  githubUsername?: string;
  matrixUsername?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}