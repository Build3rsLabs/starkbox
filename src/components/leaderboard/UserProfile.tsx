import { User, Star } from 'lucide-react';
import { ContributorProfile } from '@/types/user';
import XPProgressBar from './XPProgressBar';

interface UserProfileProps {
  entry: ContributorProfile;
}

const UserProfile = ({ entry }: UserProfileProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-dot-primary/10">
        {entry.avatar ? (
          <img 
            src={entry.avatar} 
            alt={entry.username} 
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <User className="h-5 w-5 text-dot-primary" />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-white group-hover:text-dot-primary">
            {entry.username}
          </span>
          <div className="flex items-center gap-1 rounded-full bg-dot-primary/10 px-2 py-0.5 text-sm">
            <Star className="h-4 w-4 text-dot-primary" fill="currentColor" />
            <span className="text-dot-primary">{entry.stats.reputation}%</span>
          </div>
        </div>
        <XPProgressBar
          currentXP={entry.stats.xp % (entry.stats.level * 1000)}
          maxXP={entry.stats.level * 1000}
          level={entry.stats.level}
        />
      </div>
    </div>
  );
};

export default UserProfile;