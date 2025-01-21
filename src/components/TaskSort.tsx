import { ArrowUpDown } from 'lucide-react';
import Button from './ui/Button';

export type SortOption = {
  value: 'reward' | 'deadline' | 'submissions';
  label: string;
  direction: 'asc' | 'desc';
};

interface TaskSortProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS: Omit<SortOption, 'direction'>[] = [
  { value: 'reward', label: 'Reward' },
  { value: 'deadline', label: 'Deadline' },
  { value: 'submissions', label: 'Submissions' }
];

export default function TaskSort({ currentSort, onSortChange }: TaskSortProps) {
  const handleSortChange = (value: SortOption['value']) => {
    if (currentSort.value === value) {
      onSortChange({
        ...currentSort,
        direction: currentSort.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      onSortChange({ value, label: value, direction: 'desc' });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>
      <div className="flex gap-2">
        {SORT_OPTIONS.map((option) => (
          <Button
            key={option.value}
            variant={currentSort.value === option.value ? 'primary' : 'outline'}
            size="sm"
            className="flex items-center gap-1"
            onClick={() => handleSortChange(option.value)}
          >
            {option.label}
            {currentSort.value === option.value && (
              <ArrowUpDown
                size={14}
                className={`transition-transform ${
                  currentSort.direction === 'asc' ? 'rotate-180' : ''
                }`}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}