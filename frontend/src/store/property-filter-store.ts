import { create } from "zustand";

interface PropertyFilterState {
  location: string;

  propertyType: string;

  priceRange: string;

  bedrooms: string;

  bathrooms: string;

  clearFilters: () => void;
}

export const usePropertyFilterStore =
  create<PropertyFilterState>((set) => ({
    location: "",

    propertyType: "All",

    priceRange: "Any Price",

    bedrooms: "Any",

    bathrooms: "Any",

    clearFilters: () =>
      set({
        location: "",
        propertyType: "All",
        priceRange: "Any Price",
        bedrooms: "Any",
        bathrooms: "Any",
      }),
  }));