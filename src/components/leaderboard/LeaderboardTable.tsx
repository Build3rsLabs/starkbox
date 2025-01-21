import { ContributorProfile } from '@/types/user';
import LeaderboardTableHeader from './LeaderboardTableHeader';
import LeaderboardTableRow from './LeaderboardTableRow';

interface LeaderboardTableProps {
  entries: ContributorProfile[];
}

const LeaderboardTable = ({ entries }: LeaderboardTableProps) => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-stark-primary/10">
          <LeaderboardTableHeader />
          <tbody className="divide-y divide-stark-primary/10">
            {entries.map((entry, index) => (
              <LeaderboardTableRow 
                key={entry.address} 
                entry={entry} 
                rank={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;