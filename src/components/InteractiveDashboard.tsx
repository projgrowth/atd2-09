
import { useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoContext } from "@/contexts/DemoContext";
import { useDashboardViews } from "./dashboard/DashboardViews";
import { useDashboardNavigation } from "@/hooks/useDashboardNavigation";
import DashboardHeader from "./dashboard/DashboardHeader";
import PrivacyPanel from "./dashboard/PrivacyPanel";
import DashboardNavigation from "./dashboard/DashboardNavigation";

const InteractiveDashboard = () => {
  const { state } = useDemoContext();
  const { userType } = state;
  const [showPrivacyPanel, setShowPrivacyPanel] = useState(false);
  const isProviderView = userType === 'provider';

  const { currentView, setCurrentView, viewKeys, currentIndex, navigateToView } = useDashboardNavigation(isProviderView);
  const views = useDashboardViews({ isProviderView, onViewChange: setCurrentView });

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      <DashboardHeader 
        isProviderView={isProviderView}
        showPrivacyPanel={showPrivacyPanel}
        onTogglePrivacy={() => setShowPrivacyPanel(!showPrivacyPanel)}
      />

      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-[hsl(var(--atd-text))] mb-1">
          {views[currentView].title}
        </h3>
        {!isProviderView && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowPrivacyPanel(!showPrivacyPanel)}
            className="text-xs"
          >
            <Shield className="h-3 w-3 mr-1" />
            Privacy
          </Button>
        )}
      </div>

      <PrivacyPanel show={showPrivacyPanel && !isProviderView} />

      <div className="min-h-[300px] mb-6">
        {views[currentView].content}
      </div>

      <DashboardNavigation
        viewKeys={viewKeys}
        currentIndex={currentIndex}
        currentView={currentView}
        onViewChange={setCurrentView}
        onNavigate={navigateToView}
      />
    </div>
  );
};

export default InteractiveDashboard;
