import { useState } from "react";
import { ArrowDown, Eye, EyeOff, Smartphone, QrCode, MessageSquare, CreditCard, Camera, Star, Zap, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewType = 'homeowner' | 'provider';

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

  const viewContent = {
    homeowner: {
      content: (
        <div className="h-48 bg-gradient-to-br from-atd-primary/10 to-atd-primary/20 p-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-atd-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ATD</span>
              </div>
              <span className="font-bold text-enhanced">Dashboard</span>
            </div>
            <div className="text-xs bg-atd-success/10 text-atd-success px-2 py-1 rounded-full font-medium">
              2 Active Jobs
            </div>
          </div>

          {/* Active Projects */}
          <div className="space-y-1.5 mb-2">
            <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-heading text-enhanced text-xs">Kitchen Renovation</h3>
                  <p className="text-caption text-xs">Mike Johnson - Elite</p>
                </div>
                <div className="text-xs bg-atd-success/10 text-atd-success px-1.5 py-0.5 rounded-full">
                  75%
                </div>
              </div>
              <div className="w-full bg-atd-surface-muted rounded-full h-1">
                <div className="bg-atd-success h-1 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-enhanced text-xs">Bathroom Repair</h3>
                  <p className="text-caption text-xs">Sarah Davis</p>
                </div>
                <div className="text-xs bg-atd-primary/10 text-atd-primary px-1.5 py-0.5 rounded-full">
                  Soon
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-1.5 mb-2">
            <button className="bg-atd-primary text-white rounded-lg py-1 px-2 text-xs font-medium">
              Add Provider
            </button>
            <button className="bg-atd-surface-muted text-enhanced rounded-lg py-1 px-2 text-xs font-medium">
              New Project
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
            <h4 className="font-heading text-enhanced text-xs mb-1">Updates</h4>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-atd-success rounded-full"></div>
                <span className="text-caption text-xs">Photos from Mike</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-atd-primary rounded-full"></div>
                <span className="text-caption text-xs">Payment processed</span>
              </div>
            </div>
          </div>
        </div>
      ),
      features: [
        { icon: Smartphone, title: "Unified Dashboard", description: "All your projects in one place" },
        { icon: QrCode, title: "QR Provider Access", description: "Secure, instant provider onboarding" },
        { icon: CreditCard, title: "Secure Payments", description: "Protected payment processing" }
      ]
    },
    provider: {
      content: (
        <div className="h-48 bg-gradient-to-br from-atd-warning/10 to-atd-warning/20 p-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-atd-warning rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">PO</span>
              </div>
              <span className="font-bold text-enhanced text-sm">PocketOffice</span>
            </div>
            <div className="text-xs bg-atd-warning/10 text-atd-warning px-2 py-1 rounded-full font-medium">
              Active Job
            </div>
          </div>

          {/* Current Job */}
          <div className="bg-atd-surface rounded-lg p-2 shadow-sm mb-2">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-heading text-enhanced text-xs">Kitchen Renovation</h3>
                <p className="text-caption text-xs">Sarah Johnson</p>
              </div>
              <div className="text-xs bg-atd-success/10 text-atd-success px-1.5 py-0.5 rounded-full">
                Active
              </div>
            </div>
            
            {/* Timer */}
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1.5 h-1.5 bg-atd-error rounded-full animate-pulse"></div>
              <span className="text-caption font-medium text-xs">Time: 2h 15m</span>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-1.5">
              <button className="bg-atd-warning text-white rounded-lg py-1 px-2 text-xs font-medium">
                Add Photo
              </button>
              <button className="bg-atd-surface-muted text-enhanced rounded-lg py-1 px-2 text-xs font-medium">
                Update
              </button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="space-y-1">
            <h4 className="font-heading text-enhanced text-xs mb-1">Updates</h4>
            <div className="bg-atd-surface rounded-lg p-1.5 border-l-4 border-atd-warning">
              <p className="text-xs font-medium text-enhanced">Photo sent</p>
              <p className="text-xs text-muted-enhanced">✓ Client notified</p>
            </div>
            <div className="bg-atd-surface rounded-lg p-1.5">
              <p className="text-xs font-medium text-enhanced">Started 8:30 AM</p>
              <p className="text-xs text-muted-enhanced">Auto-tracked</p>
            </div>
          </div>
        </div>
      ),
      features: [
        { icon: Camera, title: "Photo Updates", description: "Document progress with instant sharing" },
        { icon: Settings, title: "Job Management", description: "Track time, status, and tasks" },
        { icon: Zap, title: "Fast Payments", description: "Get paid quickly and securely" }
      ]
    }
  };

  const currentView = viewContent[viewType];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-atd-surface-secondary/30 via-atd-surface/10 to-atd-surface-muted/20"></div>

      <div className="container-standard relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Text content (50%) */}
          <div className="text-center lg:text-left">
            {/* Problem Statement */}
            <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
              <span className="inline-block bg-atd-error/10 text-atd-error py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold border border-atd-error/20" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
                Managing home projects shouldn't be chaotic
              </span>
            </div>

            {/* Static Headlines */}
            <h1 className="heading-primary animate-fade-in-up leading-tight"
                style={{ animationDelay: '0.05s' }}>
              {heroContent.headline}
              <span className="text-gradient block mt-1 sm:mt-2 md:mt-3">{heroContent.subHeadline}</span>
            </h1>

            {/* Static Subheadline */}
            <p className="text-body-large max-w-3xl mx-auto lg:mx-0 mb-4 sm:mb-6 md:mb-8 animate-fade-in-up leading-relaxed"
               style={{ animationDelay: '0.15s' }}>
              {heroContent.description}
            </p>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('enhanced-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right side - Interactive Showcase (50%) */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full space-y-3">
              {/* View Toggle */}
              <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex premium-card rounded-xl p-1">
                  <button
                    onClick={() => handleViewChange('homeowner')}
                    disabled={isTransitioning}
                    className={cn(
                      "py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                      viewType === 'homeowner'
                        ? "bg-atd-primary text-white shadow-sm"
                        : "text-muted-enhanced hover:text-enhanced"
                    )}
                    style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                  >
                    Homeowner View
                  </button>
                  <button
                    onClick={() => handleViewChange('provider')}
                    disabled={isTransitioning}
                    className={cn(
                      "py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                      viewType === 'provider'
                        ? "bg-atd-warning text-white shadow-sm"
                        : "text-muted-enhanced hover:text-enhanced"
                    )}
                    style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                  >
                    Provider View
                  </button>
                </div>
              </div>

              {/* Screen Content */}
              <div className={cn(
                "animate-fade-in-up transition-all duration-500",
                isTransitioning && "opacity-70 scale-95"
              )} style={{ animationDelay: '0.4s' }}>
                <div className="premium-card-elevated rounded-2xl overflow-hidden">
                  {currentView.content}
                </div>
              </div>

              {/* Feature Showcase */}
              <div className={cn(
                "space-y-2 animate-fade-in-up transition-all duration-500",
                isTransitioning && "opacity-70"
              )} style={{ animationDelay: '0.5s' }}>
                {currentView.features.map((feature, index) => {
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
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-atd-surface/80 p-2 md:p-3 rounded-full shadow-lg">
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-enhanced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;