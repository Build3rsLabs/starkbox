import { cn } from '@/lib/utils';

interface XPProgressBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
}

const XPProgressBar = ({ currentXP, maxXP, level }: XPProgressBarProps) => {
  const progress = (currentXP / maxXP) * 100;

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <div className="h-2 w-full overflow-hidden rounded-full bg-avalanche-dark">
          <div
            className="h-full rounded-full bg-gradient-to-r from-avalanche-primary to-avalanche-hover transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-xs text-avalanche-gray">
          <span>{currentXP.toLocaleString()} XP</span>
          <span>{maxXP.toLocaleString()} XP</span>
        </div>
      </div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-avalanche-primary to-avalanche-hover text-xs font-bold text-white">
        {level}
      </div>
    </div>
  );
};

export default XPProgressBar;