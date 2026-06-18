"use client";

import { RiSearchLine } from "react-icons/ri";
import { usePropertyFilterStore } from "@/store";

export function PropertyToolbar() {
  const { location, setLocation } = usePropertyFilterStore();
  return (
    <div
      className=" glass-card p-5 mb-8 flex flex-col lg:flex-row    gap-4    justify-between
      "
    >
      <div
        className=" flex    items-center  gap-3
        "
      >
        <RiSearchLine />

        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search properties..."
          className=" bg-transparent outline-none"
        />
      </div>

      <div>Sort Dropdown</div>
    </div>
  );
}
