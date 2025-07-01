import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, User, Users, FileText, Clock, DollarSign, MessageSquare, Star, CheckCircle, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { BetaSignupNative } from "@/components/BetaSignupNative";

const UnifiedDemo = () => {
  const [activeView, setActiveView] = useState<"user" | "provider">("user");

  const userDashboard = {
    title: "Homeowner Dashboard",
    features: [
      { icon: FileText, title: "Document Vault", desc: "Contracts, warranties, manuals" },
      { icon: Activity, title: "Active Jobs", desc: "Track progress in real-time" },
      { icon: MessageSquare, title: "Notifications", desc: "Updates from your team" },
      { icon: Users, title: "Provider Network", desc: "Your trusted professionals" }
    ]
  };

  const providerDashboard = {
    title: "Provider Dashboard",
    features: [
      { icon: Clock, title: "Job Timer", desc: "Track time on-site" },
      { icon: DollarSign, title: "Escrow Tracker", desc: "Payment status updates" },
      { icon: MessageSquare, title: "Customer Notes", desc: "Project communication" },
      { icon: Star, title: "Ratings Hub", desc: "Customer feedback system" }
    ]
  };

  const currentDashboard = activeView === "user" ? userDashboard : providerDashboard;

  return (
    <section id="demo" className="section-spacing section-bg-content section-separator">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            How It Works for Everyone
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced">
            See how ATD creates seamless experiences for homeowners and service providers alike.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border-2 border-gray-200">
            <Button
              variant={activeView === "user" ? "default" : "ghost"}
              onClick={() => setActiveView("user")}
              className={cn(
                "px-6 py-3 rounded-lg transition-all duration-200",
                activeView === "user" && "premium-button"
              )}
            >
              <User className="h-5 w-5 mr-2" />
              Homeowner View
            </Button>
            <Button
              variant={activeView === "provider" ? "default" : "ghost"}
              onClick={() => setActiveView("provider")}
              className={cn(
                "px-6 py-3 rounded-lg transition-all duration-200",
                activeView === "provider" && "premium-button"
              )}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Provider View
            </Button>
          </div>
        </div>

        {/* Interactive Dashboard Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Dashboard Mockup */}
          <div className="animate-fade-in">
            <div className="card-enhanced p-8 lg:p-10">
              <div className="flex items-center mb-8">
                {activeView === "user" ? (
                  <Monitor className="h-8 w-8 text-[hsl(var(--atd-primary))] mr-4" />
                ) : (
                  <Smartphone className="h-8 w-8 text-[hsl(var(--atd-primary))] mr-4" />
                )}
                <h3 className="text-2xl font-bold text-enhanced">{currentDashboard.title}</h3>
              </div>

              <div className="space-y-4">
                {currentDashboard.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gradient-to-r from-[hsl(var(--atd-primary))]/5 to-[hsl(var(--atd-accent))]/5 rounded-xl border border-gray-200 hover:border-[hsl(var(--atd-primary))]/30 transition-all duration-200 group"
                  >
                    <div className="bg-white rounded-lg p-3 mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                      <feature.icon className="h-6 w-6 text-[hsl(var(--atd-primary))]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-enhanced mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-enhanced font-semibold">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {activeView === "provider" && (
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-bold text-green-800">Job completed - Payment processing</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-bold mb-4 text-enhanced">
                {activeView === "user" ? "For Homeowners" : "For Service Providers"}
              </h4>
              
              {activeView === "user" ? (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Invite your trusted pros</p>
                      <p className="text-sm text-muted-enhanced">Work with providers you already know and trust</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Browse vetted network</p>
                      <p className="text-sm text-muted-enhanced">Discover new professionals with verified backgrounds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Track everything</p>
                      <p className="text-sm text-muted-enhanced">Jobs, payments, documents all in one place</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Simple mobile interface</p>
                      <p className="text-sm text-muted-enhanced">Update jobs and communicate on the go</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Secure payment processing</p>
                      <p className="text-sm text-muted-enhanced">Get paid quickly with escrow protection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[hsl(var(--atd-accent))] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-enhanced">Build your reputation</p>
                      <p className="text-sm text-muted-enhanced">Earn ratings and grow your client base</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Future Rating System Preview */}
            <div className="card-base p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h5 className="font-bold text-enhanced mb-3">Coming Soon: 2-Way Rating System</h5>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-enhanced">Rate Providers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-enhanced">Rate Homeowners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-page Form */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="card-enhanced p-8 sm:p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-enhanced">
              Ready to Transform Your Home Management?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
              Join our beta to experience seamless home services coordination.
            </p>
            
            <BetaSignupNative variant="mid" className="max-w-lg mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedDemo;