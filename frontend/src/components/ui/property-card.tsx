import Image from "next/image";

import {
  RiHeartLine,
  RiHotelBedLine,
} from "react-icons/ri";

import {
  PiBathtub,
} from "react-icons/pi";

import {
  TbRulerMeasure,
} from "react-icons/tb";

import { Property } from "@/types";

import { formatPrice } from "@/utils";

import { Card } from "./card";

interface PropertyCardProps {
  property: Property;
  view?: "grid" | "list";
}

export function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Card
      className="
      overflow-hidden
      group
      "
    >
      <div
        className="
        relative
        h-72
        "
      >
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

        <button
          className="
          absolute
          top-4
          right-4
          h-11
          w-11
          rounded-full
          bg-black/30
          backdrop-blur-md
          flex
          items-center
          justify-center
          "
        >
          <RiHeartLine />
        </button>
      </div>

      <div className="p-6">
        <p
          className="
          text-slate-400
          text-sm
          "
        >
          {property.location}
        </p>

        <h3
          className="
          mt-2
          font-semibold
          text-xl
          "
        >
          {property.title}
        </h3>

        <div
          className="
          mt-4
          text-gradient
          text-2xl
          font-bold
          "
        >
          {formatPrice(
            property.price
          )}
        </div>

        <div
          className="
          mt-5
          flex
          justify-between
          text-slate-400
          text-sm
          "
        >
          <span className="flex items-center gap-1">
            <RiHotelBedLine />
            {property.bedrooms}
          </span>

          <span className="flex items-center gap-1">
            <PiBathtub />
            {property.bathrooms}
          </span>

          <span className="flex items-center gap-1">
            <TbRulerMeasure />
            {property.area} sqft
          </span>
        </div>
      </div>
    </Card>
  );
}