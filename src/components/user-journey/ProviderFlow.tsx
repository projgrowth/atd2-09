import { useState } from "react";
import { Wrench, Award, MapPin, Clock, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface ProviderOnboardingData {
  serviceType: string;
  experience: string;
  serviceArea: string;
  availability: string[];
  specialties: string[];
}

interface ProviderFlowProps {
  data: ProviderOnboardingData;
  onUpdateData: (data: Partial<ProviderOnboardingData>) => void;
  currentStep: number;
}

const ProviderProfileCreation = ({ data, onUpdateData }: ProviderFlowProps) => {
  const serviceTypes = [
    { id: "plumbing", label: "Plumbing", icon: Wrench },
    { id: "electrical", label: "Electrical", icon: Wrench },
    { id: "hvac", label: "HVAC", icon: Wrench },
    { id: "handyman", label: "General Handyman", icon: Wrench },
    { id: "cleaning", label: "Cleaning Services", icon: Wrench },
    { id: "landscaping", label: "Landscaping", icon: Wrench }
  ];

  const experienceLevels = [
    { id: "entry", label: "0-2 years", description: "New to the field" },
    { id: "intermediate", label: "3-5 years", description: "Some experience" },
    { id: "experienced", label: "6-10 years", description: "Well experienced" },
    { id: "expert", label: "10+ years", description: "Industry expert" }
  ];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          Tell us about your services
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          This helps homeowners find the right professional for their needs
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Primary Service Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {serviceTypes.map((service) => {
              const IconComponent = service.icon;
              const isSelected = data.serviceType === service.id;
              
              return (
                <TouchRipple key={service.id}>
                  <div
                    onClick={() => onUpdateData({ serviceType: service.id })}
                    className={cn(
                      "p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive text-center",
                      isSelected
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <IconComponent className={cn(
                      "h-6 w-6 mx-auto mb-2",
                      isSelected ? "text-purple-600" : "text-gray-600"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-purple-700" : "text-gray-700"
                    )}>
                      {service.label}
                    </span>
                  </div>
                </TouchRipple>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Experience Level
          </label>
          <div className="space-y-2">
            {experienceLevels.map((level) => {
              const isSelected = data.experience === level.id;
              
              return (
                <TouchRipple key={level.id}>
                  <div
                    onClick={() => onUpdateData({ experience: level.id })}
                    className={cn(
                      "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive",
                      isSelected
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={cn(
                          "font-medium",
                          isSelected ? "text-orange-700" : "text-gray-700"
                        )}>
                          {level.label}
                        </span>
                        <p className={cn(
                          "text-sm",
                          isSelected ? "text-orange-600" : "text-gray-500"
                        )}>
                          {level.description}
                        </p>
                      </div>
                      <Award className={cn(
                        "h-5 w-5",
                        isSelected ? "text-orange-500" : "text-gray-400"
                      )} />
                    </div>
                  </div>
                </TouchRipple>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProviderVerification = ({ data, onUpdateData }: ProviderFlowProps) => {
  const verificationSteps = [
    { id: "license", title: "Professional License", status: "verified", icon: Award },
    { id: "insurance", title: "Liability Insurance", status: "pending", icon: CheckCircle },
    { id: "background", title: "Background Check", status: "pending", icon: CheckCircle },
    { id: "references", title: "References", status: "not_started", icon: CheckCircle }
  ];

  const specialties = [
    "Emergency Services",
    "Eco-Friendly Solutions", 
    "Smart Home Technology",
    "Vintage/Historic Properties",
    "Commercial Properties",
    "Energy Efficiency"
  ];

  const toggleSpecialty = (specialty: string) => {
    const current = data.specialties || [];
    const updated = current.includes(specialty)
      ? current.filter(s => s !== specialty)
      : [...current, specialty];
    onUpdateData({ specialties: updated });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "text-green-600 bg-green-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "not_started": return "text-gray-600 bg-gray-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "verified": return "Verified ✓";
      case "pending": return "Pending...";
      case "not_started": return "Required";
      default: return "Required";
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          Verify your credentials
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Build trust with homeowners through verified credentials
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Verification Status
          </label>
          <div className="space-y-3">
            {verificationSteps.map((step) => {
              const IconComponent = step.icon;
              
              return (
                <div
                  key={step.id}
                  className="p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-[hsl(var(--atd-text))]">
                        {step.title}
                      </span>
                    </div>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      getStatusColor(step.status)
                    )}>
                      {getStatusText(step.status)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Service Area
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Enter your service radius (e.g., 'Within 25 miles of downtown')"
              value={data.serviceArea}
              onChange={(e) => onUpdateData({ serviceArea: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Specialties (Optional)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {specialties.map((specialty) => {
              const isSelected = (data.specialties || []).includes(specialty);
              
              return (
                <TouchRipple key={specialty}>
                  <div
                    onClick={() => toggleSpecialty(specialty)}
                    className={cn(
                      "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive text-center",
                      isSelected
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-green-700" : "text-gray-700"
                    )}>
                      {specialty}
                    </span>
                  </div>
                </TouchRipple>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProviderDashboardPreview = ({ data }: { data: ProviderOnboardingData }) => {
  const mockJobs = [
    { client: "Sarah M.", service: "Kitchen Faucet Repair", urgency: "Today", status: "pending" },
    { client: "John D.", service: "Bathroom Renovation", urgency: "This Week", status: "accepted" },
    { client: "Lisa K.", service: "Emergency Leak", urgency: "ASAP", status: "in_progress" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "accepted": return "text-blue-600 bg-blue-100";
      case "in_progress": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          Your Provider Dashboard Preview
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Manage jobs, communicate with clients, and grow your business
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h5 className="font-semibold text-purple-700 mb-2">Your Profile</h5>
          <div className="space-y-1 text-sm text-purple-600">
            <div>Service: {data.serviceType || "Not selected"}</div>
            <div>Experience: {data.experience || "Not specified"}</div>
            <div>Area: {data.serviceArea || "Not specified"}</div>
            <div>Specialties: {(data.specialties || []).length} selected</div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-[hsl(var(--atd-text))] mb-3">Available Jobs</h5>
          <div className="space-y-3">
            {mockJobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-medium text-[hsl(var(--atd-text))]">{job.service}</h6>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    getStatusColor(job.status)
                  )}>
                    {job.status.replace("_", " ")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Client: {job.client}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{job.urgency}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProviderProfileCreation, ProviderVerification, ProviderDashboardPreview };