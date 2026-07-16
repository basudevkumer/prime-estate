"use client";

import {
  PROPERTY_TYPES,
  PRICE_RANGES,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
} from "@/constants";

import { usePropertyFilterStore } from "@/store";

import { Button } from "@/components/ui";
import { cn } from "@/utils";

export function PropertyFilters() {
  const {
    location,
    propertyType,
    priceRange,
    bedrooms,
    bathrooms,

    setLocation,
    setPropertyType,
    setPriceRange,
    setBedrooms,
    setBathrooms,

    clearFilters,
  } = usePropertyFilterStore();

  return (
    <aside className={cn("glass-card", "p-6", "sticky", "top-28")}>
      <div className={cn("flex", "items-center", "justify-between", "mb-6")}>
        <h3 className={cn("text-lg", "font-semibold")}>Filters</h3>

        <button
          onClick={clearFilters}
          className={cn("text-sm", "text-blue-400")}
        >
          Clear
        </button>
      </div>

      <div className="space-y-5">
        {/* Location */}

        <div>
          <label className={cn("block", "mb-2", "text-sm", "text-slate-400")}>
            Location
          </label>

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Miami"
            className={cn(
              "w-full",
              "h-12",
              "px-4",
              "rounded-2xl",
              "bg-white/5",
              "border",
              "border-white/10",
              "outline-none",
            )}
          />
        </div>

        {/* Property Type */}

        <div>
          <label className={cn("block", "mb-2", "text-sm", "text-slate-400")}>
            Property Type
          </label>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className={cn(
              "w-full",
              "h-12",
              "px-4",
              "rounded-2xl",
              "bg-white/5",
              "border",
              "border-white/10",
            )}
          >
            {PROPERTY_TYPES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Price */}

        <div>
          <label className={cn("block", "mb-2", "text-sm", "text-slate-400")}>
            Budget
          </label>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className={cn(
              "w-full",
              "h-12",
              "px-4",
              "rounded-2xl",
              "bg-white/5",
              "border",
              "border-white/10",
            )}
          >
            {PRICE_RANGES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}

        <div>
          <label className={cn("block", "mb-2", "text-sm", "text-slate-400")}>
            Bedrooms
          </label>

          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className={cn(
              "w-full",
              "h-12",
              "px-4",
              "rounded-2xl",
              "bg-white/5",
              "border",
              "border-white/10",
            )}
          >
            {BEDROOM_OPTIONS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}

        <div>
          <label className={cn("block", "mb-2", "text-sm", "text-slate-400")}>
            Bathrooms
          </label>

          <select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            className={cn(
              "w-full",
              "h-12",
              "px-4",
              "rounded-2xl",
              "bg-white/5",
              "border",
              "border-white/10",
            )}
          >
            {BATHROOM_OPTIONS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <Button variant="gradient" fullWidth>
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
