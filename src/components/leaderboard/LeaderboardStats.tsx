import { Code2, Award, Activity, Coins } from 'lucide-react';
import { ContributorProfile } from '@/types/user';
import { formatAmount } from '@/lib/utils';
import StatCard from './StatCard';

interface LeaderboardStatsProps {
  entries: ContributorProfile[];
}

const LeaderboardStats = ({ entries }: LeaderboardStatsProps) => {
  const totalTasks = entries.reduce((sum, entry) => sum + entry.stats.tasksCompleted, 0);
  const totalEarned = entries.reduce((sum, entry) => 
    sum + entry.stats.totalEarned.reduce((acc, curr) => {
      // Mock conversion rates to STRK
      const rates: Record<string, number> = {
        STRK: 1,
        ETH: 2000  // 1 ETH = 2000 STRK
      };
      return acc + (curr.amount * (rates[curr.token] || 0));
    }, 0), 0);
  const avgReputation = Math.round(
    entries.reduce((sum, entry) => sum + entry.stats.reputation, 0) / entries.length
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={Code2}
        label="Active Builders"
        value={entries.length.toString()}
        subtext="Building on StarkNet"
        trend="up"
        trendValue="+12.5%"
      />
      <StatCard
        icon={Activity}
        label="Tasks Completed"
        value={totalTasks.toString()}
        subtext="Total contributions"
        trend="up"
        trendValue="+15.2%"
      />
      <StatCard
        icon={Award}
        label="Success Rate"
        value={`${avgReputation}%`}
        subtext="Task completion rate"
        trend="up"
        trendValue="+8.2%"
      />
      <StatCard
        icon={Coins}
        label="Total Earned"
        value={`${formatAmount(totalEarned)} STRK`}
        subtext="In rewards"
        trend="up"
        trendValue="+12.5%"
      />
    </div>
  );
};

export default LeaderboardStats;