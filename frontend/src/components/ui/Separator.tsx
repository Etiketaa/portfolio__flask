import { cn } from "../../lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-line",
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full self-stretch",
        className
      )}
      {...props}
    />
  );
}
