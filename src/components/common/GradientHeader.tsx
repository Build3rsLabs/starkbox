import { cn } from '@/lib/utils';

interface GradientHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const GradientHeader = ({ title, description, align = 'left', className }: GradientHeaderProps) => {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h1 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-stark-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
};

export default GradientHeader;