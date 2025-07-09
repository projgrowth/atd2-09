import { ArrowDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryConnectorProps {
  direction?: 'down' | 'right';
  text?: string;
  className?: string;
}

const StoryConnector = ({ 
  direction = 'down', 
  text = "Here's how it works",
  className 
}: StoryConnectorProps) => {
  return (
    <div className={cn(
      "flex items-center justify-center my-8 md:my-10 lg:my-12 animate-fade-in-up",
      className
    )}>
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px flex-1 max-w-60 md:max-w-80"></div>
      
      <div className="mx-6 flex items-center space-x-2">
        {direction === 'down' ? (
          <ArrowDown className="h-4 w-4 text-primary/60 animate-bounce" />
        ) : (
          <ChevronRight className="h-4 w-4 text-primary/60" />
        )}
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px flex-1 max-w-60 md:max-w-80"></div>
    </div>
  );
};

export default StoryConnector;