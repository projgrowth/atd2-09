import { QrCode, Camera, MessageSquare, DollarSign, Shield, Zap, CheckCircle, Clock } from "lucide-react";

interface StepInfoProps {
  currentStep: number;
  title: string;
  description: string;
  totalSteps?: number;
  onStepChange?: (step: number) => void;
}

// Enhanced educational content for each step
const stepContent = [
  {
    title: "QR Code Access",
    subtitle: "Instant Secure Access",
    benefits: [
      "No app downloads or account creation needed",
      "Instant access to project details and files",
      "End-to-end encryption protects all data"
    ],
    technical: "Advanced QR technology with built-in security protocols",
    impact: "Eliminates the hassle of sharing login credentials or sending sensitive project information via email"
  },
  {
    title: "Real-Time Updates", 
    subtitle: "Live Project Transparency",
    benefits: [
      "See progress photos as work happens",
      "Real-time notifications for all milestones",
      "Complete project timeline visibility"
    ],
    technical: "Instant sync across all devices with offline capability",
    impact: "No more wondering 'what's happening with my project' - you're always in the loop"
  },
  {
    title: "Organized Communication",
    subtitle: "All Conversations in One Place", 
    benefits: [
      "Messages, photos, and documents organized by project",
      "Searchable conversation history",
      "No more lost texts or scattered emails"
    ],
    technical: "Secure messaging with document version control",
    impact: "Never lose track of important decisions or project changes again"
  },
  {
    title: "Secure Payments",
    subtitle: "Automatic Milestone Protection",
    benefits: [
      "Funds held in secure escrow until work is complete",
      "Automatic release based on milestone completion",
      "Full payment transparency for both parties"
    ],
    technical: "Bank-level security with automated escrow management",
    impact: "Protects both homeowners and contractors with fair, transparent payment processing"
  }
];

const StepInfo = ({ currentStep, title, description, totalSteps = 4, onStepChange }: StepInfoProps) => {
  const getIcon = (step: number) => {
    switch (step) {
      case 0: return QrCode;
      case 1: return Zap;
      case 2: return MessageSquare;
      case 3: return Shield;
      default: return QrCode;
    }
  };

  const IconComponent = getIcon(currentStep);
  const content = stepContent[currentStep];

  return (
    <div className="lg:sticky lg:top-8">
      {/* Clean Educational Card */}
      <div className="card-base p-6 lg:p-8 space-y-6 animate-fade-in-up">
        {/* Step Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-atd-primary to-atd-accent flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-medium text-atd-primary bg-atd-primary/10 px-2 py-1 rounded-full">
                  Step {currentStep + 1} of {totalSteps}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-enhanced leading-tight">
                {content.title}
              </h3>
              <p className="text-sm font-semibold text-atd-primary">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-atd-text-emphasis uppercase tracking-wide">
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-4 w-4 text-atd-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-atd-text-muted leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Feature */}
        <div className="border-t border-atd-border-light pt-4">
          <div className="flex items-start space-x-3">
            <Zap className="h-4 w-4 text-atd-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-atd-primary uppercase tracking-wide mb-1">
                Technical
              </p>
              <p className="text-sm text-atd-text-muted leading-relaxed">
                {content.technical}
              </p>
            </div>
          </div>
        </div>

        {/* Real-world Impact */}
        <div className="border-t border-atd-border-light pt-4">
          <div className="flex items-start space-x-3">
            <Clock className="h-4 w-4 text-atd-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-atd-accent uppercase tracking-wide mb-1">
                Real-World Impact
              </p>
              <p className="text-sm text-atd-text-muted leading-relaxed">
                {content.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-atd-border-light pt-4 space-y-3">
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => onStepChange?.(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-atd-primary w-6' 
                    : index < currentStep 
                    ? 'bg-atd-accent' 
                    : 'bg-atd-border-medium'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xs text-atd-text-light">
              Click dots to navigate • Auto-advancing every 4 seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;