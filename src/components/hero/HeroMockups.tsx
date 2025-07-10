import { Smartphone, QrCode, CreditCard, Camera, Settings, Zap } from "lucide-react";

export type ViewType = 'homeowner' | 'provider';

export const viewContent = {
  homeowner: {
    content: (
      <div className="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-atd-primary/10 to-atd-primary/20 p-3 sm:p-4 md:p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-atd-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">ATD</span>
            </div>
            <span className="font-bold text-enhanced text-sm sm:text-base">Dashboard</span>
          </div>
          <div className="text-xs sm:text-sm bg-atd-success/10 text-atd-success px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
            2 Active Jobs
          </div>
        </div>

        {/* Active Projects */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-3 sm:mb-4">
          <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-heading text-enhanced text-xs sm:text-sm">Kitchen Renovation</h3>
                <p className="text-caption text-xs sm:text-sm">Mike Johnson - Elite</p>
              </div>
              <div className="text-xs sm:text-sm bg-atd-success/10 text-atd-success px-2 py-1 rounded-full">
                75%
              </div>
            </div>
            <div className="w-full bg-atd-surface-muted rounded-full h-1.5">
              <div className="bg-atd-success h-1.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-heading text-enhanced text-xs sm:text-sm">Bathroom Repair</h3>
                <p className="text-caption text-xs sm:text-sm">Sarah Davis</p>
              </div>
              <div className="text-xs sm:text-sm bg-atd-primary/10 text-atd-primary px-2 py-1 rounded-full">
                Soon
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
          <button className="bg-atd-primary text-white rounded-lg py-2 px-3 text-xs sm:text-sm font-medium min-h-[36px]">
            Add Provider
          </button>
          <button className="bg-atd-surface-muted text-enhanced rounded-lg py-2 px-3 text-xs sm:text-sm font-medium min-h-[36px]">
            New Project
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3 shadow-sm">
          <h4 className="font-heading text-enhanced text-xs sm:text-sm mb-2">Updates</h4>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-atd-success rounded-full"></div>
              <span className="text-caption text-xs sm:text-sm">Photos from Mike</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-atd-primary rounded-full"></div>
              <span className="text-caption text-xs sm:text-sm">Payment processed</span>
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
      <div className="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-atd-warning/10 to-atd-warning/20 p-3 sm:p-4 md:p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-atd-warning rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">PO</span>
            </div>
            <span className="font-bold text-enhanced text-sm sm:text-base">PocketOffice</span>
          </div>
          <div className="text-xs sm:text-sm bg-atd-warning/10 text-atd-warning px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium">
            Active Job
          </div>
        </div>

        {/* Current Job */}
        <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3 shadow-sm mb-3 sm:mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-heading text-enhanced text-xs sm:text-sm">Kitchen Renovation</h3>
              <p className="text-caption text-xs sm:text-sm">Sarah Johnson</p>
            </div>
            <div className="text-xs sm:text-sm bg-atd-success/10 text-atd-success px-2 py-1 rounded-full">
              Active
            </div>
          </div>
          
          {/* Timer */}
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="w-2 h-2 bg-atd-error rounded-full animate-pulse"></div>
            <span className="text-caption font-medium text-xs sm:text-sm">Time: 2h 15m</span>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button className="bg-atd-warning text-white rounded-lg py-2 px-3 text-xs sm:text-sm font-medium min-h-[36px]">
              Add Photo
            </button>
            <button className="bg-atd-surface-muted text-enhanced rounded-lg py-2 px-3 text-xs sm:text-sm font-medium min-h-[36px]">
              Update
            </button>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="font-heading text-enhanced text-xs sm:text-sm mb-2">Updates</h4>
          <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3 border-l-4 border-atd-warning">
            <p className="text-xs sm:text-sm font-medium text-enhanced">Photo sent</p>
            <p className="text-xs sm:text-sm text-muted-enhanced">✓ Client notified</p>
          </div>
          <div className="bg-atd-surface rounded-lg p-2.5 sm:p-3">
            <p className="text-xs sm:text-sm font-medium text-enhanced">Started 8:30 AM</p>
            <p className="text-xs sm:text-sm text-muted-enhanced">Auto-tracked</p>
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