import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium rounded-full transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-surface-muted text-content-muted",
        brand: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
        accent: "bg-accent-500/10 text-accent-600 dark:text-accent-400",
        success: "bg-success-500/10 text-success-600",
        warning: "bg-warning-500/10 text-warning-600",
        error: "bg-error-500/10 text-error-600",
        outline: "border border-line-strong text-content-muted",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: ReactNode;
}

export function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

export { badgeVariants };
