
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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            How It Works
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced">
            Six simple steps to transform how you manage your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-interactive p-8 h-full">
                {/* Step Number - enhanced */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-xl">
                  {step.number}
                </div>
                
                {/* Icon - enhanced */}
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-[hsl(var(--atd-primary))]" />
                </div>
                
                {/* Content - improved typography */}
                <h3 className="text-xl font-bold mb-4 text-enhanced">
                  {step.title}
                </h3>
                
                <p className="leading-relaxed text-base font-semibold text-muted-enhanced">
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
