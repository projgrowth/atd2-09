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
    features: string[];
    impact: string;
    content: JSX.Element;
  };
  provider: {
    title: string;
    description: string;
    features: string[];
    impact: string;
    content: JSX.Element;
  };
}

export const enhancedDemoSteps: DemoStep[] = [
  {
    icon: QrCode,
    homeowner: {
      title: "QR Code Property Access",
      description: "Generate secure QR codes for easy contractor access to property information",
      features: [
        "Instant property details without sharing sensitive info",
        "Temporary access codes with automatic expiration",
        "Real-time notifications when contractors arrive"
      ],
      impact: "No more sharing keys, garage codes, or detailed instructions via text. Contractors get exactly what they need, when they need it.",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <QrCode className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Property Access</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs text-green-600 font-medium">Secure</span>
            </div>
          </div>

          {/* Property Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-800">Main Residence</h3>
                <p className="text-sm text-gray-600">123 Oak Street, Portland OR</p>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="bg-gray-100 rounded-lg p-4 text-center mb-3">
              <div className="w-20 h-20 bg-gray-800 mx-auto rounded-lg flex items-center justify-center mb-2">
                <div className="grid grid-cols-6 gap-[1px]">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-gray-800'}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium">Share with contractors</p>
            </div>

            {/* Active Session */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Mike Johnson - HVAC Services</span>
              </div>
              <span className="text-xs text-gray-500">Active</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white rounded-lg py-3 px-4 font-medium flex items-center justify-center space-x-2">
              <QrCode className="h-4 w-4" />
              <span>Generate New Code</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm font-medium">
              View Access History
            </button>
          </div>
        </div>
      )
    },
    provider: {
      title: "Quick Site Access",
      description: "Scan QR codes to instantly access job sites and project details",
      features: [
        "No app downloads or account setup needed",
        "Instant access to project files and specifications",
        "Automatic time tracking when you arrive on site"
      ],
      impact: "Get started immediately without waiting for homeowner instructions or hunting for property details.",
      content: (
        <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 p-4">
          {/* Scanner Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">ATD Scanner</span>
            </div>
            <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
              Provider Mode
            </div>
          </div>

          {/* Scan Target */}
          <div className="bg-white rounded-xl p-6 text-center mb-4 shadow-sm">
            <div className="w-24 h-24 border-2 border-dashed border-orange-300 rounded-xl mx-auto mb-3 flex items-center justify-center">
              <QrCode className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">Scan Property QR Code</h3>
            <p className="text-sm text-gray-600">Point camera at the QR code provided by homeowner</p>
          </div>

          {/* Recent Scans */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Recent Job Sites</h4>
            <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">Kitchen Renovation</p>
                <p className="text-xs text-gray-600">Sarah Johnson • 2 hours ago</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">Bathroom Repair</p>
                <p className="text-xs text-gray-600">Mike Davis • Yesterday</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      )
    }
  },
  {
    icon: Zap,
    homeowner: {
      title: "Live Project Monitoring",
      description: "Watch your projects progress in real-time with photo updates and status changes",
      features: [
        "Live photo updates as work progresses",
        "Real-time status notifications on your phone",
        "Progress timeline with milestone tracking"
      ],
      impact: "Never wonder 'what's happening with my project' again. Stay informed without constantly checking in.",
      content: (
        <div className="h-full bg-gradient-to-br from-green-50 to-green-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Live Updates</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Live</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-800">Kitchen Renovation</span>
              <span className="text-sm font-bold text-green-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Started Nov 15</span>
              <span>Est. completion: Nov 25</span>
            </div>
          </div>

          {/* Live Updates Feed */}
          <div className="space-y-2 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 shadow-sm animate-fade-in-up">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Camera className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-sm font-medium text-gray-800">Countertop Installation</span>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-12 mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-600">📷 Progress Photo</span>
                  </div>
                  <p className="text-xs text-gray-600">Quartz countertops going in perfectly. Should be done by 3 PM.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Cabinet installation complete</p>
                  <p className="text-xs text-gray-600">1 hour ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Mike arrived on site</p>
                  <p className="text-xs text-gray-600">2 hours ago</p>
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
      features: [
        "One-tap photo uploads with automatic organization",
        "Quick status updates that notify homeowners instantly",
        "Time tracking integration for accurate billing"
      ],
      impact: "Build trust and reduce callbacks by keeping clients informed throughout the entire project.",
      content: (
        <div className="h-full bg-gradient-to-br from-purple-50 to-purple-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Wrench className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Job Updates</span>
            </div>
            <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              Active Job
            </div>
          </div>

          {/* Current Job */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800">Kitchen Renovation</h3>
                <p className="text-sm text-gray-600">Sarah Johnson • 123 Oak St</p>
              </div>
              <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                In Progress
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button className="bg-purple-600 text-white rounded-lg py-2 px-3 text-sm font-medium flex items-center justify-center space-x-1">
                <Camera className="h-3 w-3" />
                <span>Add Photo</span>
              </button>
              <button className="bg-gray-100 text-gray-700 rounded-lg py-2 px-3 text-sm font-medium flex items-center justify-center space-x-1">
                <Bell className="h-3 w-3" />
                <span>Update Status</span>
              </button>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Time: 2h 15m</span>
              </div>
              <button className="text-purple-600 font-medium">Stop Timer</button>
            </div>
          </div>

          {/* Recent Updates */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700">Today's Updates</h4>
            <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-gray-800">Countertop progress photo</span>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
              <p className="text-xs text-gray-600">✓ Sent to homeowner</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-gray-800">Status: Installation in progress</span>
                <span className="text-xs text-gray-500">10:30 AM</span>
              </div>
              <p className="text-xs text-gray-600">✓ Homeowner notified</p>
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
      features: [
        "Automatic conversation organization by project",
        "Searchable message history with document attachments",
        "No more lost texts or scattered email chains"
      ],
      impact: "Never lose track of important project decisions or details again. Everything is organized and searchable.",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          {/* Chat Header */}
          <div className="flex items-center p-3 bg-white rounded-xl shadow-sm mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">MJ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm">Mike Johnson</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">Elite Construction</span>
              </div>
            </div>
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          
          {/* Messages */}
          <div className="space-y-2 mb-3 overflow-y-auto">
            {/* Contractor message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">M</span>
              </div>
              <div className="bg-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm text-gray-800">Countertops are going in great! Should finish by 3 PM.</p>
                <span className="text-xs text-gray-500">2:15 PM</span>
              </div>
            </div>

            {/* Photo message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">M</span>
              </div>
              <div className="bg-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <div className="bg-gray-100 rounded-lg h-16 mb-2 flex items-center justify-center">
                  <Camera className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-600">Progress update</p>
                <span className="text-xs text-gray-500">2:10 PM</span>
              </div>
            </div>

            {/* Homeowner response */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm">Looks perfect! When will the backsplash be installed?</p>
                <span className="text-xs text-blue-200">2:20 PM</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 text-sm border-none outline-none bg-transparent"
              />
              <Camera className="h-4 w-4 text-gray-400" />
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </div>
      )
    },
    provider: {
      title: "Client Communication Tools",
      description: "Professional messaging with instant photo sharing and project documentation",
      features: [
        "Professional messaging interface with read receipts",
        "Instant photo sharing with automatic project organization",
        "Voice message support for complex explanations"
      ],
      impact: "Maintain professional communication while building stronger client relationships through transparency.",
      content: (
        <div className="h-full bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
          {/* Chat Header */}
          <div className="flex items-center p-3 bg-white rounded-xl shadow-sm mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">SJ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm">Sarah Johnson</h3>
              <span className="text-xs text-gray-600">Kitchen Renovation Project</span>
            </div>
            <div className="flex space-x-1">
              <Camera className="h-4 w-4 text-gray-400" />
              <Settings className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Messages */}
          <div className="space-y-2 mb-3 overflow-y-auto">
            {/* Client message */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">S</span>
              </div>
              <div className="bg-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm text-gray-800">When will the backsplash be installed?</p>
                <span className="text-xs text-gray-500">2:20 PM</span>
              </div>
            </div>

            {/* Provider response */}
            <div className="flex justify-end">
              <div className="bg-indigo-600 text-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <p className="text-sm">Tomorrow morning! I'll send photos of the tile samples.</p>
                <span className="text-xs text-indigo-200">2:25 PM</span>
              </div>
            </div>

            {/* Photo sharing */}
            <div className="flex justify-end">
              <div className="bg-indigo-600 text-white rounded-lg p-2 max-w-[70%] shadow-sm">
                <div className="bg-indigo-500 rounded-lg h-16 mb-2 flex items-center justify-center">
                  <Camera className="h-4 w-4 text-white" />
                </div>
                <p className="text-xs">Tile samples for your review</p>
                <span className="text-xs text-indigo-200">2:30 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Responses */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button className="bg-white text-gray-700 rounded-lg py-2 px-2 text-xs font-medium border">
              Running on time
            </button>
            <button className="bg-white text-gray-700 rounded-lg py-2 px-2 text-xs font-medium border">
              Send update photo
            </button>
          </div>

          {/* Message Input */}
          <div className="bg-white rounded-lg p-2 shadow-sm">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Message Sarah..." 
                className="flex-1 text-sm border-none outline-none bg-transparent"
              />
              <Camera className="h-4 w-4 text-gray-400" />
              <ArrowRight className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
        </div>
      )
    }
  },
  {
    icon: DollarSign,
    homeowner: {
      title: "Secure Payment Management",
      description: "Automatic escrow protection with milestone-based payments",
      features: [
        "Funds held securely until work milestones are completed",
        "Automatic payment release based on photo verification",
        "Complete payment transparency with detailed invoicing"
      ],
      impact: "Peace of mind knowing your money is protected while ensuring contractors get paid fairly for completed work.",
      content: (
        <div className="h-full bg-gradient-to-br from-green-50 to-green-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Payment Protection</span>
            </div>
            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
              Secured
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800">Kitchen Renovation</h3>
                <p className="text-sm text-gray-600">Elite Construction</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-800">$6,300</div>
                <div className="text-xs text-gray-500">Total Project</div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Milestone Ready for Payment</p>
                  <p className="text-xs text-green-600">Cabinet installation completed & verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Milestones */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700">Payment Schedule</h4>
            
            {/* Completed Milestone */}
            <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-sm font-medium text-gray-800">Cabinet Installation</span>
                  <div className="flex items-center space-x-1 mt-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-600">Completed Nov 18</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">$3,500</div>
                  <button className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-medium">
                    Release Payment
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Milestone */}
            <div className="bg-white rounded-lg p-3 border-l-4 border-gray-300 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm font-medium text-gray-800">Countertop Installation</span>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-500">Est. Nov 20</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">$2,800</div>
                  <div className="text-xs text-gray-500">In Escrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    provider: {
      title: "Professional Invoicing",
      description: "Streamlined billing with automatic milestone tracking and secure payments",
      features: [
        "Automatic invoice generation based on completed milestones",
        "Real-time payment status tracking",
        "Secure payment processing with next-day deposits"
      ],
      impact: "Get paid faster and more reliably while building trust through transparent milestone-based billing.",
      content: (
        <div className="h-full bg-gradient-to-br from-emerald-50 to-emerald-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Invoice Center</span>
            </div>
            <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
              Active Jobs: 3
            </div>
          </div>

          {/* Current Invoice */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800">Kitchen Renovation</h3>
                <p className="text-sm text-gray-600">Sarah Johnson • #INV-001</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-600">$3,500</div>
                <div className="text-xs text-emerald-600 font-medium">Ready for Payment</div>
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200 mb-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-medium text-emerald-800">Milestone Completed</p>
                  <p className="text-xs text-emerald-600">Cabinet installation verified by client</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-emerald-600 text-white rounded-lg py-2 px-4 font-medium text-sm">
              Request Payment Release
            </button>
          </div>

          {/* Recent Payments */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700">Recent Activity</h4>
            
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-gray-800">Bathroom Repair - Final Payment</span>
                <span className="text-sm font-bold text-gray-800">$1,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Mike Davis • Nov 16</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Paid</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-gray-800">HVAC Maintenance - Materials</span>
                <span className="text-sm font-bold text-gray-800">$450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Lisa Chen • Nov 14</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Processing</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    icon: CalendarClock,
    homeowner: {
      title: "Smart Scheduling",
      description: "Automated scheduling with real-time availability and conflict management",
      features: [
        "See provider availability in real-time",
        "Automatic scheduling conflict resolution",
        "Weather-aware rescheduling for outdoor projects"
      ],
      impact: "No more back-and-forth scheduling calls. Book appointments instantly when providers are available.",
      content: (
        <div className="h-full bg-gradient-to-br from-purple-50 to-purple-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <CalendarClock className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Smart Scheduler</span>
            </div>
            <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
              This Week
            </div>
          </div>

          {/* Calendar View */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <div className="grid grid-cols-7 gap-1 mb-3">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-medium text-gray-500 py-1">{day}</div>
              ))}
              {Array.from({length: 7}).map((_, i) => (
                <div key={i} className={`text-center text-sm py-2 rounded ${
                  i === 3 ? 'bg-purple-600 text-white' : 
                  i === 4 ? 'bg-purple-100 text-purple-600' : 'text-gray-700'
                }`}>
                  {15 + i}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium text-purple-600">Today: Kitchen countertop installation</p>
              <p className="text-xs text-gray-600">Mike Johnson • 9:00 AM - 3:00 PM</p>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700">Upcoming</h4>
            
            <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="text-sm font-medium text-gray-800">Backsplash Installation</span>
                  <p className="text-xs text-gray-600">Mike Johnson • Elite Construction</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-800">Nov 20</div>
                  <div className="text-xs text-gray-500">10:00 AM</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Clock className="h-3 w-3 text-purple-500" />
                <span className="text-xs text-purple-600">Confirmed</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="text-sm font-medium text-gray-800">Final Walkthrough</span>
                  <p className="text-xs text-gray-600">You & Mike Johnson</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-800">Nov 22</div>
                  <div className="text-xs text-gray-500">2:00 PM</div>
                </div>
              </div>
              <button className="text-xs text-purple-600 font-medium">Reschedule</button>
            </div>
          </div>
        </div>
      )
    },
    provider: {
      title: "Availability Management",
      description: "Manage your schedule and availability across all clients in one place",
      features: [
        "Real-time availability sync across all clients",
        "Automatic travel time calculation between jobs",
        "Smart scheduling suggestions to optimize your day"
      ],
      impact: "Maximize your productivity with intelligent scheduling that eliminates conflicts and optimizes travel time.",
      content: (
        <div className="h-full bg-gradient-to-br from-cyan-50 to-cyan-100 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                <CalendarClock className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">My Schedule</span>
            </div>
            <div className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full font-medium">
              Today
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">Today's Jobs</h3>
            
            <div className="space-y-3">
              <div className="bg-cyan-50 rounded-lg p-3 border-l-4 border-cyan-500">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-sm font-medium text-gray-800">Kitchen Countertops</span>
                    <p className="text-xs text-gray-600">Sarah Johnson • Oak Street</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-cyan-600">9:00 AM</div>
                    <div className="text-xs text-cyan-600">Current</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-cyan-600">In Progress • 2h 15m</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="text-sm font-medium text-gray-800">Bathroom Fixtures</span>
                    <p className="text-xs text-gray-600">Mike Davis • Pine Avenue</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800">2:00 PM</div>
                    <div className="text-xs text-gray-500">15 min drive</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-600">Confirmed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button className="bg-cyan-600 text-white rounded-lg py-2 px-3 text-sm font-medium">
              Block Time
            </button>
            <button className="bg-white text-gray-700 rounded-lg py-2 px-3 text-sm font-medium border">
              View Week
            </button>
          </div>

          {/* Requests */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-700">Pending Requests</h4>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-gray-800">HVAC Maintenance</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">Lisa Chen • Nov 22, 10:00 AM</p>
              <div className="flex space-x-2">
                <button className="text-xs bg-green-600 text-white px-2 py-1 rounded font-medium">Accept</button>
                <button className="text-xs text-gray-600">Decline</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
];