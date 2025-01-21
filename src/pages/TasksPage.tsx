import TaskList from '@/components/tasks/TaskList';
import TaskHeader from '@/components/tasks/TaskHeader';
import TaskControls from '@/components/tasks/TaskControls';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useTasks } from '@/hooks/useTasks';
import { useFilteredTasks } from '@/hooks/useFilteredTasks';

const TasksPage = () => {
  const { tasks, loading, error } = useTasks();
  const { 
    filteredTasks, 
    search, 
    setSearch, 
    setFilters,
    sort,
    setSort
  } = useFilteredTasks(tasks);

  if (error) {
    throw error;
  }

  return (
    <div className="min-h-screen bg-stark-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TaskHeader />
        
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-stark-primary/5 to-transparent opacity-50" />
          
          {/* Content with backdrop blur */}
          <div className="relative rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-8 backdrop-blur-sm">
            <TaskControls
              search={search}
              onSearchChange={setSearch}
              onFilterChange={setFilters}
              sort={sort}
              onSortChange={setSort}
            />

            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="mt-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-stark-primary">
                    {filteredTasks.length} Available Tasks
                  </h2>
                  <div className="text-stark-text-secondary">
                    Showing {filteredTasks.length} of {tasks.length} tasks
                  </div>
                </div>
                <TaskList tasks={filteredTasks} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;