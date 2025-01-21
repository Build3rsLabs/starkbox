import { useState } from 'react';
import { Filter } from 'lucide-react';
import Button from './ui/Button';

interface TaskFiltersProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFilters {
  minReward: number | null;
  maxReward: number | null;
  tags: string[];
  status: string[];
}

const AVAILABLE_TAGS = [
  'Frontend', 'Backend', 'Smart Contracts', 'Design', 'Mobile',
  'Documentation', 'Security', 'Testing', 'DeFi', 'NFT', 'SmartPy'
];

const STATUS_OPTIONS = [
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' }
];

export default function TaskFilters({ onFilterChange }: TaskFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<TaskFilters>({
    minReward: null,
    maxReward: null,
    tags: [],
    status: ['open']
  });

  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    
    const newFilters = { ...filters, tags: newTags };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStatusToggle = (status: string) => {
    const newStatus = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    
    const newFilters = { ...filters, status: newStatus };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRewardChange = (type: 'min' | 'max', value: string) => {
    const numValue = value ? Number(value) : null;
    const newFilters = {
      ...filters,
      [type === 'min' ? 'minReward' : 'maxReward']: numValue
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter size={18} />
        Filters
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-tezos-stealth">Reward Range</h3>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded-md border border-gray-300 px-3 py-1 focus:border-tezos-blue focus:outline-none focus:ring-1 focus:ring-tezos-blue"
                onChange={(e) => handleRewardChange('min', e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full rounded-md border border-gray-300 px-3 py-1 focus:border-tezos-blue focus:outline-none focus:ring-1 focus:ring-tezos-blue"
                onChange={(e) => handleRewardChange('max', e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-tezos-stealth">Status</h3>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map(({ value, label }) => (
                <button
                  key={value}
                  className={`rounded-full px-3 py-1 text-sm ${
                    filters.status.includes(value)
                      ? 'bg-tezos-blue text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleStatusToggle(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-tezos-stealth">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_TAGS.map(tag => (
                <button
                  key={tag}
                  className={`rounded-full px-3 py-1 text-sm ${
                    filters.tags.includes(tag)
                      ? 'bg-tezos-blue text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}