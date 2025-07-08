import { ReactNode } from "react";

interface iPhoneMockupProps {
  children: ReactNode;
}

const IPhoneMockup = ({ children }: iPhoneMockupProps) => {
  return (
    <div className="relative mx-auto" style={{ width: '300px' }}>
      {/* iPhone Frame - Minimal and realistic */}
      <div className="relative bg-gray-900 rounded-[42px] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
        {/* Screen bezel */}
        <div className="bg-black rounded-[38px] p-1">
          <div className="bg-black rounded-[34px] overflow-hidden relative">
            {/* Dynamic Island - Minimal */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-30">
              <div className="bg-black rounded-full w-24 h-6"></div>
            </div>
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 z-20 flex items-center justify-between px-6 pt-2">
              <div className="text-white text-sm font-medium">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                <div className="w-6 h-3 border border-white/60 rounded-sm">
                  <div className="w-4/5 h-full bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="w-full bg-white relative overflow-hidden" style={{ height: '600px', marginTop: '44px' }}>
              {/* Content */}
              <div className="absolute inset-0 overflow-hidden">
                {children}
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-32 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;