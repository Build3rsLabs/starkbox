import { useState } from 'react';
import { Filter } from 'lucide-react';
import Button from '../ui/Button';

interface LeaderboardFiltersProps {
  onFilterChange: (filters: LeaderboardFilters) => void;
}

export interface LeaderboardFilters {
  timeRange: 'all' | 'month' | 'week';
  category: string[];
  minEarnings: number | null;
}

const CATEGORIES = ['Cairo', 'DeFi', 'Infrastructure', 'ZK', 'Security'];

const LeaderboardFilters = ({ onFilterChange }: LeaderboardFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<LeaderboardFilters>({
    timeRange: 'all',
    category: [],
    minEarnings: null
  });

  const handleFilterChange = (newFilters: Partial<LeaderboardFilters>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Filter size={18} />
        Filters
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-72 rounded-lg border border-stark-primary/20 bg-stark-dark p-4 shadow-lg">
          <div>
            <h3 className="mb-2 font-medium text-stark-primary">Minimum Earnings (STRK)</h3>
            <input
              type="number"
              placeholder="Min STRK"
              className="w-full rounded-lg border border-stark-primary/20 bg-stark-darker px-3 py-2 text-stark-text-primary placeholder-stark-text-secondary focus:border-stark-primary focus:outline-none focus:ring-1 focus:ring-stark-primary"
              onChange={(e) => handleFilterChange({ minEarnings: e.target.value ? Number(e.target.value) : null })}
            />
          </div>

          <div className="mt-4">
            <h3 className="mb-2 font-medium text-stark-primary">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-3 py-1 text-sm ${
                    filters.category.includes(category)
                      ? 'bg-stark-primary text-stark-dark'
                      : 'bg-stark-primary/10 text-stark-primary hover:bg-stark-primary/20'
                  }`}
                  onClick={() => handleFilterChange({
                    category: filters.category.includes(category)
                      ? filters.category.filter(c => c !== category)
                      : [...filters.category, category]
                  })}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardFilters;