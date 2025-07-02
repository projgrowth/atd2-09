
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
    <section id="how-it-works" className="section-large bg-white">
      <div className="container-framer">
        <div className="text-center mb-24">
          <h2 className="headline-large mb-8 animate-fade-up">
            How it works
          </h2>
          <p className="text-large max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Six simple steps to transform how you manage your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="card-framer">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-lg font-bold mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-xl mb-6">
                  <step.icon className="h-8 w-8 text-black" />
                </div>
                
                {/* Content */}
                <h3 className="headline-medium mb-4">
                  {step.title}
                </h3>
                
                <p className="text-body">
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
