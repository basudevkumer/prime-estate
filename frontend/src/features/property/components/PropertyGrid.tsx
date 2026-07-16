"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { PropertyCard } from "@/components/ui";
import { usePropertyFilterStore } from "@/store";
import { usePropertyViewStore } from "@/store";
import type { Property } from "@/types";

export function PropertyGrid() {
  const { view, sort } = usePropertyViewStore();
  const { location, propertyType, priceRange, bedrooms, bathrooms } =
    usePropertyFilterStore();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const fetched = useRef(false);

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (location) params.set("location", location);
      if (propertyType && propertyType !== "All")
        params.set("type", propertyType);
      if (bedrooms && bedrooms !== "Any") params.set("bedrooms", bedrooms);
      if (bathrooms && bathrooms !== "Any") params.set("bathrooms", bathrooms);
      if (priceRange && priceRange !== "Any") {
        // Convert price range label to min/max values
        const rangeMap: Record<string, { min?: string; max?: string }> = {
          "Under $500K": { max: "500000" },
          "$500K - $1M": { min: "500000", max: "1000000" },
          "$1M - $2M": { min: "1000000", max: "2000000" },
          "$2M - $5M": { min: "2000000", max: "5000000" },
          "$5M+": { min: "5000000" },
        };
        const range = rangeMap[priceRange];
        if (range) {
          if (range.min) params.set("minPrice", range.min);
          if (range.max) params.set("maxPrice", range.max);
        }
      }
      if (sort) params.set("sort", sort);
      params.set("limit", "36");

      const res = await fetch(`/api/properties?${params.toString()}`);
      const data = await res.json();
      setProperties(data.properties || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error("Failed to fetch properties:", err);
    } finally {
      setLoading(false);
    }
  }, [location, propertyType, bedrooms, bathrooms, priceRange, sort]);

  useEffect(() => {
    fetched.current = true;
    fetchProperties();
  }, [fetchProperties]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 text-slate-400">{total} Properties Found</div>

      {view === "grid" ? (
        <VirtuosoGrid
          style={{
            height: properties.length > 6 ? "1600px" : "auto",
            overflow: properties.length > 6 ? "auto" : "visible",
          }}
          totalCount={properties.length}
          overscan={200}
          components={{
            List: ({ children, ...props }) => (
              <div
                {...props}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {children}
              </div>
            ),
          }}
          itemContent={(index) => {
            const property = properties[index];
            return (
              <PropertyCard key={property.id} property={property} view="grid" />
            );
          }}
        />
      ) : (
        <div className="flex flex-col gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} view="list" />
          ))}
        </div>
      )}
    </>
  );
}
