import RecipesList from "@/components/recipes/ui/recipes-list";
import HomeInfo from "@/components/page-sections/home/page-info";

export default function HomePage() {
  return (
    <div className="container mx-auto px-3 py-1.5">
      <HomeInfo />
      <RecipesList />
    </div>
  );
}
