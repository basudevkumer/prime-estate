"use client";

import ThemeProvider from "./theme-provider";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      {children}

      <Toaster
        position="top-right"
      />
    </ThemeProvider>
  );
}