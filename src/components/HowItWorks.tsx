
import { UserPlus, Users, FileText, Activity, Share, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your home dashboard in minutes"
    },
    {
      number: "02", 
      icon: Users,
      title: "Invite Your Team",
      description: "Add family members and assistants"
    },
    {
      number: "03",
      icon: FileText,
      title: "Add Providers + Documents",
      description: "Upload contracts, warranties, and provider info"
    },
    {
      number: "04",
      icon: Activity,
      title: "Track Jobs in Real Time",
      description: "Monitor progress and payments automatically"
    },
    {
      number: "05",
      icon: Share,
      title: "Share Access",
      description: "Give controlled access to who needs it"
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Relax",
      description: "Everything handled. Nothing forgotten."
    }
  ];

  return (
    <section className="section-spacing section-bg-interactive section-separator">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="heading-secondary mb-4 md:mb-6 text-enhanced">
            How It Works
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mobile-text-readable">
            Six simple steps to transform how you manage your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-interactive card-padding h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-6 w-6 md:h-8 md:w-8 text-[hsl(var(--atd-primary))]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-enhanced">
                  {step.title}
                </h3>
                
                <p className="leading-relaxed text-sm md:text-base font-semibold text-muted-enhanced mobile-text-readable">
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
