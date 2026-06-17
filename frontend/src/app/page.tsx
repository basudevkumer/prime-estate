import { PropertyCard } from "@/components/ui";
import { properties } from "@/data/properties";



export default function HomePage() {
  return (
    <main
      className="
      container-premium
      py-20
    "
    >
      <PropertyCard
        property={properties[0]}
      />
    </main>
  );
}