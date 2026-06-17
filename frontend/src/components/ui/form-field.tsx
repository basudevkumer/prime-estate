import * as React from "react";

import { cn } from "@/utils";

interface FormFieldProps {
  label: string;

  error?: string;

  children: React.ReactNode;

  className?: string;
}

export function FormField({
  label,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        className
      )}
    >
      <p className="text-sm font-medium text-white">
        {label}
      </p>

      {children}

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}