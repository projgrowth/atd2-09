import { Shield, Users, Clock, CheckCircle } from "lucide-react";

const QuickBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Your Trusted Network",
      description: "Work with your existing providers, not strangers from a marketplace."
    },
    {
      icon: Users,
      title: "Complete Control",
      description: "Share access with family and staff exactly how you want."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "See progress instantly with PocketOffice mobile interface."
    },
    {
      icon: CheckCircle,
      title: "Everything Organized",
      description: "All communications, photos, and documents in one secure place."
    }
  ];

  return (
    <section className="section-spacing-large section-bg-content">
      <div className="container-standard">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="heading-secondary mb-4 md:mb-6 text-enhanced">
            Why Choose ATD?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mobile-text-readable">
            Finally, a home management solution that works the way you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-10 w-10 md:h-12 md:w-12 text-[hsl(var(--atd-primary))]" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-3 text-enhanced">
                {benefit.title}
              </h3>
              
              <p className="leading-relaxed text-sm md:text-base font-semibold text-muted-enhanced mobile-text-readable">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickBenefits;