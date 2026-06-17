import * as React from "react";

import { cn } from "@/utils";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        "rounded-[32px]",
        "border",
        "border-white/10",
        "transition-all",
        "duration-300",
        "hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}