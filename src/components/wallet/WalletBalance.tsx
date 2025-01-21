import { Coins } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import Card from '../common/Card';

const WalletBalance = () => {
  const { account } = useWallet();

  if (!account) return null;

  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-stark-primary" />
        <h3 className="text-lg font-semibold text-stark-text-primary">Your Balance</h3>
      </div>
      <div className="space-y-2">
        {account.balance.map(({ token, amount }) => (
          <div
            key={token}
            className="flex items-center justify-between rounded-lg bg-stark-darker p-3"
          >
            <span className="text-stark-text-secondary">{token}</span>
            <span className="font-medium text-stark-text-primary">{amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WalletBalance;