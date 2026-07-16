import { agents } from "@/data/agents";
import { AgentCard } from "./agent-card";

export default function AgentsPage() {
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

      {/* Agents Grid */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
