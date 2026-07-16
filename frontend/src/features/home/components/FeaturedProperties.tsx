import { PropertyCard } from "@/components/ui";

import { getFeaturedProperties } from "@/db";

export function FeaturedProperties() {
  const properties = getFeaturedProperties();
  return (
    <section className="section-padding">
      <div className="container-premium">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-400 mb-3">Featured Listings</p>

            <h2 className="heading-2 font-heading">Exceptional Properties</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
