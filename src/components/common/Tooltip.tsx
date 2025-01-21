import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = ({ content, children, position = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 w-max max-w-xs rounded-lg border border-avalanche-border bg-avalanche-darker p-2 text-avalanche-white shadow-lg',
            {
              'bottom-full left-1/2 mb-2 -translate-x-1/2': position === 'top',
              'left-full top-1/2 ml-2 -translate-y-1/2': position === 'right',
              'right-full top-1/2 mr-2 -translate-y-1/2': position === 'left',
              'left-1/2 top-full mt-2 -translate-x-1/2': position === 'bottom',
            }
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};