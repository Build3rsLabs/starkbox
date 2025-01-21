import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeaderboardRankProps {
  rank: number;
}

const LeaderboardRank = ({ rank }: LeaderboardRankProps) => {
  const getTrophyColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-400';
      case 2:
        return 'text-gray-300';
      case 3:
        return 'text-amber-600';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center gap-2">
      {rank <= 3 && (
        <Trophy className={cn('h-5 w-5', getTrophyColor(rank))} />
      )}
      <span className={cn(
        'font-medium',
        rank <= 3 ? 'text-stark-primary text-lg' : 'text-stark-text-secondary'
      )}>
        #{rank}
      </span>
    </div>
  );
};

export default LeaderboardRank;