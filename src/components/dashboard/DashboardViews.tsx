import { Clock, DollarSign, CheckCircle, FileText, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyManagementCards from "./PropertyManagementCards";
import QuickActionButtons from "./QuickActionButtons";
import NotificationCenter from "./NotificationCenter";
import ServiceRequestWizard from "./ServiceRequestWizard";
import ProviderAvailabilityCalendar from "./ProviderAvailabilityCalendar";
import { useDemoContext } from "@/contexts/DemoContext";

export type ViewKey = "overview" | "jobs" | "documents" | "messaging" | "payments" | "properties" | "actions" | "notifications" | "schedule" | "request";

interface DashboardViewsProps {
  isProviderView: boolean;
  onViewChange: (view: ViewKey) => void;
}

export const useDashboardViews = ({ isProviderView, onViewChange }: DashboardViewsProps) => {
  const { state, actions } = useDemoContext();
  const { currentJob, notifications } = state;

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
                {isProviderView ? "1" : "1"}
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">Active</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-green-100">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">
                  {isProviderView ? "Earnings" : "Budget Used"}
                </span>
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--atd-accent))]">
                ${isProviderView ? currentJob.estimatedCost * 0.75 : currentJob.estimatedCost}
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                {isProviderView ? "To earn" : "Pending"}
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
                <div className="text-sm text-[hsl(var(--atd-text-muted))]">
                  {currentJob.title} - {currentJob.progress}% complete
                </div>
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
                <div className="font-medium">{currentJob.title}</div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-[hsl(var(--atd-accent))] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[hsl(var(--atd-accent))]">{currentJob.progress}% Complete</span>
                </div>
              </div>
              <div className="text-sm text-[hsl(var(--atd-text-muted))] mb-2">
                {isProviderView ? "Property Address" : "Service Provider"} • Status: {currentJob.status}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${currentJob.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[hsl(var(--atd-primary))] font-medium">
                  ${isProviderView ? `${currentJob.estimatedCost * 0.75} to earn` : `${currentJob.estimatedCost} pending`}
                </span>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => actions.setActiveDemo('pocketoffice')}
                >
                  {isProviderView ? "Update Job" : "Track Progress"}
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
          {currentJob.messages.slice(-2).map((message) => (
            <div key={message.id} className="bg-white/80 rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {message.sender === 'provider' ? 'P' : 'H'}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">
                    {message.sender === 'provider' ? 'Service Provider' : 'Homeowner'}
                  </div>
                  <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="text-sm text-[hsl(var(--atd-text))]">
                "{message.message}"
              </div>
            </div>
          ))}
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
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full"
              onClick={() => actions.setActiveDemo('pocketoffice')}
            >
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
            onViewChange('request');
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
          onViewChange('overview');
        }}
        onClose={() => onViewChange('overview')}
      />
    }
  };

  return views;
};