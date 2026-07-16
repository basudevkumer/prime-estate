import { cn } from "@/utils";

export function PropertiesHero() {
  return (
    <section className={cn("relative", "overflow-hidden", "pt-40", "pb-24")}>
      <div
        className={cn("absolute", "inset-0", "bg-blue-500/5", "blur-[180px]")}
      />

      <div className="container-premium relative z-10">
        <p
          className={cn(
            "text-blue-400",
            "uppercase",
            "tracking-[0.2em]",
            "text-sm",
          )}
        >
          Premium Listings
        </p>

        <h1 className={cn("heading-1", "font-heading", "mt-4")}>
          Explore Luxury Properties
        </h1>

        <p className={cn("text-slate-400", "mt-6", "max-w-2xl")}>
          Browse verified luxury homes, villas, apartments, penthouses, and
          investment opportunities.
        </p>
      </div>
    </section>
  );
}
