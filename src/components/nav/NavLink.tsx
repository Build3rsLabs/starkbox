import { Link, useLocation } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

const NavLink = ({ to, icon: Icon, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "group relative flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200",
        isActive 
          ? "text-stark-primary" 
          : "text-stark-text-secondary hover:text-stark-primary"
      )}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-stark-primary/10 via-stark-secondary/10 to-stark-accent/10" />
      )}
      
      {/* Content */}
      <div className="relative flex items-center gap-2">
        <Icon 
          size={18} 
          className={cn(
            "transition-all duration-200",
            "group-hover:scale-110"
          )}
        />
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default NavLink;