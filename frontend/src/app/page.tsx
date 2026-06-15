"use client";

import {
  useWishlistStore,
} from "@/store";

export default function HomePage() {
  const {
    propertyIds,
    addToWishlist,
  } = useWishlistStore();

  return (
    <main className="p-10">
      <button
        onClick={() =>
          addToWishlist("1")
        }
      >
        Add Wishlist
      </button>

      <p>
        Total:
        {propertyIds.length}
      </p>
    </main>
  );
}