import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { demoSteps } from "./demo/DemoSteps";
import IPhoneMockup from "./demo/iPhoneMockup";
import StepInfo from "./demo/StepInfo";
import DemoControls from "./demo/DemoControls";
import DemoContent from "./demo/DemoContent";

const SimplifiedDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentDemo = demoSteps[currentStep];

  return (
    <section className="section-spacing-large section-bg-elevated section-divider" id="interactive-demo">
      <div className="container-standard">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/20">
            See It In Action
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            How ATD Works
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced">
            Watch how ATD transforms chaotic home management into organized, efficient workflows.
          </p>
        </div>

        {/* Demo Layout - Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto mb-12">
          {/* Educational Panel - Left side on desktop */}
          <div className="order-2 lg:order-1">
            <StepInfo 
              currentStep={currentStep}
              title={currentDemo.title}
              description={currentDemo.description}
              totalSteps={demoSteps.length}
              onStepChange={setCurrentStep}
            />
          </div>

          {/* iPhone Mockup - Right side on desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <IPhoneMockup>
              <DemoContent currentStep={currentStep} />
            </IPhoneMockup>
          </div>
        </div>

        {/* Navigation Controls */}
        <DemoControls
          currentStep={currentStep}
          totalSteps={demoSteps.length}
          isPlaying={isPlaying}
          onStepChange={setCurrentStep}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="premium-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 premium-heading">
              Ready to Transform Your Home Management?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto premium-text-secondary">
              This is just a preview. Join our beta to experience the full platform and help shape the future of home management.
            </p>
            
            <Button 
              size="lg" 
              className="premium-button-primary px-10 py-6 text-lg"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Join Beta Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedDemo;