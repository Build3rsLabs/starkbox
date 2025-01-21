import { Search, X } from 'lucide-react';

interface PartnerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const PartnerSearch = ({ value, onChange }: PartnerSearchProps) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search className="h-5 w-5 text-stark-text-secondary" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search ecosystem protocols..."
        className="w-full rounded-xl border border-stark-primary/20 bg-gradient-to-br from-stark-dark to-stark-darker py-3 pl-12 pr-12 text-stark-text-primary placeholder-stark-text-secondary shadow-lg shadow-black/20 transition-all focus:border-stark-primary focus:outline-none focus:ring-1 focus:ring-stark-primary focus:ring-offset-2 focus:ring-offset-stark-dark"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <X className="h-5 w-5 text-stark-text-secondary hover:text-stark-primary" />
        </button>
      )}
    </div>
  );
};

export default PartnerSearch;