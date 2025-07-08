import { Star, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SocialProofTeaser = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Beta Users" },
    { icon: Home, number: "1,200+", label: "Homes Managed" },
    { icon: Star, number: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="section-spacing-large section-bg-dark section-divider">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Stats */}
          <div className="animate-fade-in-up">
            <h2 className="heading-secondary mb-6 text-enhanced">
              Trusted by Homeowners
            </h2>
            <p className="text-lg md:text-xl mb-8 font-semibold text-muted-enhanced mobile-text-readable">
              Join hundreds of satisfied homeowners who've transformed their home management.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/20">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/90 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl font-semibold text-white mb-6 mobile-text-readable">
                "ATD completely changed how I manage my properties. Instead of juggling emails and texts with different contractors, everything is organized in one place. My providers love the simple interface too."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
                <div>
                  <div className="font-bold text-white">Sarah Mitchell</div>
                  <div className="text-white/80 text-sm">Property Manager, Dallas TX</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/social-proof">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Read More Success Stories
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