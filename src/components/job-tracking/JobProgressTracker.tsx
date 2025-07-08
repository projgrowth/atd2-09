import { useState, useEffect } from "react";
import { MapPin, Clock, CheckCircle, Navigation, Smartphone, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useDemoContext } from "@/contexts/DemoContext";
import { useRealtimeSync } from "@/hooks/useRealtimeSync";
import { cn } from "@/lib/utils";

interface JobStatus {
  id: string;
  label: string;
  status: "completed" | "current" | "upcoming";
  timestamp?: string;
  location?: string;
  estimatedTime?: string;
}

interface JobProgressTrackerProps {
  currentStatusId: string;
  onStatusChange?: (statusId: string) => void;
  isLive?: boolean;
}

const JobProgressTracker = ({ currentStatusId, onStatusChange, isLive = false }: JobProgressTrackerProps) => {
  const { state } = useDemoContext();
  const { syncProviderAction } = useRealtimeSync();
  const { currentJob, userType } = state;
  
  const [statuses, setStatuses] = useState<JobStatus[]>([
    { id: "scheduled", label: "Job Assigned", status: "completed", timestamp: "8:00 AM", estimatedTime: "5 min" },
    { id: "enroute", label: "En Route", status: "completed", timestamp: "9:30 AM", location: "2.3 miles away", estimatedTime: "15 min" },
    { id: "onsite", label: "On Site", status: "current", timestamp: "10:15 AM", estimatedTime: "45 min" },
    { id: "inprogress", label: "Work In Progress", status: "upcoming", estimatedTime: "90 min" },
    { id: "complete", label: "Job Complete", status: "upcoming", estimatedTime: "5 min" }
  ]);

  // Update statuses based on actual job data
  useEffect(() => {
    setStatuses(prev => prev.map(status => {
      const currentIndex = prev.findIndex(s => s.id === currentStatusId);
      const statusIndex = prev.findIndex(s => s.id === status.id);
      
      if (statusIndex < currentIndex) {
        return { ...status, status: "completed" as const };
      } else if (statusIndex === currentIndex) {
        return { ...status, status: "current" as const };
      } else {
        return { ...status, status: "upcoming" as const };
      }
    }));
  }, [currentStatusId]);

  const currentIndex = statuses.findIndex(s => s.id === currentStatusId);
  const progress = currentJob.progress;

  // Sync status changes across demos
  const handleStatusChange = (statusId: string) => {
    onStatusChange?.(statusId);
    syncProviderAction('status_updated', { status: statusId });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-[hsl(var(--atd-text))]">Job Progress</h4>
        <div className="flex items-center space-x-2">
          {isLive && (
            <div className="flex items-center space-x-2 text-xs text-green-600">
              <Zap className="w-3 h-3" />
              <span>Live</span>
            </div>
          )}
          <Badge variant="outline" className="text-xs">
            {progress}% Complete
          </Badge>
        </div>
      </div>

      <Progress value={progress} className="h-2 mb-4" />

      <div className="space-y-3">
        {statuses.map((status, index) => {
          const isCurrent = status.id === currentStatusId;
          const isCompleted = index < currentIndex || (index === currentIndex && status.status === "completed");
          const isUpcoming = index > currentIndex;

          return (
            <div
              key={status.id}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg transition-all duration-300",
                isCurrent && "bg-blue-50 border border-blue-200",
                isCompleted && "bg-green-50",
                isUpcoming && "bg-gray-50"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                isCompleted && "bg-green-500",
                isCurrent && "bg-blue-500 animate-pulse",
                isUpcoming && "bg-gray-300"
              )}>
                {isCompleted ? (
                  <CheckCircle className="h-4 w-4 text-white" />
                ) : isCurrent ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : (
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                )}
              </div>

              <div className="flex-1">
                <div className={cn(
                  "font-medium text-sm",
                  isCompleted && "text-green-700",
                  isCurrent && "text-blue-700",
                  isUpcoming && "text-gray-500"
                )}>
                  {status.label}
                </div>
                {status.timestamp && (
                  <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{status.timestamp}</span>
                    {status.location && (
                      <>
                        <MapPin className="h-3 w-3" />
                        <span>{status.location}</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {isCurrent && isLive && (
                <Navigation className="h-4 w-4 text-blue-500 animate-bounce" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobProgressTracker;