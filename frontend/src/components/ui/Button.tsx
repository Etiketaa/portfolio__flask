import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 shadow-brand",
        secondary:
          "bg-surface-muted text-content hover:bg-neutral-200 dark:hover:bg-neutral-700 focus-visible:ring-neutral-400",
        outline:
          "border-2 border-line-strong text-content hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950 focus-visible:ring-brand-500",
        ghost:
          "text-content hover:bg-surface-muted focus-visible:ring-neutral-400",
        destructive:
          "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500",
        link: "text-brand-600 dark:text-brand-400 underline-offset-4 hover:underline focus-visible:ring-brand-500",
      },
      size: {
        xs: "px-3 py-1.5 text-xs gap-1.5",
        sm: "px-4 py-2 text-sm gap-2",
        md: "px-6 py-3 text-base gap-2",
        lg: "px-8 py-4 text-lg gap-3",
        xl: "px-10 py-5 text-xl gap-3",
        icon: "p-2",
        "icon-sm": "p-1.5",
        "icon-lg": "p-3",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, loading, leftIcon, rightIcon, disabled, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Cargando...</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="flex-shrink-0" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="flex-shrink-0" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
