import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";
import RecipesList from "@/components/recipes/ui/recipes-list";
import { getQueryClient } from "@/shared/lib/get-query-client";

export default async function RecipesContainer({ page }: { page: number }): Promise<React.ReactNode> {
  const queryClient = getQueryClient();
  await queryClient.query(recipesQuery(page)).catch(() => {});

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipesList />
    </HydrationBoundary>
  );
}
