import { useState } from "react";
import { cn, getInitials } from "../../lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "away" | "busy";
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-14 h-14 text-lg",
  xl: "w-20 h-20 text-2xl",
};

const statusClasses = {
  online: "bg-success-500",
  offline: "bg-neutral-400",
  away: "bg-warning-500",
  busy: "bg-error-500",
};

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  status,
  className,
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  return (
    <div className={cn("relative inline-block flex-shrink-0", className)} {...props}>
      <div
        className={cn(
          "rounded-full overflow-hidden bg-surface-muted text-content-muted",
          "flex items-center justify-center font-semibold select-none",
          sizeClasses[size]
        )}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <span aria-hidden="true">{name ? getInitials(name) : "?"}</span>
        )}
        {name && !showImage && <span className="sr-only">{name}</span>}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-surface",
            statusClasses[status],
            size === "xs" || size === "sm" ? "w-2 h-2" : "w-3 h-3"
          )}
          aria-label={`Estado: ${status}`}
        />
      )}
    </div>
  );
}
