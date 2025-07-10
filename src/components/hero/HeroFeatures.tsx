import { cn } from "@/lib/utils";
import { ViewType } from "./HeroMockups";

interface HeroFeaturesProps {
  features: Array<{
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }>;
  viewType: ViewType;
  isTransitioning: boolean;
}

export const HeroFeatures = ({ features, viewType, isTransitioning }: HeroFeaturesProps) => {
  return (
    <div className={cn(
      "space-y-3 sm:space-y-4 animate-fade-in-up transition-all duration-500",
      isTransitioning && "opacity-70"
    )} style={{ animationDelay: '0.5s' }}>
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="premium-card p-4 sm:p-5 flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:shadow-medium">
            <div className={cn(
              "flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors",
              viewType === 'homeowner' ? "bg-atd-primary/10 text-atd-primary" : "bg-atd-warning/10 text-atd-warning"
            )}>
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-heading text-enhanced text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h4>
              <p className="text-caption text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};