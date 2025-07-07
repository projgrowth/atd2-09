
import { useState, useEffect } from "react";
import { QrCode, Smartphone, CheckCircle, Wifi, Home, RotateCcw, User, Camera, Shield, Eye, EyeOff, Clock, FileText, Users, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { TouchRipple } from "./TouchRipple";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const QRScanDemo = () => {
  const [scanningState, setScanningState] = useState("idle"); // idle, scanning, recognized, profileCreation, accessGranted
  const [animationStep, setAnimationStep] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showNFC, setShowNFC] = useState(false);
  const [historyVisible, setHistoryVisible] = useState({
    previousWork: true,
    budget: false,
    family: false,
    documents: true
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scanningState === "scanning") {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 4);
      }, 500);
      
      const timeout = setTimeout(() => {
        setScanningState("recognized");
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
    
    if (scanningState === "recognized") {
      const timeout = setTimeout(() => {
        setScanningState("profileCreation");
      }, 2000);
      return () => clearTimeout(timeout);
    }
    
    if (scanningState === "profileCreation") {
      const timeout = setTimeout(() => {
        setScanningState("accessGranted");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [scanningState]);

  const startScan = () => {
    setScanningState("scanning");
    setAnimationStep(0);
  };

  const resetDemo = () => {
    setScanningState("idle");
    setAnimationStep(0);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {showNFC ? <Zap className="h-8 w-8 text-white" /> : <QrCode className="h-8 w-8 text-white" />}
        </div>
        <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-2">
          {showNFC ? "NFC Provider Access" : "QR Provider Access"}
        </h3>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Professional provider onboarding with privacy controls
        </p>
        
        {/* Branded Lanyard/Sticker Visualization */}
        <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] rounded-lg p-3 mt-4 text-white text-xs">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <Shield className="h-3 w-3" />
            <span className="font-semibold">ATD Provider Badge</span>
          </div>
          <div className="text-white/80">Official Access Credential</div>
        </div>
      </div>

      <div className="relative">
        {/* Phone Mockup */}
        <div 
          className={cn(
            "bg-black rounded-3xl p-3 mx-auto max-w-[200px] transition-all duration-300 cursor-pointer",
            isZoomed && "scale-110 z-10 relative",
            isMobile && "active:scale-105"
          )}
          onClick={isMobile ? toggleZoom : undefined}
        >
          <div className="bg-white rounded-2xl p-4 aspect-[9/16] relative overflow-hidden">
            {scanningState === "idle" && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-mobile-fade-in">
                <Smartphone className="h-12 w-12 text-gray-400 mb-4 animate-bounce-subtle" />
                <div className="text-sm font-medium text-gray-600 mb-2">Ready to Scan</div>
                <div className="text-xs text-gray-500">Point camera at QR code</div>
                {isMobile && (
                  <div className="text-xs text-blue-500 mt-2">Tap to zoom</div>
                )}
              </div>
            )}

            {scanningState === "scanning" && (
              <div className="h-full flex flex-col items-center justify-center animate-mobile-fade-in">
                {/* Scanning Animation */}
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
            )}

            {scanningState === "recognized" && (
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
            )}

            {scanningState === "profileCreation" && (
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
            )}

            {scanningState === "accessGranted" && (
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
            )}
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mt-6">
          <div className={cn(
            "flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm transition-all duration-300",
            ["scanning", "recognized", "profileCreation", "accessGranted"].includes(scanningState) ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
          )}>
            <Wifi className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Connected</span>
          </div>
          <div className={cn(
            "flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm transition-all duration-300",
            scanningState === "accessGranted" ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
          )}>
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 mt-8">
        {scanningState === "idle" && (
          <div className="flex items-center space-x-3">
            <TouchRipple>
              <Button onClick={startScan} className="px-4 sm:px-6 mobile-button-press">
                {showNFC ? <Zap className="h-4 w-4 mr-2" /> : <QrCode className="h-4 w-4 mr-2" />}
                {showNFC ? "Start NFC Demo" : "Start QR Demo"}
              </Button>
            </TouchRipple>
            <TouchRipple>
              <Button 
                variant="outline" 
                onClick={() => setShowNFC(!showNFC)} 
                className="px-3 mobile-button-press"
              >
                {showNFC ? <QrCode className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
              </Button>
            </TouchRipple>
          </div>
        )}
        {["scanning", "recognized", "profileCreation", "accessGranted"].includes(scanningState) && (
          <TouchRipple>
            <Button variant="outline" onClick={resetDemo} className="px-4 sm:px-6 mobile-button-press">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Demo
            </Button>
          </TouchRipple>
        )}
      </div>
    </div>
  );
};

export default QRScanDemo;
