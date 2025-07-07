import { Wifi, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusIndicatorsProps {
  scanningState: string;
}

const StatusIndicators = ({ scanningState }: StatusIndicatorsProps) => {
  return (
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
  );
};

export default StatusIndicators;