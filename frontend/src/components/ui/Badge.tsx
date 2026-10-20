import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "badge-brutal",
  {
    variants: {
      variant: {
        default: "badge-brutal",           // Accent pink
        primary: "badge-primary",          // Golf green
        accent: "badge-brutal",            // Accent pink
        success: "badge-success",          // Golf green
        warning: "badge-warning",          // Golf yellow
        error: "badge-error",              // Muted red
        outline: "bg-transparent border-2 border-border text-ink",
      },
      size: {
        sm: "px-2 py-0.5 text-[0.65rem]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
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
        <span className="flex-shrink-0 mr-1" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

export { badgeVariants };