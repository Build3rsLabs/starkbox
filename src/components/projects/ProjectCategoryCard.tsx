import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCategoryProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  projectCount: number;
}

const ProjectCategoryCard = ({ id, name, description, icon, projectCount }: ProjectCategoryProps) => {
  return (
    <Link to={`/projects?category=${id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cosmos-darker via-cosmos-dark to-cosmos-darker p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cosmos-primary/10">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmos-primary/5 via-cosmos-secondary/5 to-cosmos-tertiary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Content */}
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cosmos-primary/20 to-cosmos-secondary/20 text-2xl">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cosmos-text-bright group-hover:text-cosmos-primary">
                  {name}
                </h3>
                <p className="text-sm text-cosmos-text-dim">{projectCount} Projects</p>
              </div>
            </div>
          </div>

          <p className="mt-4 line-clamp-2 text-cosmos-text">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-cosmos-border/10 pt-4">
            <span className="text-sm text-cosmos-text-dim">View Projects</span>
            <ArrowRight className="h-5 w-5 text-cosmos-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCategoryCard;