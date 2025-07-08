import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DualScreenGraphic from "./DualScreenGraphic";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary px-4 sm:px-6">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/10 to-slate-100/20"></div>

      <div className="container max-w-5xl mx-auto relative z-10 text-center py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Problem Statement */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up">
            <span className="inline-block bg-red-50 text-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold border border-red-200">
              Managing home projects shouldn't be chaotic
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 animate-fade-in-up text-enhanced leading-tight" style={{ animationDelay: '0.05s' }}>
            One Command Center
            <span className="text-gradient block mt-1 sm:mt-2 md:mt-3">for Your Home</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced px-2" style={{ animationDelay: '0.1s' }}>
            Stop juggling emails, texts, and spreadsheets. ATD brings your trusted providers and all your home projects into one organized platform.
          </p>

          {/* Single CTA */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="premium-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold"
              onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          {/* Dual Screen Graphic */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
            <DualScreenGraphic />
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