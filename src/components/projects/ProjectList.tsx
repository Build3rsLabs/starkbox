import { Project } from '@/types';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-avalanche-border bg-avalanche-darker p-8 text-center">
        <p className="text-avalanche-gray">No projects found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;