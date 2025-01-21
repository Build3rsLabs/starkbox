import TaskSearch from './TaskSearch';
import TaskFilters from './TaskFilters';
import { TaskFilters as TaskFiltersType } from './TaskFilters';

interface TaskControlsProps {
  search: string;
  onSearchChange: (value: string) => void;
  onFilterChange: (filters: TaskFiltersType) => void;
}

const TaskControls = ({
  search,
  onSearchChange,
  onFilterChange
}: TaskControlsProps) => {
  return (
    <div className="relative rounded-xl border border-bera-green/20 bg-gradient-to-br from-bera-brown/50 via-bera-brownDark/80 to-bera-green/5 p-6 shadow-lg shadow-black/10 backdrop-blur-sm">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-bera-green/5 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative">
        <h2 className="mb-4 text-2xl font-bold text-bera-green">Search & Filter Tasks</h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <TaskSearch
              value={search}
              onChange={onSearchChange}
              placeholder="Search tasks by title, description, or tags..."
            />
          </div>
          <TaskFilters onFilterChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default TaskControls;