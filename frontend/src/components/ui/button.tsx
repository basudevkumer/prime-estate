import * as React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",

    "font-medium",

    "transition-all",

    "duration-300",

    "rounded-full",

    "disabled:pointer-events-none",

    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",

        secondary:
          "bg-white/5 text-white border border-white/10 hover:bg-white/10",

        ghost: "text-white hover:bg-white/5",

        outline:
          "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",

        gradient:
          "bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 text-white shadow-[0_0_30px_rgba(59,130,246,.3)] hover:scale-[1.02]",
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6",

        lg: "h-14 px-8 text-lg",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "gradient";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  loading?: boolean;
}

export function Button({
  className,

  variant,

  size,

  fullWidth,

  loading,

  children,

  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
