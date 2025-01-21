import { Tag } from 'lucide-react';

interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 rounded-full bg-avalanche-primary/10 px-3 py-1 text-sm text-avalanche-primary"
        >
          <Tag size={14} />
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;