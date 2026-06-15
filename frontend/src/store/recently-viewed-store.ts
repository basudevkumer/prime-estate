import { create } from "zustand";

interface RecentlyViewedStore {
  propertyIds: string[];

  addProperty: (
    id: string
  ) => void;
}

export const useRecentlyViewedStore =
  create<RecentlyViewedStore>(
    (set) => ({
      propertyIds: [],

      addProperty: (
        id
      ) =>
        set((state) => ({
          propertyIds: [
            id,
            ...state.propertyIds.filter(
              (item) =>
                item !== id
            ),
          ].slice(0, 10),
        })),
    })
  );