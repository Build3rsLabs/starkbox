interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const CategoryFilters = ({ categories, selectedCategory, onCategorySelect }: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategorySelect(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          !selectedCategory
            ? 'bg-stark-primary text-stark-dark shadow-lg shadow-stark-primary/20'
            : 'bg-stark-primary/10 text-stark-primary hover:bg-stark-primary/20 hover:shadow-lg hover:shadow-stark-primary/10'
        }`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(
            selectedCategory === category ? null : category
          )}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-stark-primary text-stark-dark shadow-lg shadow-stark-primary/20'
              : 'bg-stark-primary/10 text-stark-primary hover:bg-stark-primary/20 hover:shadow-lg hover:shadow-stark-primary/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;