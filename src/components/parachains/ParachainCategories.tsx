import { CHAIN_CATEGORIES } from '@/data/chains';
import ParachainCategoryCard from './ParachainCategoryCard';

interface ParachainCategoriesProps {
  getChainCountByCategory: (categoryId: string) => number;
}

const ParachainCategories = ({ getChainCountByCategory }: ParachainCategoriesProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CHAIN_CATEGORIES.map((category) => (
        <ParachainCategoryCard
          key={category.id}
          {...category}
          chainCount={getChainCountByCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default ParachainCategories;