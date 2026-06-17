"use client";

import Link from "next/link";

import { useState } from "react";

import {
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

import { NAVIGATION_LINKS } from "@/constants";

import { Button } from "@/components/ui";

import { Logo } from "./logo";

import { MobileMenu } from "./mobile-menu";


export function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      border-b
      border-white/10
      bg-[#080B14]/80
    "
    >
      <div
        className="
        container-premium
        h-20
        flex
        items-center
        justify-between
      "
      >
        <Logo />

        {/* Desktop */}

        <nav
          className="
          hidden
          lg:flex
          items-center
          gap-8
        "
        >
          {NAVIGATION_LINKS.map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                text-slate-300
                hover:text-white
                transition-colors
              "
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right */}

        <div
          className="
          flex
          items-center
          gap-4
        "
        >
          <Button
            size="sm"
            variant="gradient"
            className="hidden lg:flex"
          >
            List Property
          </Button>

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="lg:hidden"
          >
            {open ? (
              <RiCloseLine
                size={26}
              />
            ) : (
              <RiMenu3Line
                size={26}
              />
            )}
          </button>
        </div>
      </div>

      <div className="container-premium relative">
        <MobileMenu
          open={open}
        />
      </div>
    </header>
  );
}