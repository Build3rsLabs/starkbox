import { Badge } from '@/types/user';
import { cn } from '@/lib/utils';
import { Tooltip } from '../common/Tooltip';

interface BadgeDisplayProps {
  badge: Badge;
  size?: 'sm' | 'md' | 'lg';
}

const BadgeDisplay = ({ badge, size = 'md' }: BadgeDisplayProps) => {
  const tooltipContent = (
    <div className="text-center">
      <p className="font-semibold">{badge.name}</p>
      <p className="text-sm">{badge.description}</p>
      <p className="mt-1 text-xs text-dot-text-dim">
        Earned on {new Date(badge.earnedAt).toLocaleDateString()}
      </p>
    </div>
  );

  return (
    <Tooltip content={tooltipContent}>
      <div
        className={cn(
          'cursor-help transition-transform hover:scale-110',
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
          }
        )}
      >
        {badge.icon}
      </div>
    </Tooltip>
  );
};

export default BadgeDisplay;