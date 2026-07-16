import { agents } from "@/data/agents";
import { AgentCard } from "./AgentCard";

export default function AgentsPage() {
  const totalSold = agents.reduce((sum, a) => sum + a.soldProperties, 0);
  const avgRating = (
    agents.reduce((sum, a) => sum + a.rating, 0) / agents.length
  ).toFixed(1);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="container-premium relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
              Expert Agents
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Our team of dedicated real estate professionals is here to help you
            find the perfect property.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Expert Agents", value: agents.length },
              { label: "Properties Sold", value: totalSold },
              { label: "Avg Rating", value: avgRating },
              { label: "Years Experience", value: "15+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {stat.value}
                </div>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
