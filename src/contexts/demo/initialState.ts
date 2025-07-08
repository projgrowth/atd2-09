import { DemoState } from './types';

export const initialState: DemoState = {
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