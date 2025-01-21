import { Link } from 'react-router-dom';
import { Calendar, Coins, Tag, Code2, ChevronRight, Globe } from 'lucide-react';
import { formatAmount, formatDate } from '@/lib/utils';
import { Task } from '@/types/task';
import Card from '../common/Card';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const {
    id,
    title,
    description,
    reward,
    deadline,
    tags = [],
    projectName,
    chain,
    status,
    submissions = 0,
  } = task;

  return (
    <Link to={`/tasks/${id}`}>
      <div className="group relative rounded-xl transition-all duration-300 hover:scale-[1.02]">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent opacity-20 blur-sm transition-opacity group-hover:opacity-30" />
        
        {/* Card content */}
        <div className="relative rounded-xl bg-stark-dark p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-stark-primary/20 to-stark-secondary/20">
                <Code2 className="h-6 w-6 text-stark-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-stark-primary">
                  {title}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-stark-text-secondary">{projectName}</span>
                  {chain && (
                    <div className="flex items-center gap-1 text-sm">
                      <Globe className="h-4 w-4 text-stark-primary" />
                      <span className="text-stark-text-primary">{chain}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-stark-primary/20 to-stark-secondary/20 font-medium text-stark-primary">
              {submissions}
            </div>
          </div>

          <p className="mt-4 line-clamp-2 text-stark-text-primary">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-stark-primary/10 px-3 py-1 text-xs font-medium text-stark-primary ring-1 ring-stark-primary/20"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-stark-darker/60 p-4">
            <div className="flex items-center gap-3">
              <Coins className="h-5 w-5 text-stark-primary" />
              <div>
                <p className="font-semibold text-stark-primary">
                  {formatAmount(reward.amount)} {reward.token}
                </p>
                <p className="text-sm text-stark-text-secondary">Reward</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-stark-secondary" />
              <div>
                <p className="font-semibold text-stark-text-primary">
                  {formatDate(deadline)}
                </p>
                <p className="text-sm text-stark-text-secondary">Deadline</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-stark-primary/10 pt-4">
            <div className="flex items-center gap-2">
              <span className={`inline-flex h-2 w-2 rounded-full ${
                status === 'open' ? 'bg-green-500' : 
                status === 'in_progress' ? 'bg-yellow-500' : 
                'bg-stark-text-secondary'
              }`} />
              <span className="text-sm text-stark-text-secondary capitalize">
                {status.replace('_', ' ')}
              </span>
            </div>
            <ChevronRight className="h-5 w-5 text-stark-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;