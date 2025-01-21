import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  variant?: 'default' | 'gradient';
}

const Card = ({ children, className, hover = true, variant = 'default', ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'group relative rounded-xl',
        // Base styles
        'bg-gradient-to-br from-bnb-black via-bnb-dark to-bnb-black',
        // Gradient border effect
        'before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px]',
        'before:bg-gradient-to-r before:from-bnb-yellow/50 before:via-[#FFD75E]/50 before:to-bnb-yellow/50',
        // Hover effects
        hover && [
          'transition-all duration-300',
          'hover:before:bg-gradient-to-r hover:before:from-[#FFD75E] hover:before:via-bnb-yellow hover:before:to-[#FFD75E]',
          'hover:shadow-lg hover:shadow-bnb-yellow/10'
        ],
        // Content padding
        'p-6',
        className
      )}
      {...props}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-bnb-yellow/[0.03] to-[#FFD75E]/[0.03] opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;