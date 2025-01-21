import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}

const StatCard = ({ icon: Icon, label, value, subtext, trend, trendValue }: StatCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-bera-green/20 bg-gradient-to-br from-bera-brownDark via-bera-brown to-bera-brownDark p-6 transition-all duration-300 hover:border-bera-green/40 hover:shadow-lg hover:shadow-bera-green/10">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bera-green/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-bera-green/20 to-[#33FFB6]/20 transition-all duration-300 group-hover:from-bera-green/30 group-hover:to-[#33FFB6]/30">
            <Icon className="h-6 w-6 text-bera-green transition-transform duration-300 group-hover:scale-110" />
          </div>
          {trend && trendValue && (
            <div className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium transition-all duration-300",
              trend === 'up' 
                ? 'bg-green-500/10 text-green-500 group-hover:bg-green-500/20' 
                : 'bg-red-500/10 text-red-500 group-hover:bg-red-500/20'
            )}>
              {trend === 'up' ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-sm text-bera-text-dim transition-colors duration-300 group-hover:text-bera-text-bright">
            {label}
          </p>
          <p className="text-2xl font-bold text-bera-green transition-all duration-300 group-hover:translate-x-1">
            {value}
          </p>
          <p className="text-sm text-bera-text-dim">{subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;