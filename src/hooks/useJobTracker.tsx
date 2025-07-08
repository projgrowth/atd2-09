import { useCallback, useEffect, useState } from 'react';
import { useDemoContext } from '@/contexts/DemoContext';
import { useDemoAnalytics } from './useDemoAnalytics';

export interface JobLocation {
  latitude: number;
  longitude: number;
  address: string;
  distance?: string;
  eta?: string;
}

export interface JobTrackerState {
  currentLocation: JobLocation | null;
  isTracking: boolean;
  batteryLevel: number;
  signalStrength: number;
  lastUpdate: Date;
}

export const useJobTracker = () => {
  const { state, actions } = useDemoContext();
  const { trackInteraction } = useDemoAnalytics();
  const { currentJob, userType } = state;
  
  const [trackerState, setTrackerState] = useState<JobTrackerState>({
    currentLocation: null,
    isTracking: false,
    batteryLevel: 85,
    signalStrength: 4,
    lastUpdate: new Date()
  });

  // Simulate GPS tracking for providers
  useEffect(() => {
    if (userType === 'provider' && trackerState.isTracking) {
      const interval = setInterval(() => {
        setTrackerState(prev => ({
          ...prev,
          batteryLevel: Math.max(20, prev.batteryLevel - 0.1),
          lastUpdate: new Date(),
          currentLocation: {
            latitude: 40.7589 + (Math.random() - 0.5) * 0.001,
            longitude: -73.9851 + (Math.random() - 0.5) * 0.001,
            address: '123 Oak Street',
            distance: `${(0.1 + Math.random() * 0.2).toFixed(1)} mi`,
            eta: `${Math.floor(Math.random() * 10 + 5)} min`
          }
        }));
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [userType, trackerState.isTracking]);

  // Auto-progress job based on location and time
  useEffect(() => {
    if (userType === 'provider' && trackerState.isTracking) {
      const progressTimer = setTimeout(() => {
        const statusProgression = {
          'scheduled': 'enroute',
          'enroute': 'onsite',
          'onsite': 'inprogress',
          'inprogress': 'complete'
        };
        
        const nextStatus = statusProgression[currentJob.status as keyof typeof statusProgression];
        if (nextStatus) {
          actions.updateJobStatus(nextStatus as any);
          trackInteraction('completion', 'job_status_auto_updated', { 
            from: currentJob.status, 
            to: nextStatus,
            trigger: 'location_based'
          });
        }
      }, 15000); // Auto-advance after 15 seconds

      return () => clearTimeout(progressTimer);
    }
  }, [currentJob.status, userType, trackerState.isTracking, actions, trackInteraction]);

  const startTracking = useCallback(() => {
    setTrackerState(prev => ({ ...prev, isTracking: true }));
    trackInteraction('click', 'gps_tracking_started', { jobId: currentJob.id });
  }, [currentJob.id, trackInteraction]);

  const stopTracking = useCallback(() => {
    setTrackerState(prev => ({ ...prev, isTracking: false }));
    trackInteraction('click', 'gps_tracking_stopped', { jobId: currentJob.id });
  }, [currentJob.id, trackInteraction]);

  const updateJobStatus = useCallback((status: string, location?: JobLocation) => {
    actions.updateJobStatus(status as any);
    
    if (location) {
      setTrackerState(prev => ({
        ...prev,
        currentLocation: location,
        lastUpdate: new Date()
      }));
    }
    
    trackInteraction('click', 'job_status_manual_update', { 
      status, 
      location: location?.address,
      jobId: currentJob.id 
    });
  }, [actions, currentJob.id, trackInteraction]);

  const getTimeOnSite = useCallback(() => {
    if (currentJob.status === 'onsite' || currentJob.status === 'inprogress') {
      const minutes = Math.floor(Math.random() * 45 + 15);
      return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
    }
    return null;
  }, [currentJob.status]);

  return {
    trackerState,
    currentJob,
    userType,
    startTracking,
    stopTracking,
    updateJobStatus,
    getTimeOnSite,
    isProvider: userType === 'provider'
  };
};