import * as React from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs = ({ value, onValueChange, children }: TabsProps) => {
  return (
    <div className="w-full" data-value={value}>
      {children}
    </div>
  );
};

export const TabsList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-lg bg-dot-darker p-1">
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const isActive = React.useContext(TabsContext) === value;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all',
        isActive
          ? 'bg-dot-primary text-white'
          : 'text-dot-text hover:bg-dot-primary/10 hover:text-dot-primary'
      )}
      onClick={() => React.useContext(TabsDispatchContext)?.(value)}
    >
      {children}
    </button>
  );
};

const TabsContext = React.createContext<string>('');
const TabsDispatchContext = React.createContext<((value: string) => void) | null>(null);

export const TabsProvider = Tabs;