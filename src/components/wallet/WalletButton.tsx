import { Wallet } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import { formatAddress } from '@/lib/utils';
import Button from '../ui/Button';

const WalletButton = () => {
  const { isConnected, account, connect, disconnect } = useWallet();

  if (isConnected && account) {
    return (
      <div className="relative group">
        <Button
          variant="outline"
          onClick={disconnect}
          className="flex items-center gap-2 border-2 border-stark-primary bg-stark-darker text-stark-primary transition-all duration-300 hover:bg-stark-primary hover:text-stark-dark"
        >
          <Wallet size={18} />
          <span className="font-mono">{formatAddress(account.address)}</span>
        </Button>
        
        {/* Hover tooltip */}
        <div className="absolute right-0 top-full z-50 mt-2 hidden min-w-[200px] rounded-lg border border-stark-primary/20 bg-stark-dark p-3 shadow-lg group-hover:block">
          <div className="space-y-2">
            {account.balance.map(({ token, amount }) => (
              <div key={token} className="flex items-center justify-between">
                <span className="text-sm text-stark-text-secondary">{token}</span>
                <span className="font-medium text-stark-text-primary">{amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Button
      onClick={connect}
      className="group relative overflow-hidden bg-gradient-to-r from-stark-primary to-stark-secondary px-6 py-2 text-stark-dark transition-all hover:from-stark-secondary hover:to-stark-primary"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Wallet size={18} />
        Connect Wallet
      </span>
    </Button>
  );
};

export default WalletButton;