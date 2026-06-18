import { create } from "zustand";

type ViewMode = "grid" | "list";

type SortType =
  | "newest"
  | "price_low"
  | "price_high";

interface PropertyViewState {
  view: ViewMode;
  sort: SortType;

  setView: (view: ViewMode) => void;
  setSort: (sort: SortType) => void;
}

export const usePropertyViewStore =
  create<PropertyViewState>((set) => ({
    view: "grid",
    sort: "newest",

    setView: (view) => set({ view }),
    setSort: (sort) => set({ sort }),
  }));