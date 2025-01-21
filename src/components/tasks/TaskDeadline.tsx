import { Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface TaskDeadlineProps {
  deadline: string;
}

const TaskDeadline = ({ deadline }: TaskDeadlineProps) => {
  return (
    <div className="flex items-center gap-3">
      <Calendar className="h-5 w-5 text-bnb-yellow" />
      <div>
        <p className="font-semibold text-bnb-text-bright">
          {formatDate(deadline)}
        </p>
        <p className="text-sm text-bnb-text-dim">Deadline</p>
      </div>
    </div>
  );
};

export default TaskDeadline;