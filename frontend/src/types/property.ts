export interface Property {
  id: string;

  title: string;
  location: string;

  type: string;

  description?: string;

  price: number;

  bedrooms: number;
  bathrooms: number;
  area: number;

  image: string;

  gallery?: string[];

  featured: boolean;
}