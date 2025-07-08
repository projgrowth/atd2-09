
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import DualScreenGraphic from "./DualScreenGraphic";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/10 to-slate-100/20"></div>

      <div className="container-responsive relative z-10 text-center section-spacing">
        <div className="content-max-width">
          {/* Enhanced Hero Content */}
          <div className="visual-hierarchy">
            {/* Problem Statement */}
            <div className="mb-6 md:mb-8 animate-fade-in-up">
              <span className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm md:text-base font-bold border border-red-200">
                Managing home projects shouldn't be chaotic
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-primary mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
              One Command Center
              <span className="text-gradient block mt-2 md:mt-3">for Your Home</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced" style={{ animationDelay: '0.1s' }}>
              Stop juggling emails, texts, and spreadsheets. ATD brings your trusted providers and all your home projects into one organized platform.
            </p>

            {/* Single CTA */}
            <div className="flex justify-center mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="premium-button px-10 py-6 text-lg md:text-xl"
                onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Dual Screen Graphic */}
            <div className="mt-16 md:mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <DualScreenGraphic />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/80 p-2 md:p-3 rounded-full shadow-lg">
            <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
