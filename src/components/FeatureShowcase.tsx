
import { Shield, Activity, Smartphone, Share2 } from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Document Vault",
      description: "Contracts, warranties, and receipts—safely stored and always accessible.",
      mockup: (
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
            <span className="text-sm font-medium">Document Vault</span>
          </div>
          <div className="space-y-1">
            <div className="bg-white rounded p-2 text-xs flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>HVAC_Contract_2024.pdf</span>
            </div>
            <div className="bg-white rounded p-2 text-xs flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Appliance_Warranties.pdf</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Activity,
      title: "Real-Time Job + Payment Tracker",
      description: "See exactly what's happening and what you owe—no surprises.",
      mockup: (
        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Activity className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
            <span className="text-sm font-medium">Live Tracking</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium">Kitchen Repair</span>
                <span className="text-xs text-green-600">In Progress</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className="bg-green-500 h-1 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="text-xs text-right text-[hsl(var(--atd-text-muted))]">$240 due on completion</div>
          </div>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: "PocketOffice for Providers",
      description: "Your pros get a clean, simple interface to update jobs and communicate.",
      mockup: (
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Smartphone className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">PocketOffice</span>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-purple-100 text-purple-800 rounded p-2 text-xs font-medium">
              Update Job Status
            </button>
            <button className="w-full bg-white border border-purple-200 text-purple-600 rounded p-2 text-xs">
              Upload Photos
            </button>
          </div>
        </div>
      )
    },
    {
      icon: Share2,
      title: "Shared Access Control",
      description: "Give family members exactly the access they need—nothing more, nothing less.",
      mockup: (
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Share2 className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium">Access Control</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs">Mom (View Only)</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs">Assistant (Full Access)</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))] max-w-3xl mx-auto">
            Built for real homes, real people, and real peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-[hsl(var(--atd-primary))]" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[hsl(var(--atd-text-muted))] mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature Mockup */}
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {feature.mockup}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
