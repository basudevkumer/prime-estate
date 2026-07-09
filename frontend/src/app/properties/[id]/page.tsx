import { notFound } from "next/navigation";

import { propertyService } from "@/services/property.service";

import { PropertyHeader } from "@/features/property-details/components/property-header";
import { PropertyFeatures } from "@/features/property-details/components/property-features";
import { PropertySidebar } from "@/features/property-details/components/property-sidebar";
import type { Metadata } from "next";
import { PropertyMap } from "@/features/property-details/components/property-map";

import { RelatedProperties } from "@/features/property-details/components/related-properties";
export const metadata: Metadata = {
  title: "Property Details",
};
import { Gallery } from "@/features/property-details/components/gallery";
interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
import { MortgageCalculator } from "@/features/property-details/components/mortgage-calculator";

import { ScheduleVisitModal } from "@/features/property-details/components/schedule-visit-modal";
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
      <div
        className="
  mt-20
  grid
  lg:grid-cols-3
  gap-10
  "
      >
        <div className="lg:col-span-2">
          <PropertyFeatures property={property} />
        </div>

        <PropertySidebar />
      </div>
      <PropertyMap
  location={property.location}
/>
<MortgageCalculator />

<div className="mt-16 flex justify-center">
  <ScheduleVisitModal />
</div>
<RelatedProperties
  properties={relatedProperties}
/>
    </main>
  );
}
