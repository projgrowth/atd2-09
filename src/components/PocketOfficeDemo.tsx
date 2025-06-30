import { useState } from "react";
import { Smartphone, Camera, MessageSquare, Clock, CheckCircle, Upload, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "./TouchRipple";
import { useSwipe } from "@/hooks/use-swipe";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const PocketOfficeDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const isMobile = useIsMobile();

  const steps = [
    {
      title: "Job Overview",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100">
            <div className="font-semibold text-[hsl(var(--atd-text))] mb-2">Current Job</div>
            <div className="text-lg font-bold text-purple-600">Kitchen Repair</div>
            <div className="text-sm text-[hsl(var(--atd-text-muted))]">123 Oak Street • Started 2:00 PM</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">Duration</div>
              <div className="font-semibold">2h 15m</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
              <div className="text-xs text-[hsl(var(--atd-text-muted))]">Progress</div>
              <div className="font-semibold">75%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Update Status",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="font-medium mb-3">Update Job Progress</div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Diagnosed the issue</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm">Repaired cabinet door</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                  isUpdating ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                }`}>
                  {isUpdating && <CheckCircle className="h-3 w-3 text-white" />}
                </div>
                <span className="text-sm">Installing new hardware</span>
              </div>
            </div>
          </div>
          <TouchRipple>
            <Button 
              className="w-full mobile-button-press"
              onClick={() => setIsUpdating(!isUpdating)}
            >
              {isUpdating ? 'Status Updated!' : 'Mark as Complete'}
            </Button>
          </TouchRipple>
        </div>
      )
    },
    {
      title: "Photo Upload",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="font-medium mb-3">Progress Photos</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-gray-400" />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            <TouchRipple>
              <Button variant="outline" className="w-full mobile-button-press">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photos
              </Button>
            </TouchRipple>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <div className="text-sm text-green-700 font-medium">✓ Photos help build trust</div>
            <div className="text-xs text-green-600">Homeowners love seeing progress updates</div>
          </div>
        </div>
      )
    },
    {
      title: "Communication",
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="font-medium mb-3">Message Homeowner</div>
            <div className="space-y-2 mb-3">
              <div className="bg-blue-50 rounded-lg p-2">
                <div className="text-xs text-blue-600 font-medium">You</div>
                <div className="text-sm">Kitchen repair is going well! Should be done by 5 PM.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-xs text-gray-600 font-medium">Sarah (Homeowner)</div>
                <div className="text-sm">Great, thank you for the update!</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm mobile-input"
              />
              <TouchRipple>
                <Button size="sm" className="mobile-button-press">
                  <Send className="h-4 w-4" />
                </Button>
              </TouchRipple>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
  };

  const prevStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextStep,
    onSwipeRight: prevStep,
  });

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-sm mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Smartphone className="h-6 w-6 text-purple-600" />
        <div>
          <div className="font-semibold text-[hsl(var(--atd-text))]">PocketOffice</div>
          <div className="text-xs text-[hsl(var(--atd-text-muted))]">Provider Demo</div>
        </div>
        <div className="ml-auto bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
          Mobile
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-[hsl(var(--atd-text))]">
          {steps[currentStep].title}
        </h3>
        {isMobile && (
          <div className="text-xs text-[hsl(var(--atd-text-muted))] flex items-center space-x-1">
            <ChevronLeft className="h-3 w-3" />
            <span>Swipe</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        )}
      </div>

      <div 
        className={cn(
          "min-h-[350px] mb-6 transition-all duration-300",
          "mobile-interactive"
        )}
        {...swipeHandlers}
      >
        <div className="animate-mobile-fade-in">
          {steps[currentStep].content}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <TouchRipple>
          <Button
            variant="outline"
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="mobile-button-press"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {isMobile ? "" : "Previous"}
          </Button>
        </TouchRipple>
        
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <TouchRipple key={index}>
              <button
                onClick={() => setCurrentStep(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200 mobile-interactive",
                  index === currentStep ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                )}
              />
            </TouchRipple>
          ))}
        </div>

        <TouchRipple>
          <Button
            variant="outline"
            size="sm"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="mobile-button-press"
          >
            {isMobile ? "" : "Next"}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </TouchRipple>
      </div>
    </div>
  );
};

export default PocketOfficeDemo;
