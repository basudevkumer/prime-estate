import { create } from "zustand";

interface FilterStore {
  search: string;

  category: string;

  setSearch: (
    value: string
  ) => void;

  setCategory: (
    value: string
  ) => void;
}

export const useFilterStore =
  create<FilterStore>((set) => ({
    search: "",

    category: "",

    setSearch: (
      value
    ) =>
      set({
        search: value,
      }),

    setCategory: (
      value
    ) =>
      set({
        category: value,
      }),
  }));