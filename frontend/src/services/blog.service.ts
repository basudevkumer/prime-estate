import { blogs } from "@/data/blogs";

export const blogService = {
  async getAll() {
    return Promise.resolve(
      blogs
    );
  },

  async getBySlug(
    slug: string
  ) {
    return Promise.resolve(
      blogs.find(
        blog =>
          blog.slug === slug
      )
    );
  },
};