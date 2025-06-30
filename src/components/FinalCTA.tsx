
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--atd-primary))]/5 via-background to-[hsl(var(--atd-accent))]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/20"></div>
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6 text-balance">
              Take control of your home—
              <span className="text-[hsl(var(--atd-primary))]">without the chaos.</span>
            </h2>
            
            <p className="text-xl text-[hsl(var(--atd-text-muted))] mb-8 leading-relaxed">
              Join beta users who are already experiencing the calm of total home control.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-sm">
              {/* Phone with Gradient Background */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-3 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 via-background to-[hsl(var(--atd-accent))]/10 rounded-2xl p-6 aspect-[9/16] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="bg-white/80 rounded-full p-6 shadow-lg mx-auto w-fit">
                      <Smartphone className="h-12 w-12 text-[hsl(var(--atd-primary))]" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-[hsl(var(--atd-text))]">All Set!</div>
                      <div className="text-sm text-[hsl(var(--atd-text-muted))]">Your home command center</div>
                      <div className="text-sm text-[hsl(var(--atd-text-muted))]">is ready to go.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Success Elements */}
              <div className="absolute -top-6 -right-6 bg-[hsl(var(--atd-accent))] text-white rounded-full p-4 shadow-lg animate-pulse">
                <div className="text-xs font-bold">✓</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--atd-primary))] text-white rounded-full p-4 shadow-lg">
                <div className="text-xs font-bold">ATD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
