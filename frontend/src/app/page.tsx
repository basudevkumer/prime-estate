import {
  propertyService,
} from "@/services/property.service";

export default async function HomePage() {
  const properties =
    await propertyService.getAll();

  return (
    <main>
      <h1>
        {properties[0].title}
      </h1>
    </main>
  );
}