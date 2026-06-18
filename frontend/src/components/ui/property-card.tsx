"use client";

import Image from "next/image";

import { RiHeartLine, RiHotelBedLine } from "react-icons/ri";

import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";

import { Property } from "@/types";
import { formatPrice } from "@/utils";

import { Card } from "./card";

interface PropertyCardProps {
  property: Property;
  view?: "grid" | "list";
}

export function PropertyCard({ property, view = "grid" }: PropertyCardProps) {
  // =========================
  // GRID VIEW
  // =========================
  if (view === "grid") {
    return (
      <Card className="overflow-hidden group cursor-pointer">
        {/* IMAGE */}
        <div className="relative h-72">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* FAVORITE */}
          <button
            className="
              absolute top-4 right-4
              h-11 w-11
              rounded-full
              bg-black/30
              backdrop-blur-md
              flex items-center justify-center
            "
          >
            <RiHeartLine />
          </button>

          {/* FEATURED BADGE */}
          {property.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 text-xs bg-blue-500/80 rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <p className="text-slate-400 text-sm">{property.location}</p>

          <h3 className="mt-2 font-semibold text-xl group-hover:text-blue-400 transition">
            {property.title}
          </h3>

          <div className="mt-4 text-gradient text-2xl font-bold">
            {formatPrice(property.price)}
          </div>

          {/* FEATURES */}
          <div className="mt-5 flex justify-between text-slate-400 text-sm">
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

  // =========================
  // LIST VIEW
  // =========================
  return (
    <Card className="overflow-hidden group flex">
      {/* IMAGE */}
      <div className="relative w-72 h-56 flex-shrink-0">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* FAVORITE */}
        <button
          className="
            absolute top-3 right-3
            h-10 w-10
            rounded-full
            bg-black/30
            backdrop-blur-md
            flex items-center justify-center
          "
        >
          <RiHeartLine />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <p className="text-slate-400 text-sm">{property.location}</p>

          <h3 className="mt-2 font-semibold text-2xl group-hover:text-blue-400 transition">
            {property.title}
          </h3>

          <p className="mt-3 text-slate-400 line-clamp-2">
            Luxury property in prime location with modern architecture and
            premium amenities.
          </p>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-gradient text-2xl font-bold">
            {formatPrice(property.price)}
          </div>

          <div className="flex gap-4 text-slate-400 text-sm">
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
      </div>
    </Card>
  );
}
