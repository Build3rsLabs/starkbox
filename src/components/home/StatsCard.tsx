import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard = ({ icon: Icon, value, label }: StatsCardProps) => (
  <div className="group rounded-xl border border-bera-green/20 bg-gradient-to-br from-bera-brownDark via-bera-brown to-bera-brownDark p-6 shadow-lg shadow-bera-green/5 transition-all duration-300 hover:border-bera-green/30 hover:shadow-bera-green/10">
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 text-bera-green transition-colors group-hover:text-[#33FFB6]" />
      <div>
        <p className="text-2xl font-bold text-bera-green">{value}</p>
        <p className="mt-1 text-sm text-bera-text-dim">{label}</p>
      </div>
    </div>
  </div>
);

export default StatsCard;