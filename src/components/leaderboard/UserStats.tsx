import { User, Award, Zap, Clock, Target } from 'lucide-react';
import { LeaderboardEntry } from '@/types';
import Card from '../common/Card';
import XPProgressBar from './XPProgressBar';
import AchievementBadge from './AchievementBadge';

interface UserStatsProps {
  entry: LeaderboardEntry;
}

const UserStats = ({ entry }: UserStatsProps) => {
  const getMaxXP = (level: number) => level * 1000;

  return (
    <Card className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-avalanche-primary/10">
          <User className="h-8 w-8 text-avalanche-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-avalanche-white">{entry.username}</h3>
          <p className="text-sm text-avalanche-gray">Level {entry.level} Explorer</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-avalanche-gray">Progress to Level {entry.level + 1}</p>
        <XPProgressBar
          currentXP={entry.xp % getMaxXP(entry.level)}
          maxXP={getMaxXP(entry.level)}
          level={entry.level}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-avalanche-gray">
            <Award className="h-4 w-4" />
            <span className="text-sm">Reputation</span>
          </div>
          <p className="text-lg font-semibold text-avalanche-white">{entry.reputation}%</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-avalanche-gray">
            <Zap className="h-4 w-4" />
            <span className="text-sm">Streak</span>
          </div>
          <p className="text-lg font-semibold text-avalanche-white">{entry.streak} days</p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-avalanche-gray">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Last Active</span>
          </div>
          <p className="text-sm text-avalanche-white">
            {new Date(entry.lastActive).toLocaleDateString()}
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-avalanche-gray">
            <Target className="h-4 w-4" />
            <span className="text-sm">Focus Areas</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {entry.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-avalanche-primary/10 px-2 py-0.5 text-xs text-avalanche-primary"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-avalanche-gray">Achievements</p>
        <div className="flex flex-wrap gap-2">
          {entry.achievements.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              size="lg"
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default UserStats;