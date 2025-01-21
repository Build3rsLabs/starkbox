import { Link } from 'react-router-dom';
import { Code2, Shield, Zap, Cpu, ArrowRight } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/home/FeatureCard';

const HomePage = () => {
  const { isConnected, connect } = useWallet();

  return (
    <div className="min-h-screen bg-stark-darker">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-radial from-stark-primary/10 via-transparent to-transparent" />
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] bg-gradient-radial from-stark-secondary/5 via-transparent to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-12 shadow-2xl shadow-stark-primary/10 backdrop-blur-xl">
            <div className="text-center">
              <div className="mx-auto max-w-3xl">
                <h1 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
                  Build on StarkNet
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-xl text-stark-text-secondary">
                  Join the most advanced ZK rollup ecosystem and earn rewards for your contributions
                </p>
                
                <div className="mt-12 flex items-center justify-center gap-6">
                  <Link to="/tasks">
                    <Button 
                      size="lg" 
                      className="group relative overflow-hidden bg-gradient-to-r from-stark-primary to-stark-secondary px-8 py-4 text-stark-dark transition-all hover:from-stark-secondary hover:to-stark-primary"
                    >
                      <span className="relative z-10 flex items-center gap-2 font-semibold">
                        Explore Tasks
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  {!isConnected && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={connect}
                      className="group flex items-center gap-2 border-2 border-stark-primary text-stark-primary hover:bg-stark-primary hover:text-stark-dark"
                    >
                      <Code2 className="h-5 w-5" />
                      Connect Wallet
                    </Button>
                  )}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 gap-8 rounded-xl border border-stark-primary/10 bg-stark-darker/50 p-8 backdrop-blur-sm sm:grid-cols-4">
                  <div>
                    <p className="text-3xl font-bold text-stark-primary">$2B+</p>
                    <p className="mt-2 text-sm text-stark-text-secondary">Total Value Locked</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-stark-primary">500K+</p>
                    <p className="mt-2 text-sm text-stark-text-secondary">Active Users</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-stark-primary">100+</p>
                    <p className="mt-2 text-sm text-stark-text-secondary">dApps Built</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-stark-primary">10M+</p>
                    <p className="mt-2 text-sm text-stark-text-secondary">Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-radial from-stark-secondary/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-12 shadow-2xl shadow-stark-primary/10 backdrop-blur-xl">
            <div className="text-center">
              <h2 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-3xl font-bold text-transparent">
                Why Build on StarkNet?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stark-text-secondary">
                Experience the future of Ethereum scaling with unmatched performance and security
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Process thousands of transactions per second with instant finality"
              />
              <FeatureCard
                icon={Shield}
                title="Battle-Tested"
                description="Built with proven STARK technology and rigorous security measures"
              />
              <FeatureCard
                icon={Cpu}
                title="ZK-Powered"
                description="Leverage zero-knowledge proofs for unmatched scalability"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-radial from-stark-accent/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-stark-primary/20 bg-stark-dark/50 p-12 text-center shadow-2xl shadow-stark-primary/10 backdrop-blur-xl">
            <h2 className="bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent bg-clip-text text-3xl font-bold text-transparent">
              Ready to Start Building?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stark-text-secondary">
              Join the StarkNet ecosystem and help shape the future of Ethereum scaling
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link to="/tasks">
                <Button 
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-stark-primary to-stark-secondary px-8 py-4 text-stark-dark transition-all hover:from-stark-secondary hover:to-stark-primary"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    View All Tasks
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              {!isConnected && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={connect}
                  className="group flex items-center gap-2 border-2 border-stark-primary text-stark-primary hover:bg-stark-primary hover:text-stark-dark"
                >
                  <Code2 className="h-5 w-5" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;