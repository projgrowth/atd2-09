
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
    <section className="section-spacing bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M20 20h60v60H20z' fill='%23ffffff'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">Why Choose ATD?</span>
          </div>
          
          <h2 className="heading-secondary mb-6 text-gray-900">
            Your Home Deserves Better
          </h2>
          
          <p className="text-large max-w-3xl mx-auto text-gray-600">
            Stop juggling scattered apps and endless phone calls. Experience the peace of mind 
            that comes with having everything organized in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="card-enhanced p-8 h-full enhanced-card-hover relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Currently in beta • Join 500+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyATD;
