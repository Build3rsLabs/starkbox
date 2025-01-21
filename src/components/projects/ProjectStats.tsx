import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectStatsProps {
  icon: LucideIcon;
  label: string;
  value: string;
  valueClassName?: string;
}

const ProjectStats = ({ icon: Icon, label, value, valueClassName }: ProjectStatsProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1">
        <Icon className="h-4 w-4 text-dot-primary" />
        <p className={cn("font-semibold", valueClassName || "text-dot-text-bright")}>
          {value}
        </p>
      </div>
      <p className="mt-1 text-sm text-dot-text-dim">{label}</p>
    </div>
  );
};

export default ProjectStats;