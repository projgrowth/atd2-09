
import { ArrowDown, CheckCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background with Gradients and Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-atd-primary/5 via-white to-atd-accent/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-atd-surface/20 via-transparent to-transparent"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-atd-primary/10 to-atd-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-atd-accent/8 to-atd-primary/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-atd-primary/12 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10 text-center pt-20 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/70 backdrop-blur-md border border-atd-border-light shadow-lg mb-8 md:mb-12 animate-fade-in-up">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-atd-primary mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-bold text-atd-text-strong">Trusted by 500+ homeowners</span>
          </div>

          {/* Enhanced Hero Content */}
          <div className="space-y-8 md:space-y-12">
            {/* Main Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
                <span className="text-atd-text-strong">One Command Center</span>
                <span className="block bg-gradient-to-r from-atd-primary via-atd-accent to-atd-primary-dark bg-clip-text text-transparent animate-pulse">
                  for Your Home
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium text-atd-text-muted">
                Invite your own trusted pros — or choose from our vetted provider network. 
                <span className="text-atd-text-strong font-semibold"> Track updates, manage budgets, and earn rewards for consistency.</span>
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-atd-primary to-atd-accent text-white font-semibold px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-atd-primary/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[240px]"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Try It Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-atd-accent to-atd-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group relative bg-white/20 backdrop-blur-md border-2 border-atd-border-medium text-atd-text-strong font-semibold px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-xl hover:bg-white/30 hover:border-atd-primary transition-all duration-300 w-full sm:w-auto sm:min-w-[240px]"
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Enhanced Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { 
                  title: "Invite Your Pros", 
                  desc: "Work with providers you trust",
                  icon: "👥",
                  gradient: "from-blue-500/10 to-cyan-500/10"
                },
                { 
                  title: "Track Everything", 
                  desc: "Jobs, payments, all organized",
                  icon: "📊",
                  gradient: "from-atd-primary/10 to-atd-accent/10"
                },
                { 
                  title: "Share Access", 
                  desc: "Family and assistants included",
                  icon: "🔑",
                  gradient: "from-purple-500/10 to-pink-500/10"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border border-atd-border-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                >
                  <div className="text-center space-y-4">
                    <div className="text-3xl md:text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-bold text-lg md:text-xl text-atd-text-strong group-hover:text-atd-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-atd-text-muted font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-atd-primary/5 to-atd-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="group cursor-pointer bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-full shadow-lg border border-atd-border-light hover:shadow-xl transition-all duration-300"
               onClick={() => document.getElementById('why-atd')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-atd-text group-hover:text-atd-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
