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
      "space-y-2 animate-fade-in-up transition-all duration-500",
      isTransitioning && "opacity-70"
    )} style={{ animationDelay: '0.5s' }}>
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <div key={index} className="premium-card p-3 flex items-start space-x-3">
            <div className={cn(
              "flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center",
              viewType === 'homeowner' ? "bg-atd-primary/10 text-atd-primary" : "bg-atd-warning/10 text-atd-warning"
            )}>
              <IconComponent className="h-3 w-3" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-heading text-enhanced text-xs mb-0.5">{feature.title}</h4>
              <p className="text-caption text-xs leading-relaxed">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};