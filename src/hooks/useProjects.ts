import { useState, useEffect } from 'react';
import { Project } from '@/types';
import { PROJECTS } from '@/data/projects';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Simulate API call with local data
        await new Promise(resolve => setTimeout(resolve, 500));
        setProjects(PROJECTS);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch projects'));
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}