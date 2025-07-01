
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/10 to-slate-100/20"></div>

      <div className="container-responsive relative z-10 text-center section-spacing">
        <div className="content-max-width">
          {/* Enhanced Hero Content */}
          <div className="visual-hierarchy">
            {/* Main Headline */}
            <h1 className="heading-primary mb-6 md:mb-8 animate-fade-in-up">
              One Command Center
              <span className="text-gradient block mt-2 md:mt-3">for Your Home</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced" style={{ animationDelay: '0.1s' }}>
              Invite your own trusted pros — or choose from our vetted provider network. Track updates, manage budgets, and earn rewards for consistency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="premium-button w-full sm:w-auto sm:min-w-[220px] text-base md:text-lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try It Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="button-secondary-enhanced w-full sm:w-auto sm:min-w-[220px] text-base md:text-lg"
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { title: "Invite Your Pros", desc: "Work with providers you trust" },
                { title: "Track Everything", desc: "Jobs, payments, all organized" },
                { title: "Share Access", desc: "Family and assistants included" }
              ].map((benefit, index) => (
                <div key={index} className="card-base card-padding text-center enhanced-card-hover">
                  <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-enhanced">{benefit.title}</h3>
                  <p className="text-sm md:text-base font-semibold text-muted-enhanced mobile-text-readable">{benefit.desc}</p>
                </div>
              ))}
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
