import { LeaderboardEntry } from '@/types';

export const LEADERBOARD_ENTRIES: LeaderboardEntry[] = [
  {
    rank: 1,
    address: '0x1234...5678',
    username: 'BeraBuilder',
    tasksCompleted: 47,
    totalEarned: {
      amount: 1500,
      denom: 'BERA'
    },
    lastActive: '2024-03-20',
    categories: ['DeFi', 'Smart Contracts', 'Infrastructure'],
    streak: 15,
    reputation: 98,
    level: 30,
    xp: 15600,
    achievements: [
      {
        id: '1',
        name: 'DeFi Pioneer',
        description: 'Completed 20 DeFi-related tasks',
        icon: '🐻',
        dateEarned: '2024-02-15'
      },
      {
        id: '2',
        name: 'Code Master',
        description: 'Maintained 95%+ task success rate',
        icon: '⭐',
        dateEarned: '2024-03-01'
      }
    ],
    chains: ['Berachain']
  },
  {
    rank: 2,
    address: '0xabcd...efgh',
    username: 'HoneyMaker',
    tasksCompleted: 42,
    totalEarned: {
      amount: 1250,
      denom: 'BERA'
    },
    lastActive: '2024-03-21',
    categories: ['DeFi', 'Frontend', 'AMM'],
    streak: 12,
    reputation: 95,
    level: 28,
    xp: 14200,
    achievements: [
      {
        id: '3',
        name: 'DeFi Architect',
        description: 'Built 5 DeFi protocols',
        icon: '🍯',
        dateEarned: '2024-02-20'
      }
    ],
    chains: ['Berachain']
  },
  {
    rank: 3,
    address: '0x7890...1234',
    username: 'BeraDev',
    tasksCompleted: 38,
    totalEarned: {
      amount: 1100,
      denom: 'BERA'
    },
    lastActive: '2024-03-21',
    categories: ['Smart Contracts', 'Security', 'NFT'],
    streak: 8,
    reputation: 96,
    level: 25,
    xp: 12800,
    achievements: [
      {
        id: '4',
        name: 'Security Sentinel',
        description: 'Found and fixed 10 critical vulnerabilities',
        icon: '🛡️',
        dateEarned: '2024-03-10'
      }
    ],
    chains: ['Berachain']
  },
  {
    rank: 4,
    address: '0xdef0...5678',
    username: 'ArtioBuilder',
    tasksCompleted: 35,
    totalEarned: {
      amount: 950,
      denom: 'BERA'
    },
    lastActive: '2024-03-20',
    categories: ['DeFi', 'Yield', 'Frontend'],
    streak: 20,
    reputation: 94,
    level: 23,
    xp: 11500,
    achievements: [
      {
        id: '5',
        name: 'Yield Pioneer',
        description: 'Built 3 yield optimization protocols',
        icon: '💰',
        dateEarned: '2024-03-15'
      }
    ],
    chains: ['Berachain']
  },
  {
    rank: 5,
    address: '0x9012...3456',
    username: 'BexBuilder',
    tasksCompleted: 32,
    totalEarned: {
      amount: 850,
      denom: 'BERA'
    },
    lastActive: '2024-03-19',
    categories: ['DEX', 'AMM', 'Frontend'],
    streak: 6,
    reputation: 92,
    level: 20,
    xp: 10200,
    achievements: [
      {
        id: '6',
        name: 'DEX Master',
        description: 'Built 3 DEX features',
        icon: '📊',
        dateEarned: '2024-03-05'
      }
    ],
    chains: ['Berachain']
  }
];