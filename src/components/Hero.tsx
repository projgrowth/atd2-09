
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-extreme bg-white relative overflow-hidden">
      <div className="container-framer">
        <div className="text-center pt-20 md:pt-24">
          {/* Massive Headline */}
          <div className="mb-12 md:mb-16 animate-fade-up">
            <h1 className="headline-massive mb-8">
              Your home's
              <br />
              <span className="relative">
                quiet command center
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20"></div>
              </span>
            </h1>
            
            <p className="text-large max-w-3xl mx-auto mb-12">
              Stop juggling scattered apps and endless phone calls. Work with your trusted providers while keeping everything organized in one beautiful place.
            </p>
          </div>

          {/* Framer-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              className="btn-framer-primary"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Join Beta Program
            </Button>
            <Button 
              className="btn-framer-secondary"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          {/* Minimal Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              "Invite your own trusted providers",
              "Track everything in one place", 
              "Share access with family"
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-3 h-3 bg-black rounded-full mx-auto mb-4"></div>
                <p className="text-body font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-neutral-400" />
      </div>
    </section>
  );
};

export default Hero;
