import { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useProfile } from '@/hooks/useProfile';
import WalletInfo from '@/components/wallet/WalletInfo';
import WalletBalance from '@/components/wallet/WalletBalance';

const ProfilePage = () => {
  const { isConnected, account } = useWallet();
  const { profile, loading, error } = useProfile(account?.address || null);
  const [activeTab, setActiveTab] = useState<'tasks' | 'earnings' | 'settings'>('tasks');

  if (!isConnected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stark-darker">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-stark-primary">Connect Your Wallet</h1>
          <p className="mb-8 text-stark-text-secondary">Please connect your wallet to view your profile</p>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    );
  }

  if (error) {
    throw error;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-stark-darker py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stark-darker py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-6">
            <WalletInfo />
            <WalletBalance />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-6 flex gap-4 border-b border-stark-primary/20">
              <button
                className={`border-b-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'tasks'
                    ? 'border-stark-primary text-stark-primary'
                    : 'border-transparent text-stark-text-secondary hover:text-stark-text-primary'
                }`}
                onClick={() => setActiveTab('tasks')}
              >
                Active Tasks
              </button>
              <button
                className={`border-b-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'earnings'
                    ? 'border-stark-primary text-stark-primary'
                    : 'border-transparent text-stark-text-secondary hover:text-stark-text-primary'
                }`}
                onClick={() => setActiveTab('earnings')}
              >
                Earnings History
              </button>
              <button
                className={`border-b-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'settings'
                    ? 'border-stark-primary text-stark-primary'
                    : 'border-transparent text-stark-text-secondary hover:text-stark-text-primary'
                }`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </div>

            {/* Tab Content */}
            <div className="rounded-xl border border-stark-primary/20 bg-stark-dark/40 p-6">
              {activeTab === 'tasks' && (
                <div className="space-y-4">
                  {profile?.activeTasks?.length ? (
                    profile.activeTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between rounded-lg border border-stark-primary/20 bg-stark-darker p-4 transition-all duration-200 hover:border-stark-primary/50"
                      >
                        <div>
                          <h3 className="font-medium text-stark-text-primary">{task.title}</h3>
                          <p className="text-sm text-stark-text-secondary">{task.projectName}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-stark-primary">{task.reward.amount} {task.reward.token}</p>
                          <p className="text-sm text-stark-text-secondary">Due {task.deadline}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-stark-text-secondary">No active tasks</p>
                  )}
                </div>
              )}

              {activeTab === 'earnings' && (
                <div className="space-y-4">
                  {profile?.earningsHistory?.length ? (
                    profile.earningsHistory.map((earning) => (
                      <div
                        key={earning.id}
                        className="flex items-center justify-between rounded-lg border border-stark-primary/20 bg-stark-darker p-4"
                      >
                        <div>
                          <h3 className="font-medium text-stark-text-primary">{earning.taskTitle}</h3>
                          <p className="text-sm text-stark-text-secondary">{earning.date}</p>
                        </div>
                        <p className="font-medium text-stark-primary">{earning.amount} ETH</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-stark-text-secondary">No earnings history</p>
                  )}
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="max-w-md space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-stark-text-primary">Username</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border border-stark-primary/20 bg-stark-darker px-3 py-2 text-stark-text-primary placeholder-stark-text-secondary focus:border-stark-primary focus:outline-none focus:ring-1 focus:ring-stark-primary"
                      defaultValue={profile?.username}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stark-text-primary">
                      Email Notifications
                    </label>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="text-stark-primary focus:ring-stark-primary"
                        />
                        <span className="text-sm text-stark-text-secondary">New task recommendations</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="text-stark-primary focus:ring-stark-primary"
                        />
                        <span className="text-sm text-stark-text-secondary">Task status updates</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="text-stark-primary focus:ring-stark-primary"
                        />
                        <span className="text-sm text-stark-text-secondary">Payment notifications</span>
                      </label>
                    </div>
                  </div>
                  <Button>Save Changes</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;