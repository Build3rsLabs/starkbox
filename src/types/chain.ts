export interface ParachainInfo {
  id: string;
  name: string;
  token: {
    symbol: string;
    decimals: number;
  };
  description: string;
  website: string;
  stats?: ChainStats;
}

export interface ChainStats {
  tvl?: number;
  dailyActiveUsers?: number;
  totalTransactions?: number;
}

export interface ProtocolInfo {
  id: string;
  name: string;
  description: string;
  website: string;
  parachain: string;
  logo?: string;
  stats?: ChainStats;
}