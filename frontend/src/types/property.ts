export interface Property {
  id: string;

  title: string;

  slug: string;

  description: string;

  price: number;

  location: string;

  city: string;

  country: string;

  bedrooms: number;

  bathrooms: number;

  area: number;

  image: string;

  gallery: string[];

  featured: boolean;

  category: string;

  type: "sale" | "rent";

  createdAt: string;
}