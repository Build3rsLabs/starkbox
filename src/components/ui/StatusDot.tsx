import { cn } from '@/lib/utils';

interface StatusDotProps {
  status: 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

const StatusDot = ({ status, size = 'sm', className }: StatusDotProps) => {
  return (
    <span
      className={cn(
        'inline-flex rounded-full',
        {
          'bg-bera-green': status === 'success',
          'bg-yellow-500': status === 'warning',
          'bg-red-500': status === 'error',
          'bg-bera-text-dim': status === 'neutral',
          'h-2 w-2': size === 'sm',
          'h-3 w-3': size === 'md',
        },
        className
      )}
    />
  );
};

export default StatusDot;