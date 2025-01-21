import { useState } from 'react';
import { PROTOCOLS } from '@/data/protocols';
import { PARACHAINS } from '@/data/chains';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectSearch from '@/components/projects/ProjectSearch';
import ProtocolGrid from '@/components/protocols/ProtocolGrid';
import ParachainGrid from '@/components/parachains/ParachainGrid';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';

const ProjectsPage = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'protocols' | 'parachains'>('protocols');

  const filteredProtocols = PROTOCOLS.filter(protocol => {
    if (!search) return true;
    
    return protocol.name.toLowerCase().includes(search.toLowerCase()) ||
           protocol.description.toLowerCase().includes(search.toLowerCase()) ||
           protocol.parachain.toLowerCase().includes(search.toLowerCase());
  });

  const filteredChains = PARACHAINS.filter(chain => {
    if (!search) return true;
    
    return chain.name.toLowerCase().includes(search.toLowerCase()) ||
           chain.description?.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-dot-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectHeader />
        
        <div className="mb-8">
          <ProjectSearch value={search} onChange={setSearch} />
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'protocols' | 'parachains')}>
            <TabsList className="mt-4">
              <TabsTrigger value="protocols">Protocols</TabsTrigger>
              <TabsTrigger value="parachains">Parachains</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dot-primary/5 to-transparent opacity-50" />
          <div className="relative">
            {activeTab === 'protocols' ? (
              <>
                <h2 className="mb-6 text-2xl font-bold text-dot-text-bright">
                  All Protocols
                </h2>
                <ProtocolGrid protocols={filteredProtocols} />
              </>
            ) : (
              <>
                <h2 className="mb-6 text-2xl font-bold text-dot-text-bright">
                  All Parachains
                </h2>
                <ParachainGrid chains={filteredChains} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;