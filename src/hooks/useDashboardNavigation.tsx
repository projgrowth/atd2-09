import { useState } from 'react';
import { ViewKey } from '@/components/dashboard/DashboardViews';

export const useDashboardNavigation = (isProviderView: boolean) => {
  const [currentView, setCurrentView] = useState<ViewKey>("overview");

  const viewKeys: ViewKey[] = isProviderView 
    ? ["overview", "jobs", "actions", "notifications", "schedule"] 
    : ["overview", "properties", "actions", "notifications", "schedule", "request"];
  
  const currentIndex = viewKeys.indexOf(currentView);

  const navigateToView = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentView(viewKeys[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < viewKeys.length - 1) {
      setCurrentView(viewKeys[currentIndex + 1]);
    }
  };

  return {
    currentView,
    setCurrentView,
    viewKeys,
    currentIndex,
    navigateToView
  };
};