import { Suspense } from "react";
import HomeInfo from "@/components/page-sections/home/page-info";
import RecipesContainer from "@/components/recipes/ui/recipes-container";
import { SearchParams, createLoader } from "nuqs/server";
import { pageParser } from "@/components/recipes/utils";
import { RecipesListSkeleton } from "@/components/recipes/ui/recipes-list-skeleton";

const paramsLoader = createLoader({ page: pageParser });

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<React.ReactNode> {
  const { page } = await paramsLoader(searchParams);

  return (
    <div className="container mx-auto px-3 py-1.5">
      <HomeInfo />
      <Suspense fallback={<RecipesListSkeleton />}>
        <RecipesContainer page={page} />
      </Suspense>
    </div>
  );
}
