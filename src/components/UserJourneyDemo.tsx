import { useState, useEffect } from "react";
import { Home, Wrench, CheckCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchRipple } from "./TouchRipple";
import { OnboardingStep, RoleSelection } from "./user-journey/OnboardingComponents";
import { HomeownerPropertySetup, HomeownerServiceNeeds, HomeownerMatchingPreview } from "./user-journey/HomeownerFlow";
import { ProviderProfileCreation, ProviderVerification, ProviderDashboardPreview } from "./user-journey/ProviderFlow";
import { cn } from "@/lib/utils";
import { useDemoContext } from "@/contexts/DemoContext";

const UserJourneyDemo = () => {
  const { state, actions } = useDemoContext();
  const { userType } = state;
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(userType);
  const [isComplete, setIsComplete] = useState(false);
  
  // Homeowner onboarding data
  const [homeownerData, setHomeownerData] = useState({
    propertyType: "",
    location: "",
    budget: "",
    familyMembers: 1,
    priorities: [] as string[]
  });

  // Provider onboarding data
  const [providerData, setProviderData] = useState({
    serviceType: "",
    experience: "",
    serviceArea: "",
    availability: [] as string[],
    specialties: [] as string[]
  });

  const updateHomeownerData = (updates: Partial<typeof homeownerData>) => {
    setHomeownerData(prev => ({ ...prev, ...updates }));
  };

  const updateProviderData = (updates: Partial<typeof providerData>) => {
    setProviderData(prev => ({ ...prev, ...updates }));
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setSelectedRole(null);
    setIsComplete(false);
    setHomeownerData({
      propertyType: "",
      location: "",
      budget: "",
      familyMembers: 1,
      priorities: []
    });
    setProviderData({
      serviceType: "",
      experience: "",
      serviceArea: "",
      availability: [],
      specialties: []
    });
  };

  // Dynamic step configuration based on selected role
  const getSteps = () => {
    const baseSteps = [
      {
        id: 1,
        title: "Choose Your Role",
        description: "Are you a homeowner or service provider?",
        component: <RoleSelection selectedRole={selectedRole} onSelectRole={setSelectedRole} />,
        canProceed: !!selectedRole
      }
    ];

    if (selectedRole === "homeowner") {
      return [
        ...baseSteps,
        {
          id: 2,
          title: "Property Setup",
          description: "Tell us about your property and location",
          component: <HomeownerPropertySetup 
            data={homeownerData} 
            onUpdateData={updateHomeownerData}
            currentStep={currentStep}
          />,
          canProceed: !!(homeownerData.propertyType && homeownerData.location)
        },
        {
          id: 3,
          title: "Service Preferences",
          description: "What services do you need and what's your budget?",
          component: <HomeownerServiceNeeds 
            data={homeownerData} 
            onUpdateData={updateHomeownerData}
            currentStep={currentStep}
          />,
          canProceed: !!(homeownerData.budget && homeownerData.priorities.length > 0)
        },
        {
          id: 4,
          title: "Your Matches",
          description: "See your personalized provider recommendations",
          component: <HomeownerMatchingPreview data={homeownerData} />,
          canProceed: true
        }
      ];
    }

    if (selectedRole === "provider") {
      return [
        ...baseSteps,
        {
          id: 2,
          title: "Professional Profile",
          description: "Tell us about your services and experience",
          component: <ProviderProfileCreation 
            data={providerData} 
            onUpdateData={updateProviderData}
            currentStep={currentStep}
          />,
          canProceed: !!(providerData.serviceType && providerData.experience)
        },
        {
          id: 3,
          title: "Verification & Setup",
          description: "Complete your professional verification",
          component: <ProviderVerification 
            data={providerData} 
            onUpdateData={updateProviderData}
            currentStep={currentStep}
          />,
          canProceed: !!providerData.serviceArea
        },
        {
          id: 4,
          title: "Your Dashboard",
          description: "Preview your provider dashboard and available jobs",
          component: <ProviderDashboardPreview data={providerData} />,
          canProceed: true
        }
      ];
    }

    return baseSteps;
  };

  const steps = getSteps();
  const currentStepData = steps.find(step => step.id === currentStep);
  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Update global user type when onboarding completes
      if (selectedRole && selectedRole !== userType) {
        actions.toggleUserType();
      }
      actions.markScenarioComplete('onboardingCompleted');
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
              {selectedRole === "homeowner" ? "Welcome to ATD!" : "Application Submitted!"}
            </h3>
            <p className="text-[hsl(var(--atd-text-muted))] mb-6">
              {selectedRole === "homeowner" 
                ? "Your personalized dashboard is ready. Start connecting with trusted service providers in your area."
                : "We'll review your application and get back to you within 24 hours. Start building your reputation on ATD!"}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-100">
            <h4 className="font-semibold text-[hsl(var(--atd-text))] mb-3">
              What's Next?
            </h4>
            <div className="space-y-2 text-sm text-[hsl(var(--atd-text-muted))] text-left">
              {selectedRole === "homeowner" ? (
                <>
                  <div>✓ Browse your matched service providers</div>
                  <div>✓ Post your first service request</div>
                  <div>✓ Set up family member access</div>
                  <div>✓ Configure your notification preferences</div>
                </>
              ) : (
                <>
                  <div>✓ Complete background verification process</div>
                  <div>✓ Upload professional references</div>
                  <div>✓ Set your service availability</div>
                  <div>✓ Start receiving job requests</div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TouchRipple>
              <Button className="px-6 mobile-button-press">
                {selectedRole === "homeowner" ? "Go to Dashboard" : "Complete Verification"}
              </Button>
            </TouchRipple>
            <TouchRipple>
              <Button variant="outline" onClick={resetDemo} className="px-6 mobile-button-press">
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Different Role
              </Button>
            </TouchRipple>
          </div>
        </div>
      </div>
    );
  }

  if (!currentStepData) {
    return <div>Error: Step not found</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[hsl(var(--atd-text))] mb-4">
          Personalized Onboarding Journey
        </h3>
        <p className="text-[hsl(var(--atd-text-muted))]">
          Experience ATD's guided setup process for your specific role
        </p>
      </div>

      <OnboardingStep
        step={currentStep}
        totalSteps={totalSteps}
        title={currentStepData.title}
        description={currentStepData.description}
        onNext={handleNext}
        onPrev={handlePrev}
        canProceed={currentStepData.canProceed}
        isFirst={currentStep === 1}
        isLast={currentStep === totalSteps}
      >
        {currentStepData.component}
      </OnboardingStep>
    </div>
  );
};

export default UserJourneyDemo;
