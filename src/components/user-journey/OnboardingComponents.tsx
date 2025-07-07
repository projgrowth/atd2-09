import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Home, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface OnboardingStepProps {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  canProceed: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const OnboardingStep = ({ 
  step, 
  totalSteps, 
  title, 
  description, 
  children, 
  onNext, 
  onPrev, 
  canProceed, 
  isFirst, 
  isLast 
}: OnboardingStepProps) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-sm text-[hsl(var(--atd-text-muted))]">Step {step} of {totalSteps}</span>
        </div>
        <Progress value={progress} className="w-full mb-4" />
        <h3 className="text-xl font-semibold text-[hsl(var(--atd-text))] mb-2">{title}</h3>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">{description}</p>
      </div>

      <div className="min-h-[300px] flex items-center justify-center">
        {children}
      </div>

      <div className="flex justify-between">
        <TouchRipple>
          <Button 
            variant="outline" 
            onClick={onPrev} 
            disabled={isFirst}
            className="mobile-button-press"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </TouchRipple>
        
        <TouchRipple>
          <Button 
            onClick={onNext}
            disabled={!canProceed}
            className={cn(
              "mobile-button-press",
              isLast && "bg-green-600 hover:bg-green-700"
            )}
          >
            {isLast ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete Setup
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </TouchRipple>
      </div>
    </div>
  );
};

interface RoleSelectionProps {
  selectedRole: string | null;
  onSelectRole: (role: string) => void;
}

const RoleSelection = ({ selectedRole, onSelectRole }: RoleSelectionProps) => {
  const roles = [
    {
      id: "homeowner",
      title: "Homeowner",
      description: "I own or manage a property and need maintenance services",
      icon: Home,
      color: "blue",
      features: ["Full dashboard control", "Provider management", "Family access control"]
    },
    {
      id: "provider",
      title: "Service Provider", 
      description: "I provide maintenance, repair, or improvement services",
      icon: Wrench,
      color: "purple",
      features: ["Job management tools", "Client communication", "Mobile work tracking"]
    }
  ];

  return (
    <div className="grid gap-4 max-w-2xl mx-auto">
      {roles.map((role) => {
        const IconComponent = role.icon;
        const isSelected = selectedRole === role.id;
        
        return (
          <TouchRipple key={role.id}>
            <div
              onClick={() => onSelectRole(role.id)}
              className={cn(
                "p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 mobile-interactive",
                isSelected
                  ? `border-${role.color}-500 bg-${role.color}-50`
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
            >
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "p-3 rounded-lg",
                  isSelected ? `bg-${role.color}-100` : "bg-gray-100"
                )}>
                  <IconComponent className={cn(
                    "h-6 w-6",
                    isSelected ? `text-${role.color}-600` : "text-gray-600"
                  )} />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                    {role.title}
                  </h4>
                  <p className="text-sm text-[hsl(var(--atd-text-muted))] mb-3">
                    {role.description}
                  </p>
                  
                  <div className="space-y-1">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className={cn(
                          "h-3 w-3",
                          isSelected ? `text-${role.color}-500` : "text-gray-400"
                        )} />
                        <span className="text-xs text-[hsl(var(--atd-text-muted))]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {isSelected && (
                  <div className={`p-1 rounded-full bg-${role.color}-500`}>
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </TouchRipple>
        );
      })}
    </div>
  );
};

export { OnboardingStep, RoleSelection };