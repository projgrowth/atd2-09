
import { ArrowDown, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 gradient-surface"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/20"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10 text-center section-spacing">
        <div className="content-max-width">
          {/* Enhanced Hero Content */}
          <div className="visual-hierarchy">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ homeowners</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-primary mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Your Home's
              <span className="text-gradient block mt-2">Quiet Command Center</span>
            </h1>

            {/* Subheadline */}
            <p className="text-large max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Stop juggling apps, phone calls, and paperwork. All Things Done organizes your home services, 
              payments, and trusted providers in one beautiful, simple dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="premium-button min-w-[200px]"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join the Beta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="min-w-[200px] bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { title: "Invite Your Pros", desc: "Work with providers you trust" },
                { title: "Track Everything", desc: "Jobs, payments, all organized" },
                { title: "Share Access", desc: "Family and assistants included" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
