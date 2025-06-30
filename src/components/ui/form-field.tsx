
import * as React from "react"
import { cn } from "@/lib/utils"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  error?: string
  required?: boolean
  loading?: boolean
  children: React.ReactNode
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, error, required, loading, children, ...props }, ref) => {
    const fieldId = React.useId()
    
    return (
      <div
        ref={ref}
        className={cn("space-y-2 animate-mobile-fade-in", className)}
        {...props}
      >
        {label && (
          <label
            htmlFor={fieldId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error && "text-red-600",
              required && "after:content-['*'] after:ml-0.5 after:text-red-500"
            )}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {React.cloneElement(children as React.ReactElement, {
            id: fieldId,
            error: !!error,
            loading,
            "aria-invalid": !!error,
            "aria-describedby": error ? `${fieldId}-error` : undefined,
          })}
        </div>
        
        {error && (
          <div
            id={`${fieldId}-error`}
            className="flex items-center space-x-1 text-sm text-red-600 animate-mobile-slide-up"
            role="alert"
          >
            <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
