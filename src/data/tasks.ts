import { Task } from '@/types/task';
import { SOCIAL_TASKS } from './socialTasks';
import { TECHNICAL_TASKS } from './technicalTasks';

// Combine all tasks
export const TASKS: Task[] = [...TECHNICAL_TASKS, ...SOCIAL_TASKS];