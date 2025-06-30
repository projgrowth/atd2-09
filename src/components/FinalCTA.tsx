
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CheckCircle, Home, Users } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--atd-primary))]/5 via-background to-[hsl(var(--atd-accent))]/5 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/20"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-[hsl(var(--atd-primary))]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[hsl(var(--atd-accent))]/10 rounded-full blur-xl"></div>
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6 text-balance">
              Take control of your home—
              <span className="text-[hsl(var(--atd-primary))]">without the chaos.</span>
            </h2>
            
            <p className="text-xl text-[hsl(var(--atd-text-muted))] mb-8 leading-relaxed">
              Join beta users who are already experiencing the calm of total home control.
            </p>
            
            {/* Beta Benefits */}
            <div className="flex flex-col space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))]" />
                <span className="text-[hsl(var(--atd-text-muted))]">Early access to all features</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))]" />
                <span className="text-[hsl(var(--atd-text-muted))]">Personal onboarding session</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))]" />
                <span className="text-[hsl(var(--atd-text-muted))]">Direct feedback line to our team</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-[hsl(var(--atd-text-muted))] mt-4">
              Limited beta spots available. No credit card required.
            </p>
          </div>
          
          {/* Enhanced Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-sm">
              {/* Enhanced Phone with Realistic Interface */}
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-3 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 via-background to-[hsl(var(--atd-accent))]/10 rounded-2xl p-6 aspect-[9/16] flex flex-col justify-center">
                  <div className="text-center space-y-6">
                    {/* Success State */}
                    <div className="bg-white/90 rounded-2xl p-6 shadow-lg mx-auto">
                      <div className="bg-gradient-to-br from-[hsl(var(--atd-accent))] to-green-500 rounded-full p-4 mx-auto w-fit mb-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-[hsl(var(--atd-text))]">All Set!</div>
                        <div className="text-sm text-[hsl(var(--atd-text-muted))]">Your home command center</div>
                        <div className="text-sm text-[hsl(var(--atd-text-muted))]">is ready to go.</div>
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <Home className="h-4 w-4 text-[hsl(var(--atd-primary))] mx-auto mb-1" />
                        <div className="text-xs font-medium">1 Home</div>
                        <div className="text-xs text-gray-500">Connected</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 text-center">
                        <Users className="h-4 w-4 text-[hsl(var(--atd-accent))] mx-auto mb-1" />
                        <div className="text-xs font-medium">3 Members</div>
                        <div className="text-xs text-gray-500">Added</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Success Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[hsl(var(--atd-accent))] to-green-500 text-white rounded-full p-4 shadow-lg animate-pulse">
                <CheckCircle className="h-5 w-5" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[hsl(var(--atd-primary))] to-blue-600 text-white rounded-full p-4 shadow-lg">
                <Smartphone className="h-5 w-5" />
              </div>
              
              {/* Notification popup */}
              <div className="absolute top-1/3 -left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-fade-in">
                <div className="text-xs text-[hsl(var(--atd-text))] font-medium">Welcome to ATD!</div>
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">Setup complete ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
