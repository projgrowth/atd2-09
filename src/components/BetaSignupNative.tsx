import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormField } from "@/components/ui/form-field"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  fullName: string
  phoneNumber: string
  zipCode: string
  email: string
  ownershipStatus: string
  currentServices: string
  oneThingSolve: string
}

interface BetaSignupNativeProps {
  className?: string
  variant?: "hero" | "mid" | "footer"
}

const BetaSignupNative = ({ className, variant = "hero" }: BetaSignupNativeProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    zipCode: "",
    email: "",
    ownershipStatus: "",
    currentServices: "",
    oneThingSolve: ""
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    
    try {
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          phoneNumber: "",
          zipCode: "",
          email: "",
          ownershipStatus: "",
          currentServices: "",
          oneThingSolve: ""
        })
        setSubmitted(false)
      }, 3000)
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className={cn("max-w-md mx-auto text-center", className)}>
        <div className="card-enhanced p-8">
          <div className="mb-6">
            <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-enhanced mb-2">Thanks for submitting!</h3>
            <p className="text-muted-enhanced font-semibold">We'll reach out shortly to get you set up with early access.</p>
          </div>
        </div>
      </div>
    )
  }

  const isCompact = variant === "footer"

  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Required Fields */}
        <div className={cn("grid gap-4", isCompact ? "grid-cols-1" : "grid-cols-1")}>
          <FormField label="Full Name" error={errors.fullName} required>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              error={!!errors.fullName}
            />
          </FormField>

          <FormField label="Phone Number" error={errors.phoneNumber} required>
            <Input
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phoneNumber}
              onChange={handleInputChange('phoneNumber')}
              error={!!errors.phoneNumber}
            />
          </FormField>

          <FormField label="Zip Code" error={errors.zipCode} required>
            <Input
              type="text"
              placeholder="12345"
              value={formData.zipCode}
              onChange={handleInputChange('zipCode')}
              error={!!errors.zipCode}
            />
          </FormField>

          <FormField label="Email Address" error={errors.email} required>
            <Input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
            />
          </FormField>
        </div>

        {!isCompact && (
          <>
            {/* Optional Fields */}
            <div className="pt-4 border-t border-gray-200">
              <FormField label="Do you own or rent your home?">
                <select
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.ownershipStatus}
                  onChange={handleInputChange('ownershipStatus')}
                >
                  <option value="">Select...</option>
                  <option value="own">Own</option>
                  <option value="rent">Rent</option>
                  <option value="other">Other</option>
                </select>
              </FormField>

              <FormField label="What home services do you currently use?">
                <Input
                  type="text"
                  placeholder="Cleaning, landscaping, HVAC, etc."
                  value={formData.currentServices}
                  onChange={handleInputChange('currentServices')}
                />
              </FormField>

              <FormField label="If we could solve one thing for you today, what would it be?">
                <Textarea
                  placeholder="Tell us your biggest home management challenge..."
                  value={formData.oneThingSolve}
                  onChange={handleInputChange('oneThingSolve')}
                  className="min-h-[100px]"
                />
              </FormField>
            </div>
          </>
        )}

        <Button
          type="submit"
          className="w-full premium-button text-lg py-6"
          size="lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Join Beta Program"}
        </Button>
      </form>
    </div>
  )
}

export { BetaSignupNative }