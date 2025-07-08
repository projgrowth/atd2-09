import { Loader, Wifi, Shield, CheckCircle } from "lucide-react";

interface DemoLoadingStatesProps {
  type: "qr-scan" | "updates" | "chat" | "payment";
  progress?: number;
}

const DemoLoadingStates = ({ type, progress = 0 }: DemoLoadingStatesProps) => {
  const getLoadingContent = () => {
    switch (type) {
      case "qr-scan":
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-atd-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <div className="w-12 h-12 border-3 border-atd-primary border-t-transparent rounded-full animate-spin" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-atd-text">Initializing Scanner</h3>
                <p className="text-sm text-atd-text-muted">Preparing secure connection...</p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xs text-atd-text-light">
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3 text-green-500" />
                  <span>Encrypted</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wifi className="h-3 w-3 text-atd-primary" />
                  <span>Connected</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "updates":
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 bg-atd-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Loader className="h-8 w-8 text-atd-accent animate-spin" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-atd-primary/20 to-atd-accent/20 rounded-full animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-atd-text">Syncing Updates</h3>
                <p className="text-sm text-atd-text-muted">Loading latest project progress...</p>
              </div>
              <div className="w-48 bg-atd-surface-elevated rounded-full h-2 mx-auto">
                <div 
                  className="bg-gradient-to-r from-atd-primary to-atd-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-atd-primary rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-atd-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-3 h-3 bg-atd-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-atd-text">Loading Messages</h3>
                <p className="text-sm text-atd-text-muted">Connecting to secure chat...</p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xs text-atd-text-light">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>End-to-End Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="relative">
                  <div className="w-12 h-12 border-3 border-green-500 border-t-transparent rounded-full animate-spin" />
                  <CheckCircle className="h-6 w-6 text-green-600 absolute inset-0 m-auto" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-atd-text">Loading Payment Data</h3>
                <p className="text-sm text-atd-text-muted">Verifying escrow status...</p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xs text-atd-text-light">
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3 text-green-500" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Verified Escrow</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return getLoadingContent();
};

export default DemoLoadingStates;