import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";
import RecipesList from "@/components/recipes/ui/recipes-list";
import { getQueryClient } from "@/shared/lib/get-query-client";
import { RecipesRequest } from "@/components/recipes/types";

export default async function RecipesContainer(request: RecipesRequest): Promise<React.ReactNode> {
  const queryClient = getQueryClient();
  await queryClient.query(recipesQuery(request)).catch(() => {});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList />
    </HydrationBoundary>
  );
}
