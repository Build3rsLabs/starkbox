import { useState, useMemo } from 'react';
import { Task } from '@/types';
import { TaskFilters } from '@/components/TaskFilters';
import { SortOption } from '@/components/TaskSort';

export function useFilteredTasks(tasks: Task[]) {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<TaskFilters>({
    minReward: null,
    maxReward: null,
    tags: [],
    status: ['open']
  });
  const [sort, setSort] = useState<SortOption>({
    value: 'reward',
    label: 'Reward',
    direction: 'desc'
  });

  const filteredTasks = useMemo(() => {
    // First apply filters
    const filtered = tasks.filter(task => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesSearch = 
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower) ||
          task.projectName.toLowerCase().includes(searchLower) ||
          task.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Status filter
      if (filters.status.length && !filters.status.includes(task.status)) {
        return false;
      }

      // Tags filter
      if (filters.tags.length && !filters.tags.some(tag => task.tags.includes(tag))) {
        return false;
      }

      // Reward range filter
      if (filters.minReward !== null && task.reward < filters.minReward) {
        return false;
      }
      if (filters.maxReward !== null && task.reward > filters.maxReward) {
        return false;
      }

      return true;
    });

    // Then apply sorting
    return [...filtered].sort((a, b) => {
      const modifier = sort.direction === 'asc' ? 1 : -1;
      
      switch (sort.value) {
        case 'reward':
          return (a.reward - b.reward) * modifier;
        case 'deadline':
          return (new Date(a.deadline).getTime() - new Date(b.deadline).getTime()) * modifier;
        case 'submissions':
          return ((a.submissions || 0) - (b.submissions || 0)) * modifier;
        default:
          return 0;
      }
    });
  }, [tasks, search, filters, sort]);

  return {
    filteredTasks,
    search,
    setSearch,
    filters,
    setFilters,
    sort,
    setSort
  };
}