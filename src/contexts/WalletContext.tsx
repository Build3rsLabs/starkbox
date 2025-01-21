import { createContext, useContext, useState, ReactNode } from 'react';
import { WalletAccount, WalletContextState } from '@/types/wallet';

const MOCK_ACCOUNT: WalletAccount = {
  address: '0x1234567890abcdef1234567890abcdef12345678',
  name: 'StarkBuilder',
  balance: [
    { token: 'STRK', amount: 1500 },
    { token: 'ETH', amount: 0.5 }
  ]
};

const WalletContext = createContext<WalletContextState | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<WalletAccount | null>(null);

  const connect = async () => {
    try {
      // In a real implementation, this would connect to a Web3 wallet
      setAccount(MOCK_ACCOUNT);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = () => {
    setAccount(null);
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        account,
        connect,
        disconnect
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}