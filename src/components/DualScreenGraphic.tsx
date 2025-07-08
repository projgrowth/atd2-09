import { useState } from "react";
import { Monitor, Smartphone, QrCode, Camera, MessageSquare, CreditCard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DualScreenGraphic = () => {
  const [activeView, setActiveView] = useState<'user' | 'provider'>('user');

  const userFeatures = [
    { icon: Monitor, title: "Dashboard", desc: "Track all jobs in one place" },
    { icon: QrCode, title: "QR Access", desc: "Instant provider onboarding" },
    { icon: MessageSquare, title: "Messaging", desc: "Direct communication hub" },
    { icon: CreditCard, title: "Payments", desc: "Secure escrow system" }
  ];

  const providerFeatures = [
    { icon: Smartphone, title: "PocketOffice", desc: "Mobile job management" },
    { icon: Camera, title: "Photo Updates", desc: "Real-time progress shots" },
    { icon: Star, title: "Ratings", desc: "Build your reputation" },
    { icon: CreditCard, title: "Fast Pay", desc: "Instant payment release" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Toggle Controls */}
      <div className="flex justify-center mb-8">
        <div className="card-base p-2 flex gap-2">
          <Button
            variant={activeView === 'user' ? 'default' : 'outline'}
            onClick={() => setActiveView('user')}
            className={cn(
              "px-6 py-3 font-semibold transition-all duration-300",
              activeView === 'user' ? "premium-button" : "button-secondary-enhanced"
            )}
          >
            Homeowner View
          </Button>
          <Button
            variant={activeView === 'provider' ? 'default' : 'outline'}
            onClick={() => setActiveView('provider')}
            className={cn(
              "px-6 py-3 font-semibold transition-all duration-300",
              activeView === 'provider' ? "premium-button" : "button-secondary-enhanced"
            )}
          >
            Provider View
          </Button>
        </div>
      </div>

      {/* Dual Screen Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Left Side - Always visible, highlighted when active */}
        <div className={cn(
          "space-y-6 transition-all duration-500",
          activeView === 'user' ? "opacity-100 scale-100" : "opacity-60 scale-95"
        )}>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-enhanced">
              Homeowner Experience
            </h3>
            <p className="text-lg font-semibold text-muted-enhanced">
              Complete control and transparency
            </p>
          </div>

          {/* Mock Dashboard */}
          <div className="card-base card-padding bg-gradient-to-br from-blue-50 to-white border-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg text-enhanced">Active Jobs</h4>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  2 in progress
                </div>
              </div>
              
              {userFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-enhanced">{feature.title}</div>
                      <div className="text-sm text-muted-enhanced">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QR Code Demo */}
          <div className="text-center">
            <div className="inline-block card-base p-4">
              <QrCode className="h-16 w-16 mx-auto mb-2 text-primary" />
              <p className="text-sm font-semibold text-muted-enhanced">
                Scan to add provider instantly
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Always visible, highlighted when active */}
        <div className={cn(
          "space-y-6 transition-all duration-500",
          activeView === 'provider' ? "opacity-100 scale-100" : "opacity-60 scale-95"
        )}>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-enhanced">
              Provider Experience
            </h3>
            <p className="text-lg font-semibold text-muted-enhanced">
              Streamlined mobile workflow
            </p>
          </div>

          {/* Mock Mobile Interface */}
          <div className="card-base card-padding bg-gradient-to-br from-green-50 to-white border-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg text-enhanced">PocketOffice</h4>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Mobile Ready
                </div>
              </div>
              
              {providerFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-enhanced">{feature.title}</div>
                      <div className="text-sm text-muted-enhanced">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Provider Badge */}
          <div className="text-center">
            <div className="inline-block card-base p-4">
              <Star className="h-16 w-16 mx-auto mb-2 text-accent" />
              <p className="text-sm font-semibold text-muted-enhanced">
                Build reputation & get paid fast
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="text-center mt-12">
        <div className="card-base card-padding max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-3 text-enhanced">One Platform, Two Perspectives</h4>
          <p className="text-base font-semibold text-muted-enhanced">
            Seamless experience for homeowners and providers alike. QR code onboarding connects them instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DualScreenGraphic;