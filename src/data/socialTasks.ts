import { Task } from '@/types/task';

export const SOCIAL_TASKS: Task[] = [
  {
    id: 'social-1',
    title: 'Create StarkNet Educational Content',
    description: 'Develop a comprehensive series of educational content explaining StarkNet development, DeFi concepts, and best practices for building on StarkNet.',
    reward: {
      amount: 500,
      token: 'STRK'
    },
    deadline: '2024-04-25',
    tags: ['Content', 'Education', 'Social Media'],
    projectName: 'StarkNet Academy',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    requirements: [
      'Strong understanding of StarkNet ecosystem',
      'Experience creating educational content',
      'Excellent writing and communication skills'
    ],
    skills: ['Content Creation', 'Technical Writing', 'DeFi']
  },
  {
    id: 'social-2',
    title: 'DeFi Tutorial Series',
    description: 'Create a series of professional video tutorials showcasing how to build DeFi applications on StarkNet.',
    reward: {
      amount: 750,
      token: 'STRK'
    },
    deadline: '2024-05-01',
    tags: ['Video', 'Education', 'DeFi'],
    projectName: 'StarkNet Academy',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '3 weeks',
    requirements: [
      'Professional video production skills',
      'Experience with StarkNet DeFi protocols',
      'Strong presentation abilities'
    ],
    skills: ['Video Production', 'DeFi', 'Public Speaking']
  },
  {
    id: 'social-3',
    title: 'Community Growth Strategy',
    description: 'Develop and execute a comprehensive strategy to grow StarkNet\'s presence across Twitter, Discord, and Telegram communities.',
    reward: {
      amount: 600,
      token: 'STRK'
    },
    deadline: '2024-04-28',
    tags: ['Community', 'Strategy', 'Social Media'],
    projectName: 'StarkNet Community',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2-3 weeks',
    requirements: [
      'Experience in crypto community management',
      'Strong analytical skills',
      'Knowledge of community growth tactics'
    ],
    skills: ['Community Management', 'Analytics', 'Social Media']
  },
  {
    id: 'social-4',
    title: 'DeFi Analytics Content',
    description: 'Create daily analytics content covering major StarkNet DeFi protocols, including TVL analysis and yield comparisons.',
    reward: {
      amount: 450,
      token: 'STRK'
    },
    deadline: '2024-04-20',
    tags: ['Analysis', 'DeFi', 'Content'],
    projectName: 'StarkNet Research',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'advanced',
    estimatedTime: 'Ongoing',
    requirements: [
      'Professional DeFi analytics experience',
      'Strong data analysis skills',
      'Ability to explain complex concepts clearly'
    ],
    skills: ['Data Analysis', 'DeFi', 'Content Creation']
  },
  {
    id: 'social-5',
    title: 'StarkNet Developer Workshop',
    description: 'Design and deliver a series of online workshops teaching developers how to build on StarkNet.',
    reward: {
      amount: 800,
      token: 'STRK'
    },
    deadline: '2024-04-22',
    tags: ['Education', 'Workshop', 'Development'],
    projectName: 'StarkNet Academy',
    status: 'open',
    chain: 'StarkNet',
    difficulty: 'intermediate',
    estimatedTime: '2 weeks',
    requirements: [
      'Experience in StarkNet development',
      'Teaching experience',
      'Strong communication skills'
    ],
    skills: ['Teaching', 'Development', 'Communication']
  }
];