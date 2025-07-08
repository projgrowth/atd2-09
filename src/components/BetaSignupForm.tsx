
import { useState } from "react"
import { InteractiveButton } from "@/components/InteractiveButton"
import { FormField } from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface BetaSignupFormProps {
  className?: string
  onSubmit?: (data: { email: string; name: string }) => Promise<void>
}

const BetaSignupForm = ({ className, onSubmit }: BetaSignupFormProps) => {
  const [formData, setFormData] = useState({ email: "", name: "" })
  const [errors, setErrors] = useState<{ email?: string; name?: string }>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const validateForm = () => {
    const newErrors: { email?: string; name?: string } = {}
    
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default behavior - redirect to signup page
        window.location.href = '/signup'
        return
      }
      setSuccess(true)
      setFormData({ email: "", name: "" })
    } catch (err) {
      setError(true)
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn("space-y-4 max-w-md mx-auto", className)}
    >
      <FormField
        label="Full Name"
        error={errors.name}
        required
      >
        <Input
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange('name')}
          autoComplete="name"
        />
      </FormField>

      <FormField
        label="Email Address"
        error={errors.email}
        required
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange('email')}
          autoComplete="email"
        />
      </FormField>

      <InteractiveButton
        type="submit"
        className="w-full"
        size="lg"
        loading={loading}
        success={success}
        error={error}
        loadingText="Joining Beta..."
        successText="Welcome to Beta!"
        errorText="Try Again"
      >
        Join Beta Program
      </InteractiveButton>
    </form>
  )
}

export { BetaSignupForm }
