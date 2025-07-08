import { QrCode, Camera, MessageSquare, DollarSign } from "lucide-react";

interface StepInfoProps {
  currentStep: number;
  title: string;
  description: string;
  totalSteps?: number;
  onStepChange?: (step: number) => void;
}

const StepInfo = ({ currentStep, title, description, totalSteps = 4, onStepChange }: StepInfoProps) => {
  const getIcon = (step: number) => {
    switch (step) {
      case 0: return QrCode;
      case 1: return Camera;
      case 2: return MessageSquare;
      case 3: return DollarSign;
      default: return QrCode;
    }
  };

  const IconComponent = getIcon(currentStep);

  return (
    <div className="relative mb-16 max-w-4xl mx-auto animate-fade-in-up">
      {/* Beautiful Glass Morphism Card */}
      <div className="glass-morphism-card group">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="icon-container">
              <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-white" />
              <div className="icon-glow"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="step-badge">
                Step {currentStep + 1} of {totalSteps}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-enhanced leading-tight">
              {title}
            </h3>
            
            <p className="text-lg md:text-xl font-semibold text-muted-enhanced leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="progress-section">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => onStepChange?.(index)}
                className={`progress-dot ${index === currentStep ? 'active' : ''} ${
                  index < currentStep ? 'completed' : ''
                }`}
                aria-label={`Go to step ${index + 1}`}
              >
                {index < currentStep && (
                  <div className="checkmark">✓</div>
                )}
              </button>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Interactive Hint */}
        <div className="interaction-hint">
          <span className="text-sm text-atd-text-light font-medium">
            Click dots to navigate steps
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;