export interface Partner {
  name: string;
  description: string;
  status: 'Active' | 'Coming Soon';
  categories: string[];
  website?: string;
  stats?: {
    users: string;
    transactions: string;
    volume: string;
  };
}

export interface EcosystemStats {
  totalDapps: number;
  totalUsers: number;
  totalTransactions: number;
  totalVolume: number;
}