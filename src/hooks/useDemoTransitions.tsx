import { useCallback, useEffect, useState } from 'react';

export interface TransitionConfig {
  duration?: number;
  showLoader?: boolean;
  showProgress?: boolean;
}

export const useDemoTransitions = (config: TransitionConfig = {}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingDemo, setPendingDemo] = useState<string | null>(null);
  const [fromDemo, setFromDemo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const {
    duration = 300,
    showLoader = true,
    showProgress = false
  } = config;

  const transitionToDemo = useCallback((
    demoId: string, 
    onComplete: (demoId: string) => void,
    currentDemo?: string
  ) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPendingDemo(demoId);
    setFromDemo(currentDemo || null);
    setProgress(0);

    // Progress animation if enabled
    if (showProgress) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / (duration / 50)); // Update every 50ms
        });
      }, 50);
    }

    // Fade out phase
    setTimeout(() => {
      onComplete(demoId);
      
      // Fade in phase
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingDemo(null);
        setFromDemo(null);
        setProgress(0);
      }, duration / 2);
    }, duration / 2);
  }, [isTransitioning, duration, showProgress]);

  const resetTransition = useCallback(() => {
    setIsTransitioning(false);
    setPendingDemo(null);
    setFromDemo(null);
    setProgress(0);
  }, []);

  return {
    isTransitioning,
    pendingDemo,
    fromDemo,
    progress,
    transitionToDemo,
    resetTransition
  };
};