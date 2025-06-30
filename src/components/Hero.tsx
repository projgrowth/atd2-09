
import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Home, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-blue-50/30 px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-[hsl(var(--atd-text))] mb-6 text-balance leading-tight">
              One Dashboard.
              <br />
              <span className="text-[hsl(var(--atd-primary))]">Total Control.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[hsl(var(--atd-text-muted))] mb-8 text-balance leading-relaxed">
              Manage your home with clarity, not chaos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://forms.google.com/create', '_blank')}
              >
                Join Beta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[hsl(var(--atd-primary))] text-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://forms.google.com/create', '_blank')}
              >
                Apply as Provider
              </Button>
            </div>
            
            <p className="text-sm text-[hsl(var(--atd-text-muted))] font-medium">
              Beta users get early access + private onboarding.
            </p>
          </div>
          
          {/* Visual Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-md">
              {/* Main Phone Mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-2 mx-auto transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 aspect-[9/16]">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Home className="h-6 w-6 text-[hsl(var(--atd-primary))]" />
                        <span className="font-semibold text-[hsl(var(--atd-text))]">ATD Dashboard</span>
                      </div>
                      <QrCode className="h-6 w-6 text-[hsl(var(--atd-text-muted))] animate-pulse" />
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/80 rounded-xl p-3 shadow-sm">
                        <div className="text-2xl font-bold text-[hsl(var(--atd-primary))]">4</div>
                        <div className="text-xs text-[hsl(var(--atd-text-muted))]">Active Jobs</div>
                      </div>
                      <div className="bg-white/80 rounded-xl p-3 shadow-sm">
                        <div className="text-2xl font-bold text-[hsl(var(--atd-accent))]">7</div>
                        <div className="text-xs text-[hsl(var(--atd-text-muted))]">Providers</div>
                      </div>
                    </div>
                    
                    {/* Job List */}
                    <div className="space-y-2">
                      <div className="bg-white/60 rounded-lg p-3 border-l-4 border-[hsl(var(--atd-accent))]">
                        <div className="font-medium text-sm">HVAC Maintenance</div>
                        <div className="text-xs text-[hsl(var(--atd-text-muted))]">In Progress • Mike's HVAC</div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 border-l-4 border-[hsl(var(--atd-primary))]">
                        <div className="font-medium text-sm">Weekly Cleaning</div>
                        <div className="text-xs text-[hsl(var(--atd-text-muted))]">Scheduled • Maria's Service</div>
                      </div>
                    </div>
                    
                    {/* Team Access */}
                    <div className="bg-gradient-to-r from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
                        <span className="font-medium text-sm">Shared Access</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-[hsl(var(--atd-primary))] rounded-full"></div>
                        <div className="w-6 h-6 bg-[hsl(var(--atd-accent))] rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">+2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[hsl(var(--atd-accent))] text-white rounded-full p-3 shadow-lg animate-bounce">
                <QrCode className="h-5 w-5" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[hsl(var(--atd-primary))] text-white rounded-full p-3 shadow-lg">
                <Home className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
