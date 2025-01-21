import { User, Award } from 'lucide-react';
import { ContributorProfile } from '@/types/user';
import { formatAmount } from '@/lib/utils';
import LeaderboardRank from './LeaderboardRank';
import EarningsDisplay from './EarningsDisplay';

interface LeaderboardTableRowProps {
  entry: ContributorProfile;
  rank: number;
}

const LeaderboardTableRow = ({ entry, rank }: LeaderboardTableRowProps) => {
  return (
    <tr className="group relative transition-all duration-300 hover:bg-stark-primary/5">
      {/* Animated highlight on hover */}
      <td className="relative px-6 py-4">
        <div className="absolute inset-y-0 left-0 w-1 scale-y-0 bg-stark-primary transition-transform duration-300 group-hover:scale-y-100" />
        <LeaderboardRank rank={rank} />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-stark-primary/20 to-stark-secondary/20 transition-all duration-300 group-hover:from-stark-primary/30 group-hover:to-stark-secondary/30">
            {entry.avatar ? (
              <img 
                src={entry.avatar} 
                alt={entry.username} 
                className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <User className="h-6 w-6 text-stark-primary" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white transition-colors duration-300 group-hover:text-stark-primary">
                {entry.username}
              </span>
              <div className="flex items-center gap-1.5 rounded-full bg-stark-primary/10 px-2.5 py-1 transition-all duration-300 group-hover:bg-stark-primary/20">
                <Award className="h-4 w-4 text-stark-primary" />
                <span className="text-sm font-medium text-stark-primary">
                  {entry.stats.reputation}% Success
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {entry.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-stark-primary/10 px-3 py-0.5 text-xs font-medium text-stark-primary ring-1 ring-stark-primary/20 transition-all duration-300 group-hover:bg-stark-primary/20 group-hover:ring-stark-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="transition-all duration-300 group-hover:translate-x-1">
          <p className="text-lg font-semibold text-stark-primary">
            {entry.stats.tasksCompleted}
          </p>
          <p className="text-sm text-stark-text-secondary">Tasks</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="transition-all duration-300 group-hover:translate-x-1">
          <EarningsDisplay earnings={entry.stats.totalEarned} />
        </div>
      </td>
    </tr>
  );
};

export default LeaderboardTableRow;