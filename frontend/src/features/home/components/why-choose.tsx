import {
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiGlobalLine,
  RiBarChart2Line,
} from "react-icons/ri";

import { FeatureCard } from "@/components/ui";

const features = [
  {
    icon: <RiShieldCheckLine />,
    title: "Secure Transactions",
    description:
      "End-to-end encrypted property deals with full legal protection.",
  },
  {
    icon: <RiCustomerService2Line />,
    title: "24/7 Expert Support",
    description:
      "Dedicated real estate experts available anytime you need help.",
  },
  {
    icon: <RiGlobalLine />,
    title: "Global Listings",
    description: "Access premium properties from top cities worldwide.",
  },
  {
    icon: <RiBarChart2Line />,
    title: "Market Insights",
    description: "Real-time analytics to help you make smarter investments.",
  },
];

export function WhyChoose() {
  return (
    <section
      className="
      section-padding
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[600px]
        bg-purple-500/10
        blur-[160px]
        rounded-full
        "
      />

      <div className="container-premium relative z-10">
        {/* Header */}

        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
            Why Choose Us
          </p>

          <h2 className="heading-2 font-heading mt-4">
            Built for Modern Real Estate
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We combine technology, trust, and luxury experience to redefine real
            estate investment.
          </p>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={<span className="text-3xl text-blue-400">{item.icon}</span>}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
