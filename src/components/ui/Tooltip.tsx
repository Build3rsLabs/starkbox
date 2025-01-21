import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const Tooltip = ({ content, children, position = 'top', delay = 200 }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeout: NodeJS.Timeout;

  const showTooltip = () => {
    timeout = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={cn(
            'absolute z-50 w-max max-w-xs rounded-lg border border-bera-green/20 bg-bera-brownDark p-2 text-sm text-bera-text-bright shadow-lg',
            'backdrop-blur-sm',
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

export default Tooltip;