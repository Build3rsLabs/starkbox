import { Coins } from 'lucide-react';
import { formatAmount } from '@/lib/utils';

interface EarningsDisplayProps {
  earnings: Array<{
    amount: number;
    token: string;
  }>;
}

const EarningsDisplay = ({ earnings }: EarningsDisplayProps) => {
  const totalStrkValue = earnings.reduce((total, earning) => {
    // Mock conversion rates to STRK
    const rates: Record<string, number> = {
      STRK: 1,
      ETH: 2000  // 1 ETH = 2000 STRK
    };
    return total + (earning.amount * (rates[earning.token] || 0));
  }, 0);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Coins className="h-4 w-4 text-stark-primary" />
        <span className="text-lg font-semibold text-stark-primary">
          {formatAmount(totalStrkValue)} STRK
        </span>
      </div>
      <div className="space-y-1">
        {earnings.map(({ amount, token }) => (
          <div key={token} className="flex items-center justify-between text-sm">
            <span className="text-stark-text-secondary">{token}</span>
            <span className="font-medium text-stark-text-primary">{formatAmount(amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsDisplay;