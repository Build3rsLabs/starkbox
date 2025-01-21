import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconBadgeProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconBadge = ({ icon: Icon, size = 'md', className }: IconBadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full bg-avalanche-primary/10',
        {
          'h-8 w-8': size === 'sm',
          'h-12 w-12': size === 'md',
          'h-16 w-16': size === 'lg'
        },
        className
      )}
    >
      <Icon
        className={cn(
          'text-avalanche-primary',
          {
            'h-4 w-4': size === 'sm',
            'h-6 w-6': size === 'md',
            'h-8 w-8': size === 'lg'
          }
        )}
      />
    </div>
  );
};

export default IconBadge;