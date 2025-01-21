import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';
import LeaderboardStats from '@/components/leaderboard/LeaderboardStats';
import LeaderboardHeader from '@/components/leaderboard/LeaderboardHeader';
import LeaderboardControls from '@/components/leaderboard/LeaderboardControls';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import { useFilteredLeaderboard } from '@/hooks/useFilteredLeaderboard';

const LeaderboardPage = () => {
  const { entries, loading, error } = useLeaderboard();
  const {
    filteredEntries,
    search,
    setSearch,
    setFilters
  } = useFilteredLeaderboard(entries);

  if (error) {
    throw error;
  }

  return (
    <div className="min-h-screen bg-stark-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-radial from-stark-primary/10 via-transparent to-transparent" />
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] bg-gradient-radial from-stark-secondary/5 via-transparent to-transparent blur-3xl" />
        
        <div className="relative">
          <LeaderboardHeader />

          <div className="space-y-6">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <LeaderboardStats entries={entries} />
                
                <div className="relative rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-8 backdrop-blur-xl">
                  <LeaderboardControls
                    search={search}
                    onSearchChange={setSearch}
                    onFilterChange={setFilters}
                  />

                  <div className="mt-8">
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-2xl font-bold text-transparent">
                        Top StarkNet Builders
                      </h2>
                      <div className="text-stark-text-secondary">
                        Showing {filteredEntries.length} of {entries.length} builders
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-stark-primary/20 bg-stark-darker/80 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-stark-primary/[0.03] to-stark-secondary/[0.03] opacity-50" />
                      <div className="relative">
                        <LeaderboardTable entries={filteredEntries} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;