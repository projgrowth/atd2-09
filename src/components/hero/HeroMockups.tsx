import { Smartphone, QrCode, CreditCard, Camera, Settings, Zap } from "lucide-react";

export type ViewType = 'homeowner' | 'provider';

export const viewContent = {
  homeowner: {
    content: (
      <div className="h-48 bg-gradient-to-br from-atd-primary/10 to-atd-primary/20 p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-atd-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">ATD</span>
            </div>
            <span className="font-bold text-enhanced text-sm">Dashboard</span>
          </div>
          <div className="text-xs bg-atd-success/10 text-atd-success px-2 py-1 rounded-full font-medium">
            2 Active Jobs
          </div>
        </div>

        {/* Active Projects */}
        <div className="space-y-1.5 mb-2">
          <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-heading text-enhanced text-xs">Kitchen Renovation</h3>
                <p className="text-caption text-xs">Mike Johnson - Elite</p>
              </div>
              <div className="text-xs bg-atd-success/10 text-atd-success px-1.5 py-0.5 rounded-full">
                75%
              </div>
            </div>
            <div className="w-full bg-atd-surface-muted rounded-full h-1">
              <div className="bg-atd-success h-1 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-heading text-enhanced text-xs">Bathroom Repair</h3>
                <p className="text-caption text-xs">Sarah Davis</p>
              </div>
              <div className="text-xs bg-atd-primary/10 text-atd-primary px-1.5 py-0.5 rounded-full">
                Soon
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          <button className="bg-atd-primary text-white rounded-lg py-1 px-2 text-xs font-medium">
            Add Provider
          </button>
          <button className="bg-atd-surface-muted text-enhanced rounded-lg py-1 px-2 text-xs font-medium">
            New Project
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-atd-surface rounded-lg p-2 shadow-sm">
          <h4 className="font-heading text-enhanced text-xs mb-1">Updates</h4>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-atd-success rounded-full"></div>
              <span className="text-caption text-xs">Photos from Mike</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-atd-primary rounded-full"></div>
              <span className="text-caption text-xs">Payment processed</span>
            </div>
          </div>
        </div>
      </div>
    ),
    features: [
      { icon: Smartphone, title: "Unified Dashboard", description: "All your projects in one place" },
      { icon: QrCode, title: "QR Provider Access", description: "Secure, instant provider onboarding" },
      { icon: CreditCard, title: "Secure Payments", description: "Protected payment processing" }
    ]
  },
  provider: {
    content: (
      <div className="h-48 bg-gradient-to-br from-atd-warning/10 to-atd-warning/20 p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-atd-warning rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">PO</span>
            </div>
            <span className="font-bold text-enhanced text-sm">PocketOffice</span>
          </div>
          <div className="text-xs bg-atd-warning/10 text-atd-warning px-2 py-1 rounded-full font-medium">
            Active Job
          </div>
        </div>

        {/* Current Job */}
        <div className="bg-atd-surface rounded-lg p-2 shadow-sm mb-2">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-heading text-enhanced text-xs">Kitchen Renovation</h3>
              <p className="text-caption text-xs">Sarah Johnson</p>
            </div>
            <div className="text-xs bg-atd-success/10 text-atd-success px-1.5 py-0.5 rounded-full">
              Active
            </div>
          </div>
          
          {/* Timer */}
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-1.5 h-1.5 bg-atd-error rounded-full animate-pulse"></div>
            <span className="text-caption font-medium text-xs">Time: 2h 15m</span>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-1.5">
            <button className="bg-atd-warning text-white rounded-lg py-1 px-2 text-xs font-medium">
              Add Photo
            </button>
            <button className="bg-atd-surface-muted text-enhanced rounded-lg py-1 px-2 text-xs font-medium">
              Update
            </button>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="space-y-1">
          <h4 className="font-heading text-enhanced text-xs mb-1">Updates</h4>
          <div className="bg-atd-surface rounded-lg p-1.5 border-l-4 border-atd-warning">
            <p className="text-xs font-medium text-enhanced">Photo sent</p>
            <p className="text-xs text-muted-enhanced">✓ Client notified</p>
          </div>
          <div className="bg-atd-surface rounded-lg p-1.5">
            <p className="text-xs font-medium text-enhanced">Started 8:30 AM</p>
            <p className="text-xs text-muted-enhanced">Auto-tracked</p>
          </div>
        </div>
      </div>
    ),
    features: [
      { icon: Camera, title: "Photo Updates", description: "Document progress with instant sharing" },
      { icon: Settings, title: "Job Management", description: "Track time, status, and tasks" },
      { icon: Zap, title: "Fast Payments", description: "Get paid quickly and securely" }
    ]
  }
};