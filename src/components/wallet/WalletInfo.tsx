import { User, ExternalLink } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import { formatAddress } from '@/lib/utils';
import Card from '../common/Card';

const WalletInfo = () => {
  const { account } = useWallet();

  if (!account) return null;

  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bnb-yellow/10">
          <User className="h-6 w-6 text-bnb-yellow" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-bnb-text-bright">{account.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-bnb-text-dim">{formatAddress(account.address)}</span>
            <a
              href={`https://bscscan.com/address/${account.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bnb-yellow hover:text-[#FFD75E]"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WalletInfo;