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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-atd-surface-secondary/30 via-atd-surface/10 to-atd-surface-muted/20"></div>

      <div className="container-app relative z-10">
        {/* Two-column layout */}
        <div className="grid-2 items-center transition-smooth">
          {/* Left side - Text content (50%) */}
          <div className="text-center lg:text-left">
            {/* Problem Statement */}
            <div className="mb-4 sm:mb-5 md:mb-6 animate-fade-in-up">
              <span className="inline-block bg-atd-error/10 text-atd-error py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold border border-atd-error/20" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                Managing home projects shouldn't be chaotic
              </span>
            </div>

            {/* Static Headlines */}
            <h1 className="heading-1 animate-fade-in-up leading-tight mb-4 sm:mb-5 md:mb-6"
                style={{ animationDelay: '0.05s' }}>
              {heroContent.headline}
              <span className="text-gradient block mt-1 sm:mt-1.5 md:mt-2">{heroContent.subHeadline}</span>
            </h1>

            {/* Static Subheadline */}
            <p className="text-body-lg max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-7 md:mb-8 animate-fade-in-up leading-relaxed"
               style={{ animationDelay: '0.15s' }}>
              {heroContent.description}
            </p>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
                "animate-fade-in-up transition-all duration-500 will-change-transform",
                isTransitioning && "opacity-70 scale-95"
              )} style={{ animationDelay: '0.4s' }}>
                <div className="card rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] shadow-elevated">
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
          <div className="bg-atd-surface/80 p-2 md:p-3 rounded-full shadow-lg">
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-enhanced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;