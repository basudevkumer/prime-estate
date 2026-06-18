import { Accordion } from "@/components/ui";

import { faqs } from "@/data";

export function FAQSection() {
  return (
    <section
      className="
      section-padding
      relative
      overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        bg-violet-500/5
        blur-[160px]
        pointer-events-none
        "
      />

      <div className="container-premium relative z-10">
        {/* Header */}

        <div
          className="
          text-center
          mb-12
          "
        >
          <p
            className="
            text-blue-400
            uppercase
            tracking-[0.2em]
            text-sm
            "
          >
            FAQ
          </p>

          <h2
            className="
            heading-2
            font-heading
            mt-4
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Everything you need to know about buying, selling, and investing
            through Prime Estate.
          </p>
        </div>

        {/* FAQ Grid */}

        <div
          className="
          max-w-4xl
          mx-auto
          space-y-4
          "
        >
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
