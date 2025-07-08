import { useState } from "react";
import { Home, MessageSquare, Camera, User, Settings, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { TouchRipple } from "./TouchRipple";
import MobileDashboard from "./mobile/MobileDashboard";
import MobileChat from "./mobile/MobileChat";
import MobileCamera from "./mobile/MobileCamera";
import MobileProfile from "./mobile/MobileProfile";
import { useSwipe } from "@/hooks/use-swipe";

type TabType = 'dashboard' | 'chat' | 'camera' | 'profile';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [notificationCount, setNotificationCount] = useState(3);

  const swipeHandlers = useSwipe({
    onSwipeLeft: () => {
      const tabs: TabType[] = ['dashboard', 'chat', 'camera', 'profile'];
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1]);
      }
    },
    onSwipeRight: () => {
      const tabs: TabType[] = ['dashboard', 'chat', 'camera', 'profile'];
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1]);
      }
    },
  });

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Home', icon: Home },
    { id: 'chat' as TabType, label: 'Chat', icon: MessageSquare, badge: notificationCount },
    { id: 'camera' as TabType, label: 'Photos', icon: Camera },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <MobileDashboard />;
      case 'chat':
        return <MobileChat onNewMessage={() => setNotificationCount(0)} />;
      case 'camera':
        return <MobileCamera />;
      case 'profile':
        return <MobileProfile />;
      default:
        return <MobileDashboard />;
    }
  };

  return (
    <div className="mobile-app-container">
      {/* Mobile Status Bar */}
      <div className="mobile-status-bar">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="text-sm font-semibold text-foreground">9:41</div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-foreground/60 rounded-full"></div>
              <div className="w-1 h-3 bg-foreground/60 rounded-full"></div>
              <div className="w-1 h-3 bg-foreground/60 rounded-full"></div>
              <div className="w-1 h-3 bg-foreground rounded-full"></div>
            </div>
            <div className="ml-2 text-xs font-medium text-foreground">100%</div>
            <div className="ml-1 w-6 h-3 border border-foreground/60 rounded-sm">
              <div className="w-full h-full bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* App Header */}
      <div className="mobile-app-header">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">All Things Done</h1>
              <p className="text-xs text-muted-foreground">Property Management</p>
            </div>
          </div>
          <TouchRipple>
            <button className="relative p-2 rounded-xl hover:bg-accent/10 transition-colors mobile-button-press">
              <Bell className="h-6 w-6 text-foreground" />
              {notificationCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                  {notificationCount}
                </div>
              )}
            </button>
          </TouchRipple>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="mobile-app-content"
        {...swipeHandlers}
      >
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <div className="flex justify-around items-center px-4 py-2">
          {tabs.map((tab) => (
            <TouchRipple key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 relative mobile-button-press",
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                )}
              >
                <tab.icon className={cn(
                  "h-6 w-6 mb-1 transition-transform duration-200",
                  activeTab === tab.id && "scale-110"
                )} />
                <span className={cn(
                  "text-xs font-medium",
                  activeTab === tab.id && "font-bold"
                )}>
                  {tab.label}
                </span>
                
                {tab.badge && tab.badge > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {tab.badge}
                  </div>
                )}
                
                {activeTab === tab.id && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </button>
            </TouchRipple>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;