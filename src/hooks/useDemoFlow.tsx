import { useCallback, useEffect, useState, useMemo } from 'react';
import { useDemoContext } from '@/contexts/DemoContext';

export interface DemoFlowSuggestion {
  id: string;
  title: string;
  description: string;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

export const useDemoFlow = () => {
  const { state } = useDemoContext();
  const { activeDemo, demoProgress, completedScenarios } = state;
  const [suggestions, setSuggestions] = useState<DemoFlowSuggestion[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  // Define logical demo flow paths
  const demoFlows = {
    newUser: ['qrscan', 'dashboard', 'ratings'],
    provider: ['pocketoffice', 'qrscan', 'ratings'],
    homeowner: ['dashboard', 'qrscan', 'journey', 'ratings'],
    complete: ['dashboard', 'pocketoffice', 'qrscan', 'journey', 'ratings']
  };

  // Generate smart suggestions based on current state
  const generateSuggestions = useCallback(() => {
    const newSuggestions: DemoFlowSuggestion[] = [];
    const unvisited = Object.keys({
      dashboard: true,
      pocketoffice: true,
      qrscan: true,
      journey: true,
      ratings: true
    }).filter(demo => !demoProgress.includes(demo));

    // High priority suggestions based on current demo
    switch (activeDemo) {
      case 'dashboard':
        if (!demoProgress.includes('qrscan')) {
          newSuggestions.push({
            id: 'qrscan',
            title: 'QR Code Access',
            description: 'See how providers gain secure access',
            reason: 'Experience the provider perspective after seeing the homeowner dashboard',
            priority: 'high'
          });
        }
        break;

      case 'qrscan':
        if (completedScenarios.qrScanCompleted && !demoProgress.includes('pocketoffice')) {
          newSuggestions.push({
            id: 'pocketoffice',
            title: 'PocketOffice Mobile',
            description: 'Follow the job through provider tools',
            reason: 'Continue the workflow with mobile job management',
            priority: 'high'
          });
        }
        break;

      case 'pocketoffice':
        if (!demoProgress.includes('ratings')) {
          newSuggestions.push({
            id: 'ratings',
            title: 'Rating System',
            description: 'Complete the job with ratings',
            reason: 'Finish the complete job workflow',
            priority: 'high'
          });
        }
        break;

      case 'ratings':
        if (!demoProgress.includes('journey')) {
          newSuggestions.push({
            id: 'journey',
            title: 'User Journeys',
            description: 'Explore different user experiences',
            reason: 'Discover how different users interact with ATD',
            priority: 'medium'
          });
        }
        break;
    }

    // Add medium priority suggestions for unvisited demos
    unvisited.forEach(demo => {
      if (!newSuggestions.find(s => s.id === demo)) {
        const demoInfo = {
          dashboard: { title: 'Interactive Dashboard', description: 'Explore homeowner controls' },
          pocketoffice: { title: 'PocketOffice Mobile', description: 'See provider mobile tools' },
          qrscan: { title: 'QR Code Access', description: 'Watch instant access system' },
          journey: { title: 'User Journeys', description: 'Compare user experiences' },
          ratings: { title: 'Rating System', description: 'Experience accountability ratings' }
        }[demo];

        if (demoInfo) {
          newSuggestions.push({
            id: demo,
            title: demoInfo.title,
            description: demoInfo.description,
            reason: 'Explore more ATD features',
            priority: 'low'
          });
        }
      }
    });

    setSuggestions(newSuggestions.slice(0, 3)); // Limit to 3 suggestions
  }, [activeDemo, demoProgress, completedScenarios]);

  // Update current path
  useEffect(() => {
    if (demoProgress.length > 0) {
      setCurrentPath([...demoProgress]);
    }
  }, [demoProgress]);

  // Generate suggestions when state changes
  useEffect(() => {
    generateSuggestions();
  }, [generateSuggestions]);

  // Calculate completion percentage
  const completionPercentage = Math.round((demoProgress.length / 5) * 100);

  // Check if user has completed a full workflow
  const hasCompletedWorkflow = useMemo(() => {
    const workflows = [
      ['qrscan', 'pocketoffice', 'ratings'], // Provider workflow
      ['dashboard', 'qrscan', 'ratings'], // Homeowner workflow
      ['journey', 'dashboard', 'ratings'] // Explorer workflow
    ];

    return workflows.some(workflow => 
      workflow.every(demo => demoProgress.includes(demo))
    );
  }, [demoProgress]);

  return {
    suggestions,
    currentPath,
    completionPercentage,
    hasCompletedWorkflow,
    unvisitedDemos: Object.keys({
      dashboard: true,
      pocketoffice: true,
      qrscan: true,
      journey: true,
      ratings: true
    }).filter(demo => !demoProgress.includes(demo))
  };
};