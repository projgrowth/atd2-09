
import TestimonialCarousel from "./TestimonialCarousel";

const SocialProof = () => {
  const stats = [
    { number: "500+", label: "Beta Users" },
    { number: "200+", label: "Service Providers" },
    { number: "1,000+", label: "Homes Connected" },
    { number: "98%", label: "Satisfaction Rate" }
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
              Join the Growing Revolution
            </h3>
            
            <p className="text-xl max-w-2xl mx-auto font-semibold text-muted-enhanced">
              See why homeowners and service providers choose ATD for seamless home management.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="premium-card p-8 text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold uppercase tracking-wider text-muted-enhanced">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="premium-card p-8 text-center">
                <div className="mb-6">
                  <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full animate-[width_2s_ease-out] w-4/5"></div>
                  </div>
                </div>
                <p className="text-base font-semibold text-enhanced">Beta capacity: <span className="font-bold">80% full</span></p>
              </div>
              
              <div className="premium-card p-8 text-center">
                <div className="mb-6">
                  <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full animate-[width_2s_ease-out_0.5s] w-full"></div>
                  </div>
                </div>
                <p className="text-base font-semibold text-enhanced">Satisfaction rate: <span className="font-bold">98%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
