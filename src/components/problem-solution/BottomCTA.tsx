import { Zap } from "lucide-react";

export const BottomCTA = () => {
  return (
    <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border border-blue-200">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Zap className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          See the Complete Transformation
        </h3>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium text-gray-700 leading-relaxed">
          Watch how ATD transforms each frustration into seamless home management that actually works.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            No marketplace chaos
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Your trusted providers only
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Complete transparency
          </div>
        </div>
      </div>
    </div>
  );
};