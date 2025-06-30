
import { useState, useEffect } from "react";
import { QrCode, Smartphone, CheckCircle, Wifi, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "./TouchRipple";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const QRScanDemo = () => {
  const [scanningState, setScanningState] = useState("idle"); // idle, scanning, success
  const [animationStep, setAnimationStep] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scanningState === "scanning") {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 4);
      }, 500);
      
      const timeout = setTimeout(() => {
        setScanningState("success");
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
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
          <QrCode className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-2">
          QR Code Access
        </h3>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Instant provider access to your home's information
        </p>
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

            {scanningState === "success" && (
              <div className="h-full flex flex-col items-center justify-center text-center animate-mobile-fade-in">
                <div className="bg-green-100 rounded-full p-3 mb-4 animate-success-bounce">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-sm font-medium text-green-600 mb-2">Access Granted!</div>
                <div className="bg-green-50 rounded-lg p-3 w-full text-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <Home className="h-3 w-3 text-green-600" />
                    <span className="text-green-700 font-medium">123 Oak Street</span>
                  </div>
                  <div className="text-green-600 text-left space-y-1">
                    <div>• Job: Kitchen Repair</div>
                    <div>• Contact: Sarah M.</div>
                    <div>• Documents: 3 files</div>
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
            scanningState === "scanning" ? 'bg-blue-100 text-blue-700 animate-pulse' : 'bg-gray-100 text-gray-500'
          )}>
            <Wifi className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Connected</span>
          </div>
          <div className={cn(
            "flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm transition-all duration-300",
            scanningState === "success" ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
          )}>
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Verified</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-3 mt-8">
        {scanningState === "idle" && (
          <TouchRipple>
            <Button onClick={startScan} className="px-4 sm:px-6 mobile-button-press">
              <QrCode className="h-4 w-4 mr-2" />
              Start Scan Demo
            </Button>
          </TouchRipple>
        )}
        {(scanningState === "scanning" || scanningState === "success") && (
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
