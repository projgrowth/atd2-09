
import { UserPlus, MapPin, Users } from "lucide-react";

const WhyATD = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Invite Your Own Pros",
      description: "Work with providers you already trust. No marketplace, no strangers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Track Everything in One Place",
      description: "Jobs, payments, documents, and communication—all organized automatically.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Share Access with Family or Assistants",
      description: "Give access to whoever helps manage your home. Full control, no chaos.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="section-spacing section-bg-content section-separator relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-2" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M20 20h60v60H20z' fill='%23ffffff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-standard relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-100 border-2 border-blue-200 mb-6 md:mb-8">
            <span className="text-xs md:text-sm font-bold text-blue-900">Why Choose ATD?</span>
          </div>
          
          <h2 className="heading-secondary mb-4 md:mb-6">
            Your Home Deserves Better
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold leading-relaxed text-enhanced mobile-text-readable">
            Stop juggling scattered apps and endless phone calls. Experience the peace of mind 
            that comes with having everything organized in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-mobile-responsive max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Unified Card */}
              <div className="card-interactive card-padding h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${feature.color} opacity-6 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6 md:mb-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br ${feature.color} p-4 md:p-5 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 lg:mb-6 group-hover:text-gray-800 transition-colors text-enhanced">
                    {feature.title}
                  </h3>
                  
                  <p className="leading-relaxed text-base md:text-lg font-semibold group-hover:text-gray-800 transition-colors text-muted-enhanced mobile-text-readable">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-2 md:space-x-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-200">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-gray-800 text-sm md:text-base">Currently in beta • Join 500+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyATD;
