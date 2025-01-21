import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const Header = ({ title, description, align = 'left', className }: HeaderProps) => {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h1 className="text-4xl font-bold text-bnb-yellow sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-bnb-text-dim">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;