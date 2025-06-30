
import TestimonialCarousel from "./TestimonialCarousel";
import ProviderSpotlight from "./ProviderSpotlight";
import SecurityBadges from "./SecurityBadges";
import CaseStudies from "./CaseStudies";

const SocialProof = () => {
  const stats = [
    { number: "500+", label: "Beta Users", color: "from-blue-500 to-cyan-500" },
    { number: "200+", label: "Service Providers", color: "from-purple-500 to-pink-500" },
    { number: "1,000+", label: "Homes Connected", color: "from-green-500 to-emerald-500" },
    { number: "98%", label: "Satisfaction Rate", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">Growing Community</span>
            </div>
            
            <h3 className="heading-secondary text-gray-900 mb-4">
              Join the Revolution
            </h3>
            
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              See why homeowners and service providers are choosing ATD for seamless home management.
            </p>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-enhanced p-8 text-center relative overflow-hidden enhanced-card-hover">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${stat.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-[width_2s_ease-out] w-4/5"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Beta capacity: <span className="font-semibold">80% full</span></p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-[width_2s_ease-out_0.5s] w-full"></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Satisfaction rate: <span className="font-semibold">98%</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Social Proof Sections */}
      <div className="mt-24">
        <SecurityBadges />
      </div>
      
      <div className="mt-16">
        <ProviderSpotlight />
      </div>
      
      <div className="mt-16">
        <CaseStudies />
      </div>
    </section>
  );
};

export default SocialProof;
