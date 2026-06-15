import { create } from "zustand";

interface WishlistStore {
  propertyIds: string[];

  addToWishlist: (id: string) => void;

  removeFromWishlist: (id: string) => void;
}

export const useWishlistStore = create<WishlistStore>((set) => ({
  propertyIds: [],

  addToWishlist: (id) =>
    set((state) => {
      if (state.propertyIds.includes(id)) {
        return state;
      }

      return {
        propertyIds: [...state.propertyIds, id],
      };
    }),

  removeFromWishlist: (id) =>
    set((state) => ({
      propertyIds: state.propertyIds.filter((item) => item !== id),
    })),
}));
