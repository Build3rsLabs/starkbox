import { ProtocolInfo } from '@/types/chain';

export const PROTOCOLS: ProtocolInfo[] = [
  {
    id: 'acala-dex',
    name: 'Acala DEX',
    description: 'Automated market maker and DEX built on Acala.',
    website: 'https://acala.network/dex',
    parachain: 'Acala',
    stats: {
      tvl: 150000000,
      dailyActiveUsers: 15000,
      totalTransactions: 5000000
    }
  },
  {
    id: 'astar-dapps-staking',
    name: 'Astar dApp Staking',
    description: 'Stake ASTR tokens to support your favorite dApps.',
    website: 'https://astar.network/dapp-staking',
    parachain: 'Astar',
    stats: {
      tvl: 200000000,
      dailyActiveUsers: 25000,
      totalTransactions: 8000000
    }
  },
  {
    id: 'moonwell',
    name: 'Moonwell',
    description: 'Lending and borrowing protocol on Moonbeam.',
    website: 'https://moonwell.fi',
    parachain: 'Moonbeam',
    stats: {
      tvl: 180000000,
      dailyActiveUsers: 20000,
      totalTransactions: 7000000
    }
  },
  {
    id: 'hydradx-omnipool',
    name: 'HydraDX Omnipool',
    description: 'Multi-asset liquidity pool with dynamic fees.',
    website: 'https://hydradx.io',
    parachain: 'HydraDX',
    stats: {
      tvl: 120000000,
      dailyActiveUsers: 12000,
      totalTransactions: 3000000
    }
  },
  {
    id: 'interbtc',
    name: 'interBTC',
    description: 'Trustless Bitcoin bridge on Polkadot.',
    website: 'https://interlay.io/interbtc',
    parachain: 'Interlay',
    stats: {
      tvl: 90000000,
      dailyActiveUsers: 5000,
      totalTransactions: 1000000
    }
  },
  {
    id: 'centrifuge-tinlake',
    name: 'Centrifuge Tinlake',
    description: 'Real-world asset financing pools.',
    website: 'https://centrifuge.io/tinlake',
    parachain: 'Centrifuge',
    stats: {
      tvl: 110000000,
      dailyActiveUsers: 3000,
      totalTransactions: 500000
    }
  }
];