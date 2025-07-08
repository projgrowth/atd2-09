import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SimplifiedDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demoSteps = [
    {
      title: "QR Code Access",
      description: "Contractors scan to instantly access job details",
      screen: {
        type: "qr-scan",
        content: (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-50 to-white p-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
              <div className="w-32 h-32 bg-black mx-auto rounded-lg flex items-center justify-center">
                <div className="text-white text-xs grid grid-cols-8 gap-[1px]">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Kitchen Renovation</h3>
              <p className="text-sm text-gray-600">123 Oak Street</p>
              <Button size="sm" className="mt-3 bg-blue-500 hover:bg-blue-600">
                Access Job Details
              </Button>
            </div>
          </div>
        )
      }
    },
    {
      title: "Real-Time Updates",
      description: "Progress photos and status updates sync instantly",
      screen: {
        type: "updates",
        content: (
          <div className="p-4 bg-white h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Kitchen Renovation</h3>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                In Progress
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Progress Update</span>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-24 mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">📸 Cabinets installed</span>
                </div>
                <p className="text-sm">Cabinets are in and looking great! Starting countertop install tomorrow.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Material Delivered</span>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
                <p className="text-sm">Quartz countertops arrived on schedule.</p>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      title: "Organized Communication",
      description: "All messages, photos, and documents in one place",
      screen: {
        type: "chat",
        content: (
          <div className="p-4 bg-white h-full">
            <div className="flex items-center mb-4 pb-3 border-b">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">EC</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Elite Construction</h3>
                <p className="text-xs text-gray-500">Kitchen Renovation</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <div className="bg-gray-100 rounded-lg p-3 mr-8">
                <p className="text-sm">Just finished installing the cabinets. They look amazing!</p>
                <span className="text-xs text-gray-500">10:30 AM</span>
              </div>
              <div className="bg-blue-500 text-white rounded-lg p-3 ml-8">
                <p className="text-sm">Fantastic! When do you expect to start the countertops?</p>
                <span className="text-xs text-blue-100">10:35 AM</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 mr-8">
                <p className="text-sm">Tomorrow morning at 8 AM. Should be done by end of day.</p>
                <span className="text-xs text-gray-500">10:40 AM</span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      title: "Secure Payments",
      description: "Automatic escrow and milestone-based payments",
      screen: {
        type: "payment",
        content: (
          <div className="p-4 bg-white h-full">
            <div className="text-center mb-6">
              <h3 className="font-bold text-lg mb-2">Payment Status</h3>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold inline-block">
                Milestone Completed
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Cabinet Installation</span>
                  <span className="text-green-600 font-bold">✓ Complete</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Amount:</span>
                  <span className="font-bold">$3,500</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Countertop Install</span>
                  <span className="text-blue-600 font-bold">⏳ Next</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Amount:</span>
                  <span className="font-bold">$2,800</span>
                </div>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Release Payment
              </Button>
            </div>
          </div>
        )
      }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, demoSteps.length]);

  const currentDemo = demoSteps[currentStep];

  return (
    <section className="section-spacing-large section-bg-elevated section-divider" id="interactive-demo">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 border border-primary/20">
            See It In Action
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-enhanced">
            How ATD Works
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold text-muted-enhanced">
            Watch how ATD transforms chaotic home management into organized, efficient workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* iPhone Mockup */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
                    <div className="text-white text-sm font-bold">ATD Mobile</div>
                    <div className="flex items-center space-x-1">
                      <div className="text-white text-xs">9:41</div>
                      <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="bg-white h-[580px] relative overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-all duration-700 ease-in-out"
                      style={{
                        transform: `translateX(${currentStep * -100}%)`,
                        width: `${demoSteps.length * 100}%`
                      }}
                    >
                      <div className="flex h-full">
                        {demoSteps.map((step, index) => (
                          <div 
                            key={index} 
                            className="w-full h-full flex-shrink-0"
                            style={{ width: `${100 / demoSteps.length}%` }}
                          >
                            {step.screen.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-12 top-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float border border-blue-200/50">
                <div className="text-sm font-bold text-primary mb-1">⚡ Live Sync</div>
                <div className="text-xs text-gray-600">Real-time updates</div>
              </div>
              
              <div className="absolute -left-12 bottom-12 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float border border-green-200/50" style={{ animationDelay: '1.5s' }}>
                <div className="text-sm font-bold text-green-600 mb-1">🔒 Secure</div>
                <div className="text-xs text-gray-600">Protected payments</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:order-1">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {currentStep === 0 && "📱"}
                  {currentStep === 1 && "📸"}
                  {currentStep === 2 && "💬"}
                  {currentStep === 3 && "💳"}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-enhanced mb-2">
                    {currentDemo.title}
                  </h3>
                  <p className="text-lg font-semibold text-muted-enhanced">
                    {currentDemo.description}
                  </p>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex space-x-3 mb-6">
                {demoSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === currentStep 
                        ? "bg-primary w-8" 
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>

              {/* Play/Pause Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </Button>
                <span className="text-sm text-gray-500">
                  Step {currentStep + 1} of {demoSteps.length}
                </span>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "QR code instant access for providers",
                "Real-time photo and status updates", 
                "Centralized communication platform",
                "Secure milestone-based payments"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg transition-all duration-300",
                    index === currentStep 
                      ? "bg-primary/10 border border-primary/20" 
                      : "bg-gray-50"
                  )}
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentStep ? "bg-primary" : "bg-gray-400"
                  )} />
                  <span className={cn(
                    "text-sm font-semibold",
                    index === currentStep ? "text-primary" : "text-gray-600"
                  )}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="card-enhanced p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-enhanced">
              Ready to Transform Your Home Management?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold text-muted-enhanced">
              This is just a preview. Join our beta to experience the full platform and help shape the future of home management.
            </p>
            
            <Button 
              size="lg" 
              className="premium-button px-10 py-6 text-lg"
              onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
            >
              Join Beta Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedDemo;