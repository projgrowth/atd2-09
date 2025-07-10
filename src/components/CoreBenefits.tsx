import { Shield, Activity, Users, FileText, DollarSign, Clock, Smartphone, Share2 } from "lucide-react";

const CoreBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Bring Your Own Trusted Pros",
      description: "Work with providers you already trust, or choose from our vetted network. Your home, your choice.",
      mockup: (
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 md:p-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 mb-3">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--atd-primary))]" />
              <span className="text-sm md:text-base font-medium">Your Provider Network</span>
            </div>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium w-fit">
              3 Active
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 min-h-[60px] touch-target">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base text-white font-bold">TH</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm md:text-base font-medium truncate">Tom's HVAC (Your Pro)</div>
                  <div className="text-xs md:text-sm text-gray-500">Available • 4.9 rating</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 min-h-[60px] touch-target">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm md:text-base text-white font-bold">MC</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm md:text-base font-medium truncate">Metro Cleaning (Network)</div>
                  <div className="text-xs md:text-sm text-gray-500">Verified • 4.8 rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Activity,
      title: "Track Everything in Real-Time",
      description: "Jobs, payments, documents, and communication—all organized automatically. See exactly what's happening and what you owe.",
      mockup: (
        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 md:p-6 border border-green-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--atd-accent))]" />
              <span className="text-sm md:text-base font-medium">Live Tracking</span>
            </div>
            <div className="flex items-center space-x-1 w-fit">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm text-green-600">Live</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 min-h-[100px]">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                <span className="text-sm md:text-base font-medium">Kitchen Repair</span>
                <span className="text-xs md:text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full w-fit">75% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 md:h-3 rounded-full w-3/4 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  <span className="text-xs md:text-sm text-gray-500">Started 2 hours ago</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
                  <span className="text-xs md:text-sm text-blue-600 font-medium">$240 due</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: "Secure Document Vault",
      description: "Contracts, warranties, and receipts—safely stored and always accessible when you need them.",
      mockup: (
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 md:p-6 border border-purple-100">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Document Vault</span>
            <div className="ml-auto bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
              Secure
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 flex items-center space-x-3">
              <FileText className="h-4 w-4 text-blue-500" />
              <div className="flex-1">
                <div className="text-xs font-medium">HVAC_Contract_2024.pdf</div>
                <div className="text-xs text-gray-500">2.3 MB • Uploaded today</div>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 flex items-center space-x-3">
              <FileText className="h-4 w-4 text-purple-500" />
              <div className="flex-1">
                <div className="text-xs font-medium">Appliance_Warranties.pdf</div>
                <div className="text-xs text-gray-500">1.8 MB • Last week</div>
              </div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Share2,
      title: "Smart Access Control",
      description: "Give family members and assistants exactly the access they need—nothing more, nothing less. Your home, your rules.",
      mockup: (
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-4 md:p-6 border border-orange-100">
          <div className="flex items-center space-x-2 mb-3">
            <Share2 className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium">Access Control</span>
            <div className="ml-auto bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
              4 Members
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">M</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Mom</div>
                    <div className="text-xs text-gray-500">View Only</div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">J</span>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Assistant Jane</div>
                    <div className="text-xs text-gray-500">Full Access</div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section section-bg-content section-separator">
      <div className="container-app">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-2 mb-6 text-enhanced">
            Everything You Need to Take Control
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto font-semibold text-muted-enhanced leading-relaxed">
            Built for real homes, real people, and real peace of mind. Your trusted providers, organized effortlessly.
          </p>
        </div>

        <div className="grid-2">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
             >
              <div className="card hover-lift h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 h-full">
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))]/15 to-[hsl(var(--atd-accent))]/15 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0 shadow-subtle">
                      <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[hsl(var(--atd-primary))]" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="heading-3 mb-4 text-enhanced leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-body leading-relaxed font-semibold text-muted-enhanced mb-6">
                      {benefit.description}
                    </p>
                    
                    <div className="transform group-hover:scale-105 transition-transform duration-300 will-change-transform">
                      {benefit.mockup}
                    </div>
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

export default CoreBenefits;