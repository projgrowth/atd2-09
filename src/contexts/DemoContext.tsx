import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { DemoState, DemoAction, DemoContextType } from './demo/types';
import { initialState } from './demo/initialState';
import { demoReducer } from './demo/reducer';

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