import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="group relative overflow-hidden rounded-xl border border-stark-primary/20 bg-stark-darker/50 p-8 transition-all duration-300 hover:border-stark-primary/40 hover:shadow-lg hover:shadow-stark-primary/10">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-stark-primary/5 via-stark-secondary/5 to-stark-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    
    <div className="relative">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-stark-primary/20 via-stark-secondary/20 to-stark-accent/20 transition-all duration-300 group-hover:from-stark-primary/30 group-hover:via-stark-secondary/30 group-hover:to-stark-accent/30">
        <Icon className="h-8 w-8 text-stark-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-stark-primary">{title}</h3>
      <p className="text-stark-text-primary">{description}</p>
    </div>
  </div>
);

export default FeatureCard;