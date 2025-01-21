import { Users, Activity, Database } from 'lucide-react';
import { ChainStats } from '@/types/chain';
import { formatAmount } from '@/lib/utils';

interface ParachainStatsProps {
  stats: ChainStats;
}

const ParachainStats = ({ stats }: ParachainStatsProps) => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
      {stats.tvl && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Database className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-gray-900">{formatAmount(stats.tvl)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">TVL</p>
        </div>
      )}
      {stats.dailyActiveUsers && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Users className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-gray-900">
              {stats.dailyActiveUsers.toLocaleString()}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Daily Users</p>
        </div>
      )}
      {stats.totalTransactions && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Activity className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-gray-900">
              {stats.totalTransactions.toLocaleString()}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Transactions</p>
        </div>
      )}
    </div>
  );
};

export default ParachainStats;