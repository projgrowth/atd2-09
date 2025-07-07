import { useState } from "react";
import { 
  Wrench, 
  Home, 
  Calendar, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Zap,
  Droplets,
  Wind,
  Shield,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
  urgency: "routine" | "priority" | "emergency";
}

interface ServiceRequestWizardProps {
  onRequestSubmit?: (request: any) => void;
  onClose?: () => void;
}

const ServiceRequestWizard = ({ onRequestSubmit, onClose }: ServiceRequestWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("routine");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("");

  const serviceCategories: ServiceCategory[] = [
    {
      id: "hvac",
      name: "HVAC",
      icon: Wind,
      color: "bg-blue-500",
      description: "Heating, cooling, ventilation",
      urgency: "priority"
    },
    {
      id: "plumbing",
      name: "Plumbing",
      icon: Droplets,
      color: "bg-cyan-500",
      description: "Pipes, faucets, drainage",
      urgency: "emergency"
    },
    {
      id: "electrical",
      name: "Electrical",
      icon: Zap,
      color: "bg-yellow-500",
      description: "Wiring, outlets, lighting",
      urgency: "emergency"
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: Home,
      color: "bg-green-500",
      description: "Regular maintenance cleaning",
      urgency: "routine"
    },
    {
      id: "security",
      name: "Security",
      icon: Shield,
      color: "bg-purple-500",
      description: "Locks, alarms, cameras",
      urgency: "priority"
    },
    {
      id: "general",
      name: "General Repair",
      icon: Wrench,
      color: "bg-gray-500",
      description: "Maintenance and fixes",
      urgency: "routine"
    }
  ];

  const getServicesForCategory = (categoryId: string) => {
    const services: Record<string, string[]> = {
      hvac: ["Filter Replacement", "System Inspection", "Duct Cleaning", "Thermostat Repair", "Emergency Repair"],
      plumbing: ["Leak Repair", "Drain Cleaning", "Faucet Installation", "Pipe Inspection", "Emergency Service"],
      electrical: ["Outlet Repair", "Light Installation", "Panel Upgrade", "Wiring Check", "Emergency Call"],
      cleaning: ["Deep Clean", "Regular Maintenance", "Move-out Clean", "Window Cleaning", "Carpet Cleaning"],
      security: ["Lock Change", "Alarm Setup", "Camera Install", "Security Audit", "Emergency Lockout"],
      general: ["Minor Repairs", "Preventive Maintenance", "Installation", "Inspection", "Custom Work"]
    };
    return services[categoryId] || [];
  };

  const timeframes = [
    { id: "asap", label: "ASAP", description: "Within 2 hours", urgent: true },
    { id: "today", label: "Today", description: "Within 8 hours", urgent: false },
    { id: "tomorrow", label: "Tomorrow", description: "Next business day", urgent: false },
    { id: "week", label: "This Week", description: "Within 7 days", urgent: false },
    { id: "flexible", label: "Flexible", description: "Schedule at best rate", urgent: false }
  ];

  const getEstimatedCost = () => {
    const baseCosts: Record<string, number> = {
      hvac: 150,
      plumbing: 125,
      electrical: 175,
      cleaning: 85,
      security: 200,
      general: 100
    };
    
    const urgencyMultipliers: Record<string, number> = {
      asap: 2.0,
      today: 1.5,
      tomorrow: 1.2,
      week: 1.0,
      flexible: 0.8
    };
    
    const base = baseCosts[selectedCategory] || 100;
    const multiplier = urgencyMultipliers[selectedTimeframe] || 1.0;
    return Math.round(base * multiplier);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const request = {
      category: selectedCategory,
      service: selectedService,
      urgency: selectedUrgency,
      timeframe: selectedTimeframe,
      estimatedCost: getEstimatedCost(),
      submittedAt: new Date().toISOString()
    };
    onRequestSubmit?.(request);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                What type of service do you need?
              </h3>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                Choose the category that best matches your needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "p-4 rounded-lg border-2 transition-all duration-200 text-left",
                      selectedCategory === category.id
                        ? "border-[hsl(var(--atd-primary))] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={cn("p-2 rounded-lg text-white", category.color)}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="font-medium text-sm">{category.name}</div>
                    </div>
                    <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                      {category.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                What specific service?
              </h3>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                Select the type of {serviceCategories.find(c => c.id === selectedCategory)?.name.toLowerCase()} work
              </p>
            </div>
            
            <div className="space-y-2">
              {getServicesForCategory(selectedCategory).map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "w-full p-3 rounded-lg border-2 transition-all duration-200 text-left",
                    selectedService === service
                      ? "border-[hsl(var(--atd-primary))] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  )}
                >
                  <div className="font-medium text-sm">{service}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                When do you need this done?
              </h3>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                Urgent requests cost more but get priority scheduling
              </p>
            </div>
            
            <div className="space-y-2">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={cn(
                    "w-full p-3 rounded-lg border-2 transition-all duration-200 text-left",
                    selectedTimeframe === timeframe.id
                      ? "border-[hsl(var(--atd-primary))] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white",
                    timeframe.urgent && "border-red-200 bg-red-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm flex items-center">
                        {timeframe.label}
                        {timeframe.urgent && (
                          <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                            URGENT
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[hsl(var(--atd-text-muted))]">
                        {timeframe.description}
                      </div>
                    </div>
                    {timeframe.urgent && (
                      <Clock className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
                Review Your Request
              </h3>
              <p className="text-sm text-[hsl(var(--atd-text-muted))]">
                Confirm details before submitting
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Service Type</span>
                <span className="font-medium text-sm">{selectedService}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Category</span>
                <span className="font-medium text-sm">
                  {serviceCategories.find(c => c.id === selectedCategory)?.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Timeline</span>
                <span className="font-medium text-sm">
                  {timeframes.find(t => t.id === selectedTimeframe)?.label}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <span className="text-sm text-[hsl(var(--atd-text-muted))]">Estimated Cost</span>
                <span className="font-bold text-lg text-[hsl(var(--atd-primary))]">
                  ${getEstimatedCost()}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-[hsl(var(--atd-text))]">What happens next?</span>
              </div>
              <div className="text-xs text-[hsl(var(--atd-text-muted))] space-y-1">
                <div>1. ATD matches you with qualified providers</div>
                <div>2. Funds are held in secure escrow</div>
                <div>3. Provider contacts you to schedule</div>
                <div>4. Payment released upon completion</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] p-2 rounded-lg">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-[hsl(var(--atd-text))]">
              Service Request
            </div>
            <div className="text-xs text-[hsl(var(--atd-text-muted))]">Step {currentStep} of 4</div>
          </div>
        </div>
        {onClose && (
          <Button size="sm" variant="ghost" onClick={onClose}>
            ×
          </Button>
        )}
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[hsl(var(--atd-primary))] to-[hsl(var(--atd-accent))] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="min-h-[400px] mb-6">
        {renderStep()}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="flex items-center space-x-1"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        {currentStep < 4 ? (
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !selectedCategory) ||
              (currentStep === 2 && !selectedService) ||
              (currentStep === 3 && !selectedTimeframe)
            }
            className="flex items-center space-x-1"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="flex items-center space-x-1 bg-green-500 hover:bg-green-600"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Submit Request</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceRequestWizard;