import { notFound } from "next/navigation";

import { propertyService } from "@/services/property.service";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Details",
};

interface PropertyDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property =
    propertyService.getById(id);

  if (!property) {
    notFound();
  }

  return (
    <main className="container-premium  py-20">
      <h1 className="text-5xl font-bold">
        {property.title}
      </h1>

      <p className="mt-4 text-slate-400">
        {property.location}
      </p>
    </main>
  );
}