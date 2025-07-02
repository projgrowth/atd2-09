
import { UserPlus, MapPin, Users } from "lucide-react";

const WhyATD = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Invite Your Own Pros",
      description: "Work with providers you already trust. No marketplace, no strangers."
    },
    {
      icon: MapPin,
      title: "Track Everything in One Place", 
      description: "Jobs, payments, documents, and communication—all organized automatically."
    },
    {
      icon: Users,
      title: "Share Access with Family",
      description: "Give access to whoever helps manage your home. Full control, no chaos."
    }
  ];

  return (
    <section id="features" className="section-large bg-neutral-50">
      <div className="container-framer">
        <div className="text-center mb-24">
          <h2 className="headline-large mb-8 animate-fade-up">
            Why choose ATD?
          </h2>
          <p className="text-large max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Stop juggling scattered apps and endless phone calls. Experience the peace of mind that comes with having everything organized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-xl mb-8">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="headline-medium mb-6">
                {feature.title}
              </h3>
              
              <p className="text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Beta Status */}
        <div className="text-center mt-24 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white border border-neutral-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-neutral-700">Currently in beta • Join 500+ early adopters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyATD;
