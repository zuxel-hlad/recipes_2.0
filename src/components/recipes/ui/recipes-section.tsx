import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";
import RecipesList from "@/components/recipes/ui/recipes-list";
import { getQueryClient } from "@/shared/lib/get-query-client";

export default async function RecipesSection() {
  const queryClient = getQueryClient();
  await queryClient.query(recipesQuery).catch(() => {});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList />
    </HydrationBoundary>
  );
}
