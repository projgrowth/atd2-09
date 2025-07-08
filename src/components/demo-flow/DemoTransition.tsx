import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoTransitionProps {
  isTransitioning: boolean;
  fromDemo?: string;
  toDemo?: string;
  onComplete?: () => void;
}

const DemoTransition: React.FC<DemoTransitionProps> = ({
  isTransitioning,
  fromDemo,
  toDemo,
  onComplete
}) => {
  const [phase, setPhase] = useState<'loading' | 'success' | 'complete'>('loading');

  const demoDisplayNames = {
    dashboard: 'Interactive Dashboard',
    pocketoffice: 'PocketOffice Mobile',
    qrscan: 'QR Code Access',
    journey: 'User Journeys',
    ratings: 'Rating System'
  };

  useEffect(() => {
    if (isTransitioning) {
      setPhase('loading');
      
      // Simulate transition phases
      const loadingTimer = setTimeout(() => {
        setPhase('success');
      }, 1000);

      const completeTimer = setTimeout(() => {
        setPhase('complete');
        onComplete?.();
      }, 1500);

      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isTransitioning, onComplete]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm mx-4 border border-[hsl(var(--atd-border-light))]">
        <div className="text-center">
          {/* Loading Phase */}
          {phase === 'loading' && (
            <>
              <div className="mb-4">
                <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--atd-primary))] mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                Loading Demo
              </h3>
              {fromDemo && toDemo && (
                <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                  Transitioning from {demoDisplayNames[fromDemo as keyof typeof demoDisplayNames]} to{' '}
                  {demoDisplayNames[toDemo as keyof typeof demoDisplayNames]}
                </p>
              )}
            </>
          )}

          {/* Success Phase */}
          {phase === 'success' && (
            <>
              <div className="mb-4">
                <div className="w-8 h-8 bg-[hsl(var(--atd-accent))] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                Demo Ready!
              </h3>
              {toDemo && (
                <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                  Welcome to {demoDisplayNames[toDemo as keyof typeof demoDisplayNames]}
                </p>
              )}
            </>
          )}

          {/* Loading Bar */}
          <div className="mt-4">
            <div className="w-full bg-[hsl(var(--atd-border-light))] rounded-full h-1">
              <div
                className={cn(
                  "h-1 rounded-full transition-all duration-1000 ease-out",
                  phase === 'loading' && "w-1/2 bg-[hsl(var(--atd-primary))]",
                  phase === 'success' && "w-full bg-[hsl(var(--atd-accent))]",
                  phase === 'complete' && "w-full bg-[hsl(var(--atd-accent))]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoTransition;