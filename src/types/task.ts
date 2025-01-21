export interface Task {
  id: string;
  title: string;
  description: string;
  reward: {
    amount: number;
    token: string;
  };
  deadline: string;
  tags: string[];
  projectName: string;
  status: 'open' | 'in_progress' | 'completed';
  submissions?: number;
  chain: string;
  requirements?: string[];
  skills?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  githubUrl?: string;
}

export interface TaskSubmission {
  id: string;
  taskId: string;
  submitter: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  githubPr?: string;
  feedback?: string;
}