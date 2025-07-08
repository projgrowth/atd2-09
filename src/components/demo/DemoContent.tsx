import { demoSteps } from "./DemoSteps";

interface DemoContentProps {
  currentStep: number;
}

const DemoContent = ({ currentStep }: DemoContentProps) => {
  const currentDemo = demoSteps[currentStep];
  
  return (
    <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
      <div className="w-full h-full relative p-4 overflow-y-auto">
        {/* Content with proper padding and scrolling */}
        <div className="min-h-full flex flex-col">
          {currentDemo.screen.content}
        </div>
      </div>
    </div>
  );
};

export default DemoContent;