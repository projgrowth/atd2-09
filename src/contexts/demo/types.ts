export interface DemoState {
  // Global demo state
  activeDemo: string;
  demoProgress: string[];
  
  // Demo completion tracking
  completedScenarios: {
    qrScanCompleted: boolean;
    ratingSubmitted: boolean;
    onboardingCompleted: boolean;
  };
  
  // Shared data between demos
  currentJob: {
    id: string;
    title: string;
    status: 'scheduled' | 'enroute' | 'onsite' | 'inprogress' | 'complete';
    providerId: string;
    propertyId: string;
    estimatedCost: number;
    actualCost?: number;
    progress: number;
    messages: Array<{
      id: string;
      sender: 'homeowner' | 'provider';
      message: string;
      timestamp: Date;
    }>;
    photos: Array<{
      id: string;
      url: string;
      description: string;
      timestamp: Date;
    }>;
  };
  
  // Property data
  selectedProperty: {
    id: string;
    name: string;
    address: string;
    alerts: number;
  };
  
  // Notifications
  notifications: Array<{
    id: string;
    type: 'message' | 'status' | 'alert' | 'payment';
    title: string;
    description: string;
    timestamp: Date;
    read: boolean;
  }>;
  
  // User perspective
  userType: 'homeowner' | 'provider';
}

export type DemoAction = 
  | { type: 'SET_ACTIVE_DEMO'; payload: string }
  | { type: 'ADD_DEMO_PROGRESS'; payload: string }
  | { type: 'UPDATE_JOB_STATUS'; payload: DemoState['currentJob']['status'] }
  | { type: 'UPDATE_JOB_PROGRESS'; payload: number }
  | { type: 'ADD_MESSAGE'; payload: Omit<DemoState['currentJob']['messages'][0], 'id' | 'timestamp'> }
  | { type: 'ADD_PHOTO'; payload: Omit<DemoState['currentJob']['photos'][0], 'id' | 'timestamp'> }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<DemoState['notifications'][0], 'id' | 'timestamp'> }
  | { type: 'TOGGLE_USER_TYPE' }
  | { type: 'RESET_DEMOS' }
  | { type: 'MARK_SCENARIO_COMPLETE'; payload: keyof DemoState['completedScenarios'] };

export interface DemoContextType {
  state: DemoState;
  dispatch: React.Dispatch<DemoAction>;
  actions: {
    setActiveDemo: (demo: string) => void;
    updateJobStatus: (status: DemoState['currentJob']['status']) => void;
    addMessage: (message: Omit<DemoState['currentJob']['messages'][0], 'id' | 'timestamp'>) => void;
    addPhoto: (photo: Omit<DemoState['currentJob']['photos'][0], 'id' | 'timestamp'>) => void;
    toggleUserType: () => void;
    resetDemos: () => void;
    markScenarioComplete: (scenario: keyof DemoState['completedScenarios']) => void;
  };
}