"use client";

import { PropertyCard } from "@/components/ui";
import { useFilteredProperties } from "@/hooks/use-filtered-properties";

export function PropertyGrid() {
  const properties = useFilteredProperties();

  if (properties.length === 0) {
    return (
      <div
        className="
        glass-card
        p-10
        text-center
        "
      >
        <h3
          className="
          text-2xl
          font-semibold
          "
        >
          No Properties Found
        </h3>

        <p
          className="
          text-slate-400
          mt-3
          "
        >
          Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="
        mb-6
        text-slate-400
        "
      >
        {properties.length} Properties Found
      </div>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}
