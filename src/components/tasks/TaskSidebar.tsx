import { Task } from '@/types/task';
import { Coins, Users, Clock, ChevronRight, Shield } from 'lucide-react';
import { formatAmount, formatDate } from '@/lib/utils';
import { useWallet } from '@/contexts/WalletContext';
import Button from '../ui/Button';

interface TaskSidebarProps {
  task: Task;
}

const TaskSidebar = ({ task }: TaskSidebarProps) => {
  const { isConnected, connect } = useWallet();

  const handleApply = () => {
    if (!isConnected) {
      connect();
      return;
    }
    // Handle apply logic
  };

  const daysLeft = Math.ceil(
    (new Date(task.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stark-text-secondary">
              <Coins className="h-5 w-5" />
              <span>Reward</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-stark-primary">
                {formatAmount(task.reward.amount)} {task.reward.token}
              </p>
              <p className="text-sm text-stark-text-secondary">≈ $2,500 USD</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stark-text-secondary">
              <Users className="h-5 w-5" />
              <span>Submissions</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-stark-text-primary">
                {task.submissions || 0}
              </p>
              <p className="text-sm text-stark-text-secondary">Active participants</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stark-text-secondary">
              <Clock className="h-5 w-5" />
              <span>Time Left</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-stark-text-primary">
                {daysLeft} days
              </p>
              <p className="text-sm text-stark-text-secondary">Until deadline</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stark-text-secondary">
              <Shield className="h-5 w-5" />
              <span>Escrow</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-stark-primary">Secured</p>
              <p className="text-sm text-stark-text-secondary">By smart contract</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            className="w-full justify-between bg-gradient-to-r from-stark-primary to-stark-secondary text-stark-dark hover:from-stark-secondary hover:to-stark-primary"
            onClick={handleApply}
          >
            {isConnected ? 'Apply for Task' : 'Connect Wallet'}
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-between border-stark-primary text-stark-primary hover:bg-stark-primary hover:text-stark-dark"
          >
            Ask a Question
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
        <h3 className="text-lg font-semibold text-stark-primary">Similar Tasks</h3>
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-stark-primary/20 bg-stark-darker/60 p-4 transition-colors hover:border-stark-primary/40"
            >
              <div>
                <p className="font-medium text-stark-text-primary">Protocol Development Task</p>
                <p className="text-sm text-stark-text-secondary">StarkNet</p>
              </div>
              <p className="text-stark-primary">500 STRK</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSidebar;