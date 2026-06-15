import type { Metadata } from "next";

import { Outfit, Inter } from "next/font/google";

import Providers from "@/providers";

import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prime Estate",

  description:
    "Luxury real estate platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${outfit.variable}
          ${inter.variable}
        `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}