"use client";

import { useWishlistStore } from "@/store/wishlist-store";
import { PropertyCard } from "@/components/ui/PropertyCard";

export default function SavedPage() {
  const { items } = useWishlistStore();

  return (
    <section className="  py-10">
      <div className="container-premium">
        <h1 className="text-3xl  font-bold mb-6">Saved Properties ❤️</h1>

        {items.length === 0 ? (
          <div className="glass-card p-10 text-center">
            <h3 className="text-2xl font-semibold">No Saved Properties</h3>

            <p className="mt-3 text-slate-400">
              Start saving luxury properties to see them here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
