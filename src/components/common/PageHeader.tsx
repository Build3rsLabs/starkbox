import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const PageHeader = ({ title, description, align = 'left', className }: PageHeaderProps) => {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h1 className="text-4xl font-bold text-dydx-primary sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-dydx-text">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;