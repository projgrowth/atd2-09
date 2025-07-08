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
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ATD</span>
              </div>
              <span className="font-bold text-gray-800">Dashboard</span>
            </div>
            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              2 Active Jobs
            </div>
          </div>

          {/* Active Projects */}
          <div className="space-y-3 mb-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Kitchen Renovation</h3>
                  <p className="text-xs text-gray-600">Mike Johnson - Elite Construction</p>
                </div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  75% Complete
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Bathroom Repair</h3>
                  <p className="text-xs text-gray-600">Sarah Davis - Fix It Fast</p>
                </div>
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  Starting Soon
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button className="bg-blue-600 text-white rounded-lg py-2 px-3 text-xs font-medium">
              Add Provider
            </button>
            <button className="bg-gray-100 text-gray-700 rounded-lg py-2 px-3 text-xs font-medium">
              New Project
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-bold text-gray-800 text-xs mb-2">Recent Updates</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-700">New photos from Mike</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Payment processed</span>
              </div>
            </div>
          </div>
        </div>
      ),
      features: [
        { icon: Smartphone, title: "Unified Dashboard", description: "All your projects in one place" },
        { icon: QrCode, title: "QR Provider Access", description: "Secure, instant provider onboarding" },
        { icon: MessageSquare, title: "Direct Messaging", description: "Real-time communication with providers" },
        { icon: CreditCard, title: "Secure Payments", description: "Protected payment processing" }
      ]
    },
    provider: {
      content: (
        <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">PO</span>
              </div>
              <span className="font-bold text-gray-800">PocketOffice</span>
            </div>
            <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
              Active Job
            </div>
          </div>

          {/* Current Job */}
          <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800 text-sm">Kitchen Renovation</h3>
                <p className="text-xs text-gray-600">Sarah Johnson • 123 Oak St</p>
              </div>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                In Progress
              </div>
            </div>
            
            {/* Timer */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-700 font-medium">Time: 2h 15m</span>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-orange-600 text-white rounded-lg py-2 px-3 text-xs font-medium">
                Add Photo
              </button>
              <button className="bg-gray-100 text-gray-700 rounded-lg py-2 px-3 text-xs font-medium">
                Update Status
              </button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-700">Today's Updates</h4>
            <div className="bg-white rounded-lg p-2 border-l-4 border-orange-500">
              <p className="text-xs font-medium text-gray-800">Progress photo sent</p>
              <p className="text-xs text-gray-600">✓ Client notified</p>
            </div>
            <div className="bg-white rounded-lg p-2">
              <p className="text-xs font-medium text-gray-800">Started work at 8:30 AM</p>
              <p className="text-xs text-gray-600">Auto-tracked</p>
            </div>
          </div>
        </div>
      ),
      features: [
        { icon: Camera, title: "Photo Updates", description: "Document progress with instant sharing" },
        { icon: Settings, title: "Job Management", description: "Track time, status, and tasks" },
        { icon: Star, title: "Client Ratings", description: "Build your reputation with reviews" },
        { icon: Zap, title: "Fast Payments", description: "Get paid quickly and securely" }
      ]
    }
  };

  const currentView = viewContent[viewType];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary px-4 sm:px-6">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/10 to-slate-100/20"></div>

      <div className="container max-w-7xl mx-auto relative z-10 py-16 sm:py-20 md:py-24">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content (60%) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Problem Statement */}
            <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
              <span className="inline-block bg-red-50 text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold border border-red-200">
                Managing home projects shouldn't be chaotic
              </span>
            </div>

            {/* Static Headlines */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in-up text-enhanced leading-tight"
                style={{ animationDelay: '0.05s' }}>
              {heroContent.headline}
              <span className="text-gradient block mt-1 sm:mt-2 md:mt-3">{heroContent.subHeadline}</span>
            </h1>

            {/* Static Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced"
               style={{ animationDelay: '0.15s' }}>
              {heroContent.description}
            </p>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold transition-colors duration-200"
                onClick={() => document.getElementById('enhanced-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right side - Interactive Showcase (40%) */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm space-y-6">
              {/* View Toggle */}
              <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                  <button
                    onClick={() => handleViewChange('homeowner')}
                    disabled={isTransitioning}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                      viewType === 'homeowner'
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-800"
                    )}
                  >
                    Homeowner View
                  </button>
                  <button
                    onClick={() => handleViewChange('provider')}
                    disabled={isTransitioning}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                      viewType === 'provider'
                        ? "bg-orange-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-800"
                    )}
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
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  {currentView.content}
                </div>
              </div>

              {/* Feature Showcase */}
              <div className={cn(
                "space-y-3 animate-fade-in-up transition-all duration-500",
                isTransitioning && "opacity-70"
              )} style={{ animationDelay: '0.5s' }}>
                {currentView.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center",
                        viewType === 'homeowner' ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                      )}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
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
          <div className="bg-white/80 p-2 md:p-3 rounded-full shadow-lg">
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;