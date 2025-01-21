import { useState, useEffect } from 'react';
import { Task } from '@/types';
import { TASKS } from '@/data/tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        // Simulate API call with local data
        await new Promise(resolve => setTimeout(resolve, 500));
        setTasks(TASKS);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch tasks'));
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return { tasks, loading, error };
}