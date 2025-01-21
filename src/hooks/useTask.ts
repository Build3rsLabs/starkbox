import { useState, useEffect } from 'react';
import { Task } from '@/types';
import { TASKS } from '@/data/tasks';

export function useTask(id: string) {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        // Simulate API call with local data
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundTask = TASKS.find(t => t.id === id);
        if (!foundTask) {
          throw new Error('Task not found');
        }
        setTask(foundTask);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch task'));
      } finally {
        setLoading(false);
      }
    }

    fetchTask();
  }, [id]);

  return { task, loading, error };
}