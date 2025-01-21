import { Trophy, User, ListTodo, Coins } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import NavLink from './NavLink';

const NAV_ITEMS = [
  { to: '/tasks', icon: ListTodo, label: 'Tasks' },
  { to: '/ecosystem', icon: Coins, label: 'Ecosystem' },
  { to: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
];

const NavLinks = () => {
  const { isConnected } = useWallet();

  return (
    <div className="flex items-center gap-2">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.to} {...item} />
      ))}
      {isConnected && (
        <NavLink to="/profile" icon={User} label="Profile" />
      )}
    </div>
  );
};

export default NavLinks;