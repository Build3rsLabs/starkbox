export interface Project {
  id: string;
  name: string;
  description: string;
  website: string;
  totalBounties: number;
  totalPaid: number;
  activeTasks: number;
  tags: string[];
  chain: string;
  stats?: {
    successRate: number;
    avgReward: number;
    totalContributors: number;
  };
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subcategories: string[];
}