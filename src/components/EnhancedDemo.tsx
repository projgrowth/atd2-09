import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import IPhoneMockup from "./demo/iPhoneMockup";
import { enhancedDemoSteps } from "./demo/EnhancedDemoSteps";

type ViewType = 'homeowner' | 'provider';

const EnhancedDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewType, setViewType] = useState<ViewType>('homeowner');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % enhancedDemoSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepChange = (step: number) => {
    if (step === currentStep) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(step);
      setIsTransitioning(false);
    }, 300);
  };

  const handleViewChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewType(prev => prev === 'homeowner' ? 'provider' : 'homeowner');
      setIsTransitioning(false);
    }, 300);
  };

  const currentDemo = enhancedDemoSteps[currentStep];
  const currentContent = currentDemo[viewType];

  return (
    <section className="section-spacing-large section-bg-elevated section-divider" id="enhanced-demo">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-secondary mb-6 text-enhanced">
            See ATD From Every Angle
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mb-8">
            Switch between homeowner and provider views to experience how ATD transforms home management for everyone.
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center items-center space-x-2 mb-12">
            <Button
              onClick={handleViewChange}
              disabled={isTransitioning}
              variant={viewType === 'homeowner' ? 'default' : 'outline'}
              className="transition-all duration-300"
            >
              <Eye className="h-4 w-4 mr-2" />
              Homeowner
            </Button>
            <Button
              onClick={handleViewChange}
              disabled={isTransitioning}
              variant={viewType === 'provider' ? 'default' : 'outline'}
              className="transition-all duration-300"
            >
              <EyeOff className="h-4 w-4 mr-2" />
              Provider
            </Button>
          </div>
        </div>

        {/* Single iPhone Mockup - Centered */}
        <div className="flex justify-center mb-12">
          <div className={cn(
            "transition-all duration-500",
            isTransitioning && "opacity-70 scale-95"
          )}>
            <IPhoneMockup>
              <div 
                className="w-full h-full relative overflow-hidden cursor-pointer"
                onClick={() => handleStepChange((currentStep + 1) % enhancedDemoSteps.length)}
              >
                {currentContent.content}
                
                {/* Click indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                  Tap to advance
                </div>
              </div>
            </IPhoneMockup>
          </div>
        </div>

        {/* Step Info */}
        <div className="text-center mb-8">
          <div className="premium-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <currentDemo.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-enhanced">
                  {currentContent.title}
                </h3>
                <p className="text-sm text-muted-enhanced">
                  {viewType === 'homeowner' ? 'Homeowner View' : 'Provider View'}
                </p>
              </div>
            </div>
            <p className="text-enhanced leading-relaxed">
              {currentContent.description}
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-16">
          {enhancedDemoSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStepChange(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentStep 
                  ? "bg-primary w-8" 
                  : "bg-muted w-2 hover:bg-primary/50"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="premium-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-enhanced">
              Experience Both Perspectives
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
              This demo showcases how ATD creates value for both homeowners and service providers. Join our beta to experience the full platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="premium-button px-10 py-6 text-lg font-bold"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join Beta Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-10 py-6 text-lg font-bold"
                onClick={() => window.open('https://forms.gle/8rKm3xNz5tB9YdAk7', '_blank')}
              >
                Apply as Provider
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedDemo;