import { Star, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SocialProofTeaser = () => {
  const principles = [
    { icon: Users, text: "Your Network", label: "Not Strangers" },
    { icon: Home, text: "Your Control", label: "Not Marketplace" },
    { icon: Star, text: "Your Rules", label: "Not Algorithms" }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left side - Stats */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Built on Simple Principles
            </h2>
            <p className="text-lg md:text-xl mb-8 font-semibold text-gray-300">
              A new approach to home management that puts you back in control.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/20">
                    <principle.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-2">
                    {principle.text}
                  </div>
                  <div className="text-sm text-white/90 font-semibold">
                    {principle.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Vision Statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Our Vision
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl font-semibold text-white mb-6">
                "Home management shouldn't feel like managing a business. It should feel like taking care of what matters most—your home, your family, and your peace of mind."
              </blockquote>
              
              <div className="text-center">
                <div className="text-white/90 text-sm font-medium">
                  The problem is real. The solution is coming.
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/signup">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Join Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofTeaser;