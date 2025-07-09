import { QrCode, Camera, MapPin, Clock, CheckCircle, MessageSquare, User, DollarSign, Shield, Star, ArrowRight, Zap } from "lucide-react";

export const demoSteps = [
  {
    title: "QR Code Access",
    description: "Contractors scan to instantly access job details",
    screen: {
      type: "qr-scan",
      content: (
        <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Status Bar */}
          <div className="flex justify-between items-center p-4 bg-white shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-atd-primary rounded-full flex items-center justify-center">
                <QrCode className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-atd-text">ATD Scanner</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs text-green-600 font-medium">Secure</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 space-y-6">
            {/* QR Code Display */}
            <div className="card-base p-6 text-center">
              <div className="w-32 h-32 bg-atd-text mx-auto rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="grid grid-cols-8 gap-[1px] text-xs">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-atd-text'}`} />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-atd-primary/20 to-atd-accent/20 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-atd-text">Kitchen Renovation</h3>
                <div className="flex items-center justify-center space-x-2 text-atd-text-muted">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Oak Street, Portland OR</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="button-primary-enhanced text-center">
              <Camera className="h-5 w-5 inline mr-2" />
              Scan QR Code
            </div>

            {/* Quick Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between card-base p-3">
                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-atd-primary" />
                  <span className="text-sm font-medium text-atd-text">Client: Sarah Johnson</span>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between card-base p-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-atd-primary" />
                  <span className="text-sm font-medium text-atd-text">Started: Nov 15, 2024</span>
                </div>
                <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Real-Time Updates",
    description: "Progress photos and status updates sync instantly",
    screen: {
      type: "updates",
      content: (
        <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b border-atd-border-light">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-atd-primary rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base text-atd-text">Kitchen Renovation</h3>
                <p className="text-xs text-atd-text-muted">Live Updates</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-600">Live</span>
            </div>
          </div>
          
          {/* Update Feed */}
          <div className="p-4 space-y-4 overflow-y-auto">
            {/* Progress Update with Photo */}
            <div className="card-base p-4 animate-fade-in-up">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-atd-accent rounded-full flex items-center justify-center">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-atd-text">Progress Update</span>
                </div>
                <span className="text-xs text-atd-text-light">2 min ago</span>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-20 mb-3 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-atd-primary/10 to-atd-accent/10"></div>
                <div className="flex items-center space-x-2 text-atd-text-muted">
                  <Camera className="h-5 w-5" />
                  <span className="text-sm font-medium">Cabinets Installation Complete</span>
                </div>
              </div>
              
              <p className="text-sm text-atd-text-muted leading-relaxed">
                All upper and lower cabinets installed perfectly. Starting countertop measurements tomorrow at 8 AM.
              </p>
              
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-atd-border-light">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">Milestone Complete</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-atd-text-light">High Quality</span>
                </div>
              </div>
            </div>
            
            {/* Material Update */}
            <div className="card-base p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-atd-text">Material Delivery</span>
                </div>
                <span className="text-xs text-atd-text-light">1 hour ago</span>
              </div>
              <p className="text-sm text-blue-700 font-medium">
                Premium quartz countertops delivered on schedule. Quality inspection passed ✓
              </p>
            </div>

            {/* Time Update */}
            <div className="card-base p-3 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-700">Project Timeline</p>
                  <p className="text-xs text-green-600">2 days ahead of schedule</p>
                </div>
                <div className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">
                  On Track
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Organized Communication",
    description: "All messages, photos, and documents in one place",
    screen: {
      type: "chat",
      content: (
        <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Chat Header */}
          <div className="flex items-center p-4 bg-white shadow-sm border-b border-atd-border-light">
            <div className="w-10 h-10 bg-gradient-to-br from-atd-primary to-atd-accent rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">MJ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-atd-text">Mike Johnson</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600 font-medium">Online • Elite Construction</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-atd-surface rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4 text-atd-primary" />
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="p-4 space-y-4 flex-1 overflow-y-auto">
            {/* Contractor Message */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-atd-primary to-atd-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">MJ</span>
              </div>
              <div className="flex-1">
                <div className="card-base p-3 max-w-xs">
                  <p className="text-sm text-atd-text leading-relaxed">
                    Just finished installing the cabinets. They look amazing! 🔥
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-atd-border-light">
                    <span className="text-xs text-atd-text-light">10:30 AM</span>
                    <CheckCircle className="h-3 w-3 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Homeowner Response */}
            <div className="flex justify-end">
              <div className="card-base p-3 max-w-xs bg-gradient-to-r from-atd-primary to-atd-accent">
                <p className="text-sm text-white leading-relaxed">
                  Fantastic! When do you expect to start the countertops?
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                  <span className="text-xs text-white/80">10:35 AM</span>
                  <CheckCircle className="h-3 w-3 text-white/80" />
                </div>
              </div>
            </div>
            
            {/* Contractor Response with Photo */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-atd-primary to-atd-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">MJ</span>
              </div>
              <div className="flex-1">
                <div className="card-base p-3 max-w-xs">
                  <p className="text-sm text-atd-text leading-relaxed mb-3">
                    Tomorrow morning at 8 AM. Should be done by end of day.
                  </p>
                  
                  {/* Photo Preview */}
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-16 flex items-center justify-center mb-2">
                    <div className="flex items-center space-x-2 text-atd-text-muted">
                      <Camera className="h-4 w-4" />
                      <span className="text-xs font-medium">Cabinet Install Progress.jpg</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-atd-border-light">
                    <span className="text-xs text-atd-text-light">10:40 AM</span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <Star className="h-3 w-3 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-atd-surface rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-4 w-4 text-atd-text-muted" />
              </div>
              <div className="card-base p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-atd-text-muted rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-atd-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-atd-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-atd-border-light">
            <div className="flex items-center space-x-3">
              <div className="flex-1 card-base p-2 bg-atd-surface">
                <span className="text-sm text-atd-text-muted">Type a message...</span>
              </div>
              <div className="button-primary-enhanced px-4 py-2 text-sm">
                Send
              </div>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    title: "Secure Payments",
    description: "Automatic escrow and milestone-based payments",
    screen: {
      type: "payment",
      content: (
        <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100">
          {/* Header */}
          <div className="p-4 bg-white shadow-sm border-b border-atd-border-light">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-atd-text">Payment Dashboard</h3>
                  <p className="text-xs text-atd-text-muted">Escrow Management</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-atd-text">$6,300</div>
                <div className="text-xs text-atd-text-muted">Total Project</div>
              </div>
            </div>
          </div>

          {/* Status Banner */}
          <div className="p-4">
            <div className="card-base p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Milestone Completed</p>
                    <p className="text-xs text-green-600">Ready for payment release</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-medium text-green-700">Secured</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Milestones */}
          <div className="px-4 space-y-4">
            {/* Completed Milestone */}
            <div className="card-base p-4 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-atd-text">Cabinet Installation</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        Completed
                      </div>
                      <span className="text-xs text-atd-text-light">Nov 18, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-atd-text">$3,500</div>
                  <div className="text-xs text-green-600 font-medium">Ready</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-atd-border-light">
                <div className="flex items-center space-x-2">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-atd-text-muted">Quality approved</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-atd-text-light" />
                  <span className="text-xs text-atd-text-light">2 days early</span>
                </div>
              </div>
            </div>
            
            {/* Next Milestone */}
            <div className="card-base p-4 border-l-4 border-blue-300">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-atd-text">Countertop Installation</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        Next
                      </div>
                      <span className="text-xs text-atd-text-light">Starts Nov 19</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-atd-text">$2,800</div>
                  <div className="text-xs text-atd-text-muted">Escrow</div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="space-y-2">
              <div className="button-primary-enhanced text-center">
                <div className="flex items-center justify-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span>Release Payment - $3,500</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-xs text-atd-text-muted">
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>Escrow Protected</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-3 w-3" />
                  <span>Instant Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
];