import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { RecipesRequest, RecipesResponse } from "@/components/recipes/types";
import { apiRequest } from "@/shared/services/base-service";
import { RECIPES_PER_PAGE_LIMIT } from "@/components/recipes/constants";
import { getSearchTerm } from "@/components/recipes/utils";

export const recipesQuery = ({ page, q }: RecipesRequest) => {
  const searchQuery = getSearchTerm(q);

  const path = searchQuery ? "/recipes/search" : "/recipes";

  const params = new URLSearchParams({});

  if (searchQuery) {
    params.set("q", searchQuery);
  }
  if (!searchQuery) {
    params.set("skip", String((page - 1) * RECIPES_PER_PAGE_LIMIT));
    params.set("limit", String(RECIPES_PER_PAGE_LIMIT));
  }

  return queryOptions({
    queryKey: ["recipes", path, params.toString()],
    queryFn: async () =>
      apiRequest<RecipesResponse>({
        input: `${process.env.NEXT_PUBLIC_API_URL}${path}?${params}`,
      }),
    placeholderData: keepPreviousData,
  });
};
