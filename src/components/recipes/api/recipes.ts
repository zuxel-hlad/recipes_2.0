import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { RecipesResponse } from "@/components/recipes/types";
import { apiRequest } from "@/shared/services/base-service";
import { RECIPES_PER_PAGE_LIMIT } from "@/components/recipes/constants";

export const recipesQuery = (page: number) => {
  const params = new URLSearchParams({
    skip: String((page - 1) * RECIPES_PER_PAGE_LIMIT),
    limit: String(RECIPES_PER_PAGE_LIMIT),
  });

  return queryOptions({
    queryKey: ["recipes", page],
    queryFn: async () =>
      apiRequest<RecipesResponse>({
        input: `${process.env.NEXT_PUBLIC_API_URL}/recipes?${params}`,
      }),
    placeholderData: keepPreviousData,
  });
};
