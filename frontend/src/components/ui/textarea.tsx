import * as React from "react";

import { cn } from "@/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full",
          "min-h-[140px]",
          "rounded-2xl",
          "border",
          "border-white/10",
          "bg-white/5",
          "px-4",
          "py-3",
          "text-white",
          "outline-none",
          "transition-all",
          "placeholder:text-slate-400",
          "focus:border-blue-500",
          "focus:ring-2",
          "focus:ring-blue-500/20",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
