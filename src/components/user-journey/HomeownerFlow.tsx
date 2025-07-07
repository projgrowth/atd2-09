import { useState } from "react";
import { Home, MapPin, DollarSign, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TouchRipple } from "../TouchRipple";
import { cn } from "@/lib/utils";

interface HomeownerOnboardingData {
  propertyType: string;
  location: string;
  budget: string;
  familyMembers: number;
  priorities: string[];
}

interface HomeownerFlowProps {
  data: HomeownerOnboardingData;
  onUpdateData: (data: Partial<HomeownerOnboardingData>) => void;
  currentStep: number;
}

const HomeownerPropertySetup = ({ data, onUpdateData }: HomeownerFlowProps) => {
  const propertyTypes = [
    { id: "house", label: "Single Family Home", icon: Home },
    { id: "condo", label: "Condominium", icon: Home },
    { id: "apartment", label: "Apartment", icon: Home },
    { id: "townhouse", label: "Townhouse", icon: Home }
  ];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          Tell us about your property
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          This helps us match you with the right service providers
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-2 block">
            Property Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {propertyTypes.map((type) => {
              const IconComponent = type.icon;
              const isSelected = data.propertyType === type.id;
              
              return (
                <TouchRipple key={type.id}>
                  <div
                    onClick={() => onUpdateData({ propertyType: type.id })}
                    className={cn(
                      "p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive text-center",
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <IconComponent className={cn(
                      "h-6 w-6 mx-auto mb-2",
                      isSelected ? "text-blue-600" : "text-gray-600"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-blue-700" : "text-gray-700"
                    )}>
                      {type.label}
                    </span>
                  </div>
                </TouchRipple>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-2 block">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Enter your city or ZIP code"
              value={data.location}
              onChange={(e) => onUpdateData({ location: e.target.value })}
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeownerServiceNeeds = ({ data, onUpdateData }: HomeownerFlowProps) => {
  const budgetRanges = [
    { id: "low", label: "Under $500/month", range: "$0 - $500" },
    { id: "medium", label: "$500 - $1,500/month", range: "$500 - $1,500" },
    { id: "high", label: "$1,500 - $5,000/month", range: "$1,500 - $5,000" },
    { id: "premium", label: "Over $5,000/month", range: "$5,000+" }
  ];

  const priorities = [
    "Emergency Repairs",
    "Preventive Maintenance", 
    "Home Improvements",
    "Seasonal Services",
    "Security & Safety",
    "Energy Efficiency"
  ];

  const togglePriority = (priority: string) => {
    const current = data.priorities || [];
    const updated = current.includes(priority)
      ? current.filter(p => p !== priority)
      : [...current, priority];
    onUpdateData({ priorities: updated });
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          What are your service needs?
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Help us understand your maintenance priorities and budget
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Monthly Service Budget
          </label>
          <div className="space-y-2">
            {budgetRanges.map((budget) => {
              const isSelected = data.budget === budget.id;
              
              return (
                <TouchRipple key={budget.id}>
                  <div
                    onClick={() => onUpdateData({ budget: budget.id })}
                    className={cn(
                      "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive",
                      isSelected
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "font-medium",
                        isSelected ? "text-green-700" : "text-gray-700"
                      )}>
                        {budget.label}
                      </span>
                      <span className={cn(
                        "text-sm",
                        isSelected ? "text-green-600" : "text-gray-500"
                      )}>
                        {budget.range}
                      </span>
                    </div>
                  </div>
                </TouchRipple>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[hsl(var(--atd-text))] mb-3 block">
            Service Priorities (Select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {priorities.map((priority) => {
              const isSelected = (data.priorities || []).includes(priority);
              
              return (
                <TouchRipple key={priority}>
                  <div
                    onClick={() => togglePriority(priority)}
                    className={cn(
                      "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 mobile-interactive text-center",
                      isSelected
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-medium",
                      isSelected ? "text-purple-700" : "text-gray-700"
                    )}>
                      {priority}
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

const HomeownerMatchingPreview = ({ data }: { data: HomeownerOnboardingData }) => {
  const mockProviders = [
    { name: "Mike's Plumbing", rating: 4.9, specialty: "Emergency Repairs", distance: "2.3 miles" },
    { name: "Green Home Solutions", rating: 4.8, specialty: "Energy Efficiency", distance: "3.1 miles" },
    { name: "Quick Fix Maintenance", rating: 4.7, specialty: "Preventive Maintenance", distance: "1.8 miles" }
  ];

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-[hsl(var(--atd-text))] mb-2">
          Your Personalized Provider Matches
        </h4>
        <p className="text-sm text-[hsl(var(--atd-text-muted))]">
          Based on your {data.propertyType}, budget, and priorities
        </p>
      </div>

      <div className="space-y-3">
        {mockProviders.map((provider, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-semibold text-[hsl(var(--atd-text))]">{provider.name}</h5>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600">{provider.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Specialty: {provider.specialty}</span>
              <span>{provider.distance}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="font-semibold text-blue-700 mb-2">Your Dashboard Preview</h5>
        <div className="space-y-2 text-sm text-blue-600">
          <div>✓ Provider network: 3 matched professionals</div>
          <div>✓ Budget tracking: {data.budget} range set</div>
          <div>✓ Priority services: {(data.priorities || []).length} selected</div>
          <div>✓ Property profile: {data.propertyType} in {data.location}</div>
        </div>
      </div>
    </div>
  );
};

export { HomeownerPropertySetup, HomeownerServiceNeeds, HomeownerMatchingPreview };