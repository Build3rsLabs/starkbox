import { ContributorProfile } from '@/types/user';
import { CheckCircle2 } from 'lucide-react';

interface TaskStatsProps {
  entry: ContributorProfile;
}

const TaskStats = ({ entry }: TaskStatsProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-dot-primary" />
        <span className="text-lg font-semibold text-white">
          {entry.stats.tasksCompleted}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {entry.activeChains.map((chain) => (
          <span
            key={chain}
            className="rounded-full bg-dot-primary/10 px-2 py-0.5 text-xs text-dot-primary"
          >
            {chain}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskStats;