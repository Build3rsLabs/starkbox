import { Search, X } from 'lucide-react';

interface TaskSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TaskSearch = ({ value, onChange, placeholder = 'Search tasks...' }: TaskSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dydx-text-dim" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-dydx-border bg-dydx-darker py-3 pl-12 pr-10 text-dydx-text-bright placeholder-dydx-text-dim transition-colors focus:border-dydx-primary focus:outline-none focus:ring-1 focus:ring-dydx-primary"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-dydx-text-dim hover:bg-dydx-dark hover:text-dydx-text-bright"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default TaskSearch;