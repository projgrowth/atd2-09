import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Home,
  Star,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "../TouchRipple";

const MobileProfile = () => {
  const profileStats = [
    { label: "Properties", value: "3", icon: Home },
    { label: "Projects", value: "12", icon: Settings },
    { label: "Rating", value: "4.9", icon: Star }
  ];

  const menuItems = [
    { icon: User, label: "Personal Information", subtitle: "Update your details" },
    { icon: Bell, label: "Notifications", subtitle: "Manage your alerts" },
    { icon: Shield, label: "Privacy & Security", subtitle: "Control your data" },
    { icon: CreditCard, label: "Billing & Payments", subtitle: "Manage subscriptions" },
    { icon: HelpCircle, label: "Help & Support", subtitle: "Get assistance" },
    { icon: Settings, label: "App Settings", subtitle: "Customize your experience" }
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Profile Header */}
      <div className="px-6 pt-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
            SM
          </div>
          <h2 className="text-2xl font-bold text-foreground">Sarah Mitchell</h2>
          <p className="text-muted-foreground">Property Manager</p>
          <p className="text-sm text-muted-foreground">Dallas, TX</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {profileStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-card border border-border rounded-xl">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Status */}
      <div className="px-6">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400">Premium Account</p>
              <p className="text-sm text-green-600 dark:text-green-500">Active until Dec 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <TouchRipple key={index}>
              <div className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-primary/20 transition-all duration-200 mobile-button-press">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent/10 text-accent rounded-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </TouchRipple>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg">
            <div className="p-2 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Kitchen repair completed</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-card border border-border rounded-lg">
            <div className="p-2 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-lg">
              <Star className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Rated Mike Johnson 5 stars</p>
              <p className="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-3">
          <TouchRipple>
            <Button variant="outline" className="w-full justify-center mobile-button-press">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </TouchRipple>
          <TouchRipple>
            <Button variant="outline" className="w-full justify-center mobile-button-press">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Help
            </Button>
          </TouchRipple>
        </div>
      </div>

      {/* Logout */}
      <div className="px-6 pt-4 border-t border-border">
        <TouchRipple>
          <Button 
            variant="ghost" 
            className="w-full justify-center text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 mobile-button-press"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </TouchRipple>
      </div>

      {/* App Version */}
      <div className="px-6 text-center">
        <p className="text-xs text-muted-foreground">ATD Mobile v2.1.0</p>
      </div>
    </div>
  );
};

export default MobileProfile;