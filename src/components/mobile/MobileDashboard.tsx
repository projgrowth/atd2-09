import { useState } from "react";
import { 
  Monitor, 
  Smartphone, 
  QrCode, 
  Star, 
  Users, 
  ChevronRight,
  Play,
  Eye,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TouchRipple } from "../TouchRipple";

const MobileDashboard = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const featureCards = [
    {
      id: 'dashboard',
      title: 'Interactive Dashboard',
      subtitle: 'Real-time property management',
      icon: Monitor,
      status: 'live',
      color: 'from-blue-500 to-blue-600',
      description: 'Complete overview of all your properties and projects'
    },
    {
      id: 'pocketoffice',
      title: 'PocketOffice Mobile',
      subtitle: 'Provider mobile interface',
      icon: Smartphone,
      status: 'live',
      color: 'from-green-500 to-green-600',
      description: 'Mobile-first interface for service providers'
    },
    {
      id: 'qr',
      title: 'QR Code Access',
      subtitle: 'Instant property information',
      icon: QrCode,
      status: 'demo',
      color: 'from-purple-500 to-purple-600',
      description: 'Quick access to property details via QR codes'
    },
    {
      id: 'rating',
      title: 'Rating System',
      subtitle: 'Provider performance tracking',
      icon: Star,
      status: 'live',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Track and rate service provider performance'
    },
    {
      id: 'journey',
      title: 'User Journeys',
      subtitle: 'Experience flows',
      icon: Users,
      status: 'demo',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Complete user experience walkthroughs'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'update',
      title: 'Kitchen repair completed',
      subtitle: 'Mike Johnson • 2 hours ago',
      status: 'completed',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from plumber',
      subtitle: 'Sarah Wilson • 4 hours ago',
      status: 'unread',
      icon: AlertCircle
    },
    {
      id: 3,
      type: 'schedule',
      title: 'HVAC maintenance scheduled',
      subtitle: 'Tomorrow at 10:00 AM',
      status: 'upcoming',
      icon: Clock
    }
  ];

  const quickActions = [
    { label: 'New Request', icon: Zap, color: 'bg-blue-500' },
    { label: 'View Schedule', icon: Clock, color: 'bg-green-500' },
    { label: 'Messages', icon: Users, color: 'bg-purple-500' },
    { label: 'Reports', icon: Eye, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Welcome Section */}
      <div className="px-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Welcome back, Sarah</h2>
        <p className="text-muted-foreground">Manage your properties with ease</p>
      </div>

      {/* Feature Cards */}
      <div className="px-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Live Demos</h3>
        <div className="space-y-4">
          {featureCards.map((card) => (
            <TouchRipple key={card.id}>
              <div
                className={cn(
                  "relative p-6 rounded-2xl border bg-card transition-all duration-300 mobile-button-press overflow-hidden",
                  activeCard === card.id ? "border-primary shadow-lg scale-[1.02]" : "border-border"
                )}
                onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 rounded-full -mr-8 -mt-8",
                  card.color
                )} />
                
                <div className="relative flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br text-white shadow-lg",
                      card.color
                    )}>
                      <card.icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{card.title}</h4>
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                          card.status === 'live' 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        )}>
                          {card.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{card.subtitle}</p>
                      <p className="text-xs text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                  
                  <ChevronRight className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    activeCard === card.id && "rotate-90"
                  )} />
                </div>

                {/* Expanded Content */}
                {activeCard === card.id && (
                  <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                    <div className="flex space-x-2">
                      <Button size="sm" className="mobile-button-press">
                        <Play className="h-4 w-4 mr-2" />
                        Try Demo
                      </Button>
                      <Button variant="outline" size="sm" className="mobile-button-press">
                        <Eye className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <TouchRipple key={index}>
              <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200 mobile-button-press">
                <div className={cn("p-3 rounded-xl text-white mb-2", action.color)}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">{action.label}</span>
              </button>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <TouchRipple key={activity.id}>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200 mobile-button-press">
                <div className={cn(
                  "p-2 rounded-lg",
                  activity.status === 'completed' && "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                  activity.status === 'unread' && "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
                  activity.status === 'upcoming' && "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                )}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </TouchRipple>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;