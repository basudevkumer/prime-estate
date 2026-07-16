"use client";

import { RiSearchLine, RiGridFill, RiListCheck } from "react-icons/ri";

import { usePropertyFilterStore } from "@/store";

import { usePropertyViewStore } from "@/store";

export function PropertyToolbar() {
  const { location, setLocation } = usePropertyFilterStore();

  const { view, setView, sort, setSort } = usePropertyViewStore();

  return (
    <div className="glass-card p-5 mb-8 flex flex-col lg:flex-row gap-4 justify-between">
      {/* SEARCH */}
      <div className="flex items-center gap-3">
        <RiSearchLine />

        <input
          value={location || ""}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search properties..."
          className="bg-transparent outline-none"
        />
      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-4">
        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="glass-card px-3 py-2"
        >
          <option value="newest">Newest</option>
          <option value="price_low">Price ↑</option>
          <option value="price_high">Price ↓</option>
        </select>

        {/* VIEW TOGGLE */}
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={
              "p-2 rounded-lg " + (view === "grid" ? "bg-blue-500/20" : "")
            }
          >
            <RiGridFill />
          </button>

          <button
            onClick={() => setView("list")}
            className={
              "p-2 rounded-lg " + (view === "list" ? "bg-blue-500/20" : "")
            }
          >
            <RiListCheck />
          </button>
        </div>
      </div>
    </div>
  );
}
