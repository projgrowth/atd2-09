import { 
  QrCode, 
  Zap, 
  MessageSquare, 
  DollarSign, 
  Camera, 
  MapPin, 
  Clock, 
  CheckCircle, 
  User, 
  Shield, 
  Star, 
  ArrowRight,
  CalendarClock,
  FileText,
  Wrench,
  CreditCard,
  Bell,
  Settings
} from "lucide-react";

export interface DemoStep {
  icon: any;
  homeowner: {
    title: string;
    description: string;
    content: JSX.Element;
  };
  provider: {
    title: string;
    description: string;
    content: JSX.Element;
  };
}

export const enhancedDemoSteps: DemoStep[] = [
  {
    icon: QrCode,
    homeowner: {
      title: "QR Code Property Access",
      description: "Generate secure QR codes for easy contractor access to property information",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <QrCode className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-foreground">Property Access</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs text-green-600 font-medium">Secure</span>
            </div>
          </div>

          {/* Property Card */}
          <div className="bg-card rounded-xl p-4 shadow-sm mb-4 border">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Main Residence</h3>
                <p className="text-sm text-muted-foreground">123 Oak Street, Portland OR</p>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="bg-muted rounded-lg p-4 text-center mb-3">
              <div className="w-20 h-20 bg-foreground mx-auto rounded-lg flex items-center justify-center mb-2">
                <div className="grid grid-cols-6 gap-[1px]">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-background' : 'bg-foreground'}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">Share with contractors</p>
            </div>

            {/* Active Session */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground">Mike Johnson - HVAC Services</span>
              </div>
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <button className="w-full bg-primary text-primary-foreground rounded-lg py-3 px-4 font-medium flex items-center justify-center space-x-2">
              <QrCode className="h-4 w-4" />
              <span>Generate New Code</span>
            </button>
            <button className="w-full bg-muted text-muted-foreground rounded-lg py-2 px-4 text-sm font-medium">
              View Access History
            </button>
          </div>
        </div>
      )
    },
    provider: {
      title: "Quick Site Access",
      description: "Scan QR codes to instantly access job sites and project details",
      content: (
        <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 p-4">
          {/* Scanner Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground">ATD Scanner</span>
            </div>
            <div className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
              Provider Mode
            </div>
          </div>

          {/* Scan Target */}
          <div className="bg-card rounded-xl p-6 text-center mb-4 shadow-sm border">
            <div className="w-24 h-24 border-2 border-dashed border-primary rounded-xl mx-auto mb-3 flex items-center justify-center">
              <QrCode className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-1">Scan Property QR Code</h3>
            <p className="text-sm text-muted-foreground">Point camera at the QR code provided by homeowner</p>
          </div>

          {/* Recent Scans */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground mb-2">Recent Job Sites</h4>
            <div className="bg-card rounded-lg p-3 flex items-center space-x-3 border">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">Kitchen Renovation</p>
                <p className="text-xs text-muted-foreground">Sarah Johnson • 2 hours ago</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      )
    }
  },
  {
    icon: Zap,
    homeowner: {
      title: "Live Project Updates",
      description: "Watch your projects progress in real-time with photo updates and notifications",
      content: (
        <div className="h-full bg-gradient-to-br from-green-50 to-green-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-foreground">Live Updates</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-card rounded-xl p-4 mb-4 shadow-sm border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-foreground">Kitchen Renovation</span>
              <span className="text-sm font-bold text-green-600">75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-3">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Started Nov 15</span>
              <span>Est. completion: Nov 25</span>
            </div>
          </div>

          {/* Live Updates Feed */}
          <div className="space-y-3 overflow-y-auto">
            <div className="bg-card rounded-lg p-3 shadow-sm border animate-fade-in-up">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Camera className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-foreground">Countertop Installation</span>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>
                  <div className="bg-muted rounded-lg h-12 mb-2 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">📷 Progress Photo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Quartz countertops going in perfectly. Should be done by 3 PM.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 shadow-sm border">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Cabinet installation complete</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    provider: {
      title: "Real-Time Job Updates",
      description: "Keep clients informed with instant photo updates and status changes",
      content: (
        <div className="h-full bg-gradient-to-br from-purple-50 to-purple-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Wrench className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground">Job Updates</span>
            </div>
            <div className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
              Active Job
            </div>
          </div>

          {/* Current Job */}
          <div className="bg-card rounded-xl p-4 mb-4 shadow-sm border">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-foreground">Kitchen Renovation</h3>
                <p className="text-sm text-muted-foreground">Sarah Johnson • 123 Oak St</p>
              </div>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                In Progress
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button className="bg-primary text-primary-foreground rounded-lg py-2 px-3 text-sm font-medium flex items-center justify-center space-x-1">
                <Camera className="h-3 w-3" />
                <span>Add Photo</span>
              </button>
              <button className="bg-muted text-muted-foreground rounded-lg py-2 px-3 text-sm font-medium flex items-center justify-center space-x-1">
                <Bell className="h-3 w-3" />
                <span>Update Status</span>
              </button>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-foreground">Time: 2h 15m</span>
              </div>
              <button className="text-primary font-medium">Stop Timer</button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">Today's Updates</h4>
            <div className="bg-card rounded-lg p-3 border-l-4 border-primary border">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-foreground">Countertop progress photo</span>
                <span className="text-xs text-muted-foreground">Just now</span>
              </div>
              <p className="text-xs text-muted-foreground">✓ Sent to homeowner</p>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    icon: MessageSquare,
    homeowner: {
      title: "Organized Communication Hub",
      description: "All project conversations, photos, and documents in one searchable place",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          {/* Chat Header */}
          <div className="flex items-center p-3 bg-card rounded-xl shadow-sm mb-4 border">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">MJ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-sm">Mike Johnson</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Elite Construction</span>
              </div>
            </div>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          
          {/* Messages */}
          <div className="space-y-3 mb-4 overflow-y-auto">
            {/* Contractor message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">M</span>
              </div>
              <div className="bg-card rounded-lg p-2 max-w-[70%] shadow-sm border">
                <p className="text-sm text-foreground">Countertops are going in great! Should finish by 3 PM.</p>
                <span className="text-xs text-muted-foreground">2:15 PM</span>
              </div>
            </div>

            {/* Photo message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">M</span>
              </div>
              <div className="bg-card rounded-lg p-2 max-w-[70%] shadow-sm border">
                <div className="bg-muted rounded-lg h-16 mb-2 flex items-center justify-center">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">Progress update</p>
                <span className="text-xs text-muted-foreground">2:10 PM</span>
              </div>
            </div>

            {/* Homeowner response */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm">Looks perfect! When will the backsplash be installed?</p>
                <span className="text-xs text-primary-foreground/70">2:16 PM</span>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="bg-card rounded-lg p-2 flex items-center space-x-2 border">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
            />
            <Camera className="h-4 w-4 text-muted-foreground" />
            <button className="bg-primary text-primary-foreground rounded-full p-1">
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )
    },
    provider: {
      title: "Client Communication Hub",
      description: "Stay connected with clients through organized, professional messaging",
      content: (
        <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
          {/* Chat Header */}
          <div className="flex items-center p-3 bg-card rounded-xl shadow-sm mb-4 border">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
              <span className="text-accent-foreground text-sm font-bold">SJ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-sm">Sarah Johnson</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Kitchen Renovation</span>
              </div>
            </div>
            <CalendarClock className="h-5 w-5 text-muted-foreground" />
          </div>
          
          {/* Messages */}
          <div className="space-y-3 mb-4 overflow-y-auto">
            {/* Client message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground text-xs">S</span>
              </div>
              <div className="bg-card rounded-lg p-2 max-w-[70%] shadow-sm border">
                <p className="text-sm text-foreground">Looks perfect! When will the backsplash be installed?</p>
                <span className="text-xs text-muted-foreground">2:16 PM</span>
              </div>
            </div>

            {/* Provider response */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm">Great! Backsplash installation is scheduled for tomorrow morning. I'll send photos as we progress.</p>
                <span className="text-xs text-primary-foreground/70">2:18 PM</span>
              </div>
            </div>

            {/* Photo upload */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%] shadow-sm">
                <div className="bg-primary-foreground/20 rounded-lg h-16 mb-2 flex items-center justify-center">
                  <Camera className="h-4 w-4 text-primary-foreground" />
                </div>
                <p className="text-xs text-primary-foreground/70">Countertop installation complete</p>
                <span className="text-xs text-primary-foreground/70">2:20 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-muted text-muted-foreground rounded-lg py-2 px-2 text-xs font-medium">
              📷 Photo
            </button>
            <button className="bg-muted text-muted-foreground rounded-lg py-2 px-2 text-xs font-medium">
              📍 Update
            </button>
            <button className="bg-muted text-muted-foreground rounded-lg py-2 px-2 text-xs font-medium">
              ⏰ Schedule
            </button>
          </div>

          {/* Input */}
          <div className="bg-card rounded-lg p-2 flex items-center space-x-2 border">
            <input 
              type="text" 
              placeholder="Message Sarah..." 
              className="flex-1 bg-transparent text-sm text-foreground placeholder-muted-foreground outline-none"
            />
            <button className="bg-primary text-primary-foreground rounded-full p-1">
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )
    }
  },
  {
    icon: DollarSign,
    homeowner: {
      title: "Transparent Payment Management",
      description: "Track project costs, milestones, and payments with complete transparency",
      content: (
        <div className="h-full bg-gradient-to-br from-green-50 to-green-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-foreground">Payment Tracking</span>
            </div>
            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Active Project
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-card rounded-xl p-4 mb-4 shadow-sm border">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-foreground">Kitchen Renovation</h3>
                <p className="text-sm text-muted-foreground">Mike Johnson • Elite Construction</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">$8,500</p>
                <p className="text-xs text-muted-foreground">Total Project</p>
              </div>
            </div>
            
            {/* Payment Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Paid</span>
                <span className="font-medium text-foreground">$6,375 (75%)</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Remaining: $2,125</span>
                <span>Final payment due on completion</span>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">Payment History</h4>
            
            <div className="bg-card rounded-lg p-3 border-l-4 border-green-500 border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Milestone 3: Installation</p>
                  <p className="text-xs text-muted-foreground">Nov 20, 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600">$2,125</p>
                  <p className="text-xs text-green-600">✓ Paid</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border-l-4 border-green-500 border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Milestone 2: Demo Complete</p>
                  <p className="text-xs text-muted-foreground">Nov 18, 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600">$2,125</p>
                  <p className="text-xs text-green-600">✓ Paid</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border-l-4 border-muted border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Final Payment</p>
                  <p className="text-xs text-muted-foreground">Due on completion</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-muted-foreground">$2,125</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    provider: {
      title: "Invoice & Payment Tracking",
      description: "Generate invoices, track payments, and manage project finances efficiently",
      content: (
        <div className="h-full bg-gradient-to-br from-emerald-50 to-emerald-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-accent-foreground" />
              </div>
              <span className="font-bold text-foreground">Invoicing</span>
            </div>
            <div className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
              Provider Tools
            </div>
          </div>

          {/* Active Invoice */}
          <div className="bg-card rounded-xl p-4 mb-4 shadow-sm border">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-foreground">Kitchen Renovation</h3>
                <p className="text-sm text-muted-foreground">Sarah Johnson</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-foreground">$2,125</p>
                <p className="text-xs text-green-600 font-medium">✓ Invoice Paid</p>
              </div>
            </div>
            
            {/* Project Status */}
            <div className="bg-muted rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Project Progress</span>
                <span className="text-sm font-bold text-primary">75%</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-primary text-primary-foreground rounded-lg py-2 px-3 text-sm font-medium">
                Generate Invoice
              </button>
              <button className="bg-muted text-muted-foreground rounded-lg py-2 px-3 text-sm font-medium">
                View Payments
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">Recent Transactions</h4>
            
            <div className="bg-card rounded-lg p-3 border">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Milestone 3 Payment</p>
                    <p className="text-xs text-muted-foreground">Received Nov 20</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-green-600">+$2,125</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-3 border">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Final Invoice</p>
                    <p className="text-xs text-muted-foreground">Ready to send</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-muted-foreground">$2,125</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
];