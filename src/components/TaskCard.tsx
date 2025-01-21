import { Link } from 'react-router-dom';
import { Calendar, Coins, Tag, Briefcase, ChevronRight, Globe } from 'lucide-react';
import { formatAmount, formatDate } from '@/lib/utils';
import { Task } from '@/types';
import Card from './common/Card';

interface TaskCardProps extends Task {}

const TaskCard = ({
  id,
  title,
  description,
  reward,
  deadline,
  tags,
  projectName,
  chain,
  status,
  submissions = 0,
}: TaskCardProps) => {
  return (
    <Link to={`/tasks/${id}`}>
      <Card variant="gradient" className="group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary from-dydx-start/20 to-dydx-end/20">
              <Briefcase className="h-6 w-6 text-dydx-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-dydx-primary">
                {title}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm text-dydx-text-dim">{projectName}</span>
                {chain && (
                  <div className="flex items-center gap-1 text-sm">
                    <Globe className="h-4 w-4 text-dydx-primary" />
                    <span className="text-dydx-text-bright">{chain}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary from-dydx-start/20 to-dydx-end/20 text-dydx-primary">
            {submissions}
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-dydx-text-bright">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-dydx-primary/10 px-3 py-1 text-sm text-dydx-primary"
            >
              <Tag size={14} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-gradient-secondary from-dydx-darker via-dydx-dark to-dydx-darker p-4">
          <div className="flex items-center gap-3">
            <Coins className="h-5 w-5 text-dydx-primary" />
            <div>
              <p className="font-semibold text-dydx-primary">
                {formatAmount(reward.amount)} {reward.token}
              </p>
              <p className="text-sm text-dydx-text-dim">Reward</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-dydx-secondary" />
            <div>
              <p className="font-semibold text-white">{formatDate(deadline)}</p>
              <p className="text-sm text-dydx-text-dim">Deadline</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-dydx-border/10 pt-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex h-2 w-2 rounded-full ${
              status === 'open' ? 'bg-green-500' : 
              status === 'in_progress' ? 'bg-yellow-500' : 
              'bg-dydx-primary'
            }`} />
            <span className="text-sm text-dydx-text-dim capitalize">{status.replace('_', ' ')}</span>
          </div>
          <ChevronRight className="h-5 w-5 text-dydx-primary opacity-0 transition-all group-hover:opacity-100" />
        </div>
      </Card>
    </Link>
  );
};

export default TaskCard;