import { useState, useMemo } from 'react';
import { LeaderboardEntry } from '@/types';
import { LeaderboardFilters } from '@/components/leaderboard/LeaderboardFilters';

export function useFilteredLeaderboard(entries: LeaderboardEntry[]) {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<LeaderboardFilters>({
    timeRange: 'all',
    category: [],
    minEarnings: null
  });

  const filteredEntries = useMemo(() => {
    return entries.filter(entry => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        if (!entry.username.toLowerCase().includes(searchLower) &&
            !entry.address.toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Minimum earnings filter
      if (filters.minEarnings !== null && entry.totalEarned < filters.minEarnings) {
        return false;
      }

      // Time range filter would go here if we had timestamp data
      // Category filter would go here if we had category data

      return true;
    });
  }, [entries, search, filters]);

  return {
    filteredEntries,
    search,
    setSearch,
    filters,
    setFilters
  };
}