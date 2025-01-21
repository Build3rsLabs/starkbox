import { ProtocolInfo } from '@/types/chain';
import ProtocolCard from './ProtocolCard';

interface ProtocolGridProps {
  protocols: ProtocolInfo[];
}

const ProtocolGrid = ({ protocols }: ProtocolGridProps) => {
  if (protocols.length === 0) {
    return (
      <div className="rounded-lg border border-dot-border bg-dot-darker p-8 text-center">
        <p className="text-dot-text-dim">No protocols found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {protocols.map((protocol) => (
        <ProtocolCard key={protocol.id} protocol={protocol} />
      ))}
    </div>
  );
};

export default ProtocolGrid;