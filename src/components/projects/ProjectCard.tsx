import { Link } from 'react-router-dom';
import { ExternalLink, Layout, Briefcase, Coins, Users, ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';
import { formatAmount } from '@/lib/utils';
import Card from '../common/Card';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dot-primary/10">
            <Layout className="h-6 w-6 text-dot-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-dot-primary">
              {project.name}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-dot-primary hover:text-dot-hover"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website
                <ExternalLink size={14} />
              </a>
              <span className="text-sm text-gray-500">• {project.chain}</span>
            </div>
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dot-primary/10 text-dot-primary">
          {project.activeTasks}
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-gray-600">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-dot-primary/10 px-3 py-1 text-sm text-dot-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Briefcase className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-gray-900">{project.activeTasks}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Active Tasks</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Users className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-gray-900">{project.totalBounties}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Contributors</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Coins className="h-4 w-4 text-dot-primary" />
            <p className="font-semibold text-dot-primary">
              {formatAmount(project.totalPaid)}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Total Paid</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="text-sm text-gray-500">View Details</span>
        <ArrowRight className="h-5 w-5 text-dot-primary opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </Card>
  );
};

export default ProjectCard;