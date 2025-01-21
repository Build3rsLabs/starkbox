import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({ value, onChange, placeholder, className }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-bera-text-dim" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-bera-green/20 bg-bera-brownDark py-3 pl-12 pr-10 text-bera-text-bright placeholder-bera-text-dim transition-colors focus:border-bera-green focus:outline-none focus:ring-1 focus:ring-bera-green"
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

export default SearchInput;