import SearchInput from '../common/SearchInput';
import LeaderboardFilters from './LeaderboardFilters';
import { LeaderboardFilters as LeaderboardFiltersType } from './LeaderboardFilters';

interface LeaderboardControlsProps {
  search: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (filters: LeaderboardFiltersType) => void;
}

const LeaderboardControls = ({
  search,
  onSearchChange,
  onFilterChange
}: LeaderboardControlsProps) => {
  return (
    <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
      <h2 className="mb-4 text-2xl font-bold text-stark-primary">
        Search & Filter
      </h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchInput
            value={search}
            onChange={onSearchChange}
            placeholder="Search StarkNet builders..."
          />
        </div>
        <LeaderboardFilters onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default LeaderboardControls;