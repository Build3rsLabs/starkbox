import { useState, useEffect } from 'react';
import { Task } from '@/types';

interface EarningHistory {
  id: string;
  taskTitle: string;
  amount: number;
  token: string;
  date: string;
}

interface Profile {
  username: string;
  totalEarned: {
    amount: number;
    token: string;
  }[];
  tasksCompleted: number;
  rank: number;
  activeTasks: Task[];
  earningsHistory: EarningHistory[];
  reputation: number;
  level: number;
  xp: number;
}

export function useProfile(address: string | null) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!address) {
        setLoading(false);
        return;
      }

      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setProfile({
          username: 'StarkBuilder',
          totalEarned: [
            { amount: 1500, token: 'STRK' }
          ],
          tasksCompleted: 24,
          rank: 1,
          reputation: 98,
          level: 15,
          xp: 7500,
          activeTasks: [
            {
              id: '1',
              title: 'Implement Yield Optimization',
              projectName: 'StarkVault',
              reward: {
                amount: 250,
                token: 'STRK'
              },
              deadline: '2024-04-15',
              status: 'in_progress',
              tags: ['DeFi', 'Smart Contracts'],
              chain: 'StarkNet',
              difficulty: 'intermediate',
              estimatedTime: '2 weeks'
            },
            {
              id: '2',
              title: 'Build Analytics Dashboard',
              projectName: 'StarkSwap',
              reward: {
                amount: 200,
                token: 'STRK'
              },
              deadline: '2024-04-20',
              status: 'in_progress',
              tags: ['Frontend', 'DeFi'],
              chain: 'StarkNet',
              difficulty: 'intermediate',
              estimatedTime: '1 week'
            }
          ],
          earningsHistory: [
            {
              id: '1',
              taskTitle: 'DEX Integration',
              amount: 350,
              token: 'STRK',
              date: '2024-03-15'
            },
            {
              id: '2',
              taskTitle: 'Smart Contract Development',
              amount: 300,
              token: 'STRK',
              date: '2024-03-01'
            },
            {
              id: '3',
              taskTitle: 'Frontend Implementation',
              amount: 250,
              token: 'STRK',
              date: '2024-02-15'
            }
          ]
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch profile'));
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [address]);

  return { profile, loading, error };
}