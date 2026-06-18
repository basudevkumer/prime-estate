import {
  RiSearchLine,
} from "react-icons/ri";

export function PropertyToolbar() {
  return (
    <div
      className="
      glass-card
      p-5
      mb-8
      flex
      flex-col
      lg:flex-row
      gap-4
      justify-between
      "
    >
      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <RiSearchLine />

        <input
          placeholder="Search properties..."
          className="
          bg-transparent
          outline-none
          "
        />
      </div>

      <div>
        Sort Dropdown
      </div>
    </div>
  );
}