import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  isZoomed: boolean;
  onToggleZoom: () => void;
}

const PhoneMockup = ({ children, isZoomed, onToggleZoom }: PhoneMockupProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={cn(
        "bg-black rounded-3xl p-3 mx-auto max-w-[200px] transition-all duration-300 cursor-pointer",
        isZoomed && "scale-110 z-10 relative",
        isMobile && "active:scale-105"
      )}
      onClick={isMobile ? onToggleZoom : undefined}
    >
      <div className="bg-white rounded-2xl p-4 aspect-[9/16] relative overflow-hidden">
        {children}
        {isMobile && (
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <div className="text-xs text-blue-500">Tap to zoom</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;