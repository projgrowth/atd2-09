import { useState } from "react";
import { Smartphone, ChevronLeft, ChevronRight, MapPin, Clock, Camera, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TouchRipple } from "./TouchRipple";
import { useSwipe } from "@/hooks/use-swipe";
import { useIsMobile } from "@/hooks/use-mobile";
import JobProgressTracker from "./job-tracking/JobProgressTracker";
import PhotoProgressDocumentation from "./job-tracking/PhotoProgressDocumentation";
import RealtimeMessaging from "./job-tracking/RealtimeMessaging";
import TimeTrackingInvoice from "./job-tracking/TimeTrackingInvoice";
import { useDemoContext } from "@/contexts/DemoContext";
import { cn } from "@/lib/utils";

const PocketOfficeDemo = () => {
  const { state, actions } = useDemoContext();
  const { currentJob, userType, notifications } = state;
  const [activeTab, setActiveTab] = useState("progress");
  const isMobile = useIsMobile();

  const tabs = [
    { id: "progress", label: "Progress", icon: MapPin },
    { id: "photos", label: "Photos", icon: Camera },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "invoice", label: "Invoice", icon: Clock }
  ];

  // Auto-advance job status simulation
  const handleStatusChange = (statusId: string) => {
    actions.updateJobStatus(statusId as any);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Smartphone className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <div className="font-semibold text-[hsl(var(--atd-text))]">PocketOffice Pro</div>
            <div className="text-xs text-[hsl(var(--atd-text-muted))]">Live Job Management</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            Live
          </div>
          {notifications.length > 0 && (
            <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </div>
          )}
        </div>
      </div>

      {/* Current Job Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-6 border border-purple-100">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="font-semibold text-[hsl(var(--atd-text))]">{currentJob.title}</div>
            <div className="text-sm text-[hsl(var(--atd-text-muted))]">123 Oak Street • Current Client</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-purple-600 capitalize">{currentJob.status}</div>
            <div className="text-xs text-[hsl(var(--atd-text-muted))]">{currentJob.progress}% complete</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-xs text-[hsl(var(--atd-text-muted))]">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>0.2 miles away</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>Est. completion: 3:30 PM</span>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs Interface */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id} 
              className="text-xs flex flex-col items-center space-y-1 py-3"
            >
              <tab.icon className="h-3 w-3" />
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="min-h-[400px]">
          <TabsContent value="progress" className="mt-0">
            <JobProgressTracker
              currentStatusId={currentJob.status}
              onStatusChange={handleStatusChange}
              isLive={true}
            />
          </TabsContent>

          <TabsContent value="photos" className="mt-0">
            <PhotoProgressDocumentation
              onPhotoUpload={(photoDescription) => {
                actions.addPhoto({
                  url: '/placeholder-progress-photo.jpg',
                  description: photoDescription
                });
              }}
            />
          </TabsContent>

          <TabsContent value="chat" className="mt-0">
            <RealtimeMessaging
              isProvider={userType === 'provider'}
              onMessageSent={(message) => {
                actions.addMessage({
                  sender: userType === 'provider' ? 'provider' : 'homeowner',
                  message: message
                });
              }}
            />
          </TabsContent>

          <TabsContent value="invoice" className="mt-0">
            <TimeTrackingInvoice
              isActive={currentJob.status === "inprogress" || currentJob.status === "onsite"}
              onInvoiceGenerated={(invoice) => {
                // Update job with actual cost when invoice is generated
                // This would normally update the global state
              }}
            />
          </TabsContent>
        </div>
      </Tabs>

      {/* Recent Notifications */}
      {notifications.length > 0 && (
        <div className="mt-6 bg-gray-50 rounded-lg p-3">
          <div className="text-sm font-medium text-[hsl(var(--atd-text))] mb-2">Recent Activity</div>
          <div className="space-y-2">
            {notifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className="flex items-center justify-between text-xs">
                <span className="text-[hsl(var(--atd-text-muted))]">{notification.title}</span>
                <span className="text-gray-500">{new Date(notification.timestamp).toLocaleTimeString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-6 flex space-x-2">
        <TouchRipple>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 mobile-button-press"
            onClick={() => handleStatusChange("inprogress")}
          >
            Start Work
          </Button>
        </TouchRipple>
        <TouchRipple>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 mobile-button-press"
            onClick={() => setActiveTab("chat")}
          >
            Message Client
          </Button>
        </TouchRipple>
      </div>
    </div>
  );
};

export default PocketOfficeDemo;
