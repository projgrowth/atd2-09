import React from 'react';
import { CheckCircle, Circle, TrendingUp, Trophy, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useDemoContext } from '@/contexts/DemoContext';
import { useDemoFlow } from '@/hooks/useDemoFlow';
import { cn } from '@/lib/utils';

const DemoProgress = () => {
  const { state } = useDemoContext();
  const { completionPercentage, hasCompletedWorkflow, currentPath } = useDemoFlow();
  const { demoProgress, completedScenarios } = state;

  const scenarioProgress = Object.values(completedScenarios).filter(Boolean).length;
  const totalScenarios = Object.keys(completedScenarios).length;

  const achievements = [
    {
      id: 'explorer',
      title: 'Explorer',
      description: 'Visited 3+ demos',
      condition: demoProgress.length >= 3,
      icon: Target
    },
    {
      id: 'completionist',
      title: 'Completionist',
      description: 'Finished all scenarios',
      condition: scenarioProgress === totalScenarios,
      icon: Trophy
    },
    {
      id: 'workflow_master',
      title: 'Workflow Master',
      description: 'Completed full workflow',
      condition: hasCompletedWorkflow,
      icon: TrendingUp
    }
  ];

  const earnedAchievements = achievements.filter(a => a.condition);
  const nextAchievement = achievements.find(a => !a.condition);

  return (
    <div className="space-y-4">
      {/* Overall Progress */}
      <div className="bg-white rounded-lg p-4 border border-[hsl(var(--atd-border-light))]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[hsl(var(--atd-text))]">
            Demo Progress
          </h3>
          <Badge variant="outline" className="text-xs">
            {demoProgress.length}/5 Demos
          </Badge>
        </div>
        
        <Progress value={completionPercentage} className="h-2 mb-2" />
        
        <div className="flex justify-between text-xs text-[hsl(var(--atd-text-muted))]">
          <span>{completionPercentage}% Complete</span>
          <span>{5 - demoProgress.length} remaining</span>
        </div>
      </div>

      {/* Scenario Progress */}
      <div className="bg-white rounded-lg p-4 border border-[hsl(var(--atd-border-light))]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-[hsl(var(--atd-text))]">
            Scenarios Completed
          </h3>
          <Badge variant="outline" className="text-xs">
            {scenarioProgress}/{totalScenarios}
          </Badge>
        </div>
        
        <div className="space-y-2">
          {Object.entries(completedScenarios).map(([scenario, completed]) => (
            <div key={scenario} className="flex items-center space-x-3">
              {completed ? (
                <CheckCircle className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
              ) : (
                <Circle className="h-4 w-4 text-[hsl(var(--atd-text-muted))]" />
              )}
              <span className={cn(
                "text-sm",
                completed 
                  ? "text-[hsl(var(--atd-text))] font-medium" 
                  : "text-[hsl(var(--atd-text-muted))]"
              )}>
                {scenario.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Path Visualization */}
      {currentPath.length > 1 && (
        <div className="bg-white rounded-lg p-4 border border-[hsl(var(--atd-border-light))]">
          <h3 className="text-sm font-semibold text-[hsl(var(--atd-text))] mb-3">
            Your Journey
          </h3>
          <div className="flex items-center space-x-2 overflow-x-auto">
            {currentPath.map((demo, index) => (
              <React.Fragment key={demo}>
                <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",
                    index === currentPath.length - 1
                      ? "bg-[hsl(var(--atd-primary))] text-white"
                      : "bg-[hsl(var(--atd-accent))] text-white"
                  )}>
                    {index + 1}
                  </div>
                  <span className="text-xs text-[hsl(var(--atd-text-muted))] capitalize">
                    {demo}
                  </span>
                </div>
                {index < currentPath.length - 1 && (
                  <div className="w-4 h-0.5 bg-[hsl(var(--atd-border-medium))] flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {earnedAchievements.length > 0 && (
        <div className="bg-gradient-to-r from-[hsl(var(--atd-accent))]/5 to-[hsl(var(--atd-primary))]/5 rounded-lg p-4 border border-[hsl(var(--atd-border-light))]">
          <h3 className="text-sm font-semibold text-[hsl(var(--atd-text))] mb-3 flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
            <span>Achievements Unlocked</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {earnedAchievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <Badge
                  key={achievement.id}
                  className="bg-[hsl(var(--atd-accent))] text-white flex items-center space-x-1"
                >
                  <IconComponent className="h-3 w-3" />
                  <span>{achievement.title}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* Next Achievement */}
      {nextAchievement && (
        <div className="bg-[hsl(var(--atd-surface))] rounded-lg p-3 border border-[hsl(var(--atd-border-light))]">
          <div className="flex items-center space-x-2">
            <nextAchievement.icon className="h-4 w-4 text-[hsl(var(--atd-text-muted))]" />
            <div>
              <p className="text-xs font-medium text-[hsl(var(--atd-text))]">
                Next: {nextAchievement.title}
              </p>
              <p className="text-xs text-[hsl(var(--atd-text-muted))]">
                {nextAchievement.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoProgress;