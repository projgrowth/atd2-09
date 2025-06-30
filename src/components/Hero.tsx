
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-primary">
      {/* Enhanced Background with stronger gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-green-100/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      
      {/* Subtle Pattern Overlay - more visible */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10 text-center section-spacing">
        <div className="content-max-width">
          {/* Enhanced Hero Content */}
          <div className="visual-hierarchy">
            {/* Trust Badge - enhanced contrast */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-md mb-8 animate-fade-in-up">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-sm font-bold text-gray-800">Trusted by 500+ homeowners</span>
            </div>

            {/* Main Headline - enhanced typography */}
            <h1 className="heading-primary mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Your Home's
              <span className="text-gradient block mt-3">Quiet Command Center</span>
            </h1>

            {/* Subheadline - improved contrast */}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed font-semibold text-enhanced" style={{ animationDelay: '0.2s' }}>
              Stop juggling apps, phone calls, and paperwork. All Things Done organizes your home services, 
              payments, and trusted providers in one beautiful, simple dashboard.
            </p>

            {/* CTA Buttons - enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="premium-button min-w-[220px] text-lg py-6"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join the Beta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="button-secondary-enhanced min-w-[220px] text-lg py-6"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Key Benefits - enhanced cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { title: "Invite Your Pros", desc: "Work with providers you trust" },
                { title: "Track Everything", desc: "Jobs, payments, all organized" },
                { title: "Share Access", desc: "Family and assistants included" }
              ].map((benefit, index) => (
                <div key={index} className="card-enhanced p-8 text-center enhanced-card-hover">
                  <h3 className="font-bold text-lg mb-3 text-enhanced">{benefit.title}</h3>
                  <p className="text-base font-semibold text-muted-enhanced">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - enhanced visibility */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/80 p-3 rounded-full shadow-lg">
            <ArrowDown className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
