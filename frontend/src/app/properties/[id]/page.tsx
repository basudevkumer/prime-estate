import { notFound } from "next/navigation";

import { propertyService } from "@/services/property.service";

import { PropertyHeader } from "@/features/property-details/components/PropertyHeader";
import { PropertyFeatures } from "@/features/property-details/components/PropertyFeatures";
import { PropertySidebar } from "@/features/property-details/components/PropertySidebar";
import type { Metadata } from "next";
import { PropertyMap } from "@/features/property-details/components/PropertyMap";

import { RelatedProperties } from "@/features/property-details/components/RelatedProperties";
export const metadata: Metadata = {
  title: "Property Details",
};
import { Gallery } from "@/features/property-details/components/Gallery";
interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
import { MortgageCalculator } from "@/features/property-details/components/MortgageCalculator";

import { ScheduleVisitModal } from "@/features/property-details/components/ScheduleVisitModal";
export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = propertyService.getById(id);
  const relatedProperties = propertyService.getRelated(id);
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
      <div className="mt-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <PropertyFeatures property={property} />
        </div>

        <PropertySidebar />
      </div>
      <PropertyMap location={property.location} />
      <MortgageCalculator />

      <div className="mt-16 flex justify-center">
        <ScheduleVisitModal />
      </div>
      <RelatedProperties properties={relatedProperties} />
      <PropertyReviews />
    </main>
  );
}
