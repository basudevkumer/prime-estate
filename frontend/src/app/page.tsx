import {
  HeroSection,
  PropertySearch,
  TrustedPartners,
  FeaturedProperties,
  WhyChoose,
  PropertyCategories,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <PropertySearch />

      <TrustedPartners />

      <FeaturedProperties />

      <PropertyCategories />

      <WhyChoose />
    </>
  );
}
