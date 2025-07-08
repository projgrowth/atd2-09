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
          <div className="flex flex-col items-center justify-center h-full p-6 relative">
            {/* Glass Card */}
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 mb-6">
              <div className="w-40 h-40 bg-black/80 mx-auto rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-white text-xs grid grid-cols-8 gap-[1px]">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2 text-white">Kitchen Renovation</h3>
              <p className="text-white/80 mb-4">123 Oak Street</p>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3">
                <span className="text-white font-semibold">Access Job Details</span>
              </div>
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
          <div className="p-6 h-full relative">
            {/* Glass Header */}
            <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <h3 className="font-bold text-xl text-white">Kitchen Renovation</h3>
              <div className="bg-green-400/30 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-bold border border-green-300/30">
                In Progress
              </div>
            </div>
            
            {/* Glass Update Cards */}
            <div className="space-y-4">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">Progress Update</span>
                  <span className="text-xs text-white/70">2 min ago</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl h-20 mb-3 flex items-center justify-center border border-white/20">
                  <span className="text-sm text-white/90">📸 Cabinets installed</span>
                </div>
                <p className="text-sm text-white/90">Cabinets are in and looking great! Starting countertop install tomorrow.</p>
              </div>
              
              <div className="bg-blue-400/20 backdrop-blur-lg rounded-2xl p-4 border border-blue-300/30 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white">Material Delivered</span>
                  <span className="text-xs text-white/70">1 hour ago</span>
                </div>
                <p className="text-sm text-white/90">Quartz countertops arrived on schedule.</p>
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
          <div className="p-6 h-full relative">
            {/* Glass Header */}
            <div className="flex items-center mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
                <span className="text-white text-sm font-bold">EC</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Elite Construction</h3>
                <p className="text-xs text-white/70">Kitchen Renovation</p>
              </div>
            </div>
            
            {/* Glass Chat Bubbles */}
            <div className="space-y-4 flex-1">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mr-8 border border-white/20">
                <p className="text-sm text-white">Just finished installing the cabinets. They look amazing!</p>
                <span className="text-xs text-white/60">10:30 AM</span>
              </div>
              
              <div className="bg-blue-400/30 backdrop-blur-lg rounded-2xl p-4 ml-8 border border-blue-300/30">
                <p className="text-sm text-white">Fantastic! When do you expect to start the countertops?</p>
                <span className="text-xs text-white/70">10:35 AM</span>
              </div>
              
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 mr-8 border border-white/20">
                <p className="text-sm text-white">Tomorrow morning at 8 AM. Should be done by end of day.</p>
                <span className="text-xs text-white/60">10:40 AM</span>
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
          <div className="p-6 h-full relative">
            {/* Glass Header */}
            <div className="text-center mb-8">
              <h3 className="font-bold text-2xl mb-4 text-white">Payment Status</h3>
              <div className="bg-green-400/30 backdrop-blur-md text-green-100 px-6 py-3 rounded-full text-sm font-bold inline-block border border-green-300/30">
                Milestone Completed
              </div>
            </div>
            
            {/* Glass Payment Cards */}
            <div className="space-y-4">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 border border-white/20 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white">Cabinet Installation</span>
                  <span className="text-green-300 font-bold">✓ Complete</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Payment Amount:</span>
                  <span className="font-bold text-white">$3,500</span>
                </div>
              </div>
              
              <div className="bg-blue-400/20 backdrop-blur-lg rounded-2xl p-5 border border-blue-300/30 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white">Countertop Install</span>
                  <span className="text-blue-300 font-bold">⏳ Next</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Payment Amount:</span>
                  <span className="font-bold text-white">$2,800</span>
                </div>
              </div>
              
              <div className="bg-green-400/30 backdrop-blur-md rounded-2xl p-4 border border-green-300/30 text-center">
                <span className="text-white font-semibold">Release Payment</span>
              </div>
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

        {/* Step Information */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="text-5xl mr-4">
              {currentStep === 0 && "📱"}
              {currentStep === 1 && "📸"}
              {currentStep === 2 && "💬"}
              {currentStep === 3 && "💳"}
            </div>
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-enhanced mb-2">
                {currentDemo.title}
              </h3>
              <p className="text-xl font-semibold text-muted-enhanced">
                {currentDemo.description}
              </p>
            </div>
          </div>
        </div>

        {/* iPhone 16 Pro Max Mockup - Centered */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-sm">
            {/* iPhone 16 Pro Max Frame */}
            <div className="relative bg-gradient-to-b from-slate-900 via-gray-800 to-black rounded-[3.5rem] p-2 shadow-2xl hover:scale-105 transition-transform duration-300">
              {/* Titanium Frame */}
              <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[3.2rem] p-1">
                <div className="bg-black rounded-[3rem] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-black rounded-full w-32 h-8 flex items-center justify-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="text-white text-xs font-medium">9:41</div>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen Content with Glass Morphism */}
                  <div className="h-[650px] relative overflow-hidden mt-12">
                    {/* iOS Wallpaper Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-purple-600/30"></div>
                    
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
                            className="w-full h-full flex-shrink-0 relative"
                            style={{ width: `${100 / demoSteps.length}%` }}
                          >
                            {/* Glass Morphism Container */}
                            <div className="absolute inset-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                              {step.screen.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-1 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Navigation Controls */}
        <div className="flex flex-col items-center space-y-6">
          {/* Progress Indicators */}
          <div className="flex space-x-3">
            {demoSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300 hover:scale-110",
                  index === currentStep 
                    ? "bg-primary w-12" 
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                )}
                aria-label={`Go to step ${index + 1}`}
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
              <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
            </Button>
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {demoSteps.length}
            </span>
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