import { Link } from 'react-router-dom';
import { CosmosChain } from '@/types';
import { Blocks, ArrowRight, Briefcase, Trophy, Coins } from 'lucide-react';
import { formatAmount } from '@/lib/utils';
import Card from '../common/Card';

interface BlockchainCardProps {
  chain: CosmosChain & { description?: string };
  stats: {
    projects: number;
    totalBounties: number;
    totalPaid: number;
  };
}

const BlockchainCard = ({ chain, stats }: BlockchainCardProps) => {
  return (
    <Link to={`/projects?chain=${chain.id}`}>
      <Card variant="gradient">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cosmos-primary/20 to-cosmos-secondary/20">
              <Blocks className="h-6 w-6 text-cosmos-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cosmos-text-bright group-hover:text-cosmos-primary">
                {chain.name}
              </h3>
              <p className="text-sm text-cosmos-text-dim">{chain.symbol}</p>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cosmos-primary/20 to-cosmos-secondary/20 text-cosmos-primary">
            {stats.projects}
          </div>
        </div>

        {chain.description && (
          <p className="mt-4 line-clamp-2 text-cosmos-text">
            {chain.description}
          </p>
        )}

        <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gradient-to-br from-cosmos-darker to-cosmos-dark p-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Briefcase className="h-4 w-4 text-cosmos-primary" />
              <p className="font-semibold text-cosmos-text">{stats.projects}</p>
            </div>
            <p className="mt-1 text-sm text-cosmos-text-dim">Projects</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Trophy className="h-4 w-4 text-cosmos-secondary" />
              <p className="font-semibold text-cosmos-text">{stats.totalBounties}</p>
            </div>
            <p className="mt-1 text-sm text-cosmos-text-dim">Bounties</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Coins className="h-4 w-4 text-cosmos-tertiary" />
              <p className="font-semibold text-cosmos-primary">
                {formatAmount(stats.totalPaid)}
              </p>
            </div>
            <p className="mt-1 text-sm text-cosmos-text-dim">Paid</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-cosmos-border/10 pt-4">
          <span className="text-sm text-cosmos-text-dim">View Projects</span>
          <ArrowRight className="h-5 w-5 text-cosmos-primary transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};

export default BlockchainCard;