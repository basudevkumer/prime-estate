import {
  PropertiesHero,
  PropertyFilters,
  PropertyToolbar,
  PropertyGrid,
} from "@/features/property";

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesHero />

      <section className="section-padding">
        <div className="container-premium">
          <div
            className="grid lg:grid-cols-12 gap-8"
          >
            {/* Sidebar */}

            <div className="lg:col-span-3">
              <PropertyFilters />
            </div>

            {/* Content */}

            <div className="lg:col-span-9">
              <PropertyToolbar />

              <PropertyGrid />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
