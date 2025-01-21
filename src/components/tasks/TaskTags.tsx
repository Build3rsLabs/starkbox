import { Tag } from 'lucide-react';

interface TaskTagsProps {
  tags: string[];
}

const TaskTags = ({ tags }: TaskTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-bnb-yellow/10 via-[#FFD75E]/10 to-bnb-yellow/10 px-3 py-1 text-sm text-bnb-yellow"
        >
          <Tag size={14} />
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TaskTags;