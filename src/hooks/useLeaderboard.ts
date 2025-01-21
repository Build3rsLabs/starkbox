import { useState, useEffect } from 'react';
import { ContributorProfile } from '@/types/user';

const MOCK_ENTRIES: ContributorProfile[] = [
  {
    address: '0x1234567890abcdef1234567890abcdef12345678',
    username: 'StarkBuilder',
    avatar: 'https://avatars.githubusercontent.com/u/1',
    stats: {
      tasksCompleted: 47,
      totalEarned: [
        { amount: 1500, token: 'STRK' }
      ],
      reputation: 98,
      level: 30,
      xp: 15600
    },
    badges: [
      {
        id: '1',
        name: 'Cairo Pioneer',
        description: 'Completed 20 Cairo development tasks',
        icon: '⚡',
        earnedAt: '2024-02-15',
        rarity: 'legendary'
      },
      {
        id: '2',
        name: 'ZK Master',
        description: 'Maintained 95%+ task success rate',
        icon: '🔐',
        earnedAt: '2024-03-01',
        rarity: 'epic'
      }
    ],
    activeChains: ['StarkNet'],
    skills: ['Cairo', 'Smart Contracts', 'ZK']
  },
  {
    address: '0xabcdef1234567890abcdef1234567890abcdef12',
    username: 'StarkMage',
    avatar: 'https://avatars.githubusercontent.com/u/2',
    stats: {
      tasksCompleted: 42,
      totalEarned: [
        { amount: 1200, token: 'STRK' }
      ],
      reputation: 95,
      level: 28,
      xp: 14200
    },
    badges: [
      {
        id: '3',
        name: 'DeFi Architect',
        description: 'Built 3 DeFi protocols on StarkNet',
        icon: '🏦',
        earnedAt: '2024-02-20',
        rarity: 'epic'
      }
    ],
    activeChains: ['StarkNet'],
    skills: ['Cairo', 'AMM', 'DeFi']
  },
  {
    address: '0x7890abcdef1234567890abcdef1234567890abcd',
    username: 'CairoWizard',
    avatar: 'https://avatars.githubusercontent.com/u/3',
    stats: {
      tasksCompleted: 38,
      totalEarned: [
        { amount: 950, token: 'STRK' }
      ],
      reputation: 96,
      level: 25,
      xp: 12800
    },
    badges: [
      {
        id: '4',
        name: 'Security Sentinel',
        description: 'Found and fixed 10 critical vulnerabilities',
        icon: '🛡️',
        earnedAt: '2024-03-10',
        rarity: 'epic'
      }
    ],
    activeChains: ['StarkNet'],
    skills: ['Cairo', 'Security', 'ZK']
  },
  {
    address: '0xdef0123456789abcdef0123456789abcdef0123',
    username: 'StarkAlchemist',
    avatar: 'https://avatars.githubusercontent.com/u/4',
    stats: {
      tasksCompleted: 35,
      totalEarned: [
        { amount: 850, token: 'STRK' }
      ],
      reputation: 94,
      level: 23,
      xp: 11500
    },
    badges: [
      {
        id: '5',
        name: 'Yield Pioneer',
        description: 'Built 3 yield optimization protocols',
        icon: '💰',
        earnedAt: '2024-03-15',
        rarity: 'rare'
      }
    ],
    activeChains: ['StarkNet'],
    skills: ['Cairo', 'DeFi', 'Smart Contracts']
  },
  {
    address: '0x123456789abcdef0123456789abcdef01234567',
    username: 'ZKWarrior',
    avatar: 'https://avatars.githubusercontent.com/u/5',
    stats: {
      tasksCompleted: 32,
      totalEarned: [
        { amount: 750, token: 'STRK' }
      ],
      reputation: 92,
      level: 21,
      xp: 10500
    },
    badges: [
      {
        id: '6',
        name: 'ZK Guardian',
        description: 'Contributed to core ZK infrastructure',
        icon: '🔒',
        earnedAt: '2024-03-05',
        rarity: 'epic'
      }
    ],
    activeChains: ['StarkNet'],
    skills: ['Cairo', 'ZK', 'Infrastructure']
  }
];

export function useLeaderboard() {
  const [entries, setEntries] = useState<ContributorProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500));
        setEntries(MOCK_ENTRIES);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch leaderboard'));
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  return { entries, loading, error };
}