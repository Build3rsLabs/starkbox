import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  // DeFi Projects
  {
    id: 'acala',
    name: 'Acala',
    description: 'DeFi hub of Polkadot offering staking, lending, and DEX services with native stablecoin aUSD.',
    website: 'https://acala.network',
    totalBounties: 45,
    totalPaid: 75000,
    activeTasks: 8,
    tags: ['DeFi', 'Staking', 'DEX', 'Stablecoin'],
    chain: 'Acala',
    stats: {
      successRate: 92,
      avgReward: 1200,
      totalContributors: 156
    }
  },
  {
    id: 'moonwell',
    name: 'Moonwell',
    description: 'Leading lending protocol on Moonbeam, enabling users to lend, borrow, and earn yield.',
    website: 'https://moonwell.fi',
    totalBounties: 38,
    totalPaid: 65000,
    activeTasks: 6,
    tags: ['DeFi', 'Lending', 'Yield'],
    chain: 'Moonbeam',
    stats: {
      successRate: 89,
      avgReward: 1100,
      totalContributors: 124
    }
  },
  {
    id: 'hydradx',
    name: 'HydraDX',
    description: 'Cross-chain liquidity protocol with innovative Omnipool AMM design.',
    website: 'https://hydradx.io',
    totalBounties: 32,
    totalPaid: 55000,
    activeTasks: 5,
    tags: ['DeFi', 'AMM', 'Cross-chain'],
    chain: 'HydraDX',
    stats: {
      successRate: 87,
      avgReward: 1300,
      totalContributors: 98
    }
  },
  // Infrastructure Projects
  {
    id: 'astar',
    name: 'Astar Network',
    description: 'Multi-VM smart contract platform supporting both EVM and WASM with unique dApp staking.',
    website: 'https://astar.network',
    totalBounties: 40,
    totalPaid: 70000,
    activeTasks: 7,
    tags: ['Infrastructure', 'Smart Contracts', 'dApp Staking'],
    chain: 'Astar',
    stats: {
      successRate: 94,
      avgReward: 1500,
      totalContributors: 142
    }
  },
  {
    id: 'phala',
    name: 'Phala Network',
    description: 'Privacy-preserving computation network using Trusted Execution Environments.',
    website: 'https://phala.network',
    totalBounties: 35,
    totalPaid: 58000,
    activeTasks: 6,
    tags: ['Infrastructure', 'Privacy', 'TEE'],
    chain: 'Phala',
    stats: {
      successRate: 91,
      avgReward: 1250,
      totalContributors: 112
    }
  },
  // Bridge Projects
  {
    id: 'interlay',
    name: 'Interlay',
    description: 'Trustless Bitcoin bridge enabling BTC usage in the Polkadot ecosystem.',
    website: 'https://interlay.io',
    totalBounties: 42,
    totalPaid: 72000,
    activeTasks: 8,
    tags: ['Bridge', 'Bitcoin', 'Cross-chain'],
    chain: 'Interlay',
    stats: {
      successRate: 93,
      avgReward: 1600,
      totalContributors: 134
    }
  },
  // RWA Projects
  {
    id: 'centrifuge',
    name: 'Centrifuge',
    description: 'Real-world asset tokenization and financing protocol.',
    website: 'https://centrifuge.io',
    totalBounties: 30,
    totalPaid: 52000,
    activeTasks: 5,
    tags: ['RWA', 'DeFi', 'Tokenization'],
    chain: 'Centrifuge',
    stats: {
      successRate: 88,
      avgReward: 1450,
      totalContributors: 92
    }
  }
];

export const PROJECT_CATEGORIES = [
  {
    id: 'defi',
    name: 'DeFi',
    description: 'Decentralized Finance protocols and applications',
    icon: '💰',
    subcategories: ['DEX', 'Lending', 'Staking', 'Yield']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'Core blockchain infrastructure and tooling',
    icon: '🏗️',
    subcategories: ['Parachains', 'Smart Contracts', 'Bridges', 'Privacy']
  },
  {
    id: 'bridges',
    name: 'Bridges',
    description: 'Cross-chain bridges and interoperability solutions',
    icon: '🌉',
    subcategories: ['Bitcoin', 'Ethereum', 'Cross-chain']
  },
  {
    id: 'rwa',
    name: 'Real World Assets',
    description: 'Real-world asset tokenization and financing',
    icon: '🏢',
    subcategories: ['Tokenization', 'Financing', 'NFT']
  }
];