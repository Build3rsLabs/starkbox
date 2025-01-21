import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ChainCategory } from '@/types/chain';
import Card from '../common/Card';

interface ParachainCategoryCardProps extends ChainCategory {
  chainCount: number;
}

const ParachainCategoryCard = ({ 
  id, 
  name, 
  description, 
  icon, 
  chainCount 
}: ParachainCategoryCardProps) => {
  return (
    <Link to={`/parachains?category=${id}`}>
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dot-primary/10 text-2xl">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-dot-primary">
                {name}
              </h3>
              <p className="text-sm text-gray-500">{chainCount} Parachains</p>
            </div>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-sm text-gray-500">View Parachains</span>
          <ArrowRight className="h-5 w-5 text-dot-primary opacity-0 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </Card>
    </Link>
  );
};

export default ParachainCategoryCard;