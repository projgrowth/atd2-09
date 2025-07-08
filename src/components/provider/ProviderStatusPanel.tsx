import React from 'react';
import { MapPin, Clock, Battery, Signal, Navigation, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useJobTracker } from '@/hooks/useJobTracker';
import { cn } from '@/lib/utils';

const ProviderStatusPanel = () => {
  const { 
    trackerState, 
    currentJob, 
    startTracking, 
    stopTracking, 
    updateJobStatus,
    getTimeOnSite,
    isProvider 
  } = useJobTracker();

  if (!isProvider) return null;

  const statusColors = {
    'scheduled': 'bg-blue-100 text-blue-700 border-blue-200',
    'enroute': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'onsite': 'bg-purple-100 text-purple-700 border-purple-200',
    'inprogress': 'bg-orange-100 text-orange-700 border-orange-200',
    'complete': 'bg-green-100 text-green-700 border-green-200'
  };

  const nextActions = {
    'scheduled': () => updateJobStatus('enroute'),
    'enroute': () => updateJobStatus('onsite'),
    'onsite': () => updateJobStatus('inprogress'),
    'inprogress': () => updateJobStatus('complete'),
    'complete': null
  };

  const nextActionLabels = {
    'scheduled': 'Start Trip',
    'enroute': 'Arrive On Site',
    'onsite': 'Begin Work',
    'inprogress': 'Complete Job',
    'complete': null
  };

  return (
    <div className="bg-white rounded-lg border border-[hsl(var(--atd-border-light))] p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[hsl(var(--atd-text))]">Provider Status</h3>
        <Badge className={cn("text-xs", statusColors[currentJob.status as keyof typeof statusColors])}>
          {currentJob.status.charAt(0).toUpperCase() + currentJob.status.slice(1)}
        </Badge>
      </div>

      {/* Device Status */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center space-x-2">
          <Battery className={cn(
            "h-4 w-4",
            trackerState.batteryLevel > 50 ? "text-green-500" : 
            trackerState.batteryLevel > 20 ? "text-yellow-500" : "text-red-500"
          )} />
          <span className="text-sm text-[hsl(var(--atd-text-muted))]">
            {trackerState.batteryLevel.toFixed(0)}%
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Signal className="h-4 w-4 text-blue-500" />
          <span className="text-sm text-[hsl(var(--atd-text-muted))]">
            {trackerState.signalStrength}/5
          </span>
        </div>
      </div>

      {/* Location Info */}
      {trackerState.currentLocation && (
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Current Location</span>
          </div>
          <div className="text-xs text-blue-600 space-y-1">
            <div>{trackerState.currentLocation.address}</div>
            {trackerState.currentLocation.distance && (
              <div>Distance: {trackerState.currentLocation.distance}</div>
            )}
            {trackerState.currentLocation.eta && (
              <div>ETA: {trackerState.currentLocation.eta}</div>
            )}
          </div>
        </div>
      )}

      {/* Time on Site */}
      {getTimeOnSite() && (
        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Time on Site</span>
            <span className="text-sm text-purple-600">{getTimeOnSite()}</span>
          </div>
        </div>
      )}

      {/* GPS Tracking Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Navigation className={cn(
            "h-4 w-4",
            trackerState.isTracking ? "text-green-500" : "text-gray-400"
          )} />
          <span className="text-sm text-[hsl(var(--atd-text))]">GPS Tracking</span>
        </div>
        <Button
          variant={trackerState.isTracking ? "destructive" : "default"}
          size="sm"
          onClick={trackerState.isTracking ? stopTracking : startTracking}
          className="text-xs"
        >
          {trackerState.isTracking ? "Stop" : "Start"}
        </Button>
      </div>

      {/* Next Action */}
      {nextActions[currentJob.status as keyof typeof nextActions] && (
        <Button
          onClick={nextActions[currentJob.status as keyof typeof nextActions]!}
          className="w-full"
          variant="default"
        >
          <CheckCircle className="h-4 w-4 mr-2" />
          {nextActionLabels[currentJob.status as keyof typeof nextActionLabels]}
        </Button>
      )}

      {/* Last Update */}
      <div className="text-xs text-[hsl(var(--atd-text-muted))] text-center">
        Last updated: {trackerState.lastUpdate.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default ProviderStatusPanel;