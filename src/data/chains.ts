import { ParachainInfo } from '@/types/chain';

export const PARACHAINS: ParachainInfo[] = [
  {
    id: 'polkadot',
    name: 'Polkadot',
    token: {
      symbol: 'DOT',
      decimals: 10
    },
    description: 'Layer 0 protocol enabling cross-chain interoperability and shared security.',
    website: 'https://polkadot.network',
    stats: {
      tvl: 5000000000,
      dailyActiveUsers: 50000,
      totalTransactions: 15000000
    }
  },
  {
    id: 'acala',
    name: 'Acala',
    token: {
      symbol: 'ACA',
      decimals: 12
    },
    description: 'DeFi hub of Polkadot, offering a suite of financial primitives.',
    website: 'https://acala.network',
    stats: {
      tvl: 150000000,
      dailyActiveUsers: 15000,
      totalTransactions: 5000000
    }
  },
  {
    id: 'astar',
    name: 'Astar',
    token: {
      symbol: 'ASTR',
      decimals: 18
    },
    description: 'Multi-VM smart contract platform supporting EVM and WASM.',
    website: 'https://astar.network',
    stats: {
      tvl: 200000000,
      dailyActiveUsers: 25000,
      totalTransactions: 8000000
    }
  },
  {
    id: 'moonbeam',
    name: 'Moonbeam',
    token: {
      symbol: 'GLMR',
      decimals: 18
    },
    description: 'Ethereum-compatible smart contract parachain.',
    website: 'https://moonbeam.network',
    stats: {
      tvl: 180000000,
      dailyActiveUsers: 20000,
      totalTransactions: 7000000
    }
  },
  {
    id: 'phala',
    name: 'Phala Network',
    token: {
      symbol: 'PHA',
      decimals: 12
    },
    description: 'Confidential smart contract platform with TEE technology.',
    website: 'https://phala.network',
    stats: {
      dailyActiveUsers: 8000,
      totalTransactions: 2000000
    }
  },
  {
    id: 'hydradx',
    name: 'HydraDX',
    token: {
      symbol: 'HDX',
      decimals: 12
    },
    description: 'Cross-chain liquidity protocol with innovative AMM design.',
    website: 'https://hydradx.io',
    stats: {
      tvl: 120000000,
      dailyActiveUsers: 12000,
      totalTransactions: 3000000
    }
  },
  {
    id: 'interlay',
    name: 'Interlay',
    token: {
      symbol: 'INTR',
      decimals: 12
    },
    description: 'Bitcoin interoperability hub for Polkadot.',
    website: 'https://interlay.io',
    stats: {
      tvl: 90000000,
      dailyActiveUsers: 5000,
      totalTransactions: 1000000
    }
  },
  {
    id: 'centrifuge',
    name: 'Centrifuge',
    token: {
      symbol: 'CFG',
      decimals: 18
    },
    description: 'Real-world asset financing protocol.',
    website: 'https://centrifuge.io',
    stats: {
      tvl: 110000000,
      dailyActiveUsers: 3000,
      totalTransactions: 500000
    }
  }
];