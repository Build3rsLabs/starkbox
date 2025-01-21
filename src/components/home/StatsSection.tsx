import { BarChart, Users, Coins, Wallet } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsSection = () => {
  return (
    <div className="border-t border-bera-green/20 bg-bera-brownDark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <StatsCard
            icon={BarChart}
            value="$2B+"
            label="24h Volume"
          />
          <StatsCard
            icon={Users}
            value="500K+"
            label="Active Users"
          />
          <StatsCard
            icon={Wallet}
            value="50+"
            label="dApps Built"
          />
          <StatsCard
            icon={Coins}
            value="$1B+"
            label="Total Value Locked"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;