import { useParams } from 'react-router-dom';
import { useTask } from '@/hooks/useTask';
import TaskDetails from '@/components/tasks/TaskDetails';
import TaskSidebar from '@/components/tasks/TaskSidebar';
import LoadingSpinner from '@/components/LoadingSpinner';

const TaskPage = () => {
  const { id } = useParams();
  const { task, loading, error } = useTask(id || '');

  if (error) {
    throw error;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-stark-darker py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="min-h-screen bg-stark-darker py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-8 text-center">
            <h1 className="text-2xl font-bold text-stark-primary">Task Not Found</h1>
            <p className="mt-2 text-stark-text-secondary">
              The task you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stark-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-stark-primary/5 via-stark-secondary/5 to-transparent opacity-50" />
          
          {/* Content with backdrop blur */}
          <div className="relative rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-8 backdrop-blur-sm">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TaskDetails task={task} />
              </div>
              <div className="lg:col-span-1">
                <TaskSidebar task={task} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;