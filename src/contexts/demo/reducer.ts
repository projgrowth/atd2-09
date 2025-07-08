import { DemoState, DemoAction } from './types';
import { initialState } from './initialState';

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
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

      const statusDescriptions = {
        'scheduled': 'Job has been scheduled and assigned',
        'enroute': 'Provider is on the way to your location',
        'onsite': 'Provider has arrived at your property',
        'inprogress': 'Work is currently in progress',
        'complete': 'Service has been completed successfully'
      };
      
      return {
        ...state,
        currentJob: {
          ...state.currentJob,
          status: action.payload,
          progress: statusProgressMap[action.payload] || state.currentJob.progress,
          ...(action.payload === 'complete' && { 
            actualCost: Math.round(state.currentJob.estimatedCost * (0.9 + Math.random() * 0.2)) 
          })
        },
        notifications: [
          {
            id: `notif-${Date.now()}`,
            type: 'status',
            title: 'Job Status Updated',
            description: statusDescriptions[action.payload] || `Status changed to ${action.payload}`,
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