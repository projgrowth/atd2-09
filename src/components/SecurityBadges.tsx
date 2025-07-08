
import { Shield, Lock, Eye, Award } from "lucide-react";

const SecurityBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays private",
      color: "text-blue-600"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Bank-level encryption",
      color: "text-green-600"
    },
    {
      icon: Eye,
      title: "No Third Parties",
      description: "Direct homeowner-provider connection",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Trusted Platform",
      description: "Verified service providers only",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="section-spacing section-bg-primary section-separator">
      <div className="container-standard">
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
            Built with Security & Privacy in Mind
          </h3>
          <p className="text-[hsl(var(--atd-text-muted))] max-w-2xl mx-auto">
            Your home information is sensitive. We've designed ATD with the highest security standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {badges.map((badge, index) => (
            <div 
              key={badge.title}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-4 ${badge.color}`}>
                <badge.icon className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-[hsl(var(--atd-text))] mb-2">
                {badge.title}
              </h4>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-full border border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-[hsl(var(--atd-text))]">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-[hsl(var(--atd-text))]">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-[hsl(var(--atd-text))]">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
