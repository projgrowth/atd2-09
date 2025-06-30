
import { useState } from "react";
import { Home, Users, FileText, Activity, Clock, DollarSign, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveDashboard = () => {
  const [currentView, setCurrentView] = useState("overview");

  const views = {
    overview: {
      title: "Dashboard Overview",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-blue-100">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-[hsl(var(--atd-primary))]" />
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Active Jobs</span>
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--atd-primary))]">4</div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">In Progress</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-sm border border-green-100">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Providers</span>
              </div>
              <div className="text-3xl font-bold text-[hsl(var(--atd-accent))]">7</div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">Trusted</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-[hsl(var(--atd-text))]">Next Appointment</div>
                <div className="text-sm text-[hsl(var(--atd-text-muted))]">Tomorrow 9:00 AM - Weekly Cleaning</div>
              </div>
              <CheckCircle className="h-6 w-6 text-[hsl(var(--atd-accent))]" />
            </div>
          </div>
        </div>
      )
    },
    jobs: {
      title: "Active Jobs",
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
            <div className="text-sm text-[hsl(var(--atd-text-muted))] mb-2">Mike's HVAC • Started 2 hours ago</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-3/4"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[hsl(var(--atd-primary))] font-medium">$240 pending</span>
              <Button size="sm" variant="outline">View Details</Button>
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-4 border-l-4 border-[hsl(var(--atd-primary))] shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">Weekly Cleaning</div>
              <span className="text-sm text-[hsl(var(--atd-primary))] bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
            </div>
            <div className="text-sm text-[hsl(var(--atd-text-muted))]">Maria's Service • Tomorrow 9:00 AM</div>
            <div className="text-sm text-[hsl(var(--atd-text))] font-medium mt-2">$85 estimated</div>
          </div>
        </div>
      )
    },
    documents: {
      title: "Document Vault",
      content: (
        <div className="space-y-3">
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
        </div>
      )
    }
  };

  const viewKeys = Object.keys(views) as Array<keyof typeof views>;
  const currentIndex = viewKeys.indexOf(currentView);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
            <Home className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-[hsl(var(--atd-text))]">My Home</div>
            <div className="text-xs text-[hsl(var(--atd-text-muted))]">Interactive Demo</div>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-[hsl(var(--atd-text))] mb-1">
          {views[currentView].title}
        </h3>
      </div>

      <div className="min-h-[300px] mb-6">
        {views[currentView].content}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentView(viewKeys[Math.max(0, currentIndex - 1)])}
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
          onClick={() => setCurrentView(viewKeys[Math.min(viewKeys.length - 1, currentIndex + 1)])}
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
