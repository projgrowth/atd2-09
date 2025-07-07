import { Smartphone, QrCode, Shield, User, CheckCircle, Eye, EyeOff, Clock, FileText, DollarSign, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScanningStatesProps {
  scanningState: string;
  animationStep: number;
  historyVisible: {
    previousWork: boolean;
    budget: boolean;
    family: boolean;
    documents: boolean;
  };
}

const ScanningStates = ({ scanningState, animationStep, historyVisible }: ScanningStatesProps) => {
  if (scanningState === "idle") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center animate-mobile-fade-in">
        <Smartphone className="h-12 w-12 text-gray-400 mb-4 animate-bounce-subtle" />
        <div className="text-sm font-medium text-gray-600 mb-2">Ready to Scan</div>
        <div className="text-xs text-gray-500">Point camera at QR code</div>
      </div>
    );
  }

  if (scanningState === "scanning") {
    return (
      <div className="h-full flex flex-col items-center justify-center animate-mobile-fade-in">
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-lg"></div>
          <div 
            className="absolute inset-0 border-4 border-blue-500 rounded-lg transition-all duration-500"
            style={{
              clipPath: `inset(${animationStep * 25}% 0 ${75 - (animationStep * 25)}% 0)`
            }}
          ></div>
          <QrCode className="absolute inset-4 w-24 h-24 text-gray-600" />
          <div 
            className="absolute w-full h-1 bg-blue-500 opacity-80 transition-all duration-500 animate-scan-line"
            style={{ top: `${25 + (animationStep * 25)}%` }}
          ></div>
        </div>
        <div className="text-sm font-medium text-blue-600">Scanning...</div>
        <div className="flex space-x-1 mt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                animationStep >= i ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
              )}
            />
          ))}
        </div>
      </div>
    );
  }

  if (scanningState === "recognized") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center animate-mobile-fade-in">
        <div className="bg-blue-100 rounded-full p-3 mb-4 animate-pulse">
          <Shield className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-sm font-medium text-blue-600 mb-2">Code Recognized!</div>
        <div className="bg-blue-50 rounded-lg p-3 w-full text-xs">
          <div className="text-blue-700 font-medium mb-2">ATD Provider Badge</div>
          <div className="text-blue-600 text-left space-y-1">
            <div>• Valid Credentials ✓</div>
            <div>• Service Area: Local ✓</div>
            <div>• Verification Status: Active</div>
          </div>
        </div>
      </div>
    );
  }

  if (scanningState === "profileCreation") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center animate-mobile-fade-in">
        <div className="bg-orange-100 rounded-full p-3 mb-4">
          <User className="h-8 w-8 text-orange-600" />
        </div>
        <div className="text-sm font-medium text-orange-600 mb-2">Creating Profile...</div>
        <div className="bg-orange-50 rounded-lg p-3 w-full text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-orange-700">Mike Johnson</span>
            <CheckCircle className="h-3 w-3 text-green-500" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-orange-700">Plumbing Expert</span>
            <CheckCircle className="h-3 w-3 text-green-500" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-orange-700">License Verified</span>
            <div className="w-3 h-3 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (scanningState === "accessGranted") {
    return (
      <div className="h-full flex flex-col justify-start pt-2 animate-mobile-fade-in overflow-y-auto">
        <div className="bg-green-100 rounded-full p-2 mb-3 mx-auto">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <div className="text-sm font-medium text-green-600 mb-3 text-center">Access Granted!</div>
        
        {/* Privacy Controls */}
        <div className="space-y-2 text-xs">
          <div className="bg-green-50 rounded-lg p-2">
            <div className="font-medium text-green-700 mb-2 flex items-center">
              <Eye className="h-3 w-3 mr-1" />
              Provider Can See:
            </div>
            <div className="space-y-1">
              <div className={cn("flex items-center justify-between p-1 rounded", 
                historyVisible.previousWork ? "bg-green-100" : "bg-red-100")}>
                <span className="flex items-center">
                  <Clock className="h-2 w-2 mr-1" />
                  Previous Work
                </span>
                {historyVisible.previousWork ? 
                  <Eye className="h-2 w-2 text-green-600" /> : 
                  <EyeOff className="h-2 w-2 text-red-600" />}
              </div>
              <div className={cn("flex items-center justify-between p-1 rounded", 
                historyVisible.budget ? "bg-green-100" : "bg-red-100")}>
                <span className="flex items-center">
                  <DollarSign className="h-2 w-2 mr-1" />
                  Budget Info
                </span>
                {historyVisible.budget ? 
                  <Eye className="h-2 w-2 text-green-600" /> : 
                  <EyeOff className="h-2 w-2 text-red-600" />}
              </div>
              <div className={cn("flex items-center justify-between p-1 rounded", 
                historyVisible.documents ? "bg-green-100" : "bg-red-100")}>
                <span className="flex items-center">
                  <FileText className="h-2 w-2 mr-1" />
                  Documents
                </span>
                {historyVisible.documents ? 
                  <Eye className="h-2 w-2 text-green-600" /> : 
                  <EyeOff className="h-2 w-2 text-red-600" />}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-2">
            <div className="flex items-center space-x-2 mb-1">
              <Home className="h-3 w-3 text-blue-600" />
              <span className="text-blue-700 font-medium">123 Oak Street</span>
            </div>
            <div className="text-blue-600">Job: Kitchen Repair • Mike J.</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ScanningStates;