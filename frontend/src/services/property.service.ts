import { properties } from "@/data/properties";

export const propertyService = {
  async getAll() {
    return Promise.resolve(properties);
  },

  async getFeatured() {
    return Promise.resolve(
      properties.filter(
        property => property.featured
      )
    );
  },

  async getBySlug(
    slug: string
  ) {
    return Promise.resolve(
      properties.find(
        property =>
          property.slug === slug
      )
    );
  },
};