import { ReactNode } from "react";

interface iPhoneMockupProps {
  children: ReactNode;
}

const IPhoneMockup = ({ children }: iPhoneMockupProps) => {
  return (
    <div className="relative w-80 mx-auto">
      {/* iPhone 16 Pro Max Frame - Proper aspect ratio 19.5:9 */}
      <div className="relative bg-gradient-to-b from-slate-900 via-gray-800 to-black rounded-[3.5rem] p-2 shadow-2xl">
        {/* Titanium Frame */}
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-[3.2rem] p-1">
          <div className="bg-black rounded-[3rem] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-black rounded-full w-32 h-8 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-white text-xs font-medium">9:41</div>
                  <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Screen Content - Fixed dimensions */}
            <div className="w-full h-[680px] relative overflow-hidden mt-12">
              {/* iOS Wallpaper Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-purple-600/30"></div>
              
              {/* Content Container - Full screen */}
              <div className="absolute inset-4 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                {children}
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;