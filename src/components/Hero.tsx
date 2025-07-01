
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BetaSignupNative } from "@/components/BetaSignupNative";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Enhanced Background with stronger gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-green-100/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10 text-center section-spacing">
        <div className="content-max-width">
          {/* Enhanced Hero Content */}
          <div className="visual-hierarchy">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-md mb-6 md:mb-8 animate-fade-in-up">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mr-2 md:mr-3" />
              <span className="text-xs md:text-sm font-bold text-gray-800">Currently in beta testing with verified users</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-primary mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Invite your trusted pros — or choose from our
              <span className="text-gradient block mt-2 md:mt-3">vetted network</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced" style={{ animationDelay: '0.2s' }}>
              Track jobs, earn rewards, and manage your home with ease.
            </p>

            {/* Beta Form */}
            <div className="mb-12 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <BetaSignupNative variant="hero" className="max-w-lg mx-auto" />
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
