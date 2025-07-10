import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { viewContent, ViewType } from "./hero/HeroMockups";
import { HeroFeatures } from "./hero/HeroFeatures";
import { HeroToggle } from "./hero/HeroToggle";

const Hero = () => {
  const [viewType, setViewType] = useState<ViewType>('homeowner');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = (newViewType: ViewType) => {
    if (newViewType === viewType) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setViewType(newViewType);
      setIsTransitioning(false);
    }, 300);
  };

  // Consistent copy for left side regardless of view
  const heroContent = {
    headline: "One Command Center",
    subHeadline: "for Your Home",
    description: "Stop juggling emails, texts, and spreadsheets. ATD brings your trusted providers and all your home projects into one organized platform."
  };

  const currentView = viewContent[viewType];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/10 to-gray-50/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-300">
          {/* Left side - Text content (50%) */}
          <div className="text-center lg:text-left">
            {/* Problem Statement */}
            <div className="mb-4 sm:mb-5 md:mb-6 animate-fade-in">
              <span className="inline-block bg-red-50 text-red-700 py-2 sm:py-2.5 px-4 rounded-full text-xs sm:text-sm md:text-base font-bold border border-red-200">
                Managing home projects shouldn't be chaotic
              </span>
            </div>

            {/* Static Headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold animate-fade-in leading-tight mb-4 sm:mb-5 md:mb-6"
                style={{ animationDelay: '0.05s' }}>
              {heroContent.headline}
              <span className="block mt-1 sm:mt-1.5 md:mt-2 text-blue-600">{heroContent.subHeadline}</span>
            </h1>

            {/* Static Subheadline */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8 animate-fade-in leading-relaxed text-gray-600"
               style={{ animationDelay: '0.15s' }}>
              {heroContent.description}
            </p>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-h-[48px] px-8"
                onClick={() => document.getElementById('enhanced-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right side - Interactive Showcase (50%) */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full space-y-6 sm:space-y-8 md:space-y-10">
              {/* View Toggle */}
              <HeroToggle 
                viewType={viewType}
                isTransitioning={isTransitioning}
                onViewChange={handleViewChange}
              />

              {/* Screen Content */}
              <div className={cn(
                "animate-fade-in transition-all duration-500 will-change-transform",
                isTransitioning && "opacity-70 scale-95"
              )} style={{ animationDelay: '0.4s' }}>
                <div className="bg-white rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] shadow-lg border border-gray-200">
                  {currentView.content}
                </div>
              </div>

              {/* Feature Showcase */}
              <HeroFeatures 
                features={currentView.features}
                viewType={viewType}
                isTransitioning={isTransitioning}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/80 p-2 md:p-3 rounded-full shadow-lg">
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;