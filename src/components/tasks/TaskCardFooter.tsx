import { Calendar, Coins } from 'lucide-react';
import { formatAmount, formatDate } from '@/lib/utils';

interface TaskCardFooterProps {
  reward: number;
  deadline: string;
}

const TaskCardFooter = ({ reward, deadline }: TaskCardFooterProps) => {
  return (
    <div className="flex items-center justify-between border-t border-avalanche-border pt-4">
      <div className="flex items-center gap-2 text-avalanche-primary">
        <Coins size={18} />
        <span className="font-semibold">{formatAmount(reward)} AVAX</span>
      </div>
      <div className="flex items-center gap-2 text-avalanche-gray">
        <Calendar size={18} />
        <span>{formatDate(deadline)}</span>
      </div>
    </div>
  );
};

export default TaskCardFooter;