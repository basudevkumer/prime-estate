import { marketInsights } from "@/data";

import {
  RiArrowUpLine,
} from "react-icons/ri";

export function MarketInsights() {
  return (
    <section
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"
      />

      <div className="container-premium relative z-10">

        {/* Header */}

        <div className="mb-14">

          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
            Market Intelligence
          </p>

          <h2 className="heading-2 font-heading mt-4">
            Real Estate Market Insights
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            Stay ahead of the market with data-driven insights and investment opportunities.
          </p>

        </div>

        {/* Dashboard Layout */}

        <div
          className="grid lg:grid-cols-12 gap-8"
        >

          {/* Left Analytics */}

          <div
            className="lg:col-span-8 glass-card p-8 rounded-[32px]"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-xl font-semibold">
                  Property Growth Trend
                </h3>

                <p className="text-slate-400 mt-1">
                  Last 12 months performance
                </p>
              </div>

              <div
                className="flex items-center gap-2 text-green-400"
              >
                <RiArrowUpLine />

                18.4%
              </div>

            </div>

            {/* Fake Chart */}

            <div
              className="mt-10 h-[250px] flex items-end gap-3"
            >

              {[40, 55, 48, 70, 65, 90, 85, 110].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-full bg-gradient-to-t from-blue-500 via-cyan-500 to-violet-500"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                )
              )}

            </div>

          </div>

          {/* Right Metrics */}

          <div
            className="lg:col-span-4 space-y-4"
          >

            {marketInsights.map((item) => (
              <div
                key={item.id}
                className="glass-card p-6 rounded-[28px]"
              >

                <p className="text-slate-400 text-sm">
                  {item.label}
                </p>

                <h3
                  className="text-gradient text-3xl font-bold mt-2"
                >
                  {item.value}
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}