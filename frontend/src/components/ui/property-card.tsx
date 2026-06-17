import Image from "next/image";

import { Property } from "@/types";

import { formatPrice } from "@/utils";

import { Card } from "./card";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3
          className="
          heading-3
          font-heading
        "
        >
          {property.title}
        </h3>

        <p
          className="
          text-slate-400
          mt-2
        "
        >
          {property.location}
        </p>

        <div
          className="
          mt-4
          text-blue-400
          font-semibold
        "
        >
          {formatPrice(
            property.price
          )}
        </div>
      </div>
    </Card>
  );
}