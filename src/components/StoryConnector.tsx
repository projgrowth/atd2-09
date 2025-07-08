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
      "flex items-center justify-center my-8 md:my-12 animate-fade-in-up",
      className
    )}>
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px flex-1 max-w-32"></div>
      
      <div className="mx-4 flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
        {direction === 'down' ? (
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        ) : (
          <ChevronRight className="h-4 w-4 text-primary" />
        )}
        <span className="text-sm font-semibold text-primary">{text}</span>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px flex-1 max-w-32"></div>
    </div>
  );
};

export default StoryConnector;