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
        'bg-gradient-to-br from-stark-darker via-stark-dark to-stark-darker',
        // Gradient border effect
        'before:absolute before:inset-0 before:-z-10 before:rounded-xl before:p-[1px]',
        'before:bg-gradient-to-r before:from-stark-primary/50 before:via-stark-secondary/50 before:to-stark-accent/50',
        // Hover effects
        hover && [
          'transition-all duration-300',
          'hover:before:bg-gradient-to-r hover:before:from-stark-primary hover:before:via-stark-secondary hover:before:to-stark-accent',
          'hover:shadow-lg hover:shadow-stark-primary/10'
        ],
        // Content padding
        'p-6',
        className
      )}
      {...props}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-stark-primary/[0.03] to-stark-secondary/[0.03] opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;