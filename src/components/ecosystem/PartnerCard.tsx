import { ExternalLink, Users, Activity, DollarSign, ListTodo } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Partner } from '@/types/ecosystem';
import Card from '../common/Card';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-stark-dark to-stark-darker p-[1px] transition-all duration-300 hover:scale-[1.02]">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-stark-primary via-stark-secondary to-stark-accent opacity-20 blur-sm transition-opacity group-hover:opacity-30" />
      
      {/* Card content */}
      <div className="relative rounded-xl bg-stark-darker p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-stark-primary">
              {partner.name}
            </h3>
            <div className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
              partner.status === 'Active'
                ? 'bg-stark-primary/20 text-stark-primary'
                : 'bg-white/10 text-white'
            }`}>
              {partner.status}
            </div>
          </div>
          {partner.logo && (
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 w-12 rounded-lg object-contain"
            />
          )}
        </div>

        <p className="mt-4 line-clamp-3 text-white/80">
          {partner.description}
        </p>

        {partner.stats && (
          <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg bg-black/40 p-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Users className="h-4 w-4 text-stark-primary" />
                <p className="font-semibold text-white">{partner.stats.users}</p>
              </div>
              <p className="mt-1 text-xs text-white/60">Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Activity className="h-4 w-4 text-stark-secondary" />
                <p className="font-semibold text-white">{partner.stats.transactions}</p>
              </div>
              <p className="mt-1 text-xs text-white/60">Transactions</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <DollarSign className="h-4 w-4 text-stark-accent" />
                <p className="font-semibold text-stark-primary">{partner.stats.volume}</p>
              </div>
              <p className="mt-1 text-xs text-white/60">Volume</p>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {partner.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-stark-primary/10 px-3 py-1 text-xs font-medium text-stark-primary ring-1 ring-stark-primary/20"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-stark-primary transition-all hover:text-stark-secondary hover:tracking-wide"
            >
              Visit Website
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          )}
          
          <Link 
            to={`/tasks?project=${encodeURIComponent(partner.name)}`}
            className="inline-flex items-center gap-2 rounded-lg bg-stark-primary/10 px-4 py-2 text-sm font-medium text-stark-primary ring-1 ring-stark-primary/20 transition-all hover:bg-stark-primary hover:text-stark-dark hover:ring-0"
          >
            <ListTodo size={16} />
            View Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;