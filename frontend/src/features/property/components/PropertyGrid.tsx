"use client";

import { PropertyCard } from "@/components/ui";
import { properties } from "@/data";
import { useFilteredProperties } from "@/hooks/use-filtered-properties";
import { usePropertyViewStore } from "@/store";

export function PropertyGrid() {
  const { view, sort } = usePropertyViewStore();

  let sorted = [...properties];

  if (sort === "price_low") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  // mock newest (id based)
  if (sort === "newest") {
    sorted.sort((a, b) => Number(b.id) - Number(a.id));
  }

  return (
    <>
      <div className="mb-6 text-slate-400">
        {sorted.length} Properties Found
      </div>

      <div
        className={
          view === "grid"
            ? "grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            : "flex flex-col gap-6"
        }
      >
        {sorted.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            view={view} // future use (list UI)
          />
        ))}
      </div>
    </>
  );
}
