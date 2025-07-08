import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface SignupData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  userType: 'homeowner' | 'provider' | 'property-manager';
  interest: string;
  message?: string;
  timestamp: string;
}

interface SignupFormProps {
  className?: string;
  userType?: 'homeowner' | 'provider' | 'property-manager';
  onSuccess?: () => void;
}

export const SignupForm = ({ className, userType = 'homeowner', onSuccess }: SignupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType,
    interest: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [submissions, setSubmissions] = useLocalStorage<SignupData[]>('atd-signups', []);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.interest) {
      newErrors.interest = "Please select your interest";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const newSubmission: SignupData = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      setSubmissions(prev => [...prev, newSubmission]);
      
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        userType,
        interest: "",
        message: ""
      });
      
      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch when ATD is ready for early access.",
      });
      
      onSuccess?.();
    } catch (err) {
      console.error('Form submission error:', err);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSelectChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (success) {
    return (
      <div className={cn("text-center p-8", className)}>
        <div className="bg-atd-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-atd-success" />
        </div>
        <h3 className="heading-tertiary mb-4 text-enhanced">Thank you!</h3>
        <p className="text-body text-muted-enhanced mobile-text-readable">
          We'll keep you updated on ATD's development and let you know when we're ready for early access.
        </p>
      </div>
    );
  }

  const interestOptions = {
    homeowner: [
      { value: "organize-home", label: "Organize my home management" },
      { value: "track-providers", label: "Track my service providers" },
      { value: "family-access", label: "Share access with family" },
      { value: "document-storage", label: "Secure document storage" },
      { value: "other", label: "Other" }
    ],
    provider: [
      { value: "client-communication", label: "Better client communication" },
      { value: "job-tracking", label: "Job progress tracking" },
      { value: "invoice-management", label: "Invoice management" },
      { value: "scheduling", label: "Scheduling tools" },
      { value: "other", label: "Other" }
    ],
    'property-manager': [
      { value: "multi-property", label: "Manage multiple properties" },
      { value: "owner-communication", label: "Owner communication" },
      { value: "vendor-coordination", label: "Vendor coordination" },
      { value: "maintenance-tracking", label: "Maintenance tracking" },
      { value: "other", label: "Other" }
    ]
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <FormField label="Full Name" error={errors.name} required>
        <Input
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange('name')}
          autoComplete="name"
        />
      </FormField>

      <FormField label="Email Address" error={errors.email} required>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange('email')}
          autoComplete="email"
        />
      </FormField>

      <FormField label="Phone Number (Optional)" error={errors.phone}>
        <Input
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          autoComplete="tel"
        />
      </FormField>

      <FormField label="I'm interested in" error={errors.interest} required>
        <Select value={formData.interest} onValueChange={handleSelectChange('interest')}>
          <SelectTrigger>
            <SelectValue placeholder="Select your primary interest" />
          </SelectTrigger>
          <SelectContent>
            {interestOptions[formData.userType].map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Tell us more (Optional)" error={errors.message}>
        <Textarea
          placeholder="Any specific features or needs you'd like us to know about?"
          value={formData.message}
          onChange={handleInputChange('message')}
          rows={3}
        />
      </FormField>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Join Early Access List"}
      </Button>
    </form>
  );
};