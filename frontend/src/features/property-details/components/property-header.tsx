"use client";

import {
  RiHeartLine,
  RiMapPinLine,
  RiShareForwardLine,
  RiHotelBedLine,
} from "react-icons/ri";

import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";

import { Property } from "@/types";
import { formatPrice } from "@/utils";

interface PropertyHeaderProps {
  property: Property;
}

export function PropertyHeader({
  property,
}: PropertyHeaderProps) {
  return (
    <section
      className="
      mt-12
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-start
        lg:justify-between
        gap-8
        "
      >
        {/* LEFT */}
        <div>
          {property.featured && (
            <span
              className="
              inline-flex
              px-4
              py-2
              rounded-full
              text-xs
              font-medium
              bg-blue-500/20
              border
              border-blue-500/30
              text-blue-400
              "
            >
              Featured Property
            </span>
          )}

          <h1
            className="
            mt-4
            text-5xl
            font-bold
            "
          >
            {property.title}
          </h1>

          <div
            className="
            mt-4
            flex
            items-center
            gap-2
            text-slate-400
            "
          >
            <RiMapPinLine />

            <span>
              {property.location}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
          flex
          flex-col
          items-start
          lg:items-end
          gap-5
          "
        >
          <div
            className="
            text-gradient
            text-5xl
            font-bold
            "
          >
            {formatPrice(property.price)}
          </div>

          <div
            className="
            flex
            gap-3
            "
          >
            <button
              className="
              h-12
              px-5
              rounded-2xl
              glass-card
              flex
              items-center
              gap-2
              "
            >
              <RiHeartLine />
              Save
            </button>

            <button
              className="
              h-12
              px-5
              rounded-2xl
              glass-card
              flex
              items-center
              gap-2
              "
            >
              <RiShareForwardLine />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* FACTS */}
      <div
        className="
        mt-10
        grid
        grid-cols-3
        gap-6
        "
      >
        <div className="glass-card p-6">
          <div className="flex items-center gap-2">
            <RiHotelBedLine />
            Bedrooms
          </div>

          <div
            className="
            mt-3
            text-3xl
            font-bold
            "
          >
            {property.bedrooms}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2">
            <PiBathtub />
            Bathrooms
          </div>

          <div
            className="
            mt-3
            text-3xl
            font-bold
            "
          >
            {property.bathrooms}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2">
            <TbRulerMeasure />
            Area
          </div>

          <div
            className="
            mt-3
            text-3xl
            font-bold
            "
          >
            {property.area}
          </div>
        </div>
      </div>
    </section>
  );
}