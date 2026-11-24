import { useQuery } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";
import { RECIPES_PER_PAGE_LIMIT } from "@/components/recipes/constants";
import { pageParser } from "@/components/recipes/utils";
import { useQueryState } from "nuqs";

export const useRecipes = () => {
  const [page, setPage] = useQueryState("page", pageParser);
  const { data, isPending, isPlaceholderData } = useQuery(recipesQuery(page));

  return {
    recipes: data?.recipes ?? [],
    totalPages: Math.ceil((data?.total ?? 1) / RECIPES_PER_PAGE_LIMIT),
    page,
    setPage,
    isRecipesLoading: isPending || isPlaceholderData,
  };
};
