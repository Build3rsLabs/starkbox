interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-6">
      <h2 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-2xl font-bold text-transparent">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-stark-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;