
import { useState } from "react";
import { Home, Users, FileText, Activity, Clock, DollarSign, CheckCircle, ArrowLeft, ArrowRight, MessageSquare, Shield, Eye, EyeOff, Settings, Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyManagementCards from "./dashboard/PropertyManagementCards";
import QuickActionButtons from "./dashboard/QuickActionButtons";
import NotificationCenter from "./dashboard/NotificationCenter";
import ServiceRequestWizard from "./dashboard/ServiceRequestWizard";
import ProviderAvailabilityCalendar from "./dashboard/ProviderAvailabilityCalendar";

type ViewKey = "overview" | "jobs" | "documents" | "messaging" | "payments" | "properties" | "actions" | "notifications" | "schedule" | "request";

const InteractiveDashboard = () => {
  const [currentView, setCurrentView] = useState<ViewKey>("overview");
  const [isProviderView, setIsProviderView] = useState(false);
  const [showPrivacyPanel, setShowPrivacyPanel] = useState(false);
  const [showServiceRequest, setShowServiceRequest] = useState(false);

  const views: Record<ViewKey, { title: string; content: JSX.Element }> = {
    overview: {
      title: isProviderView ? "Provider Dashboard" : "Dashboard Overview",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-blue-100">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">
                  {isProviderView ? "My Jobs" : "Active Jobs"}
                </span>
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--atd-primary))]">
                {isProviderView ? "2" : "4"}
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">In Progress</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-green-100">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">
                  {isProviderView ? "Earnings" : "Budget Used"}
                </span>
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--atd-accent))]">
                {isProviderView ? "$325" : "$840"}
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                {isProviderView ? "This month" : "of $1,200"}
              </div>
            </div>
          </div>
          {!isProviderView && (
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-yellow-800">Budget Alert</div>
                  <div className="text-sm text-yellow-700">70% of monthly budget used</div>
                </div>
                <div className="text-2xl">⚠️</div>
              </div>
            </div>
          )}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-[hsl(var(--atd-text))]">
                  {isProviderView ? "Next Job" : "Next Appointment"}
                </div>
                <div className="text-sm text-[hsl(var(--atd-text-muted))]">Tomorrow 9:00 AM - Weekly Cleaning</div>
              </div>
              <CheckCircle className="h-6 w-6 text-[hsl(var(--atd-accent))]" />
            </div>
          </div>
        </div>
      )
    },
    jobs: {
      title: isProviderView ? "My Active Jobs" : "Active Jobs",
      content: (
        <div className="space-y-3">
          <div className="bg-white/80 rounded-lg p-4 border-l-4 border-[hsl(var(--atd-accent))] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">HVAC Maintenance</div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-[hsl(var(--atd-accent))] rounded-full animate-pulse"></div>
                <span className="text-sm text-[hsl(var(--atd-accent))]">75% Complete</span>
              </div>
            </div>
            <div className="text-sm text-[hsl(var(--atd-text-muted))] mb-2">
              {isProviderView ? "Johnson Residence" : "Mike's HVAC"} • Started 2 hours ago
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[hsl(var(--atd-primary))] font-medium">
                ${isProviderView ? "240 to earn" : "240 pending"}
              </span>
              <Button size="sm" variant="outline">
                {isProviderView ? "Update Job" : "View Details"}
              </Button>
            </div>
          </div>
          {!isProviderView && (
            <div className="bg-white/80 rounded-lg p-4 border-l-4 border-[hsl(var(--atd-primary))] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">Weekly Cleaning</div>
                <span className="text-sm text-[hsl(var(--atd-primary))] bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
              </div>
              <div className="text-sm text-[hsl(var(--atd-text-muted))]">Maria's Service • Tomorrow 9:00 AM</div>
              <div className="text-sm text-[hsl(var(--atd-text))] font-medium mt-2">$85 estimated</div>
            </div>
          )}
        </div>
      )
    },
    documents: {
      title: isProviderView ? "Limited Access" : "Document Vault",
      content: (
        <div className="space-y-3">
          {isProviderView ? (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <div className="text-sm text-[hsl(var(--atd-text-muted))]">
                You have limited access to documents
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))] mt-2">
                Only job-related files are visible
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100 flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">HVAC_Contract_2024.pdf</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">2.3 MB • Uploaded today</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100 flex items-center space-x-3">
                <FileText className="h-5 w-5 text-purple-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">Appliance_Warranties.pdf</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">1.8 MB • Last week</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100 flex items-center space-x-3">
                <FileText className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <div className="font-medium text-sm">Insurance_Policy.pdf</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">3.1 MB • 2 weeks ago</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              </div>
            </>
          )}
        </div>
      )
    },
    messaging: {
      title: "Messages",
      content: (
        <div className="space-y-3">
          <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Mike's HVAC</div>
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">2 minutes ago</div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="text-sm text-[hsl(var(--atd-text))]">
              "Filter replacement complete. System running efficiently. Photo attached."
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                MS
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Maria's Service</div>
                <div className="text-xs text-[hsl(var(--atd-text-muted))]">1 hour ago</div>
              </div>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
            <div className="text-sm text-[hsl(var(--atd-text))]">
              "Confirmed for tomorrow 9:00 AM. Will bring eco-friendly supplies as requested."
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <Button size="sm" variant="outline" className="w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      )
    },
    payments: {
      title: "Payments & Escrow",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-green-800">Escrow Balance</div>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-800">$325.00</div>
            <div className="text-sm text-green-600">Available for job completion</div>
          </div>
          <div className="space-y-2">
            <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">HVAC Maintenance</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">75% complete</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[hsl(var(--atd-primary))]">$240.00</div>
                  <div className="text-xs text-orange-600">In Escrow</div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Weekly Cleaning</div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">Scheduled</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[hsl(var(--atd-primary))]">$85.00</div>
                  <div className="text-xs text-blue-600">Pre-authorized</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <Button size="sm" variant="outline" className="w-full">
              Add Funds to Escrow
            </Button>
          </div>
        </div>
      )
    },
    properties: {
      title: "Property Management",
      content: <PropertyManagementCards isProviderView={isProviderView} />
    },
    actions: {
      title: "Quick Actions",
      content: <QuickActionButtons 
        isProviderView={isProviderView}
        onActionClick={(actionId) => {
          if (actionId === 'schedule') {
            setCurrentView('request');
          }
        }}
      />
    },
    notifications: {
      title: "Notification Center",
      content: <NotificationCenter isProviderView={isProviderView} />
    },
    schedule: {
      title: isProviderView ? "My Schedule" : "Book Service",
      content: <ProviderAvailabilityCalendar isProviderView={isProviderView} />
    },
    request: {
      title: "Service Request",
      content: <ServiceRequestWizard 
        onRequestSubmit={(request) => {
          console.log('Service request submitted:', request);
          setCurrentView('overview');
        }}
        onClose={() => setCurrentView('overview')}
      />
    }
  };

  const viewKeys: ViewKey[] = isProviderView 
    ? ["overview", "jobs", "actions", "notifications", "schedule"] 
    : ["overview", "properties", "actions", "notifications", "schedule", "request"];
  const currentIndex = viewKeys.indexOf(currentView);

  const navigateToView = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentView(viewKeys[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < viewKeys.length - 1) {
      setCurrentView(viewKeys[currentIndex + 1]);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
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
            onClick={() => setIsProviderView(!isProviderView)}
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

      {showPrivacyPanel && !isProviderView && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-xs font-medium text-blue-800 mb-2">Data Visibility Controls</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <span>Property History</span>
              <div className="w-8 h-4 bg-green-500 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Budget Information</span>
              <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Personal Documents</span>
              <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-[300px] mb-6">
        {views[currentView].content}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateToView('prev')}
          disabled={currentIndex === 0}
          className="flex items-center space-x-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        
        <div className="flex space-x-2">
          {viewKeys.map((key, index) => (
            <button
              key={key}
              onClick={() => setCurrentView(key)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[hsl(var(--atd-primary))]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => navigateToView('next')}
          disabled={currentIndex === viewKeys.length - 1}
          className="flex items-center space-x-1"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
