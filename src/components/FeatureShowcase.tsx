import { Shield, Activity, Smartphone, Share2, FileText, DollarSign, Users, Clock } from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Document Vault",
      description: "Contracts, warranties, and receipts—safely stored and always accessible.",
      mockup: (
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-3 md:p-4 space-y-2 border border-blue-100">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="h-4 w-4 text-blue-600" />
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
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100 flex items-center space-x-3">
              <FileText className="h-4 w-4 text-green-500" />
              <div className="flex-1">
                <div className="text-xs font-medium">Cleaning_Receipt_Nov.pdf</div>
                <div className="text-xs text-gray-500">842 KB • 3 days ago</div>
              </div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 md:p-6 border border-green-100">
          <div className="flex items-center space-x-2 mb-3">
            <Activity className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">Live Tracking</span>
            <div className="ml-auto flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600">Live</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium">Kitchen Repair</span>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">75% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-3/4 transition-all duration-500"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-500">Started 2 hours ago</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-3 w-3 text-blue-500" />
                  <span className="text-xs text-blue-600 font-medium">$240 due</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium">Plumbing Check</span>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Tomorrow 10:00 AM</span>
                <span className="text-xs text-gray-600">$85 estimated</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: "PocketOffice for Providers",
      description: "Your pros get a clean, simple interface to update jobs and communicate.",
      mockup: (
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-4 md:p-6 border border-purple-100">
          <div className="flex items-center space-x-2 mb-3">
            <Smartphone className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium">PocketOffice</span>
            <div className="ml-auto bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
              Mobile
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="text-xs font-medium mb-2">Current Job: Kitchen Repair</div>
              <div className="space-y-2">
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-3 md:p-4 text-sm md:text-base font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 min-h-[48px]">
                  Update Job Status
                </button>
                <button className="w-full bg-white border-2 border-purple-200 text-purple-600 rounded-lg p-3 md:p-4 text-sm md:text-base font-medium hover:bg-purple-50 transition-all duration-200 min-h-[48px]">
                  Upload Progress Photos
                </button>
                <button className="w-full bg-gray-50 border border-gray-200 text-gray-600 rounded-lg p-3 md:p-4 text-sm md:text-base font-medium hover:bg-gray-100 transition-all duration-200 min-h-[48px]">
                  Message Homeowner
                </button>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-2 border border-green-200">
              <div className="text-xs text-green-700 font-medium">✓ Payment confirmed</div>
              <div className="text-xs text-green-600">Auto-deposited to your account</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Share2,
      title: "Shared Access Control",
      description: "Give family members exactly the access they need—nothing more, nothing less.",
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
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="text-xs font-medium">Brother Tom</div>
                    <div className="text-xs text-gray-500">Emergency Only</div>
                  </div>
                </div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Everything You Need
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built for real homes, real people, and real peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 p-8 transition-all duration-500 animate-fade-in-up min-h-[400px] sm:min-h-[450px] hover:shadow-lg"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 h-full">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced Feature Mockup */}
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