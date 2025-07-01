
import { ArrowDown, CheckCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-purple-600/20 animate-pulse"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-60 h-60 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M20 20h20v20H20V20zm0-20h20v20H20V0z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container-responsive relative z-10 text-center pt-20 lg:pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8 md:mb-12 animate-fade-in-up">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-bold text-white/90">Trusted by 500+ homeowners</span>
          </div>

          {/* Enhanced Hero Content */}
          <div className="space-y-8 md:space-y-12">
            {/* Main Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-6 leading-none">
                <span className="text-white font-black">One Command Center</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black">
                  for Your Home
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-medium text-white/80">
                Invite your own trusted pros — or choose from our vetted provider network. 
                <span className="text-white font-semibold"> Track updates, manage budgets, and earn rewards for consistency.</span>
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[280px] border border-blue-400/50"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                  Try It Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group relative bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto sm:min-w-[280px] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowDown className="h-6 w-6 ml-3 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Enhanced Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { 
                  title: "Invite Your Pros", 
                  desc: "Work with providers you trust",
                  icon: "👥",
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  border: "border-blue-400/30"
                },
                { 
                  title: "Track Everything", 
                  desc: "Jobs, payments, all organized",
                  icon: "📊",
                  gradient: "from-cyan-500/20 to-purple-500/20",
                  border: "border-cyan-400/30"
                },
                { 
                  title: "Share Access", 
                  desc: "Family and assistants included",
                  icon: "🔑",
                  gradient: "from-purple-500/20 to-blue-500/20",
                  border: "border-purple-400/30"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm border ${benefit.border} shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                >
                  <div className="text-center space-y-4">
                    <div className="text-3xl md:text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="group cursor-pointer bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-white/20 transition-all duration-300"
               onClick={() => document.getElementById('why-atd')?.scrollIntoView({ behavior: 'smooth' })}>
            <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
