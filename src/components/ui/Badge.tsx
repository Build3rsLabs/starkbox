import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({ children, variant = 'default', size = 'md', className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        {
          'bg-bera-green/10 text-bera-green': variant === 'default',
          'bg-green-500/10 text-green-500': variant === 'success',
          'bg-yellow-500/10 text-yellow-500': variant === 'warning',
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-3 py-1 text-sm': size === 'md',
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;