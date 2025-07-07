import { QrCode, Zap, Shield } from "lucide-react";

interface QRHeaderProps {
  showNFC: boolean;
}

const QRHeader = ({ showNFC }: QRHeaderProps) => {
  return (
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
  );
};

export default QRHeader;