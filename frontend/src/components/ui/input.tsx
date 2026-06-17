import * as React from "react";

import { cn } from "@/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input =
  React.forwardRef<
    HTMLInputElement,
    InputProps
  >(({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full",
          "h-12",
          "rounded-2xl",
          "border",
          "border-white/10",
          "bg-white/5",
          "px-4",
          "text-white",
          "outline-none",
          "transition-all",
          "placeholder:text-slate-400",
          "focus:border-blue-500",
          "focus:ring-2",
          "focus:ring-blue-500/20",
          className
        )}
        {...props}
      />
    );
  });

Input.displayName = "Input";