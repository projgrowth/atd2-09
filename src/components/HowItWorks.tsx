
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
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
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
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-7 w-7 text-[hsl(var(--atd-primary))]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
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
