
import TestimonialCarousel from "./TestimonialCarousel";

const SocialProof = () => {
  const stats = [
    { number: "500+", label: "Beta Users", color: "from-blue-500 to-cyan-500" },
    { number: "200+", label: "Service Providers", color: "from-purple-500 to-pink-500" },
    { number: "1,000+", label: "Homes Connected", color: "from-green-500 to-emerald-500" },
    { number: "98%", label: "Satisfaction Rate", color: "from-orange-500 to-red-500" }
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
          {/* Section Header - enhanced */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border-2 border-green-200 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-bold text-green-900">Growing Community</span>
            </div>
            
            <h3 className="heading-secondary mb-6">
              Join the Revolution
            </h3>
            
            <p className="text-xl max-w-2xl mx-auto font-semibold text-muted-enhanced">
              See why homeowners and service providers are choosing ATD for seamless home management.
            </p>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-interactive p-10 text-center relative overflow-hidden">
                  {/* Background Gradient - more visible */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>
                  
                  {/* Content - enhanced typography */}
                  <div className="relative">
                    <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-base font-bold uppercase tracking-wider text-enhanced">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute top-6 right-6 w-10 h-10 bg-gradient-to-br ${stat.color} opacity-15 rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators - enhanced */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="card-enhanced p-8 text-center">
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full animate-[width_2s_ease-out] w-4/5"></div>
                  </div>
                </div>
                <p className="text-base font-bold text-enhanced">Beta capacity: <span className="font-black">80% full</span></p>
              </div>
              
              <div className="card-enhanced p-8 text-center">
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full animate-[width_2s_ease-out_0.5s] w-full"></div>
                  </div>
                </div>
                <p className="text-base font-bold text-enhanced">Satisfaction rate: <span className="font-black">98%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
