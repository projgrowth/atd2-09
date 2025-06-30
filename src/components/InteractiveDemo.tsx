import { useState } from "react";
import { Monitor, Smartphone, QrCode, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveDashboard from "./InteractiveDashboard";
import PocketOfficeDemo from "./PocketOfficeDemo";
import QRScanDemo from "./QRScanDemo";
import UserJourneyDemo from "./UserJourneyDemo";
import { cn } from "@/lib/utils";

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState("dashboard");

  const demos = {
    dashboard: {
      title: "Interactive Dashboard",
      description: "Click through a real homeowner dashboard",
      icon: Monitor,
      component: <InteractiveDashboard />
    },
    pocketoffice: {
      title: "PocketOffice Mobile",
      description: "See how providers update jobs on the go",
      icon: Smartphone,
      component: <PocketOfficeDemo />
    },
    qrscan: {
      title: "QR Code Access",
      description: "Watch the instant access system in action",
      icon: QrCode,
      component: <QRScanDemo />
    },
    journey: {
      title: "User Journeys",
      description: "Explore different access levels and features",
      icon: Users,
      component: <UserJourneyDemo />
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--atd-text))] mb-6">
            Try ATD Yourself
          </h2>
          <p className="text-xl text-[hsl(var(--atd-text-muted))] max-w-3xl mx-auto">
            Get hands-on with interactive demos. See exactly how ATD works for homeowners, providers, and families.
          </p>
        </div>

        {/* Demo Selector - Enhanced for mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => {
            const IconComponent = demo.icon;
            return (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                onClick={() => setActiveDemo(key)}
                className={cn(
                  "flex items-center space-x-2 px-3 sm:px-6 py-3 text-sm mobile-interactive",
                  "min-h-[48px] transition-all duration-200",
                  activeDemo === key && "animate-mobile-scale-in"
                )}
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium text-xs sm:text-sm">{demo.title}</div>
                  <div className="text-xs opacity-70 hidden lg:block">{demo.description}</div>
                </div>
              </Button>
            );
          })}
        </div>

        {/* Active Demo */}
        <div className="animate-fade-in">
          {demos[activeDemo as keyof typeof demos].component}
        </div>

        {/* Bottom CTA - Enhanced with new form */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-[hsl(var(--atd-primary))]/10 to-[hsl(var(--atd-accent))]/10 rounded-2xl p-6 sm:p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
              Ready to Experience ATD?
            </h3>
            <p className="text-[hsl(var(--atd-text-muted))] mb-6 max-w-2xl mx-auto">
              These demos show just a glimpse of what's possible. Join our beta to get full access and help shape the future of home management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                size="lg" 
                className="px-8 w-full sm:w-auto"
                onClick={() => window.open('https://forms.gle/YXvNQm7P8hW2KzGz9', '_blank')}
              >
                Join Beta Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 w-full sm:w-auto"
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

export default InteractiveDemo;
