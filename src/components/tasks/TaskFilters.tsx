import { useState } from 'react';
import { Filter } from 'lucide-react';
import Button from '../ui/Button';

interface TaskFiltersProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFilters {
  minReward: number | null;
  maxReward: number | null;
  tags: string[];
  status: string[];
}

const TAGS = ['Smart Contract', 'DeFi', 'NFT', 'Frontend', 'Backend', 'Documentation'];
const STATUS_OPTIONS = ['open', 'in_progress', 'completed'];

const TaskFilters = ({ onFilterChange }: TaskFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<TaskFilters>({
    minReward: null,
    maxReward: null,
    tags: [],
    status: ['open']
  });

  const handleFilterChange = (newFilters: Partial<TaskFilters>) => {
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
        <div className="absolute right-0 top-full z-10 mt-2 w-72 rounded-lg border border-bnb-yellow/20 bg-bnb-black p-4 shadow-lg">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-bnb-yellow">Status</h3>
              <div className="flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((status) => (
                  <button
                    key={status}
                    onClick={() => handleFilterChange({
                      status: filters.status.includes(status)
                        ? filters.status.filter(s => s !== status)
                        : [...filters.status, status]
                    })}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      filters.status.includes(status)
                        ? 'bg-bnb-yellow text-bnb-black'
                        : 'bg-bnb-yellow/10 text-bnb-yellow hover:bg-bnb-yellow/20'
                    }`}
                  >
                    {status.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-bnb-yellow">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleFilterChange({
                      tags: filters.tags.includes(tag)
                        ? filters.tags.filter(t => t !== tag)
                        : [...filters.tags, tag]
                    })}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      filters.tags.includes(tag)
                        ? 'bg-bnb-yellow text-bnb-black'
                        : 'bg-bnb-yellow/10 text-bnb-yellow hover:bg-bnb-yellow/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-bnb-yellow">Reward Range (BNB)</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full rounded-lg border border-bnb-yellow/20 bg-bnb-black px-3 py-2 text-bnb-text-bright placeholder-bnb-text-dim focus:border-bnb-yellow focus:outline-none focus:ring-1 focus:ring-bnb-yellow"
                  onChange={(e) => handleFilterChange({ minReward: e.target.value ? Number(e.target.value) : null })}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full rounded-lg border border-bnb-yellow/20 bg-bnb-black px-3 py-2 text-bnb-text-bright placeholder-bnb-text-dim focus:border-bnb-yellow focus:outline-none focus:ring-1 focus:ring-bnb-yellow"
                  onChange={(e) => handleFilterChange({ maxReward: e.target.value ? Number(e.target.value) : null })}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskFilters;