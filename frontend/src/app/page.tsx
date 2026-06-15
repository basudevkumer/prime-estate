import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <main>
      <h1>
        {properties[0].title}
      </h1>
    </main>
  );
}