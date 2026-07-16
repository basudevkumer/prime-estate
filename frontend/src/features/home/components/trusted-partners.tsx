import { partners } from "@/data";

export function TrustedPartners() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        {/* Heading */}

        <div className="text-center mb-12">
          <p className="text-slate-400 uppercase tracking-[0.2em] text-sm">
            Trusted By Industry Leaders
          </p>
        </div>

        {/* Logos */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="glass-card h-24 flex items-center justify-center hover-lift"
            >
              <span className="text-slate-300 font-semibold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
