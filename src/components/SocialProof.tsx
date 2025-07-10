
import TestimonialCarousel from "./TestimonialCarousel";

const SocialProof = () => {
  const visionPoints = [
    { number: "∞", label: "Possibilities" },
    { number: "1", label: "Simple Platform" },
    { number: "0", label: "Marketplace Chaos" },
    { number: "100%", label: "Your Control" }
  ];

  return (
    <section className="section section-bg-interactive section-separator relative overflow-hidden">
      {/* Background Elements - enhanced */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-app relative z-10">
        {/* Main Testimonial Carousel */}
        <div className="mb-24 sm:mb-28 lg:mb-32">
          <TestimonialCarousel />
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="animate-fade-in-up feature-spacing" style={{ animationDelay: '0.3s' }}>
          {/* Section Header */}
          <div className="text-center section-header">
            <div className="inline-block bg-accent/10 text-accent py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base font-bold mb-8 sm:mb-10 border border-accent/20">
              Trusted by Community
            </div>
            
            <h3 className="heading-2 mb-6">
              A New Vision for Home Management
            </h3>
            
            <p className="text-lg max-w-2xl mx-auto font-semibold text-muted-enhanced leading-relaxed">
              Built for homeowners who want organization without losing control. Coming soon.
            </p>
          </div>
          
          {/* Vision Grid */}
          <div className="grid-4 max-w-5xl mx-auto">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card hover-lift text-center min-h-[180px] sm:min-h-[200px] flex flex-col justify-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                    {point.number}
                  </div>
                  <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-muted-enhanced">
                    {point.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Status */}
          <div className="mt-20 sm:mt-24 lg:mt-28 max-w-4xl mx-auto">
            <div className="premium-card enhanced-card-hover card-padding-lg text-center">
              <h4 className="heading-3 mb-6 text-enhanced">Currently in Development</h4>
              <p className="text-base text-muted-enhanced mb-8 leading-relaxed">
                We're building ATD to solve real problems that homeowners face every day. 
                No fake promises, no inflated numbers—just honest development toward a better solution.
              </p>
              <div className="bg-atd-primary/10 rounded-lg p-6 sm:p-8">
                <p className="text-base sm:text-lg font-semibold text-atd-primary">
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
