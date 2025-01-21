import { Coins } from 'lucide-react';
import { formatAmount } from '@/lib/utils';

interface TaskRewardProps {
  amount: number;
  token: string;
}

const TaskReward = ({ amount, token }: TaskRewardProps) => {
  return (
    <div className="flex items-center gap-3">
      <Coins className="h-5 w-5 text-bnb-yellow" />
      <div>
        <p className="font-semibold text-bnb-yellow">
          {formatAmount(amount)} {token}
        </p>
        <p className="text-sm text-bnb-text-dim">Reward</p>
      </div>
    </div>
  );
};

export default TaskReward;