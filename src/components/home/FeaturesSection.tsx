import { Zap, Shield, Globe, ChartBar } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: ChartBar,
    title: 'Advanced Trading',
    description: 'Trade perpetuals with up to 20x leverage on a powerful orderbook'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Built on Cosmos with institutional-grade security and reliability'
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Lightning-fast execution with sub-second confirmation times'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-dydx-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dydx-mint">Why Choose dYdX?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dydx-purple">
            Trade on the leading decentralized perpetuals exchange
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;