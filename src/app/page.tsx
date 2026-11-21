import { Suspense } from "react";
import HomeInfo from "@/components/page-sections/home/page-info";
import RecipesSection from "@/components/recipes/ui/recipes-section";

export default function HomePage() {
  return (
    <div className="container mx-auto px-3 py-1.5">
      <HomeInfo />
      <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-slate-100" />}>
        <RecipesSection />
      </Suspense>
    </div>
  );
}
