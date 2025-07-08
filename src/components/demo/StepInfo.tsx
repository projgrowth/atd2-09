interface StepInfoProps {
  currentStep: number;
  title: string;
  description: string;
}

const StepInfo = ({ currentStep, title, description }: StepInfoProps) => {
  const getEmoji = (step: number) => {
    switch (step) {
      case 0: return "📱";
      case 1: return "📸";
      case 2: return "💬";
      case 3: return "💳";
      default: return "📱";
    }
  };

  return (
    <div className="text-center mb-12 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <div className="text-5xl mr-4">
          {getEmoji(currentStep)}
        </div>
        <div className="text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-enhanced mb-2">
            {title}
          </h3>
          <p className="text-xl font-semibold text-muted-enhanced">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;