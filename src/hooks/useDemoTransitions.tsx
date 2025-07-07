import { useEffect, useState } from 'react';

export const useDemoTransitions = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingDemo, setPendingDemo] = useState<string | null>(null);

  const transitionToDemo = (demoId: string, onComplete: (demoId: string) => void) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPendingDemo(demoId);

    // Add fade out animation
    setTimeout(() => {
      onComplete(demoId);
      
      // Add fade in animation
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingDemo(null);
      }, 150);
    }, 150);
  };

  return {
    isTransitioning,
    pendingDemo,
    transitionToDemo
  };
};