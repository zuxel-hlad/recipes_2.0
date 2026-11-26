import { useQuery } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";
import { RECIPES_PER_PAGE_LIMIT, RECIPES_SEARCH_DEBOUNCE_MS } from "@/components/recipes/constants";
import { getSearchTerm, recipesSearchParams } from "@/components/recipes/utils";
import { useDebouncedValue } from "@/shared/hooks/use-debounced-value";
import { useQueryStates } from "nuqs";

export const useRecipes = () => {
  const [{ page, q }, setParams] = useQueryStates(recipesSearchParams);
  const debouncedQuery = useDebouncedValue(q, RECIPES_SEARCH_DEBOUNCE_MS);
  const { data, isPending, isPlaceholderData } = useQuery(recipesQuery({ page, q: debouncedQuery }));

  return {
    recipes: data?.recipes ?? [],
    totalPages: Math.ceil((data?.total ?? 1) / RECIPES_PER_PAGE_LIMIT),
    page,
    setPage: (nextPage: number) => setParams({ page: nextPage }),
    isRecipesLoading: isPending || isPlaceholderData,
    searchQuery: q,
    isSearching: getSearchTerm(debouncedQuery).length > 0,
    setSearchQuery: (value: string) => setParams({ q: value || null, page: null }),
  };
};
