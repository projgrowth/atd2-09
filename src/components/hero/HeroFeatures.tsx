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
      "space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-up transition-all duration-500",
      isTransitioning && "opacity-70"
    )} style={{ animationDelay: '0.5s' }}>
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="premium-card p-5 sm:p-6 md:p-7 flex items-start space-x-4 sm:space-x-5 md:space-x-6 transition-all duration-300 hover:shadow-medium">
            <div className={cn(
              "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors",
              viewType === 'homeowner' ? "bg-atd-primary/10 text-atd-primary" : "bg-atd-warning/10 text-atd-warning"
            )}>
              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-heading text-enhanced text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-caption text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};