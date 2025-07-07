
import { useState, useEffect } from "react";
import QRHeader from "./qr-scan/QRHeader";
import PhoneMockup from "./qr-scan/PhoneMockup";
import ScanningStates from "./qr-scan/ScanningStates";
import StatusIndicators from "./qr-scan/StatusIndicators";
import QRControls from "./qr-scan/QRControls";

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
      <QRHeader showNFC={showNFC} />

      <div className="relative">
        <PhoneMockup isZoomed={isZoomed} onToggleZoom={toggleZoom}>
          <ScanningStates 
            scanningState={scanningState}
            animationStep={animationStep}
            historyVisible={historyVisible}
          />
        </PhoneMockup>

        <StatusIndicators scanningState={scanningState} />
      </div>

      <QRControls
        scanningState={scanningState}
        showNFC={showNFC}
        onStartScan={startScan}
        onToggleNFC={() => setShowNFC(!showNFC)}
        onReset={resetDemo}
      />
    </div>
  );
};

export default QRScanDemo;
