import { Search, X } from 'lucide-react';

interface TaskSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TaskSearch = ({ value, onChange, placeholder }: TaskSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-bera-text-dim" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-bera-green/20 bg-black/40 py-3 pl-12 pr-4 text-bera-text-bright placeholder-bera-text-dim transition-all focus:border-bera-green focus:outline-none focus:ring-1 focus:ring-bera-green"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-bera-text-dim hover:text-bera-green"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default TaskSearch;