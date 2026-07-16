import {
  getAllProperties,
  getPropertyById,
  getFeaturedProperties,
  getRelatedProperties,
} from "@/db";
import type { Property } from "@/types";

export const propertyService = {
  getAll(): Property[] {
    return getAllProperties() as Property[];
  },

  getById(id: string): Property | undefined {
    return (getPropertyById(id) as Property) ?? undefined;
  },

  getFeatured(): Property[] {
    return getFeaturedProperties() as Property[];
  },

  getRelated(currentId: string, limit = 3): Property[] {
    return getRelatedProperties(currentId, limit) as Property[];
  },
};
