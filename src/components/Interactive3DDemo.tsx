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
    <section className="section-spacing-large section-bg-elevated section-divider">
      <div className="container-standard" id="interactive-demo">
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

        {/* Enhanced 3D Device Showcase */}
        <div className="relative max-w-7xl mx-auto mb-20 perspective-2000">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Desktop View - Enhanced */}
            <div className={cn(
              "relative transition-all duration-700 transform-gpu preserve-3d",
              activeView === 'homeowner' 
                ? "opacity-100 scale-100 translate-x-0 rotate-0" 
                : "opacity-40 scale-95 translate-x-4 -rotate-y-12"
            )}>
              <div className="relative animate-device-float">
                {/* Enhanced Desktop Mockup */}
                <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-2 device-shadow animate-glow-pulse">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    {/* MacBook-style Chrome */}
                    <div className="bg-gray-800 px-6 py-4 flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 text-center">
                        https://dashboard.atd.app
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="bg-white p-8 min-h-[420px]">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-enhanced">Property Dashboard</h3>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                          3 Active Projects
                        </div>
                      </div>
                      
                      {/* Enhanced Job Cards */}
                      <div className="space-y-4">
                        {[
                          { job: "Kitchen Renovation", provider: "Elite Construction", status: "In Progress", progress: 75, color: "blue" },
                          { job: "HVAC Service", provider: "CoolAir Systems", status: "Scheduled", progress: 15, color: "amber" },
                          { job: "Deck Refinishing", provider: "Wood Craft Pro", status: "Completed", progress: 100, color: "green" }
                        ].map((item, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                              <div className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                                <div className={`w-6 h-6 rounded-full bg-${item.color}-500`}></div>
                              </div>
                              <div>
                                <h4 className="font-bold text-lg text-enhanced">{item.job}</h4>
                                <p className="text-muted-enhanced">{item.provider}</p>
                              </div>
                            </div>
                            <div className="text-right space-y-2">
                              <div className={cn(
                                "px-4 py-2 rounded-full text-sm font-bold",
                                item.status === "Completed" && "bg-green-100 text-green-800",
                                item.status === "In Progress" && "bg-blue-100 text-blue-800",
                                item.status === "Scheduled" && "bg-amber-100 text-amber-800"
                              )}>
                                {item.status}
                              </div>
                              <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
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
                
                {/* Enhanced Floating Features */}
                <div className="absolute -right-12 top-12 realistic-glass rounded-2xl p-4 animate-float border border-blue-200/50 backdrop-blur-sm">
                  <div className="text-sm font-bold text-primary mb-1">⚡ Real-Time Sync</div>
                  <div className="text-xs text-muted-enhanced">Instant updates</div>
                </div>
                
                <div className="absolute -left-12 bottom-20 realistic-glass rounded-2xl p-4 animate-float border border-green-200/50 backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
                  <div className="text-sm font-bold text-accent mb-1">🔒 Secure Escrow</div>
                  <div className="text-xs text-muted-enhanced">Protected payments</div>
                </div>
              </div>
            </div>

            {/* Mobile View - Enhanced */}
            <div className={cn(
              "relative transition-all duration-700 transform-gpu preserve-3d",
              activeView === 'provider' 
                ? "opacity-100 scale-100 translate-x-0 rotate-0" 
                : "opacity-40 scale-95 -translate-x-4 rotate-y-12"
            )}>
              <div className="flex justify-center">
                <div className="relative animate-device-tilt">
                  {/* Enhanced iPhone Mockup */}
                  <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black rounded-[3rem] p-3 device-shadow animate-glow-pulse">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      {/* iPhone Status Bar */}
                      <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
                        <div className="text-white text-sm font-bold">PocketOffice Pro</div>
                        <div className="flex items-center space-x-1">
                          <div className="text-white text-xs">100%</div>
                          <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* Enhanced Mobile Content */}
                      <div className="bg-white p-6 min-h-[560px]">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-enhanced mb-3">Today's Schedule</h3>
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            2 Jobs Active
                          </div>
                        </div>
                        
                        {/* Enhanced Job Cards */}
                        <div className="space-y-4 mb-8">
                          {[
                            { job: "Kitchen Renovation", time: "9:00 AM", address: "123 Oak Street", status: "active" },
                            { job: "Deck Refinishing", time: "2:00 PM", address: "456 Pine Avenue", status: "upcoming" }
                          ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 border-l-4 border-primary">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-enhanced">{item.job}</h4>
                                <div className={cn(
                                  "w-3 h-3 rounded-full",
                                  item.status === "active" && "bg-green-500 animate-pulse",
                                  item.status === "upcoming" && "bg-amber-500"
                                )}></div>
                              </div>
                              <p className="text-sm text-muted-enhanced mb-2">{item.address}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-primary">{item.time}</span>
                                <Button size="sm" className="bg-primary hover:bg-primary-dark text-white text-xs px-4 py-2 rounded-full">
                                  Check In
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Enhanced Quick Actions */}
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="py-4 rounded-xl border-2 border-gray-200 hover:border-primary">
                            <div className="text-center">
                              <div className="text-2xl mb-1">📸</div>
                              <div className="text-xs font-semibold">Progress Photo</div>
                            </div>
                          </Button>
                          <Button variant="outline" className="py-4 rounded-xl border-2 border-gray-200 hover:border-accent">
                            <div className="text-center">
                              <div className="text-2xl mb-1">💬</div>
                              <div className="text-xs font-semibold">Client Update</div>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Floating Features */}
                  <div className="absolute -right-16 top-16 realistic-glass rounded-2xl p-3 animate-float border border-green-200/50">
                    <div className="text-sm font-bold text-accent mb-1">📱 One-Tap</div>
                    <div className="text-xs text-muted-enhanced">Instant updates</div>
                  </div>
                  
                  <div className="absolute -left-16 bottom-24 realistic-glass rounded-2xl p-3 animate-float border border-blue-200/50" style={{ animationDelay: '2s' }}>
                    <div className="text-sm font-bold text-primary mb-1">💰 Fast Pay</div>
                    <div className="text-xs text-muted-enhanced">On completion</div>
                  </div>
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