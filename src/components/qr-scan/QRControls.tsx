import { QrCode, Zap, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "../TouchRipple";

interface QRControlsProps {
  scanningState: string;
  showNFC: boolean;
  onStartScan: () => void;
  onToggleNFC: () => void;
  onReset: () => void;
}

const QRControls = ({ scanningState, showNFC, onStartScan, onToggleNFC, onReset }: QRControlsProps) => {
  return (
    <div className="flex flex-col items-center space-y-3 mt-8">
      {scanningState === "idle" && (
        <div className="flex items-center space-x-3">
          <TouchRipple>
            <Button onClick={onStartScan} className="px-4 sm:px-6 mobile-button-press">
              {showNFC ? <Zap className="h-4 w-4 mr-2" /> : <QrCode className="h-4 w-4 mr-2" />}
              {showNFC ? "Start NFC Demo" : "Start QR Demo"}
            </Button>
          </TouchRipple>
          <TouchRipple>
            <Button 
              variant="outline" 
              onClick={onToggleNFC} 
              className="px-3 mobile-button-press"
            >
              {showNFC ? <QrCode className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
            </Button>
          </TouchRipple>
        </div>
      )}
      {["scanning", "recognized", "profileCreation", "accessGranted"].includes(scanningState) && (
        <TouchRipple>
          <Button variant="outline" onClick={onReset} className="px-4 sm:px-6 mobile-button-press">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Demo
          </Button>
        </TouchRipple>
      )}
    </div>
  );
};

export default QRControls;