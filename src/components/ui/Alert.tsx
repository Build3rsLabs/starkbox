import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Alert = ({ variant, title, children, className }: AlertProps) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle
  };

  const Icon = icons[variant];

  return (
    <div
      className={cn(
        'rounded-lg border p-4',
        {
          'border-bera-green/20 bg-bera-green/5 text-bera-green': variant === 'success',
          'border-yellow-500/20 bg-yellow-500/5 text-yellow-500': variant === 'warning',
          'border-red-500/20 bg-red-500/5 text-red-500': variant === 'error',
          'border-blue-500/20 bg-blue-500/5 text-blue-500': variant === 'info',
        },
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 flex-shrink-0" />
        <div>
          {title && <div className="font-medium">{title}</div>}
          <div className={cn({ 'mt-1': title })}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;