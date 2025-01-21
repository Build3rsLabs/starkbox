import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const GradientText = ({ children, className, as: Component = 'span' }: GradientTextProps) => {
  return (
    <Component
      className={cn(
        'bg-gradient-primary from-dydx-start via-dydx-middle to-dydx-end bg-clip-text font-bold text-transparent',
        className
      )}
      style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </Component>
  );
};

export default GradientText;