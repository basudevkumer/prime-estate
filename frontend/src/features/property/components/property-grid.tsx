import {
  properties,
} from "@/data";

import {
  PropertyCard,
} from "@/components/ui";

export function PropertyGrid() {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
      "
    >
      {properties.map(
        (property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        )
      )}
    </div>
  );
}