import CategoriesList from "@/components/landing/category";
import FeaturedProducts from "@/components/landing/featured-products";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesList />
      <FeaturedProducts />
    </main>
  );
}
