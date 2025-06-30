
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, loading = false, error = false, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
            // Mobile-first focus states
            "mobile-focus min-h-[48px] text-base", // Prevent zoom on iOS
            // Error states
            error && "border-red-500 focus-visible:ring-red-500",
            // Loading states
            loading && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="mobile-loading" />
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
