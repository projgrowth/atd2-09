import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Wrench, 
  AlertTriangle, 
  FileText, 
  Shield,
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
  urgent?: boolean;
}

interface QuickActionButtonsProps {
  onActionClick?: (actionId: string) => void;
  isProviderView?: boolean;
}

const QuickActionButtons = ({ onActionClick, isProviderView = false }: QuickActionButtonsProps) => {
  const [clickedAction, setClickedAction] = useState<string | null>(null);

  const homeownerActions: QuickAction[] = [
    {
      id: "emergency",
      label: "Emergency",
      icon: AlertTriangle,
      color: "bg-red-500 hover:bg-red-600 text-white",
      description: "24/7 urgent assistance",
      urgent: true
    },
    {
      id: "schedule",
      label: "Schedule Service",
      icon: Calendar,
      color: "bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white",
      description: "Book maintenance or repairs"
    },
    {
      id: "message",
      label: "Message Providers",
      icon: MessageCircle,
      color: "bg-[hsl(var(--atd-accent))] hover:bg-[hsl(var(--atd-accent))]/90 text-white",
      description: "Contact your service team"
    },
    {
      id: "invoice",
      label: "View Invoices",
      icon: FileText,
      color: "bg-purple-500 hover:bg-purple-600 text-white",
      description: "Payment history & receipts"
    },
    {
      id: "maintenance",
      label: "Maintenance Log",
      icon: Wrench,
      color: "bg-orange-500 hover:bg-orange-600 text-white",
      description: "Track property updates"
    },
    {
      id: "budget",
      label: "Budget Tracker",
      icon: DollarSign,
      color: "bg-green-500 hover:bg-green-600 text-white",
      description: "Monitor spending & escrow"
    }
  ];

  const providerActions: QuickAction[] = [
    {
      id: "checkin",
      label: "Check In",
      icon: Clock,
      color: "bg-[hsl(var(--atd-primary))] hover:bg-[hsl(var(--atd-primary))]/90 text-white",
      description: "Start your work day",
      urgent: true
    },
    {
      id: "jobs",
      label: "My Jobs",
      icon: Wrench,
      color: "bg-[hsl(var(--atd-accent))] hover:bg-[hsl(var(--atd-accent))]/90 text-white",
      description: "View assigned tasks"
    },
    {
      id: "contact",
      label: "Contact Client",
      icon: Phone,
      color: "bg-blue-500 hover:bg-blue-600 text-white",
      description: "Call or message homeowner"
    },
    {
      id: "timesheet",
      label: "Timesheet",
      icon: Clock,
      color: "bg-purple-500 hover:bg-purple-600 text-white",
      description: "Log hours & breaks"
    },
    {
      id: "reports",
      label: "Submit Report",
      icon: FileText,
      color: "bg-orange-500 hover:bg-orange-600 text-white",
      description: "Document work completed"
    },
    {
      id: "availability",
      label: "Set Availability",
      icon: Calendar,
      color: "bg-green-500 hover:bg-green-600 text-white",
      description: "Update your schedule"
    }
  ];

  const actions = isProviderView ? providerActions : homeownerActions;

  const handleActionClick = (actionId: string) => {
    setClickedAction(actionId);
    setTimeout(() => setClickedAction(null), 200);
    onActionClick?.(actionId);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Quick Actions</h4>
        {isProviderView && (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600">On Duty</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const IconComponent = action.icon;
          return (
            <Button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className={cn(
                "h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-200",
                action.color,
                clickedAction === action.id && "scale-95",
                action.urgent && "animate-pulse ring-2 ring-red-300"
              )}
              variant="default"
            >
              <IconComponent className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium text-sm">{action.label}</div>
                <div className="text-xs opacity-80 leading-tight">{action.description}</div>
              </div>
            </Button>
          );
        })}
      </div>

      {!isProviderView && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
            <span className="text-sm font-medium text-[hsl(var(--atd-text))]">Security Tip</span>
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">
            All providers are background-checked and insured. Emergency contacts are always notified.
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActionButtons;