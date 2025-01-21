import { Users, Activity, Database } from 'lucide-react';
import { formatAmount } from '@/lib/utils';

interface ProtocolStatsProps {
  tvl?: number;
  dailyActiveUsers?: number;
  totalTransactions?: number;
}

const ProtocolStats = ({ tvl, dailyActiveUsers, totalTransactions }: ProtocolStatsProps) => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gradient-to-br from-dot-darker to-dot-dark p-4">
      {tvl && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Database className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-dot-text">{formatAmount(tvl)}</p>
          </div>
          <p className="mt-1 text-sm text-dot-text-dim">TVL</p>
        </div>
      )}
      {dailyActiveUsers && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Users className="h-4 w-4 text-dot-secondary" />
            <p className="font-semibold text-dot-text">
              {dailyActiveUsers.toLocaleString()}
            </p>
          </div>
          <p className="mt-1 text-sm text-dot-text-dim">Daily Users</p>
        </div>
      )}
      {totalTransactions && (
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Activity className="h-4 w-4 text-dot-tertiary" />
            <p className="font-semibold text-dot-text">
              {totalTransactions.toLocaleString()}
            </p>
          </div>
          <p className="mt-1 text-sm text-dot-text-dim">Transactions</p>
        </div>
      )}
    </div>
  );
};

export default ProtocolStats;