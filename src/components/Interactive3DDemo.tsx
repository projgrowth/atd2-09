import { useState } from "react";
import { Monitor, Smartphone, Eye, RotateCcw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Interactive3DDemo = () => {
  const [activeView, setActiveView] = useState<'homeowner' | 'provider'>('homeowner');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleViewChange = (view: 'homeowner' | 'provider') => {
    if (view === activeView) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveView(view);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="section-spacing section-bg-content section-separator">
      <div className="container max-w-7xl mx-auto" id="interactive-demo">
        {/* Story Bridge */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/20">
            See It In Action
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            Two Perspectives, One Platform
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced mb-8">
            Experience how ATD works from both sides - homeowners get complete control, providers get streamlined workflows.
          </p>
          
          {/* View Toggle */}
          <div className="flex justify-center mb-12">
            <div className="card-base p-2 flex gap-2">
              <Button
                variant={activeView === 'homeowner' ? 'default' : 'outline'}
                onClick={() => handleViewChange('homeowner')}
                className={cn(
                  "px-8 py-4 font-semibold transition-all duration-300",
                  activeView === 'homeowner' ? "premium-button" : "button-secondary-enhanced"
                )}
              >
                <Monitor className="h-5 w-5 mr-2" />
                Homeowner View
              </Button>
              <Button
                variant={activeView === 'provider' ? 'default' : 'outline'}
                onClick={() => handleViewChange('provider')}
                className={cn(
                  "px-8 py-4 font-semibold transition-all duration-300",
                  activeView === 'provider' ? "premium-button" : "button-secondary-enhanced"
                )}
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Provider View
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Device Mockups */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Homeowner View */}
          <div className={cn(
            "transition-all duration-500 transform-gpu",
            activeView === 'homeowner' 
              ? "opacity-100 scale-100 translate-x-0" 
              : "opacity-30 scale-95 -translate-x-8"
          )}>
            <div className="relative">
              {/* Desktop Mockup */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 shadow-2xl transform perspective-1000 rotate-x-2 rotate-y-2">
                <div className="bg-white rounded-lg shadow-inner overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-500">
                      dashboard.atd.app
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4 min-h-[400px]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-enhanced">My Properties</h3>
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        3 Active Jobs
                      </div>
                    </div>
                    
                    {/* Job Cards */}
                    <div className="grid gap-4">
                      {[
                        { job: "Kitchen Renovation", provider: "Mike's Construction", status: "In Progress", progress: 75 },
                        { job: "HVAC Maintenance", provider: "CoolAir Pro", status: "Scheduled", progress: 0 },
                        { job: "Deck Staining", provider: "Wood Works LLC", status: "Completed", progress: 100 }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-enhanced">{item.job}</h4>
                            <p className="text-sm text-muted-enhanced">{item.provider}</p>
                          </div>
                          <div className="text-right">
                            <div className={cn(
                              "px-3 py-1 rounded-full text-xs font-semibold mb-2",
                              item.status === "Completed" && "bg-green-100 text-green-800",
                              item.status === "In Progress" && "bg-blue-100 text-blue-800",
                              item.status === "Scheduled" && "bg-yellow-100 text-yellow-800"
                            )}>
                              {item.status}
                            </div>
                            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-1000"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Feature Highlights */}
              <div className="absolute -right-8 top-8 bg-white rounded-lg shadow-lg p-4 animate-float border border-blue-100">
                <div className="text-sm font-semibold text-primary mb-1">Real-Time Updates</div>
                <div className="text-xs text-muted-enhanced">See progress instantly</div>
              </div>
              
              <div className="absolute -left-8 bottom-16 bg-white rounded-lg shadow-lg p-4 animate-float border border-green-100" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-semibold text-accent mb-1">Secure Payments</div>
                <div className="text-xs text-muted-enhanced">Escrow protection</div>
              </div>
            </div>
          </div>

          {/* Provider View */}
          <div className={cn(
            "absolute inset-0 transition-all duration-500 transform-gpu",
            activeView === 'provider' 
              ? "opacity-100 scale-100 translate-x-0" 
              : "opacity-30 scale-95 translate-x-8"
          )}>
            <div className="flex justify-center">
              {/* Mobile Mockup */}
              <div className="relative">
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-3 shadow-2xl transform perspective-1000 rotate-y-12">
                  <div className="bg-black rounded-[2rem] overflow-hidden">
                    {/* Mobile Chrome */}
                    <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                      <div className="text-white text-sm font-semibold">PocketOffice</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Mobile Content */}
                    <div className="bg-white p-4 space-y-4 min-h-[500px]">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-enhanced mb-2">Today's Jobs</h3>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          2 Active
                        </div>
                      </div>
                      
                      {/* Job Cards */}
                      <div className="space-y-3">
                        {[
                          { job: "Kitchen Renovation", time: "9:00 AM", address: "123 Oak St" },
                          { job: "Deck Staining", time: "2:00 PM", address: "456 Pine Ave" }
                        ].map((item, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <h4 className="font-semibold text-enhanced text-sm">{item.job}</h4>
                            <p className="text-xs text-muted-enhanced">{item.address}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-primary font-semibold">{item.time}</span>
                              <Button size="sm" className="text-xs px-3 py-1">
                                Check In
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <Button variant="outline" size="sm" className="text-xs">
                          📸 Take Photo
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          💬 Send Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Feature Highlights */}
                <div className="absolute -right-16 top-12 bg-white rounded-lg shadow-lg p-3 animate-float border border-green-100">
                  <div className="text-sm font-semibold text-accent mb-1">One-Tap Updates</div>
                  <div className="text-xs text-muted-enhanced">Keep clients informed</div>
                </div>
                
                <div className="absolute -left-16 bottom-20 bg-white rounded-lg shadow-lg p-3 animate-float border border-blue-100" style={{ animationDelay: '1.5s' }}>
                  <div className="text-sm font-semibold text-primary mb-1">Fast Payment</div>
                  <div className="text-xs text-muted-enhanced">Get paid on completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "QR Code Onboarding", desc: "Instant provider access with simple scan", icon: "📱" },
              { title: "Real-Time Sync", desc: "Updates flow seamlessly between platforms", icon: "⚡" },
              { title: "Two-Way Ratings", desc: "Accountability for both parties", icon: "⭐" }
            ].map((feature, index) => (
              <div key={index} className="card-base card-padding text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-enhanced">{feature.title}</h4>
                <p className="text-sm font-semibold text-muted-enhanced">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-enhanced p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-enhanced">
              Ready to Experience ATD?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
              This demo shows just a glimpse. Join our beta to get full access and help shape the future of home management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="premium-button px-10 w-full sm:w-auto text-lg py-6"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join Beta Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="button-secondary-enhanced px-10 w-full sm:w-auto text-lg py-6"
                onClick={() => window.open('https://forms.gle/8rKm3xNz5tB9YdAk7', '_blank')}
              >
                Apply as Provider
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DDemo;