import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DemoControlsProps {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  onStepChange: (step: number) => void;
  onPlayPause: () => void;
}

const DemoControls = ({ 
  currentStep, 
  totalSteps, 
  isPlaying, 
  onStepChange, 
  onPlayPause 
}: DemoControlsProps) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Progress Indicators */}
      <div className="flex space-x-3">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            onClick={() => onStepChange(index)}
            className={cn(
              "h-3 rounded-full transition-all duration-300 hover:scale-110",
              index === currentStep 
                ? "bg-primary w-12" 
                : "bg-gray-300 w-3 hover:bg-gray-400"
            )}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Controls */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onPlayPause}
          className="flex items-center space-x-2"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
        </Button>
        <span className="text-sm text-muted-foreground">
          {currentStep + 1} of {totalSteps}
        </span>
      </div>
    </div>
  );
};

export default DemoControls;