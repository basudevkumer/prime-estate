"use client";

import { useWishlistStore } from "@/store/wishlist-store";
import { PropertyCard } from "@/components/ui/property-card";

export default function SavedPage() {
  const { items } = useWishlistStore();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Saved Properties ❤️</h1>

      {items.length === 0 ? (
        <p className="text-slate-400">No saved properties yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
