
import TestimonialCarousel from "./TestimonialCarousel";
import ProviderSpotlight from "./ProviderSpotlight";
import SecurityBadges from "./SecurityBadges";
import CaseStudies from "./CaseStudies";

const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Main Testimonial Carousel */}
        <div className="mb-20">
          <TestimonialCarousel />
        </div>

        {/* Trust Indicators - Enhanced */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
              Join the Growing Community
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Beta Users" },
              { number: "200+", label: "Service Providers" },
              { number: "1,000+", label: "Homes Connected" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50/50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-[hsl(var(--atd-primary))] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-[hsl(var(--atd-text-muted))]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Social Proof Sections */}
      <SecurityBadges />
      <ProviderSpotlight />
      <CaseStudies />
    </section>
  );
};

export default SocialProof;
