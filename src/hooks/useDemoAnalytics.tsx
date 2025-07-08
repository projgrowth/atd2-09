import { useCallback, useEffect, useRef, useState } from 'react';
import { useDemoContext } from '@/contexts/DemoContext';

export interface DemoInteraction {
  id: string;
  type: 'click' | 'hover' | 'scroll' | 'completion';
  target: string;
  timestamp: Date;
  demoId: string;
  metadata?: Record<string, any>;
}

export interface DemoSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  interactions: DemoInteraction[];
  demoPath: string[];
  completedScenarios: string[];
  userType: 'homeowner' | 'provider';
}

export const useDemoAnalytics = () => {
  const { state } = useDemoContext();
  const [session, setSession] = useState<DemoSession | null>(null);
  const [interactions, setInteractions] = useState<DemoInteraction[]>([]);
  const sessionStartTime = useRef<Date | null>(null);

  // Initialize session
  useEffect(() => {
    if (!session) {
      const newSession: DemoSession = {
        id: `session-${Date.now()}`,
        startTime: new Date(),
        interactions: [],
        demoPath: [state.activeDemo],
        completedScenarios: [],
        userType: state.userType
      };
      setSession(newSession);
      sessionStartTime.current = new Date();
    }
  }, [session, state.activeDemo, state.userType]);

  // Track demo interactions
  const trackInteraction = useCallback((
    type: DemoInteraction['type'],
    target: string,
    metadata?: Record<string, any>
  ) => {
    const interaction: DemoInteraction = {
      id: `interaction-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      target,
      timestamp: new Date(),
      demoId: state.activeDemo,
      metadata
    };

    setInteractions(prev => [...prev, interaction]);
    
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        interactions: [...prev.interactions, interaction]
      } : prev);
    }
  }, [state.activeDemo, session]);

  // Track demo navigation
  useEffect(() => {
    if (session && !session.demoPath.includes(state.activeDemo)) {
      setSession(prev => prev ? {
        ...prev,
        demoPath: [...prev.demoPath, state.activeDemo]
      } : prev);
      
      trackInteraction('click', `demo-${state.activeDemo}`, {
        previousDemo: session.demoPath[session.demoPath.length - 1],
        pathLength: session.demoPath.length + 1
      });
    }
  }, [state.activeDemo, session, trackInteraction]);

  // Track scenario completions
  useEffect(() => {
    if (session) {
      const newCompletions = Object.entries(state.completedScenarios)
        .filter(([, completed]) => completed)
        .map(([scenario]) => scenario)
        .filter(scenario => !session.completedScenarios.includes(scenario));

      if (newCompletions.length > 0) {
        newCompletions.forEach(scenario => {
          trackInteraction('completion', `scenario-${scenario}`, {
            timeToComplete: Date.now() - sessionStartTime.current?.getTime(),
            demoContext: state.activeDemo
          });
        });

        setSession(prev => prev ? {
          ...prev,
          completedScenarios: [...prev.completedScenarios, ...newCompletions]
        } : prev);
      }
    }
  }, [state.completedScenarios, session, trackInteraction, state.activeDemo]);

  // Calculate session metrics
  const getSessionMetrics = useCallback(() => {
    if (!session || !sessionStartTime.current) return null;

    const now = new Date();
    const duration = now.getTime() - sessionStartTime.current.getTime();
    
    return {
      duration: Math.round(duration / 1000), // seconds
      demosVisited: session.demoPath.length,
      interactions: session.interactions.length,
      completedScenarios: session.completedScenarios.length,
      averageTimePerDemo: Math.round(duration / session.demoPath.length / 1000),
      interactionRate: Math.round(session.interactions.length / (duration / 60000)), // per minute
      completionRate: (session.completedScenarios.length / 3) * 100 // 3 main scenarios
    };
  }, [session]);

  // Get popular interaction targets
  const getPopularTargets = useCallback(() => {
    const targetCounts = interactions.reduce((acc, interaction) => {
      acc[interaction.target] = (acc[interaction.target] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(targetCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([target, count]) => ({ target, count }));
  }, [interactions]);

  // End session
  const endSession = useCallback(() => {
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        endTime: new Date()
      } : prev);
    }
  }, [session]);

  return {
    session,
    trackInteraction,
    getSessionMetrics,
    getPopularTargets,
    endSession,
    interactions
  };
};