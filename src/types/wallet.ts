export interface WalletAccount {
  address: string;
  name: string;
  balance: {
    token: string;
    amount: number;
  }[];
}

export interface WalletContextState {
  isConnected: boolean;
  account: WalletAccount | null;
  connect: () => void;
  disconnect: () => void;
}