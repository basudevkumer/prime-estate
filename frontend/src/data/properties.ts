import { Property } from "@/types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Ocean View Villa",
    location: "Miami, Florida",
    type: "Villa",
    description:
      "Experience coastal living at its finest in this stunning oceanfront villa. Floor-to-ceiling windows frame panoramic ocean views, while a private infinity pool and terrace create the ultimate indoor-outdoor lifestyle.",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 6200,
    image: "/images/property-1.jpg",
    gallery: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
    ],
    featured: true,
  },

  {
    id: "2",
    title: "Skyline Penthouse",
    location: "New York City",
    type: "Penthouse",
    description:
      "Perched high above Manhattan, this breathtaking penthouse offers unobstructed skyline views, designer finishes, and a private rooftop terrace. The epitome of urban luxury living.",
    price: 6200000,
    bedrooms: 4,
    bathrooms: 4,
    area: 5400,
    image: "/images/property-2.jpg",
    gallery: [
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
    ],
    featured: true,
  },

  {
    id: "3",
    title: "Modern Smart Residence",
    location: "Los Angeles",
    type: "Villa",
    description:
      "A masterpiece of modern architecture, this smart home features cutting-edge automation, sustainable design, and serene garden views. Every detail has been crafted for the discerning buyer.",
    price: 3800000,
    bedrooms: 6,
    bathrooms: 5,
    area: 7100,
    image: "/images/property-3.jpg",
    gallery: [
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-1.jpg",
    ],
    featured: true,
  },
];
