import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Property } from "@/types";
import toast from "react-hot-toast";

interface WishlistState {
  items: Property[];

  toggleWishlist: (property: Property) => void;
  isWishlisted: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleWishlist: (property) => {
        const exists = get().items.find((item) => item.id === property.id);

        if (exists) {
          set({
            items: get().items.filter((item) => item.id !== property.id),
          });

          toast.success(`${property.title} removed from wishlist`);

          return;
        }

        set({
          items: [...get().items, property],
        });

        toast.success(`${property.title} added to wishlist`);
      },

      isWishlisted: (id) => {
        return get().items.some((item) => item.id === id);
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "prime-estate-wishlist",
    },
  ),
);
