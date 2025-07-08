import { ReactNode } from "react";

interface iPhoneMockupProps {
  children: ReactNode;
}

const IPhoneMockup = ({ children }: iPhoneMockupProps) => {
  return (
    <div className="relative mx-auto" style={{ width: '320px' }}>
      {/* iPhone 16 Pro Max Frame - Enhanced Stripe-inspired design */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[2.75rem] p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)] border border-gray-700">
        {/* Titanium Frame with enhanced realism */}
        <div className="bg-gradient-to-b from-gray-700 via-gray-750 to-gray-850 rounded-[2.5rem] p-[3px] shadow-inner">
          <div className="bg-black rounded-[2.25rem] overflow-hidden relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 z-30 flex items-center justify-between px-8 pt-2">
              <div className="text-white text-sm font-semibold">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                <div className="w-6 h-3 border border-white rounded-sm opacity-80">
                  <div className="w-full h-full bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-40">
              <div className="bg-black rounded-full w-28 h-7 flex items-center justify-center shadow-lg border border-gray-800">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Screen Content - Proper iPhone 16 Pro Max proportions */}
            <div className="w-full relative overflow-hidden" style={{ height: '650px', marginTop: '48px' }}>
              {/* Enhanced iOS Wallpaper Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20"></div>
              <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-black/10"></div>
              
              {/* Content Container - Stripe-inspired glass design */}
              <div className="absolute inset-3 bg-white/[0.08] backdrop-blur-2xl rounded-2xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent"></div>
                <div className="relative h-full overflow-hidden">
                  {children}
                </div>
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30">
              <div className="w-32 h-1 bg-white/40 rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Enhanced outer glow effect */}
        <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-30 -z-10"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;