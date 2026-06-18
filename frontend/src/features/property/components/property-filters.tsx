export function PropertyFilters() {
  return (
    <aside
      className="
      glass-card
      p-6
      sticky
      top-28
      "
    >
      <h3
        className="
        text-lg
        font-semibold
        mb-6
        "
      >
        Filters
      </h3>

      <div className="space-y-4">

        <div className="glass-card p-4">
          Location Filter
        </div>

        <div className="glass-card p-4">
          Property Type
        </div>

        <div className="glass-card p-4">
          Price Range
        </div>

        <div className="glass-card p-4">
          Bedrooms
        </div>

      </div>
    </aside>
  );
}