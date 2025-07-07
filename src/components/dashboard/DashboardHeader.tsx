import { Home, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoContext } from "@/contexts/DemoContext";

interface DashboardHeaderProps {
  isProviderView: boolean;
  showPrivacyPanel: boolean;
  onTogglePrivacy: () => void;
}

const DashboardHeader = ({ isProviderView, showPrivacyPanel, onTogglePrivacy }: DashboardHeaderProps) => {
  const { actions } = useDemoContext();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
          <Home className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="font-semibold text-[hsl(var(--atd-text))]">
            {isProviderView ? "Provider Portal" : "My Home"}
          </div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">Interactive Demo</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={actions.toggleUserType}
          className="text-xs px-2 py-1"
        >
          {isProviderView ? <Eye className="h-3 w-3 mr-1" /> : <EyeOff className="h-3 w-3 mr-1" />}
          {isProviderView ? "Owner" : "Provider"}
        </Button>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;