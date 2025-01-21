import { Briefcase } from 'lucide-react';
import IconBadge from '../common/IconBadge';

interface TaskCardHeaderProps {
  title: string;
  projectName: string;
}

const TaskCardHeader = ({ title, projectName }: TaskCardHeaderProps) => {
  return (
    <div className="mb-4 flex items-center gap-4">
      <IconBadge icon={Briefcase} />
      <div>
        <h3 className="font-semibold text-avalanche-white group-hover:text-avalanche-primary">
          {title}
        </h3>
        <p className="text-sm text-avalanche-gray">{projectName}</p>
      </div>
    </div>
  );
};

export default TaskCardHeader;