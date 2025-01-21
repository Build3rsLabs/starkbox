import { Globe, Users, Activity, DollarSign } from 'lucide-react';
import { ECOSYSTEM_STATS } from '@/data/ecosystem';

const EcosystemStats = () => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-4">
        <div className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-stark-primary" />
          <div>
            <p className="text-2xl font-bold text-stark-primary">{ECOSYSTEM_STATS.totalDapps}+</p>
            <p className="mt-1 text-sm text-stark-text-secondary">Total dApps</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-4">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-stark-primary" />
          <div>
            <p className="text-2xl font-bold text-stark-primary">{ECOSYSTEM_STATS.totalUsers}M+</p>
            <p className="mt-1 text-sm text-stark-text-secondary">Total Users</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-4">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-stark-primary" />
          <div>
            <p className="text-2xl font-bold text-stark-primary">{ECOSYSTEM_STATS.totalTransactions}M+</p>
            <p className="mt-1 text-sm text-stark-text-secondary">Transactions</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-4">
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 text-stark-primary" />
          <div>
            <p className="text-2xl font-bold text-stark-primary">${ECOSYSTEM_STATS.totalVolume}B+</p>
            <p className="mt-1 text-sm text-stark-text-secondary">Total Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemStats;