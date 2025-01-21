import { Partner } from '@/types/ecosystem';

export const ECOSYSTEM_CATEGORIES = [
  'DeFi',
  'DEX',
  'Lending',
  'Derivatives',
  'Infrastructure',
  'Bridge',
  'Analytics',
  'Wallet',
  'Tools'
];

// Ecosystem statistics
export const ECOSYSTEM_STATS = {
  totalDapps: 100,
  totalUsers: 0.5,  // 500K users
  totalTransactions: 10, // 10M transactions
  totalVolume: 2  // $2B total volume
};

export const ECOSYSTEM_PARTNERS: Partner[] = [
  {
    name: 'StarkSwap',
    description: 'Leading DEX on StarkNet with concentrated liquidity and advanced trading features.',
    status: 'Active',
    categories: ['DeFi', 'DEX'],
    website: 'https://starkswap.co',
    stats: {
      users: '100K+',
      transactions: '2M+',
      volume: '$800M+'
    }
  },
  {
    name: 'StarkVault',
    description: 'Lending protocol built natively for StarkNet with innovative liquidation mechanisms.',
    status: 'Active',
    categories: ['DeFi', 'Lending'],
    website: 'https://starkvault.fi',
    stats: {
      users: '50K+',
      transactions: '1M+',
      volume: '$500M+'
    }
  },
  {
    name: 'StarkPerps',
    description: 'Perpetual trading protocol with up to 50x leverage powered by StarkNet.',
    status: 'Active',
    categories: ['DeFi', 'Derivatives', 'Trading'],
    website: 'https://starkperps.xyz',
    stats: {
      users: '25K+',
      transactions: '500K+',
      volume: '$300M+'
    }
  },
  {
    name: 'StarkBridge',
    description: 'Official bridge for transferring assets between Ethereum and StarkNet.',
    status: 'Active',
    categories: ['Bridge', 'Infrastructure'],
    website: 'https://starkbridge.io',
    stats: {
      users: '200K+',
      transactions: '3M+',
      volume: '$1B+'
    }
  },
  {
    name: 'StarkScan',
    description: 'Block explorer and analytics platform for StarkNet.',
    status: 'Active',
    categories: ['Tools', 'Analytics'],
    website: 'https://starkscan.co',
    stats: {
      users: '300K+',
      transactions: '5M+',
      volume: 'N/A'
    }
  }
];