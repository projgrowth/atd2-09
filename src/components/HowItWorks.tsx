
import { UserPlus, Users, FileText, Activity, Share, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Invite Your Trusted Providers",
      description: "Add the service providers you already know and trust to your private network."
    },
    {
      number: "02", 
      icon: FileText,
      title: "Create Job Requests",
      description: "Post work requests directly to your providers with all the details they need."
    },
    {
      number: "03",
      icon: Activity,
      title: "Track Progress in Real-Time",
      description: "Monitor updates, payments, and communication all in one organized place."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Complete & Document",
      description: "Everything handled automatically. Nothing forgotten."
    }
  ];

  return (
    <section className="section-spacing-compact section-bg-interactive section-separator">
      <div className="container-standard">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="heading-secondary mb-4 md:mb-6 text-enhanced">
            How It Works
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mobile-text-readable">
            Four simple steps to transform how you manage your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="premium-card h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-elevated">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-enhanced">
                  {step.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-enhanced">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
