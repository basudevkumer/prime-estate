"use client";

import { properties } from "@/data";
import { usePropertyFilterStore } from "@/store";

export function useFilteredProperties() {
  const {
    location,
    propertyType,
    priceRange,
    bedrooms,
    bathrooms,
  } = usePropertyFilterStore();

  return properties.filter((property) => {
    const matchesLocation =
      !location ||
      property.location
        .toLowerCase()
        .includes(
          location.toLowerCase()
        );

    const matchesType =
      propertyType === "All" ||
      property.type === propertyType;

    const matchesBedrooms =
      bedrooms === "Any" ||
      property.bedrooms >=
        Number(
          bedrooms.replace("+", "")
        );

    const matchesBathrooms =
      bathrooms === "Any" ||
      property.bathrooms >=
        Number(
          bathrooms.replace("+", "")
        );

    const matchesPrice =
      priceRange === "Any Price"
        ? true
        : property.price >=
          Number(
            priceRange
              .replace("$", "")
              .replace("M+", "000000")
              .replace("K+", "000")
          );

    return (
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesBathrooms &&
      matchesPrice
    );
  });
}