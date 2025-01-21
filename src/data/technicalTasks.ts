import { Task } from '@/types/task';

// Protocol Development Tasks
const PROTOCOL_TASKS: Task[] = [
  {
    id: 'protocol-1',
    title: 'Implement Cross-Chain Bridge',
    description: 'Design and implement a secure bridge for StarkNet assets with other EVM chains. Focus on optimizing for security and gas efficiency.',
    reward: {
      amount: 2000,
      token: 'STRK'
    },
    deadline: '2024-05-15',
    tags: ['Protocol', 'Bridge', 'Smart Contracts'],
    projectName: 'StarkNet Protocol',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '4-6 weeks',
    requirements: [
      'Deep understanding of EVM bridges',
      'Experience with cross-chain protocols',
      'Strong security background'
    ],
    skills: ['Cairo', 'Security', 'Protocol Design']
  },
  {
    id: 'protocol-2',
    title: 'Optimize StarkNet Node Performance',
    description: 'Improve the performance of StarkNet validator nodes to reduce latency and increase throughput. Focus on optimizing block propagation.',
    reward: {
      amount: 1500,
      token: 'STRK'
    },
    deadline: '2024-05-01',
    tags: ['Protocol', 'Performance', 'Node'],
    projectName: 'StarkNet Core',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    requirements: [
      'Experience with blockchain nodes',
      'Strong Rust programming skills',
      'Network optimization expertise'
    ],
    skills: ['Rust', 'Networking', 'Performance']
  }
];

// Smart Contract Tasks
const CONTRACT_TASKS: Task[] = [
  {
    id: 'contract-1',
    title: 'Develop Advanced DEX Features',
    description: 'Implement new features for StarkSwap including limit orders and stop-loss functionality.',
    reward: {
      amount: 1200,
      token: 'STRK'
    },
    deadline: '2024-04-20',
    tags: ['Smart Contracts', 'DeFi', 'DEX'],
    projectName: 'StarkSwap',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '2-3 weeks',
    requirements: [
      'Experience with DEX development',
      'Understanding of AMM mechanics',
      'Strong testing practices'
    ],
    skills: ['Cairo', 'DeFi', 'Testing']
  },
  {
    id: 'contract-2',
    title: 'Implement Yield Optimization',
    description: 'Create smart contracts for auto-compounding yield farming strategies on StarkNet.',
    reward: {
      amount: 1000,
      token: 'STRK'
    },
    deadline: '2024-04-25',
    tags: ['Smart Contracts', 'DeFi', 'Yield'],
    projectName: 'StarkVault',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '2 weeks',
    requirements: [
      'Deep understanding of yield farming',
      'Experience with StarkNet DeFi protocols',
      'Strong security mindset'
    ],
    skills: ['Cairo', 'DeFi', 'Security']
  }
];

// Frontend Tasks
const FRONTEND_TASKS: Task[] = [
  {
    id: 'frontend-1',
    title: 'Build Portfolio Dashboard',
    description: 'Create a comprehensive portfolio tracking dashboard for StarkNet assets with real-time price updates.',
    reward: {
      amount: 800,
      token: 'STRK'
    },
    deadline: '2024-04-18',
    tags: ['Frontend', 'DeFi', 'Dashboard'],
    projectName: 'StarkNet Portfolio',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    requirements: [
      'Experience with Web3 libraries',
      'Strong TypeScript skills',
      'Data visualization expertise'
    ],
    skills: ['React', 'TypeScript', 'Starknet.js']
  },
  {
    id: 'frontend-2',
    title: 'Implement NFT Marketplace Features',
    description: 'Add advanced features to NFT marketplace including bidding, auctions, and collection analytics.',
    reward: {
      amount: 900,
      token: 'STRK'
    },
    deadline: '2024-04-22',
    tags: ['Frontend', 'NFT', 'Marketplace'],
    projectName: 'StarkNet NFT Market',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    requirements: [
      'Experience with NFT standards',
      'Strong UI/UX skills',
      'Knowledge of marketplace mechanics'
    ],
    skills: ['React', 'Starknet.js', 'TypeScript']
  }
];

// Infrastructure Tasks
const INFRASTRUCTURE_TASKS: Task[] = [
  {
    id: 'infra-1',
    title: 'Build StarkNet Node Monitor',
    description: 'Develop a monitoring and alerting system for StarkNet validator nodes with performance metrics.',
    reward: {
      amount: 1100,
      token: 'STRK'
    },
    deadline: '2024-04-28',
    tags: ['Infrastructure', 'Monitoring', 'DevOps'],
    projectName: 'StarkNet Operations',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '3 weeks',
    requirements: [
      'Experience with monitoring systems',
      'Knowledge of StarkNet node operations',
      'DevOps expertise'
    ],
    skills: ['Prometheus', 'Grafana', 'DevOps']
  },
  {
    id: 'infra-2',
    title: 'Implement RPC Load Balancer',
    description: 'Build a high-performance RPC load balancer for StarkNet nodes with failover support.',
    reward: {
      amount: 1300,
      token: 'STRK'
    },
    deadline: '2024-05-05',
    tags: ['Infrastructure', 'Performance', 'RPC'],
    projectName: 'StarkNet RPC',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    requirements: [
      'Deep understanding of RPC protocols',
      'Experience with load balancing',
      'Performance optimization skills'
    ],
    skills: ['Rust', 'Networking', 'DevOps']
  }
];

// Testing and Security Tasks
const SECURITY_TASKS: Task[] = [
  {
    id: 'security-1',
    title: 'Smart Contract Security Audit',
    description: 'Perform a comprehensive security audit of StarkNet DeFi protocols, focusing on lending and AMM contracts.',
    reward: {
      amount: 1800,
      token: 'STRK'
    },
    deadline: '2024-05-10',
    tags: ['Security', 'Audit', 'Smart Contracts'],
    projectName: 'StarkNet Security',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: '3-4 weeks',
    requirements: [
      'Security auditing experience',
      'Deep knowledge of Cairo',
      'Understanding of DeFi exploits'
    ],
    skills: ['Security', 'Cairo', 'DeFi']
  },
  {
    id: 'security-2',
    title: 'Implement Automated Testing',
    description: 'Develop comprehensive automated testing suite for StarkNet smart contracts including fuzzing and invariant testing.',
    reward: {
      amount: 1000,
      token: 'STRK'
    },
    deadline: '2024-04-30',
    tags: ['Testing', 'Automation', 'QA'],
    projectName: 'StarkNet Testing',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    requirements: [
      'Experience with test automation',
      'Knowledge of testing frameworks',
      'Understanding of smart contracts'
    ],
    skills: ['Cairo', 'Testing', 'Automation']
  }
];

// Combine all technical tasks
export const TECHNICAL_TASKS: Task[] = [
  ...PROTOCOL_TASKS,
  ...CONTRACT_TASKS,
  ...FRONTEND_TASKS,
  ...INFRASTRUCTURE_TASKS,
  ...SECURITY_TASKS
];