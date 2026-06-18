"use client";

import {
  PROPERTY_TYPES,
  PRICE_RANGES,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
} from "@/constants";

import {
  usePropertyFilterStore,
} from "@/store";

import { Button } from "@/components/ui";

export function PropertyFilters() {
  const {
    location,
    propertyType,
    priceRange,
    bedrooms,
    bathrooms,
    clearFilters,
  } = usePropertyFilterStore();

  return (
    <aside
      className="
      glass-card
      p-6
      sticky
      top-28
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        mb-6
        "
      >
        <h3
          className="
          text-lg
          font-semibold
          "
        >
          Filters
        </h3>

        <button
          onClick={clearFilters}
          className="
          text-sm
          text-blue-400
          "
        >
          Clear
        </button>
      </div>

      <div className="space-y-5">

        {/* Location */}

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            text-slate-400
            "
          >
            Location
          </label>

          <input
            value={location}
            placeholder="Miami"
            className="
            w-full
            h-12
            px-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            outline-none
            "
          />
        </div>

        {/* Property Type */}

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            text-slate-400
            "
          >
            Property Type
          </label>

          <select
            value={propertyType}
            className="
            w-full
            h-12
            px-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            "
          >
            {PROPERTY_TYPES.map(
              (item) => (
                <option
                  key={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* Price */}

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            text-slate-400
            "
          >
            Budget
          </label>

          <select
            value={priceRange}
            className="
            w-full
            h-12
            px-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            "
          >
            {PRICE_RANGES.map(
              (item) => (
                <option
                  key={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* Bedrooms */}

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            text-slate-400
            "
          >
            Bedrooms
          </label>

          <select
            value={bedrooms}
            className="
            w-full
            h-12
            px-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            "
          >
            {BEDROOM_OPTIONS.map(
              (item) => (
                <option
                  key={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* Bathrooms */}

        <div>
          <label
            className="
            block
            mb-2
            text-sm
            text-slate-400
            "
          >
            Bathrooms
          </label>

          <select
            value={bathrooms}
            className="
            w-full
            h-12
            px-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            "
          >
            {BATHROOM_OPTIONS.map(
              (item) => (
                <option
                  key={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        <Button
          variant="gradient"
          fullWidth
        >
          Apply Filters
        </Button>

      </div>
    </aside>
  );
}