"use client";

import { Button } from "@/components/ui";
import { ScheduleVisitModal } from "./schedule-visit-modal";
export function InquiryForm() {
  return (
    <div
      className="
      glass-card
      rounded-[32px]
      p-8
      mt-8
      "
    >
      <h3 className="text-2xl font-semibold">
        Interested?
      </h3>

      <p className="text-slate-400 mt-2">
        Contact our agent today.
      </p>

      <div className="mt-6 space-y-4">
        <input
          placeholder="Your Name"
          className="input"
        />

        <input
          placeholder="Email"
          className="input"
        />

        <input
          placeholder="Phone"
          className="input"
        />

        <textarea
          rows={5}
          placeholder="Message"
          className="input resize-none"
        />

        <Button
          variant="gradient"
          fullWidth
        >
          Send Inquiry
        </Button>

      <ScheduleVisitModal />
      </div>
    </div>
  );
}