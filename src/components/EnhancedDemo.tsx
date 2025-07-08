import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, RotateCcw, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import IPhoneMockup from "./demo/iPhoneMockup";
import { enhancedDemoSteps } from "./demo/EnhancedDemoSteps";

type ViewType = 'homeowner' | 'provider';

const EnhancedDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewType, setViewType] = useState<ViewType>('homeowner');
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % enhancedDemoSteps.length;
        setCompletedSteps(steps => new Set([...steps, prev]));
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStepChange = (step: number) => {
    if (step === currentStep) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(step);
      setCompletedSteps(steps => new Set([...steps, currentStep]));
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
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-atd-primary/10 text-atd-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-atd-primary/20">
            <div className="w-2 h-2 bg-atd-primary rounded-full mr-3 animate-pulse"></div>
            Interactive Demo Experience
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            See ATD From Every Angle
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mb-8">
            Switch between homeowner and provider views to experience how ATD transforms home management for everyone.
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-sm font-medium text-muted-enhanced">View as:</span>
            <Button
              onClick={handleViewChange}
              disabled={isTransitioning}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 transition-all duration-300",
                viewType === 'homeowner' 
                  ? "bg-atd-primary text-white hover:bg-atd-primary/90" 
                  : "bg-atd-surface-secondary text-atd-neutral-700 hover:bg-atd-surface-muted"
              )}
            >
              {viewType === 'homeowner' ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              <span className="font-semibold">
                {viewType === 'homeowner' ? 'Homeowner' : 'Service Provider'}
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentStep(0);
                setCompletedSteps(new Set());
                setIsPlaying(true);
              }}
              className="text-xs"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        {/* Demo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto mb-12">
          
          {/* Educational Panel */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Current Step Info */}
            <div className={cn(
              "premium-card p-8 transition-all duration-500",
              isTransitioning && "opacity-50 scale-95"
            )}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-atd-primary to-atd-primary/80 flex items-center justify-center">
                  <currentDemo.icon className="h-6 w-6 text-white" />
                </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-bold text-atd-primary bg-atd-primary/10 px-3 py-1 rounded-full border border-atd-primary/20">
                      Step {currentStep + 1} of {enhancedDemoSteps.length}
                    </span>
                    <span className={cn(
                      "text-xs font-bold px-3 py-1 rounded-full border",
                      viewType === 'homeowner' 
                        ? "text-atd-primary bg-atd-primary/10 border-atd-primary/20" 
                        : "text-atd-primary bg-atd-primary/10 border-atd-primary/20"
                    )}>
                        {viewType === 'homeowner' ? 'Homeowner View' : 'Provider View'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-enhanced mb-2">
                      {currentContent.title}
                    </h3>
                    <p className="text-muted-enhanced font-medium">
                      {currentContent.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-bold text-atd-primary uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ChevronRight className="h-4 w-4 text-atd-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-enhanced leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="border-t border-border pt-4">
                <div className="bg-gradient-to-r from-atd-primary/5 to-atd-accent/5 rounded-xl p-4 border border-atd-primary/10">
                  <h5 className="text-sm font-bold text-atd-primary mb-2">Real-World Impact</h5>
                  <p className="text-sm text-enhanced leading-relaxed">
                    {currentContent.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="premium-card p-6">
              <h4 className="text-lg font-bold text-enhanced mb-4">Your Progress</h4>
              <div className="grid grid-cols-2 gap-3">
                {enhancedDemoSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepChange(index)}
                    className={cn(
                      "p-3 rounded-lg border text-left transition-all duration-200 hover:scale-[1.02]",
                      index === currentStep 
                        ? "border-atd-primary bg-atd-primary/5 shadow-md" 
                        : completedSteps.has(index)
                        ? "border-atd-success/50 bg-atd-success/5"
                        : "border-border bg-background hover:border-atd-primary/30"
                    )}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <step.icon className={cn(
                        "h-4 w-4",
                        index === currentStep ? "text-atd-primary" : 
                        completedSteps.has(index) ? "text-atd-success" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "text-xs font-medium",
                        index === currentStep ? "text-atd-primary" : 
                        completedSteps.has(index) ? "text-atd-success" : "text-muted-foreground"
                      )}>
                        {step.homeowner.title.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* iPhone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className={cn(
              "transition-all duration-500",
              isTransitioning && "opacity-70 scale-95"
            )}>
              <IPhoneMockup>
                <div className="w-full h-full relative overflow-hidden">
                  {currentContent.content}
                </div>
              </IPhoneMockup>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center space-y-6 mb-16">
          <div className="flex space-x-2">
            {enhancedDemoSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepChange(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 hover:scale-110",
                  index === currentStep 
                    ? "bg-atd-primary w-8" 
                    : completedSteps.has(index)
                    ? "bg-atd-success w-6"
                    : "bg-muted w-2 hover:bg-atd-primary/50"
                )}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2"
            >
              {isPlaying ? (
                <>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <div className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent"></div>
                  <span>Play</span>
                </>
              )}
            </Button>
            <span className="text-sm text-muted-foreground">
              Auto-advancing every 5 seconds
            </span>
          </div>
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