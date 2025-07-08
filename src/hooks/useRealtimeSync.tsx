import { useEffect, useCallback } from 'react';
import { useDemoContext } from '@/contexts/DemoContext';
import { useDemoAnalytics } from './useDemoAnalytics';

export const useRealtimeSync = () => {
  const { state, actions } = useDemoContext();
  const { trackInteraction } = useDemoAnalytics();
  const { currentJob, userType, activeDemo } = state;

  // Simulate WebSocket connection for real-time updates
  useEffect(() => {
    const simulateRealtimeEvents = () => {
      const events = [
        {
          type: 'location_update',
          probability: 0.3,
          delay: 5000,
          action: () => {
            if (userType === 'provider' && (currentJob.status === 'enroute' || currentJob.status === 'onsite')) {
              actions.addMessage({
                sender: 'provider',
                message: `Location updated: ${Math.random() > 0.5 ? 'Moving toward' : 'Arrived at'} destination`
              });
            }
          }
        },
        {
          type: 'status_notification',
          probability: 0.2,
          delay: 8000,
          action: () => {
            if (currentJob.status === 'inprogress') {
              const updates = [
                'Work progressing smoothly',
                'Issue identified, resolving now',
                'Almost finished with repairs',
                'Testing system functionality'
              ];
              
              actions.addMessage({
                sender: 'provider',
                message: updates[Math.floor(Math.random() * updates.length)]
              });
            }
          }
        },
        {
          type: 'cross_demo_notification',
          probability: 0.15,
          delay: 12000,
          action: () => {
            // Notifications that appear regardless of current demo
            const crossDemoEvents = [
              {
                type: 'payment',
                title: 'Payment Processed',
                description: 'Service payment of $240 completed'
              },
              {
                type: 'alert',
                title: 'Schedule Update',
                description: 'Next service scheduled for next month'
              },
              {
                type: 'message',
                title: 'Provider Message',
                description: 'Thank you for choosing our service!'
              }
            ];

            const event = crossDemoEvents[Math.floor(Math.random() * crossDemoEvents.length)];
            
            // This notification appears in all demos
            trackInteraction('completion', 'cross_demo_notification', {
              notificationType: event.type,
              currentDemo: activeDemo,
              userType
            });
          }
        }
      ];

      events.forEach(event => {
        if (Math.random() < event.probability) {
          setTimeout(event.action, event.delay + Math.random() * 5000);
        }
      });
    };

    const interval = setInterval(simulateRealtimeEvents, 15000);
    return () => clearInterval(interval);
  }, [userType, currentJob.status, activeDemo, actions, trackInteraction]);

  // Job status synchronization across demos
  useEffect(() => {
    trackInteraction('completion', 'job_status_sync', {
      status: currentJob.status,
      demo: activeDemo,
      userType,
      progress: currentJob.progress
    });
  }, [currentJob.status, activeDemo, userType, currentJob.progress, trackInteraction]);

  // Notification broadcasting
  const broadcastNotification = useCallback((notification: {
    type: 'message' | 'status' | 'alert' | 'payment';
    title: string;
    description: string;
  }) => {
    // This creates notifications that appear across all demos
    actions.addMessage({
      sender: userType === 'provider' ? 'provider' : 'homeowner',
      message: `${notification.title}: ${notification.description}`
    });

    trackInteraction('completion', 'notification_broadcast', {
      type: notification.type,
      title: notification.title,
      sourceDemo: activeDemo,
      userType
    });
  }, [actions, userType, activeDemo, trackInteraction]);

  // Provider action synchronization
  const syncProviderAction = useCallback((action: string, data: any) => {
    // When provider takes action, sync to homeowner view
    if (userType === 'provider') {
      const syncMessages = {
        'photo_uploaded': 'Progress photo uploaded and shared',
        'status_updated': `Job status updated to ${data.status}`,
        'message_sent': 'New message from provider',
        'invoice_generated': `Invoice ready: $${data.amount}`
      };

      const message = syncMessages[action as keyof typeof syncMessages];
      if (message) {
        setTimeout(() => {
          broadcastNotification({
            type: 'status',
            title: 'Update',
            description: message
          });
        }, 1000); // Small delay for realism
      }
    }

    trackInteraction('completion', 'provider_action_sync', {
      action,
      data,
      userType,
      demo: activeDemo
    });
  }, [userType, activeDemo, broadcastNotification, trackInteraction]);

  return {
    broadcastNotification,
    syncProviderAction,
    isConnected: true, // Simulate always connected for demo
    lastSync: new Date()
  };
};