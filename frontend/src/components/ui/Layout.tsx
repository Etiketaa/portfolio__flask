import { Children } from "react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type Spacing = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16";

const gapClasses: Record<Spacing, string> = {
  "0": "gap-0",
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "8": "gap-8",
  "10": "gap-10",
  "12": "gap-12",
  "16": "gap-16",
};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-none",
};

export function Container({
  as: Tag = "div",
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", containerSizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: Spacing;
  children?: ReactNode;
}

export function Stack({ gap = "4", className, children, ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}

interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: Spacing;
  align?: "start" | "center" | "end" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  children?: ReactNode;
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export function Inline({
  gap = "4",
  align = "center",
  justify = "start",
  wrap = false,
  className,
  children,
  ...props
}: InlineProps) {
  return (
    <div
      className={cn(
        "flex",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: Spacing;
  children?: ReactNode;
}

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export function Grid({ cols = 3, gap = "6", className, children, ...props }: GridProps) {
  return (
    <div className={cn("grid", gridCols[cols], gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}

export function VStack(props: StackProps) {
  return <Stack {...props} />;
}

export function HStack(props: InlineProps) {
  return <Inline {...props} />;
}

export function Split({
  left,
  right,
  className,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {left}
      {right}
    </div>
  );
}

export function Spacer() {
  return <div className="flex-1" aria-hidden="true" />;
}

export function Show({
  when,
  children,
}: {
  when: unknown;
  children: ReactNode;
}) {
  return <>{when ? children : null}</>;
}

export function For<T>({
  each,
  children,
}: {
  each: T[] | undefined | null;
  children: (item: T, index: number) => ReactNode;
}) {
  return <>{Children.map(each || [], children)}</>;
}
