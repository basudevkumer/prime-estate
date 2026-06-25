import { properties } from "@/data";
import { Property } from "@/types";

export const propertyService = {
  getAll(): Property[] {
    return properties;
  },

  getById(id: string): Property | undefined {
    return properties.find(
      (property) => property.id === id
    );
  },

  getFeatured(): Property[] {
    return properties.filter(
      (property) => property.featured
    );
  },

  getRelated(
    currentId: string,
    limit = 3
  ): Property[] {
    return properties
      .filter(
        (property) =>
          property.id !== currentId
      )
      .slice(0, limit);
  },
};