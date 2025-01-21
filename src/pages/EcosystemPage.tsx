import { useState } from 'react';
import GradientHeader from '@/components/common/GradientHeader';
import PartnerCard from '@/components/ecosystem/PartnerCard';
import PartnerSearch from '@/components/ecosystem/PartnerSearch';
import CategoryFilters from '@/components/ecosystem/CategoryFilters';
import EcosystemStats from '@/components/ecosystem/EcosystemStats';
import { ECOSYSTEM_PARTNERS, ECOSYSTEM_CATEGORIES } from '@/data/ecosystem';

const EcosystemPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPartners = ECOSYSTEM_PARTNERS.filter(partner => {
    const matchesSearch = !search || 
      partner.name.toLowerCase().includes(search.toLowerCase()) ||
      partner.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = !selectedCategory || 
      partner.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-stark-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GradientHeader
          title="StarkNet Ecosystem"
          description="Explore the growing ecosystem of protocols and integrations"
          align="center"
        />

        <EcosystemStats />

        {/* Search & Filters */}
        <div className="mb-8 space-y-6 rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-stark-primary">Search Protocols</h2>
            <PartnerSearch value={search} onChange={setSearch} />
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold text-stark-primary">Categories</h2>
            <CategoryFilters
              categories={ECOSYSTEM_CATEGORIES}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-stark-primary">
              All Protocols
            </h2>
            <div className="text-stark-text-secondary">
              Showing {filteredPartners.length} of {ECOSYSTEM_PARTNERS.length} protocols
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="rounded-lg border border-stark-primary/20 bg-stark-dark/40 p-8 text-center">
              <p className="text-stark-text-secondary">No protocols found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;