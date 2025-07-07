import { useState } from "react";
import { 
  Bell, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  MessageSquare, 
  DollarSign,
  Home,
  Settings,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "info" | "warning" | "success" | "urgent" | "message";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionLabel?: string;
  urgent?: boolean;
}

interface NotificationCenterProps {
  onNotificationAction?: (notificationId: string, action: string) => void;
  isProviderView?: boolean;
}

const NotificationCenter = ({ onNotificationAction, isProviderView = false }: NotificationCenterProps) => {
  const [notifications, setNotifications] = useState<Notification[]>(
    isProviderView ? [
      {
        id: "prov1",
        type: "urgent",
        title: "New Job Assignment",
        message: "HVAC inspection at 123 Oak Street - starts in 30 minutes",
        timestamp: "2 min ago",
        read: false,
        actionLabel: "View Details",
        urgent: true
      },
      {
        id: "prov2",
        type: "message",
        title: "Client Message",
        message: "Homeowner: 'Please use side entrance, front door sticks'",
        timestamp: "15 min ago",
        read: false,
        actionLabel: "Reply"
      },
      {
        id: "prov3",
        type: "success",
        title: "Payment Received",
        message: "Payment of $240 has been processed for completed job",
        timestamp: "1 hour ago",
        read: true
      },
      {
        id: "prov4",
        type: "info",
        title: "Schedule Update",
        message: "Tomorrow's cleaning appointment moved to 10:00 AM",
        timestamp: "2 hours ago",
        read: true,
        actionLabel: "Update Calendar"
      }
    ] : [
      {
        id: "home1",
        type: "warning",
        title: "Budget Alert",
        message: "70% of monthly maintenance budget used",
        timestamp: "5 min ago",
        read: false,
        actionLabel: "View Budget"
      },
      {
        id: "home2",
        type: "info",
        title: "Service Completed",
        message: "HVAC filter replacement finished. System running efficiently.",
        timestamp: "1 hour ago",
        read: false,
        actionLabel: "View Photos"
      },
      {
        id: "home3",
        type: "urgent",
        title: "Appointment Reminder",
        message: "Weekly cleaning starts tomorrow at 9:00 AM",
        timestamp: "2 hours ago",
        read: false,
        actionLabel: "Reschedule",
        urgent: true
      },
      {
        id: "home4",
        type: "success",
        title: "Payment Processed",
        message: "Escrow payment of $85 authorized for cleaning service",
        timestamp: "3 hours ago",
        read: true
      },
      {
        id: "home5",
        type: "message",
        title: "Provider Message",
        message: "Mike's HVAC: 'Recommend replacing air filter monthly for better efficiency'",
        timestamp: "5 hours ago",
        read: true,
        actionLabel: "Reply"
      }
    ]
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'urgent': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'message': return <MessageSquare className="h-4 w-4 text-blue-500" />;
      default: return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const getNotificationColor = (type: Notification['type'], read: boolean) => {
    if (read) return "bg-gray-50 border-gray-200";
    
    switch (type) {
      case 'urgent': return "bg-red-50 border-red-200";
      case 'warning': return "bg-orange-50 border-orange-200";
      case 'success': return "bg-green-50 border-green-200";
      case 'message': return "bg-blue-50 border-blue-200";
      default: return "bg-white border-gray-200";
    }
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  const dismissNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId));
  };

  const handleAction = (notification: Notification) => {
    markAsRead(notification.id);
    onNotificationAction?.(notification.id, notification.actionLabel || 'view');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-[hsl(var(--atd-text))]">Notifications</h4>
          {unreadCount > 0 && (
            <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {unreadCount}
            </div>
          )}
        </div>
        <Button 
          size="sm" 
          variant="ghost" 
          className="text-xs"
          onClick={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
        >
          Mark All Read
        </Button>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <div className="text-sm text-[hsl(var(--atd-text-muted))]">
              No notifications
            </div>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "rounded-lg p-3 border transition-all duration-200",
                getNotificationColor(notification.type, notification.read),
                notification.urgent && !notification.read && "ring-2 ring-red-300 animate-pulse"
              )}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getNotificationIcon(notification.type)}
                  <div className="font-medium text-sm">{notification.title}</div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => dismissNotification(notification.id)}
                  className="p-1 h-auto"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="text-sm text-[hsl(var(--atd-text))] mb-2">
                {notification.message}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-[hsl(var(--atd-text-muted))]">
                  <Clock className="h-3 w-3" />
                  <span>{notification.timestamp}</span>
                </div>
                
                {notification.actionLabel && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAction(notification)}
                    className="text-xs"
                  >
                    {notification.actionLabel}
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {!isProviderView && unreadCount > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center space-x-2 mb-1">
            <Settings className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
            <span className="text-sm font-medium text-[hsl(var(--atd-text))]">Smart Alerts</span>
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">
            ATD learns your preferences to send more relevant notifications.
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;