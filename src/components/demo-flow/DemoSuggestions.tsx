import React from 'react';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDemoContext } from '@/contexts/DemoContext';
import { useDemoFlow, DemoFlowSuggestion } from '@/hooks/useDemoFlow';
import { cn } from '@/lib/utils';

const DemoSuggestions = () => {
  const { actions } = useDemoContext();
  const { suggestions, hasCompletedWorkflow } = useDemoFlow();

  if (suggestions.length === 0 && !hasCompletedWorkflow) return null;

  const getPriorityColor = (priority: DemoFlowSuggestion['priority']) => {
    switch (priority) {
      case 'high': return 'bg-[hsl(var(--atd-accent))] text-white';
      case 'medium': return 'bg-[hsl(var(--atd-primary))] text-white';
      case 'low': return 'bg-[hsl(var(--atd-text-muted))] text-white';
    }
  };

  const getPriorityIcon = (priority: DemoFlowSuggestion['priority']) => {
    switch (priority) {
      case 'high': return <TrendingUp className="h-3 w-3" />;
      case 'medium': return <ArrowRight className="h-3 w-3" />;
      case 'low': return <Lightbulb className="h-3 w-3" />;
    }
  };

  return (
    <div className="mt-6 p-4 bg-[hsl(var(--atd-surface))] rounded-xl border border-[hsl(var(--atd-border-light))]">
      {hasCompletedWorkflow ? (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[hsl(var(--atd-accent))]/10 rounded-full mb-3">
            <TrendingUp className="h-6 w-6 text-[hsl(var(--atd-accent))]" />
          </div>
          <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
            Workflow Complete! 🎉
          </h3>
          <p className="text-sm text-[hsl(var(--atd-text-muted))] mb-4">
            You've experienced a complete ATD workflow. Ready to explore more?
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={actions.resetDemos}
            className="text-xs"
          >
            Start Fresh Journey
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-2 mb-3">
            <Lightbulb className="h-4 w-4 text-[hsl(var(--atd-accent))]" />
            <h3 className="text-sm font-semibold text-[hsl(var(--atd-text))]">
              Suggested Next Steps
            </h3>
          </div>
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="p-3 bg-white rounded-lg border border-[hsl(var(--atd-border-light))] hover:border-[hsl(var(--atd-border-medium))] transition-colors cursor-pointer"
                onClick={() => actions.setActiveDemo(suggestion.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-medium text-[hsl(var(--atd-text))]">
                        {suggestion.title}
                      </h4>
                      <Badge
                        className={cn(
                          "text-xs px-1.5 py-0.5 flex items-center space-x-1",
                          getPriorityColor(suggestion.priority)
                        )}
                      >
                        {getPriorityIcon(suggestion.priority)}
                        <span className="capitalize">{suggestion.priority}</span>
                      </Badge>
                    </div>
                    <p className="text-xs text-[hsl(var(--atd-text-muted))] mb-1">
                      {suggestion.description}
                    </p>
                    <p className="text-xs text-[hsl(var(--atd-text-light))] italic">
                      {suggestion.reason}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--atd-text-muted))] flex-shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DemoSuggestions;