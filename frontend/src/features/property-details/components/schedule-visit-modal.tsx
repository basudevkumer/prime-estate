"use client";

import { useState } from "react";

import { Button } from "@/components/ui";

export function ScheduleVisitModal() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <Button
        variant="gradient"
        onClick={() =>
          setOpen(true)
        }
      >
        Schedule Visit
      </Button>

      {open && (
        <div
          className="
          fixed
          inset-0
          bg-black/60
          backdrop-blur-sm
          flex
          items-center
          justify-center
          z-50
          "
        >
          <div
            className="
            glass-card
            w-full
            max-w-xl
            rounded-[32px]
            p-8
            "
          >
            <h2 className="text-3xl font-bold">
              Schedule Visit
            </h2>

            <div className="mt-6 space-y-4">
              <input
                placeholder="Your Name"
                className="input"
              />

              <input
                type="email"
                placeholder="Email"
                className="input"
              />

              <input
                type="date"
                className="input"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="input"
              />

              <div className="flex gap-4">
                <Button
                  variant="gradient"
                  fullWidth
                >
                  Confirm
                </Button>

                <Button
                  variant="outline"
                  fullWidth
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}