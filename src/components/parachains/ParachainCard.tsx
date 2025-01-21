import { ExternalLink, Users, Activity, Database, Blocks } from 'lucide-react';
import { ParachainInfo } from '@/types/chain';
import { formatAmount } from '@/lib/utils';
import Card from '../common/Card';

interface ParachainCardProps {
  chain: ParachainInfo;
}

const ParachainCard = ({ chain }: ParachainCardProps) => {
  return (
    <div className="group">
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
              <Blocks className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {chain.name}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm text-gray-500">{chain.token.symbol}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(chain.website, '_blank');
                  }}
                  className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-700"
                >
                  Visit Website
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
          {chain.stats?.dailyActiveUsers && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-600">
              {(chain.stats.dailyActiveUsers / 1000).toFixed(1)}k
            </div>
          )}
        </div>

        <p className="mt-4 line-clamp-2 text-gray-600">
          {chain.description}
        </p>

        {chain.stats && (
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
            {chain.stats.tvl && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Database className="h-4 w-4 text-pink-600" />
                  <p className="font-semibold text-gray-900">{formatAmount(chain.stats.tvl)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">TVL</p>
              </div>
            )}
            {chain.stats.dailyActiveUsers && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Users className="h-4 w-4 text-pink-600" />
                  <p className="font-semibold text-gray-900">
                    {chain.stats.dailyActiveUsers.toLocaleString()}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Daily Users</p>
              </div>
            )}
            {chain.stats.totalTransactions && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Activity className="h-4 w-4 text-pink-600" />
                  <p className="font-semibold text-gray-900">
                    {chain.stats.totalTransactions.toLocaleString()}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">Transactions</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-sm text-gray-500">View Projects</span>
          <div className="h-5 w-5 text-pink-600 transition-transform group-hover:translate-x-1">→</div>
        </div>
      </Card>
    </div>
  );
};

export default ParachainCard;