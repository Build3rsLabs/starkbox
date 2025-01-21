import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GradientBorder = ({ children, className, hover = true }: GradientBorderProps) => {
  return (
    <div
      className={cn(
        'relative rounded-xl',
        'before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px]',
        'before:bg-gradient-to-r before:from-bera-green/50 before:via-[#33FFB6]/50 before:to-bera-green/50',
        hover && [
          'transition-all duration-300',
          'hover:before:bg-gradient-to-r hover:before:from-[#33FFB6] hover:before:via-bera-green hover:before:to-[#33FFB6]',
          'hover:shadow-lg hover:shadow-bera-green/10'
        ],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GradientBorder;