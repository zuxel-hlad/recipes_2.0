import { queryOptions } from "@tanstack/react-query";
import { Recipe } from "@/components/recipes/types";
import { apiRequest } from "@/shared/services/base-service";

export const recipesQuery = queryOptions({
  queryKey: ["recipes"],
  queryFn: async () => {
    const { recipes } = await apiRequest<{ recipes: Recipe[] }>({
      input: `${process.env.NEXT_PUBLIC_API_URL}/recipes`,
    });
    return recipes;
  },
});
