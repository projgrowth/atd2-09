import React, { createContext, useContext, useReducer, ReactNode } from 'react';

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

type DemoAction = 
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

const initialState: DemoState = {
  activeDemo: 'dashboard',
  demoProgress: [],
  completedScenarios: {
    qrScanCompleted: false,
    ratingSubmitted: false,
    onboardingCompleted: false
  },
  currentJob: {
    id: 'job-001',
    title: 'HVAC Maintenance',
    status: 'onsite',
    providerId: 'provider-001',
    propertyId: 'prop1',
    estimatedCost: 240,
    progress: 65,
    messages: [
      {
        id: 'msg-1',
        sender: 'provider',
        message: 'Arrived on site. Starting system inspection.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
      }
    ],
    photos: []
  },
  selectedProperty: {
    id: 'prop1',
    name: 'Main Residence',
    address: '123 Oak Street',
    alerts: 1
  },
  notifications: [
    {
      id: 'notif-1',
      type: 'status',
      title: 'Provider On Site',
      description: 'Mike from HVAC Services has arrived',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false
    }
  ],
  userType: 'homeowner'
};

function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SET_ACTIVE_DEMO':
      return {
        ...state,
        activeDemo: action.payload,
        demoProgress: state.demoProgress.includes(action.payload) 
          ? state.demoProgress 
          : [...state.demoProgress, action.payload]
      };
      
    case 'ADD_DEMO_PROGRESS':
      return {
        ...state,
        demoProgress: state.demoProgress.includes(action.payload)
          ? state.demoProgress
          : [...state.demoProgress, action.payload]
      };
      
    case 'UPDATE_JOB_STATUS':
      const statusProgressMap = {
        'scheduled': 0,
        'enroute': 25,
        'onsite': 50,
        'inprogress': 75,
        'complete': 100
      };
      
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          status: action.payload,
          progress: statusProgressMap[action.payload] || state.currentJob.progress
        },
        notifications: [
          {
            id: `notif-${Date.now()}`,
            type: 'status',
            title: 'Job Status Updated',
            description: `Status changed to ${action.payload}`,
            timestamp: new Date(),
            read: false
          },
          ...state.notifications
        ]
      };
      
    case 'UPDATE_JOB_PROGRESS':
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          progress: action.payload
        }
      };
      
    case 'ADD_MESSAGE':
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          messages: [
            ...state.currentJob.messages,
            {
              id: `msg-${Date.now()}`,
              timestamp: new Date(),
              ...action.payload
            }
          ]
        },
        notifications: [
          {
            id: `notif-${Date.now()}`,
            type: 'message',
            title: 'New Message',
            description: `Message from ${action.payload.sender}`,
            timestamp: new Date(),
            read: false
          },
          ...state.notifications
        ]
      };
      
    case 'ADD_PHOTO':
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          photos: [
            ...state.currentJob.photos,
            {
              id: `photo-${Date.now()}`,
              timestamp: new Date(),
              ...action.payload
            }
          ]
        },
        notifications: [
          {
            id: `notif-${Date.now()}`,
            type: 'status',
            title: 'Photo Uploaded',
            description: action.payload.description,
            timestamp: new Date(),
            read: false
          },
          ...state.notifications
        ]
      };
      
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          {
            id: `notif-${Date.now()}`,
            timestamp: new Date(),
            ...action.payload
          },
          ...state.notifications
        ]
      };
      
    case 'TOGGLE_USER_TYPE':
      return {
        ...state,
        userType: state.userType === 'homeowner' ? 'provider' : 'homeowner'
      };
      
    case 'MARK_SCENARIO_COMPLETE':
      return {
        ...state,
        completedScenarios: {
          ...state.completedScenarios,
          [action.payload]: true
        }
      };
      
    case 'RESET_DEMOS':
      return {
        ...initialState,
        demoProgress: []
      };
      
    default:
      return state;
  }
}

interface DemoContextType {
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

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(demoReducer, initialState);
  
  const actions = {
    setActiveDemo: (demo: string) => dispatch({ type: 'SET_ACTIVE_DEMO', payload: demo }),
    updateJobStatus: (status: DemoState['currentJob']['status']) => dispatch({ type: 'UPDATE_JOB_STATUS', payload: status }),
    addMessage: (message: Omit<DemoState['currentJob']['messages'][0], 'id' | 'timestamp'>) => dispatch({ type: 'ADD_MESSAGE', payload: message }),
    addPhoto: (photo: Omit<DemoState['currentJob']['photos'][0], 'id' | 'timestamp'>) => dispatch({ type: 'ADD_PHOTO', payload: photo }),
    toggleUserType: () => dispatch({ type: 'TOGGLE_USER_TYPE' }),
    resetDemos: () => dispatch({ type: 'RESET_DEMOS' }),
    markScenarioComplete: (scenario: keyof DemoState['completedScenarios']) => dispatch({ type: 'MARK_SCENARIO_COMPLETE', payload: scenario })
  };
  
  return (
    <DemoContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemoContext must be used within a DemoProvider');
  }
  return context;
};