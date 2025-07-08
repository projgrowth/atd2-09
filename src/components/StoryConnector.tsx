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
      "flex items-center justify-center my-12 md:my-16 lg:my-20 animate-fade-in-up",
      className
    )}>
      <div className="bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px flex-1 max-w-40 md:max-w-48"></div>
      
      <div className="mx-6 flex items-center space-x-3 bg-gradient-to-r from-primary/5 to-accent/5 px-6 py-3 rounded-full border border-primary/30 backdrop-blur-sm">
        {direction === 'down' ? (
          <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        ) : (
          <ChevronRight className="h-5 w-5 text-primary" />
        )}
        <span className="text-base font-bold text-primary">{text}</span>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px flex-1 max-w-40 md:max-w-48"></div>
    </div>
  );
};

export default StoryConnector;