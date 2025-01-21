import { useState } from 'react';
import { PARACHAINS } from '@/data/chains';
import ParachainGrid from '@/components/parachains/ParachainGrid';
import ParachainHeader from '@/components/parachains/ParachainHeader';
import SearchInput from '@/components/common/SearchInput';

const BlockchainsPage = () => {
  const [search, setSearch] = useState('');

  const filteredChains = PARACHAINS.filter(chain => {
    if (!search) return true;
    
    return chain.name.toLowerCase().includes(search.toLowerCase()) ||
           chain.description?.toLowerCase().includes(search.toLowerCase()) ||
           chain.token.symbol.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-dot-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ParachainHeader />
        
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-dot-primary/5 to-transparent opacity-50" />
          
          {/* Content with backdrop blur */}
          <div className="relative rounded-2xl border border-white/10 bg-dot-darker/50 p-8 backdrop-blur-sm">
            <div className="mb-8 rounded-xl border border-white/10 bg-dot-dark p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Search Parachains
              </h2>
              <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Search by name, description, or token..."
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-dot-dark p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  All Parachains
                </h2>
                <div className="text-dot-text-dim">
                  Showing {filteredChains.length} of {PARACHAINS.length} parachains
                </div>
              </div>
              <ParachainGrid chains={filteredChains} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainsPage;