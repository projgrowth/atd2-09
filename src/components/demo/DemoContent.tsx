import { demoSteps } from "./DemoSteps";

interface DemoContentProps {
  currentStep: number;
}

const DemoContent = ({ currentStep }: DemoContentProps) => {
  return (
    <div 
      className="absolute inset-0 transition-all duration-700 ease-in-out"
      style={{
        transform: `translateX(${currentStep * -100}%)`,
        width: `${demoSteps.length * 100}%`
      }}
    >
      <div className="flex h-full">
        {demoSteps.map((step, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: `${100 / demoSteps.length}%` }}
          >
            {step.screen.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoContent;