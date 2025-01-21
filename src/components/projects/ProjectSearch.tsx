import { Search, X } from 'lucide-react';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ProjectSearch = ({ value, onChange }: ProjectSearchProps) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-avalanche-gray" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-lg border border-avalanche-border bg-avalanche-darker py-3 pl-12 pr-4 text-avalanche-white placeholder-avalanche-gray focus:border-avalanche-primary focus:outline-none focus:ring-1 focus:ring-avalanche-primary"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-avalanche-gray hover:bg-avalanche-dark hover:text-avalanche-white"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSearch;