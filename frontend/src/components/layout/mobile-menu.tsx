"use client";

import { NAVIGATION_LINKS } from "@/constants/navigation";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
}

export function MobileMenu({ open }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="
      glass-card
      absolute
      top-full
      left-0
      right-0
      mt-4
      p-6
      lg:hidden
    "
    >
      <div
        className="
        flex
        flex-col
        gap-4
      "
      >
        {NAVIGATION_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
