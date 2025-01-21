import { ExternalLink, Users, Activity, Database, Box } from 'lucide-react';
import { ProtocolInfo } from '@/types/chain';
import { formatAmount } from '@/lib/utils';
import Card from '../common/Card';

interface ProtocolCardProps {
  protocol: ProtocolInfo;
}

const ProtocolCard = ({ protocol }: ProtocolCardProps) => {
  return (
    <Card variant="gradient">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-dot-primary/20 to-dot-secondary/20">
            <Box className="h-6 w-6 text-dot-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-dot-text-bright group-hover:text-dot-primary">
              {protocol.name}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <a
                href={protocol.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-dot-primary hover:text-dot-hover"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website
                <ExternalLink size={14} />
              </a>
              <span className="text-sm text-dot-text-dim">• {protocol.parachain}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-dot-text">
        {protocol.description}
      </p>

      {protocol.stats && (
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gradient-to-br from-dot-darker to-dot-dark p-4">
          {protocol.stats.tvl && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Database className="h-4 w-4 text-dot-primary" />
                <p className="font-semibold text-dot-text">{formatAmount(protocol.stats.tvl)}</p>
              </div>
              <p className="mt-1 text-sm text-dot-text-dim">TVL</p>
            </div>
          )}
          {protocol.stats.dailyActiveUsers && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Users className="h-4 w-4 text-dot-secondary" />
                <p className="font-semibold text-dot-text">
                  {protocol.stats.dailyActiveUsers.toLocaleString()}
                </p>
              </div>
              <p className="mt-1 text-sm text-dot-text-dim">Daily Users</p>
            </div>
          )}
          {protocol.stats.totalTransactions && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Activity className="h-4 w-4 text-dot-tertiary" />
                <p className="font-semibold text-dot-text">
                  {protocol.stats.totalTransactions.toLocaleString()}
                </p>
              </div>
              <p className="mt-1 text-sm text-dot-text-dim">Transactions</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default ProtocolCard;