import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import NavLinks from './nav/NavLinks';
import WalletButton from './WalletButton';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-stark-primary/20 bg-stark-darker/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent blur-sm opacity-50 transition-opacity group-hover:opacity-100" />
                <div className="relative rounded-xl bg-stark-darker/90 p-2">
                  <Code2 className="h-6 w-6 text-stark-primary transition-all duration-200 group-hover:scale-110" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-xl font-bold text-transparent">
                StarkBox
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <NavLinks />
            <div className="h-6 w-px bg-gradient-to-b from-stark-primary/5 via-stark-primary/20 to-stark-primary/5" />
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;