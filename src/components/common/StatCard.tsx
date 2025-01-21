import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Card from './Card';

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
    <Card>
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-dot-primary/10 p-3">
          <Icon className="h-6 w-6 text-dot-primary" />
        </div>
        {trend && trendValue && (
          <div className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-sm",
            trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
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
      <div className="mt-4">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{subtext}</p>
      </div>
    </Card>
  );
};

export default StatCard;