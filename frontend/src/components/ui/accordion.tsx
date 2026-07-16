"use client";

import { useState } from "react";

import { RiAddLine } from "react-icons/ri";
import { cn } from "@/utils";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-medium text-white">{question}</span>

        <RiAddLine
          className={cn(
            "transition-transform",
            "duration-300",
            open ? "rotate-45" : "",
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden",
          "transition-all",
          "duration-300",
          open ? "max-h-60" : "max-h-0",
        )}
      >
        <p className="px-6 pb-6 text-slate-400">{answer}</p>
      </div>
    </div>
  );
}
