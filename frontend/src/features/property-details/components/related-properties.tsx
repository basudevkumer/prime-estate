import { Property } from "@/types";

import { PropertyCard } from "@/components/ui/property-card";

interface RelatedPropertiesProps {
  properties: Property[];
}

export function RelatedProperties({
  properties,
}: RelatedPropertiesProps) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">
        Related Properties
      </h2>

      <div
        className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}