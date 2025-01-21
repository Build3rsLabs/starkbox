import { cn } from '@/lib/utils';
import { Achievement } from '@/types';

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'sm' | 'md' | 'lg';
}

const AchievementBadge = ({ achievement, size = 'md' }: AchievementBadgeProps) => {
  return (
    <div
      title={`${achievement.name}\n${achievement.description}\nEarned on ${new Date(achievement.dateEarned).toLocaleDateString()}`}
      className={cn(
        'cursor-help transition-transform hover:scale-110',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {achievement.icon}
    </div>
  );
};

export default AchievementBadge;