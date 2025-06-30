import { useState } from "react";
import { Home, Wrench, Users, Eye, Shield, FileText, Activity, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "./TouchRipple";
import { useSwipe } from "@/hooks/use-swipe";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const UserJourneyDemo = () => {
  const [selectedUserType, setSelectedUserType] = useState("homeowner");
  const isMobile = useIsMobile();

  const userTypes = {
    homeowner: {
      title: "Homeowner Experience",
      icon: Home,
      color: "blue",
      features: [
        {
          icon: Activity,
          title: "Full Dashboard Control",
          description: "Complete visibility into all jobs, payments, and providers",
          level: "full"
        },
        {
          icon: FileText,
          title: "Document Management",
          description: "Upload, organize, and share contracts, warranties, and receipts",
          level: "full"
        },
        {
          icon: Users,
          title: "Team Management",
          description: "Add family members and set their access levels",
          level: "full"
        },
        {
          icon: Settings,
          title: "Provider Network",
          description: "Manage trusted providers and their permissions",
          level: "full"
        }
      ]
    },
    provider: {
      title: "Service Provider Experience",
      icon: Wrench,
      color: "purple",
      features: [
        {
          icon: Activity,
          title: "Job Updates",
          description: "Update job status, upload progress photos, communicate with homeowners",
          level: "limited"
        },
        {
          icon: FileText,
          title: "Relevant Documents",
          description: "Access only job-specific contracts and requirements",
          level: "limited"
        },
        {
          icon: Users,
          title: "Homeowner Contact",
          description: "Direct communication channel with property owners",
          level: "limited"
        },
        {
          icon: Shield,
          title: "Secure Access",
          description: "QR code-based access with automatic permissions",
          level: "limited"
        }
      ]
    },
    family: {
      title: "Family Member Experience",
      icon: Users,
      color: "green",
      features: [
        {
          icon: Eye,
          title: "View-Only Dashboard",
          description: "Monitor home activities without making changes",
          level: "view"
        },
        {
          icon: Activity,
          title: "Job Monitoring",
          description: "Track progress of ongoing work and appointments",
          level: "view"
        },
        {
          icon: FileText,
          title: "Document Access",
          description: "View important documents like warranties and contracts",
          level: "view"
        },
        {
          icon: Users,
          title: "Emergency Contact",
          description: "Access provider information for emergencies only",
          level: "emergency"
        }
      ]
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "full": return "text-green-600 bg-green-100";
      case "limited": return "text-blue-600 bg-blue-100";
      case "view": return "text-orange-600 bg-orange-100";
      case "emergency": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case "full": return "Full Access";
      case "limited": return "Job-Specific";
      case "view": return "View Only";
      case "emergency": return "Emergency";
      default: return "Limited";
    }
  };

  const userTypeKeys = Object.keys(userTypes) as Array<keyof typeof userTypes>;
  const currentIndex = userTypeKeys.indexOf(selectedUserType as keyof typeof userTypes);

  const nextUserType = () => {
    const nextIndex = (currentIndex + 1) % userTypeKeys.length;
    setSelectedUserType(userTypeKeys[nextIndex]);
  };

  const prevUserType = () => {
    const prevIndex = (currentIndex - 1 + userTypeKeys.length) % userTypeKeys.length;
    setSelectedUserType(userTypeKeys[prevIndex]);
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextUserType,
    onSwipeRight: prevUserType,
  });

  const currentUser = userTypes[selectedUserType as keyof typeof userTypes];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
          Tailored Access for Everyone
        </h3>
        <p className="text-[hsl(var(--atd-text-muted))]">
          Each user type gets exactly the right level of access and functionality
        </p>
      </div>

      {/* User Type Selector - Mobile Optimized */}
      <div className={cn(
        "flex justify-center mb-8",
        isMobile ? "flex-col space-y-2" : "space-x-4"
      )}>
        {Object.entries(userTypes).map(([key, user]) => {
          const IconComponent = user.icon;
          return (
            <TouchRipple key={key}>
              <Button
                variant={selectedUserType === key ? "default" : "outline"}
                onClick={() => setSelectedUserType(key)}
                className={cn(
                  "flex items-center space-x-2 px-4 sm:px-6 py-3 mobile-button-press transition-all duration-200",
                  isMobile && "w-full justify-start",
                  selectedUserType === key && "animate-mobile-scale-in"
                )}
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">{user.title.split(' ')[0]}</span>
                {isMobile && selectedUserType === key && (
                  <span className="ml-auto text-xs opacity-70">Active</span>
                )}
              </Button>
            </TouchRipple>
          );
        })}
      </div>

      {/* Selected User Journey - Enhanced with Swipe */}
      <div 
        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 border border-gray-100"
        {...(isMobile ? swipeHandlers : {})}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-${currentUser.color}-100`}>
              <currentUser.icon className={`h-6 w-6 text-${currentUser.color}-600`} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))]">
                {currentUser.title}
              </h4>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                {selectedUserType === "homeowner" && "Complete control and management capabilities"}
                {selectedUserType === "provider" && "Job-focused tools for efficient service delivery"}
                {selectedUserType === "family" && "Stay informed with appropriate access levels"}
              </p>
            </div>
          </div>
          
          {isMobile && (
            <div className="text-xs text-[hsl(var(--atd-text-muted))] text-center">
              <div>Swipe</div>
              <div>← →</div>
            </div>
          )}
        </div>

        <div className="grid gap-3 sm:gap-4 animate-mobile-fade-in">
          {currentUser.features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 border border-gray-100 hover:shadow-md transition-shadow mobile-interactive"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FeatureIcon className="h-5 w-5 text-[hsl(var(--atd-primary))] mt-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-[hsl(var(--atd-text))] text-sm sm:text-base truncate">
                        {feature.title}
                      </h5>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2",
                        getLevelColor(feature.level)
                      )}>
                        {getLevelText(feature.level)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(var(--atd-text-muted))]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-[hsl(var(--atd-text-muted))] mb-3">
              {selectedUserType === "homeowner" && "Ready to take control of your home management?"}
              {selectedUserType === "provider" && "Want to streamline your service delivery?"}
              {selectedUserType === "family" && "Perfect for staying connected with family properties"}
            </p>
            <TouchRipple>
              <Button className="px-4 sm:px-6 mobile-button-press">
                {selectedUserType === "homeowner" && "Join Beta as Homeowner"}
                {selectedUserType === "provider" && "Apply as Service Provider"}
                {selectedUserType === "family" && "Learn More About Access"}
              </Button>
            </TouchRipple>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyDemo;
