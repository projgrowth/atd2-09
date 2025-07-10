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
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Why Choose ATD?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-gray-600">
            Finally, a home management solution that works the way you do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up p-4 sm:p-6 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 mx-auto group-hover:scale-110 transition-all duration-300 shadow-sm">
                <benefit.icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-[hsl(var(--atd-primary))]" />
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                {benefit.title}
              </h3>
              
              <p className="leading-relaxed text-sm sm:text-base lg:text-lg font-semibold text-gray-600">
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