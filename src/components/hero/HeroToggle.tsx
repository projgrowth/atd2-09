import { cn } from "@/lib/utils";
import { ViewType } from "./HeroMockups";

interface HeroToggleProps {
  viewType: ViewType;
  isTransitioning: boolean;
  onViewChange: (newViewType: ViewType) => void;
}

export const HeroToggle = ({ viewType, isTransitioning, onViewChange }: HeroToggleProps) => {
  return (
    <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex premium-card rounded-xl p-1">
        <button
          onClick={() => onViewChange('homeowner')}
          disabled={isTransitioning}
          className={cn(
            "py-2 rounded-lg text-sm font-semibold transition-all duration-300",
            viewType === 'homeowner'
              ? "bg-atd-primary text-white shadow-sm"
              : "text-muted-enhanced hover:text-enhanced"
          )}
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          Homeowner View
        </button>
        <button
          onClick={() => onViewChange('provider')}
          disabled={isTransitioning}
          className={cn(
            "py-2 rounded-lg text-sm font-semibold transition-all duration-300",
            viewType === 'provider'
              ? "bg-atd-warning text-white shadow-sm"
              : "text-muted-enhanced hover:text-enhanced"
          )}
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          Provider View
        </button>
      </div>
    </div>
  );
};