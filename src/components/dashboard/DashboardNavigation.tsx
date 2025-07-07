import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ViewKey } from "./DashboardViews";

interface DashboardNavigationProps {
  viewKeys: ViewKey[];
  currentIndex: number;
  currentView: ViewKey;
  onViewChange: (view: ViewKey) => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const DashboardNavigation = ({ 
  viewKeys, 
  currentIndex, 
  currentView, 
  onViewChange, 
  onNavigate 
}: DashboardNavigationProps) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onNavigate('prev')}
        disabled={currentIndex === 0}
        className="flex items-center space-x-1"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Previous</span>
      </Button>
      
      <div className="flex space-x-2">
        {viewKeys.map((key, index) => (
          <button
            key={key}
            onClick={() => onViewChange(key)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[hsl(var(--atd-primary))]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onNavigate('next')}
        disabled={currentIndex === viewKeys.length - 1}
        className="flex items-center space-x-1"
      >
        <span>Next</span>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default DashboardNavigation;