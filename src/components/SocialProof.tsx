
import TestimonialCarousel from "./TestimonialCarousel";

const SocialProof = () => {
  const visionPoints = [
    { number: "∞", label: "Possibilities" },
    { number: "1", label: "Simple Platform" },
    { number: "0", label: "Marketplace Chaos" },
    { number: "100%", label: "Your Control" }
  ];

  return (
    <section className="section-spacing section-bg-interactive section-separator relative overflow-hidden">
      {/* Background Elements - enhanced */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10">
        {/* Main Testimonial Carousel */}
        <div className="mb-24">
          <TestimonialCarousel />
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-bold mb-6 border border-accent/20">
              Trusted by Community
            </div>
            
            <h3 className="heading-secondary mb-6">
              A New Vision for Home Management
            </h3>
            
            <p className="text-xl max-w-2xl mx-auto font-semibold text-muted-enhanced">
              Built for homeowners who want organization without losing control. Coming soon.
            </p>
          </div>
          
          {/* Vision Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="premium-card enhanced-card-hover p-8 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                    {point.number}
                  </div>
                  <div className="text-caption font-body-bold uppercase tracking-wider text-muted-enhanced">
                    {point.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Status */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="premium-card enhanced-card-hover p-8 text-center">
              <h4 className="heading-quaternary mb-4 text-enhanced">Currently in Development</h4>
              <p className="text-body font-body-medium text-muted-enhanced mobile-text-readable mb-6">
                We're building ATD to solve real problems that homeowners face every day. 
                No fake promises, no inflated numbers—just honest development toward a better solution.
              </p>
              <div className="bg-atd-primary/10 rounded-lg p-4">
                <p className="text-sm font-semibold text-atd-primary">
                  Join our early access list to be notified when we're ready for testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
