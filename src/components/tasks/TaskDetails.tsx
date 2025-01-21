import { Task } from '@/types/task';
import { Calendar, Tag, Globe, Code2, ChevronRight, Shield, Zap } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import TaskTags from './TaskTags';
import TaskStatus from './TaskStatus';
import SectionHeader from '../common/SectionHeader';

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails = ({ task }: TaskDetailsProps) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-stark-primary/20 via-stark-secondary/20 to-stark-accent/20">
          <Code2 className="h-8 w-8 text-stark-primary" />
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-3xl font-bold text-transparent">
            {task.title}
          </h1>
          <div className="mt-2 flex items-center gap-4">
            <span className="text-stark-text-secondary">{task.projectName}</span>
            {task.chain && (
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4 text-stark-primary" />
                <span className="text-stark-text-primary">{task.chain}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-stark-primary" />
              <span className="text-stark-text-primary">Due {formatDate(task.deadline)}</span>
            </div>
            <TaskStatus status={task.status} />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <SectionHeader title="Description" />
        <div className="rounded-lg border border-stark-primary/20 bg-stark-darker/60 p-6">
          <p className="whitespace-pre-wrap text-stark-text-primary leading-relaxed">
            {task.description}
          </p>
        </div>
      </div>

      {/* Requirements */}
      {task.requirements && (
        <div>
          <SectionHeader title="Requirements" />
          <div className="rounded-lg border border-stark-primary/20 bg-stark-darker/60 p-6">
            <ul className="list-inside space-y-2 text-stark-text-primary">
              {task.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-stark-primary" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Skills */}
      {task.skills && (
        <div>
          <SectionHeader title="Required Skills" />
          <div className="flex flex-wrap gap-2">
            {task.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 rounded-full bg-stark-primary/10 px-4 py-2 text-sm text-stark-primary ring-1 ring-stark-primary/20"
              >
                <Tag size={14} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div>
        <SectionHeader title="Tags" />
        <TaskTags tags={task.tags} />
      </div>
    </div>
  );
};

export default TaskDetails;