import { ReactNode } from "react";

interface iPhoneMockupProps {
  children: ReactNode;
}

const IPhoneMockup = ({ children }: iPhoneMockupProps) => {
  return (
    <div className="relative mx-auto animate-device-float" style={{ width: '300px' }}>
      {/* iPhone Frame - Enhanced realistic design */}
      <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[42px] p-2 device-shadow animate-glow-pulse">
        {/* Screen bezel with subtle gradient */}
        <div className="bg-gradient-to-b from-slate-900 to-black rounded-[38px] p-1">
          <div className="bg-black rounded-[34px] overflow-hidden relative">
            {/* Enhanced Dynamic Island */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-30">
              <div className="bg-black rounded-full w-24 h-6 shadow-inner border border-slate-800/50"></div>
            </div>
            
            {/* Enhanced Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 z-20 flex items-center justify-between px-6 pt-2">
              <div className="text-white text-sm font-medium tracking-tight">9:41</div>
              <div className="flex items-center space-x-1">
                {/* Signal bars */}
                <div className="flex space-x-[1px]">
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                  <div className="w-1 h-2.5 bg-white rounded-full"></div>
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                  <div className="w-1 h-3.5 bg-white rounded-full"></div>
                </div>
                {/* Battery */}
                <div className="w-6 h-3 border border-white/60 rounded-sm relative">
                  <div className="w-4/5 h-full bg-white rounded-sm"></div>
                  <div className="absolute -right-1 top-1/2 w-0.5 h-1 bg-white/60 rounded-r-full transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            
            {/* Screen Content with enhanced styling */}
            <div className="w-full bg-white relative overflow-hidden shadow-inner" style={{ height: '600px', marginTop: '44px' }}>
              {/* Content with subtle overlay for depth */}
              <div className="absolute inset-0 overflow-hidden">
                {children}
              </div>
              {/* Subtle screen overlay for realism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-white/[0.02] pointer-events-none"></div>
            </div>
            
            {/* Enhanced Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-32 h-1 bg-white/50 rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Subtle frame reflection */}
        <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;