import { useState } from "react";
import { ArrowDown, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import IPhoneMockup from "./demo/iPhoneMockup";

type ViewType = 'homeowner' | 'provider';

const Hero = () => {
  const [viewType, setViewType] = useState<ViewType>('homeowner');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewType(prev => prev === 'homeowner' ? 'provider' : 'homeowner');
      setIsTransitioning(false);
    }, 300);
  };

  const viewContent = {
    homeowner: {
      headline: "One Command Center",
      subHeadline: "for Your Home",
      description: "Stop juggling emails, texts, and spreadsheets. ATD brings your trusted providers and all your home projects into one organized platform.",
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
      )
    },
    provider: {
      headline: "Streamlined Mobile Workflow",
      subHeadline: "for Contractors",
      description: "Professional tools designed for service providers. Manage jobs, update clients, and get paid faster with ATD's PocketOffice mobile experience.",
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
      )
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

            {/* Dynamic Headlines */}
            <h1 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in-up text-enhanced leading-tight transition-all duration-300",
              isTransitioning && "opacity-50"
            )} style={{ animationDelay: '0.05s' }}>
              {currentView.headline}
              <span className="text-gradient block mt-1 sm:mt-2 md:mt-3">{currentView.subHeadline}</span>
            </h1>

            {/* View Toggle */}
            <div className="flex justify-center lg:justify-start items-center space-x-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-sm font-medium text-muted-enhanced">View as:</span>
              <Button
                onClick={handleViewChange}
                disabled={isTransitioning}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 transition-all duration-300",
                  viewType === 'homeowner' 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                )}
              >
                {viewType === 'homeowner' ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                <span className="font-semibold">
                  {viewType === 'homeowner' ? 'Homeowner' : 'Service Provider'}
                </span>
              </Button>
            </div>

            {/* Dynamic Subheadline */}
            <p className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced transition-all duration-300",
              isTransitioning && "opacity-50"
            )} style={{ animationDelay: '0.15s' }}>
              {currentView.description}
            </p>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="premium-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold"
                onClick={() => document.getElementById('enhanced-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right side - Single iPhone Mockup (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className={cn(
              "animate-fade-in-up transition-all duration-500",
              isTransitioning && "opacity-70 scale-95"
            )} style={{ animationDelay: '0.4s' }}>
              <IPhoneMockup>
                {currentView.content}
              </IPhoneMockup>
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