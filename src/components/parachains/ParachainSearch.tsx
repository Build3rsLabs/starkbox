import { Search, X } from 'lucide-react';

interface ParachainSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ParachainSearch = ({ value, onChange }: ParachainSearchProps) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search parachains..."
          className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-dot-primary focus:outline-none focus:ring-1 focus:ring-dot-primary"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ParachainSearch;