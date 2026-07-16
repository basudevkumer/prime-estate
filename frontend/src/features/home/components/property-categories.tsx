import { propertyCategories } from "@/data";

export function PropertyCategories() {
  return (
    <section
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute inset-0 bg-cyan-500/5 blur-[140px] pointer-events-none"
      />

      <div className="container-premium relative z-10">

        {/* Header */}

        <div className="text-center mb-14">

          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
            Explore Categories
          </p>

          <h2 className="heading-2 font-heading mt-4">
            Find Properties by Type
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Discover luxury properties tailored to your lifestyle and investment goals.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {propertyCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-card p-6 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >

              {/* Icon */}

              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>

              {/* Title */}

              <h3 className="text-white font-semibold text-sm">
                {cat.title}
              </h3>

              {/* Count */}

              <p className="text-slate-400 text-xs mt-2">
                {cat.count}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}