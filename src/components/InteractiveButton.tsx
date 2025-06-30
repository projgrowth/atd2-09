
import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { cn } from "@/lib/utils"

interface InteractiveButtonProps extends ButtonProps {
  loading?: boolean
  success?: boolean
  error?: boolean
  loadingText?: string
  successText?: string
  errorText?: string
}

const InteractiveButton = React.forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ 
    className, 
    children, 
    loading = false, 
    success = false, 
    error = false,
    loadingText,
    successText,
    errorText,
    disabled,
    ...props 
  }, ref) => {
    const [showFeedback, setShowFeedback] = React.useState(false)

    React.useEffect(() => {
      if (success || error) {
        setShowFeedback(true)
        const timer = setTimeout(() => setShowFeedback(false), 2000)
        return () => clearTimeout(timer)
      }
    }, [success, error])

    const getButtonContent = () => {
      if (loading) {
        return (
          <div className="flex items-center space-x-2">
            <LoadingSpinner size="sm" />
            <span>{loadingText || "Loading..."}</span>
          </div>
        )
      }

      if (showFeedback && success) {
        return (
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{successText || "Success!"}</span>
          </div>
        )
      }

      if (showFeedback && error) {
        return (
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{errorText || "Error"}</span>
          </div>
        )
      }

      return children
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "mobile-interactive transition-all duration-200",
          success && showFeedback && "bg-green-600 hover:bg-green-700",
          error && showFeedback && "bg-red-600 hover:bg-red-700",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {getButtonContent()}
      </Button>
    )
  }
)
InteractiveButton.displayName = "InteractiveButton"

export { InteractiveButton }
