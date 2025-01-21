import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from '@/contexts/WalletContext';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/ErrorBoundary';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TaskPage from './pages/TaskPage';
import LeaderboardPage from './pages/LeaderboardPage';
import EcosystemPage from './pages/EcosystemPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WalletProvider>
        <Router>
          <div className="min-h-screen bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/tasks/:id" element={<TaskPage />} />
              <Route path="/ecosystem" element={<EcosystemPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </Router>
      </WalletProvider>
    </ErrorBoundary>
  );
}

export default App;