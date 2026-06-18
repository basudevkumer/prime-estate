import { create } from "zustand";

interface PropertyFilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
  bathrooms: string;

  setLocation: (value: string) => void;
  setPropertyType: (value: string) => void;
  setPriceRange: (value: string) => void;
  setBedrooms: (value: string) => void;
  setBathrooms: (value: string) => void;

  clearFilters: () => void;
}

export const usePropertyFilterStore =
  create<PropertyFilterState>((set) => ({
    location: "",
    propertyType: "All",
    priceRange: "Any Price",
    bedrooms: "Any",
    bathrooms: "Any",

    setLocation: (value) =>
      set({ location: value }),

    setPropertyType: (value) =>
      set({ propertyType: value }),

    setPriceRange: (value) =>
      set({ priceRange: value }),

    setBedrooms: (value) =>
      set({ bedrooms: value }),

    setBathrooms: (value) =>
      set({ bathrooms: value }),

    clearFilters: () =>
      set({
        location: "",
        propertyType: "All",
        priceRange: "Any Price",
        bedrooms: "Any",
        bathrooms: "Any",
      }),
  }));