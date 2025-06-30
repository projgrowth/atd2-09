
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
      {/* Background Pattern - more subtle */}
      <div className="absolute inset-0 opacity-2" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M20 20h60v60H20z' fill='%23ffffff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10">
        {/* Section Header - enhanced styling */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border-2 border-blue-200 mb-8">
            <span className="text-sm font-bold text-blue-900">Why Choose ATD?</span>
          </div>
          
          <h2 className="heading-secondary mb-6">
            Your Home Deserves Better
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto font-semibold leading-relaxed text-enhanced">
            Stop juggling scattered apps and endless phone calls. Experience the peace of mind 
            that comes with having everything organized in one place.
          </p>
        </div>

        {/* Features Grid - enhanced cards */}
        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Card */}
              <div className="card-interactive p-10 h-full relative overflow-hidden">
                {/* Background Gradient - more visible */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-8 rounded-full blur-3xl group-hover:opacity-12 transition-opacity duration-500`}></div>
                
                {/* Icon - enhanced */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} p-5 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Content - improved typography */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-gray-800 transition-colors text-enhanced">
                    {feature.title}
                  </h3>
                  
                  <p className="leading-relaxed text-lg font-semibold group-hover:text-gray-800 transition-colors text-muted-enhanced">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - enhanced styling */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-200">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-gray-800">Currently in beta • Join 500+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyATD;
