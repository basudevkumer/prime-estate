import { notFound } from "next/navigation";

import { propertyService } from "@/services/property.service";

import { PropertyHeader } from "@/features/property-details/components/property-header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details",
};
import { Gallery } from "@/features/property-details/components/gallery";
interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = propertyService.getById(id);

  if (!property) {
    notFound();
  }

  const galleryImages = [
    property.image,
    property.image,
    property.image,
    property.image,
  ];

  return (
    <main className="container-premium  py-16">
      <Gallery images={galleryImages} />

      <PropertyHeader property={property} />
    </main>
  );
}
