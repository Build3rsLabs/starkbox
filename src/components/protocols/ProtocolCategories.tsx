import { PROTOCOL_CATEGORIES } from '@/data/protocols';
import ProjectCategoryCard from '../projects/ProjectCategoryCard';

interface ProtocolCategoriesProps {
  getProtocolCountByCategory: (categoryId: string) => number;
}

const ProtocolCategories = ({ getProtocolCountByCategory }: ProtocolCategoriesProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROTOCOL_CATEGORIES.map((category) => (
        <ProjectCategoryCard
          key={category.id}
          {...category}
          projectCount={getProtocolCountByCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default ProtocolCategories;