
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
      title: "Share Access with Family or Assistants",
      description: "Give access to whoever helps manage your home. Full control, no chaos."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6">
            Why All Things Done?
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))] max-w-3xl mx-auto">
            Your home deserves better than scattered apps and endless phone calls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-[hsl(var(--atd-primary))]" />
              </div>
              
              <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[hsl(var(--atd-text-muted))] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyATD;
