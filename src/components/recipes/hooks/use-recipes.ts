import { useQuery } from "@tanstack/react-query";
import { recipesQuery } from "@/components/recipes/api/recipes";

export const useRecipes = () => useQuery(recipesQuery);
