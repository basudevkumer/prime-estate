import { Button } from "@/components/ui";

import { RiArrowRightLine, RiCustomerService2Line } from "react-icons/ri";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glows */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full" />

      <div className="container-premium">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-violet-500/10 backdrop-blur-xl px-8 py-20 lg:px-20 text-center">
          {/* Inner Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-violet-500/5" />

          <div className="relative z-10">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
              Ready To Invest
            </p>

            <h2 className="heading-2 font-heading max-w-4xl mx-auto">
              Discover Your Next Luxury Property Today
            </h2>

            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              Explore exclusive listings, connect with verified agents, and make
              smarter property decisions with Prime Estate.
            </p>

            {/* CTA Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="lg">
                Start Exploring
                <RiArrowRightLine />
              </Button>

              <Button variant="outline" size="lg">
                <RiCustomerService2Line />
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
