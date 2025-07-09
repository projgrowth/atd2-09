import { useState } from "react";
import { Monitor, Smartphone, QrCode, Users, Star, RotateCcw, Eye, EyeOff, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveDashboard from "./InteractiveDashboard";
import PocketOfficeDemo from "./PocketOfficeDemo";
import QRScanDemo from "./QRScanDemo";
import UserJourneyDemo from "./UserJourneyDemo";
import RatingSystemDemo from "./RatingSystemDemo";
import { DemoProvider, useDemoContext } from "@/contexts/DemoContext";
import { useDemoTransitions } from "@/hooks/useDemoTransitions";
import DemoSuggestions from "./demo-flow/DemoSuggestions";
import DemoProgress from "./demo-flow/DemoProgress";
import DemoTransition from "./demo-flow/DemoTransition";
import { cn } from "@/lib/utils";

const InteractiveDemoContent = () => {
  const { state, actions } = useDemoContext();
  const { activeDemo, demoProgress, userType } = state;
  const [showProgress, setShowProgress] = useState(false);
  
  const { 
    isTransitioning, 
    pendingDemo, 
    fromDemo,
    transitionToDemo 
  } = useDemoTransitions({ 
    duration: 600, 
    showLoader: true, 
    showProgress: true 
  });

  const handleDemoChange = (demoId: string) => {
    if (demoId === activeDemo) return;
    
    transitionToDemo(
      demoId, 
      (newDemo) => actions.setActiveDemo(newDemo),
      activeDemo
    );
  };

  const demos = {
    dashboard: {
      title: "Interactive Dashboard",
      description: "Click through a real homeowner dashboard",
      icon: Monitor,
      component: <InteractiveDashboard />
    },
    pocketoffice: {
      title: "PocketOffice Mobile",
      description: "See how providers update jobs on the go",
      icon: Smartphone,
      component: <PocketOfficeDemo />
    },
    qrscan: {
      title: "QR Code Access",
      description: "Watch the instant access system in action",
      icon: QrCode,
      component: <QRScanDemo />
    },
    ratings: {
      title: "Rating System",
      description: "Experience two-sided accountability ratings",
      icon: Star,
      component: <RatingSystemDemo />
    },
    journey: {
      title: "User Journeys",
      description: "Explore different access levels and features",
      icon: Users,
      component: <UserJourneyDemo />
    }
  };

  return (
    <section className="section-spacing-compact section-bg-content section-separator">
      <div className="container-standard">
        <div className="text-center mb-16 animate-fade-in-up" id="interactive-demo">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-enhanced">
              See It In Action
            </h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={actions.toggleUserType}
                className="text-xs"
              >
                {userType === 'homeowner' ? <Eye className="h-3 w-3 mr-1" /> : <EyeOff className="h-3 w-3 mr-1" />}
                {userType === 'homeowner' ? 'Provider View' : 'Owner View'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={actions.resetDemos}
                className="text-xs"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>
          </div>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced">
            Experience ATD's dual-perspective platform with hands-on demos for homeowners and providers.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="bg-white/80 rounded-lg py-2 border border-blue-200" style={{ padding: '0.5rem 1rem' }}>
              <div className="text-sm font-medium text-[hsl(var(--atd-text))]">
                Demo Progress: {demoProgress.length}/5 explored
              </div>
              <div className="flex space-x-1 mt-2">
                {Object.keys(demos).map((demoKey) => (
                  <div
                    key={demoKey}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      demoProgress.includes(demoKey) ? "bg-[hsl(var(--atd-primary))]" : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Demo Selector - Enhanced for mobile */}
          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
              {Object.entries(demos).map(([key, demo]) => {
                const IconComponent = demo.icon;
                return (
                  <Button
                    key={key}
                    variant={activeDemo === key ? "default" : "outline"}
                    onClick={() => handleDemoChange(key)}
                    disabled={isTransitioning}
                    className={cn(
                      "flex items-center space-x-3 py-4 text-sm mobile-interactive",
                      "min-h-[52px] transition-all duration-200 font-semibold",
                      activeDemo === key && "animate-mobile-scale-in button-primary-enhanced",
                      activeDemo !== key && "button-secondary-enhanced",
                      demoProgress.includes(key) && "ring-1 ring-[hsl(var(--atd-primary))]/30",
                      isTransitioning && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <IconComponent className="h-5 w-5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">{demo.title}</div>
                      <div className="text-xs opacity-80 hidden lg:block font-medium">{demo.description}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {/* Demo Suggestions */}
            <DemoSuggestions />
          </div>

          {/* Progress Panel */}
          <div className="lg:w-80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))]">
                Your Progress
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProgress(!showProgress)}
                className="text-xs"
              >
                <TrendingUp className="h-3 w-3 mr-1" />
                {showProgress ? 'Hide' : 'Show'} Details
              </Button>
            </div>
            
            {showProgress && <DemoProgress />}
          </div>
        </div>

        {/* Active Demo with Enhanced Transitions */}
        <div className={cn(
          "transition-all duration-300",
          !isTransitioning && "animate-fade-in",
          isTransitioning && "opacity-50 scale-95"
        )}>
          {demos[activeDemo as keyof typeof demos].component}
        </div>

        {/* Demo Transition Overlay */}
        <DemoTransition
          isTransitioning={isTransitioning}
          fromDemo={fromDemo || undefined}
          toDemo={pendingDemo || undefined}
        />

        {/* Bottom CTA - Enhanced with new form */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="card-enhanced p-8 sm:p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-enhanced">
              Ready to Experience ATD?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
              These demos show just a glimpse of what's possible. Join our beta to get full access and help shape the future of home management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="premium-button px-10 w-full sm:w-auto text-lg py-6"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join Beta Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="button-secondary-enhanced px-10 w-full sm:w-auto text-lg py-6"
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

const InteractiveDemo = () => {
  return (
    <DemoProvider>
      <InteractiveDemoContent />
    </DemoProvider>
  );
};

export default InteractiveDemo;
