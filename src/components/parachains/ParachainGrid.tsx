import { ParachainInfo } from '@/types/chain';
import ParachainCard from './ParachainCard';
import { Link } from 'react-router-dom';

interface ParachainGridProps {
  chains: ParachainInfo[];
}

const ParachainGrid = ({ chains }: ParachainGridProps) => {
  if (chains.length === 0) {
    return (
      <div className="rounded-lg border border-dot-border bg-dot-darker p-8 text-center">
        <p className="text-dot-text-dim">No parachains found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {chains.map((chain) => (
        <Link key={chain.id} to={`/projects?chain=${chain.id}`}>
          <ParachainCard chain={chain} />
        </Link>
      ))}
    </div>
  );
};

export default ParachainGrid;